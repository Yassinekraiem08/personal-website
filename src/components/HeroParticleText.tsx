// @ts-nocheck
'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import helvetiker from 'three/examples/fonts/helvetiker_regular.typeface.json';

interface HeroParticleTextProps {
  lines: [string, string];
  className?: string;
}

type ParticleState = {
  baseX: number;
  baseY: number;
  baseZ: number;
  velocityX: number;
  velocityY: number;
};

const MOBILE_SMALL = 650;
const MOBILE_LARGE = 1100;

export default function HeroParticleText({
  lines,
  className = '',
}: HeroParticleTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, 1, 1, 10000);
    camera.position.set(0, 0, 100);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearAlpha(0);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    const loader = new FontLoader();
    const font = loader.parse(helvetiker);
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-200, 200);
    const planeArea = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0 })
    );
    planeArea.visible = false;
    scene.add(planeArea);

    const colorChange = new THREE.Color();
    let particlesMesh: any | null = null;
    let geometryCopy: any | null = null;
    let particleStates: ParticleState[] = [];
    let animationFrame = 0;
    let buttonDown = false;
    let resizeTimeout: number | null = null;

    const textData = {
      text: `${lines[0]}\n  ${lines[1]}`,
      amount: 400,
      particleSize: 2,
      textSize: 10,
      area: 250,
      ease: 0.05,
    };

    const particleTexture = (() => {
      const textureCanvas = document.createElement('canvas');
      const ctx = textureCanvas.getContext('2d');

      if (!ctx) {
        return null;
      }

      textureCanvas.width = 64;
      textureCanvas.height = 64;

      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.45, 'rgba(255,255,255,0.95)');
      gradient.addColorStop(0.75, 'rgba(125,211,252,0.45)');
      gradient.addColorStop(1, 'rgba(125,211,252,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);

      const texture = new THREE.CanvasTexture(textureCanvas);
      texture.needsUpdate = true;

      return texture;
    })();

    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0xffffff) },
        pointTexture: { value: particleTexture },
      },
      vertexShader: `
        attribute float size;
        attribute vec3 customColor;
        varying vec3 vColor;

        void main() {
          vColor = customColor;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform sampler2D pointTexture;
        varying vec3 vColor;

        void main() {
          gl_FragColor = vec4(color * vColor, 1.0);
          gl_FragColor = gl_FragColor * texture2D(pointTexture, gl_PointCoord);
        }
      `,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
    });

    const visibleHeightAtZDepth = (depth: number) => {
      const cameraOffset = camera.position.z;
      const adjustedDepth = depth < cameraOffset ? depth - cameraOffset : depth + cameraOffset;
      const vFov = (camera.fov * Math.PI) / 180;

      return 2 * Math.tan(vFov / 2) * Math.abs(adjustedDepth);
    };

    const visibleWidthAtZDepth = (depth: number) => {
      return visibleHeightAtZDepth(depth) * camera.aspect;
    };

    const updateTextConfig = () => {
      const width = window.innerWidth;

      if (width > MOBILE_LARGE) {
        textData.amount = 400;
        textData.particleSize = 2;
        textData.textSize = 10;
        textData.area = 250;
        textData.ease = 0.05;
      } else if (width > MOBILE_SMALL) {
        textData.amount = 300;
        textData.particleSize = 1.25;
        textData.textSize = 6;
        textData.area = 100;
        textData.ease = 0.04;
      } else {
        textData.amount = 200;
        textData.particleSize = 1;
        textData.textSize = 4.5;
        textData.area = 25;
        textData.ease = 0.03;
      }

      const scaleFactor = 0.00390625;
      textData.textSize =
        textData.textSize + Math.min(window.innerWidth, window.innerHeight) * scaleFactor;
    };

    const clearText = () => {
      if (particlesMesh) {
        scene.remove(particlesMesh);
        particlesMesh.geometry.dispose();
        particlesMesh = null;
      }

      geometryCopy?.dispose();
      geometryCopy = null;
      particleStates = [];
    };

    const createText = () => {
      updateTextConfig();
      clearText();

      const shapes = font.generateShapes(textData.text, textData.textSize);
      const geometry = new THREE.ShapeGeometry(shapes);
      geometry.computeBoundingBox();
      const xMid =
        -0.5 * ((geometry.boundingBox?.max.x ?? 0) - (geometry.boundingBox?.min.x ?? 0));
      const yMid =
        ((geometry.boundingBox?.max.y ?? 0) - (geometry.boundingBox?.min.y ?? 0)) / 2.85;

      const holeShapes: any[] = [];
      for (const shape of shapes) {
        if (shape.holes?.length) {
          holeShapes.push(...shape.holes);
        }
      }

      const allShapes = [...shapes, ...holeShapes];
      const points: any[] = [];
      const colors: number[] = [];
      const sizes: number[] = [];

      for (const shape of allShapes) {
        const amount = shape.type === 'Path' ? textData.amount / 2 : textData.amount;
        const spacedPoints = shape.getSpacedPoints(amount);

        spacedPoints.forEach((point) => {
          points.push(new THREE.Vector3(point.x, point.y, 0));
          colors.push(1, 1, 1);
          sizes.push(textData.particleSize);
        });
      }

      const geoParticles = new THREE.BufferGeometry().setFromPoints(points);
      geoParticles.translate(xMid, yMid, 0);
      geoParticles.setAttribute('customColor', new THREE.Float32BufferAttribute(colors, 3));
      geoParticles.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

      particlesMesh = new THREE.Points(geoParticles, shaderMaterial);
      scene.add(particlesMesh);

      geometryCopy = new THREE.BufferGeometry().copy(geoParticles);
      particleStates = points.map((point) => ({
        baseX: point.x,
        baseY: point.y,
        baseZ: point.z,
        velocityX: 0,
        velocityY: 0,
      }));
    };

    const syncLayout = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      planeArea.geometry.dispose();
      planeArea.geometry = new THREE.PlaneGeometry(
        visibleWidthAtZDepth(100),
        visibleHeightAtZDepth(100)
      );

      createText();

      if (particlesMesh) {
        particlesMesh.position.y = window.innerWidth > MOBILE_LARGE ? 2 : 0;
      }
    };

    const updateMouse = (event: PointerEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const animate = () => {
      const time = ((0.001 * performance.now()) % 12) / 12;
      const zigzagTime = (1 + Math.sin(time * 2 * Math.PI)) / 6;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(planeArea);

      if (intersects.length > 0 && particlesMesh && geometryCopy) {
        const positions = particlesMesh.geometry.attributes.position as any;
        const copy = geometryCopy.attributes.position as any;
        const colors = particlesMesh.geometry.attributes.customColor as any;
        const sizes = particlesMesh.geometry.attributes.size as any;

        const mx = intersects[0].point.x;
        const my = intersects[0].point.y;
        const mz = intersects[0].point.z;

        for (let index = 0; index < positions.count; index += 1) {
          const initX = copy.getX(index);
          const initY = copy.getY(index);
          const initZ = copy.getZ(index);

          let px = positions.getX(index);
          let py = positions.getY(index);
          let pz = positions.getZ(index);

          colorChange.setHSL(0.5, 1, 1);
          colors.setXYZ(index, colorChange.r, colorChange.g, colorChange.b);
          sizes.array[index] = textData.particleSize;

          const dx = mx - px;
          const dy = my - py;
          const mouseDistance = Math.sqrt((mx - px) ** 2 + (my - py) ** 2);
          const distanceSq = dx * dx + dy * dy || 0.0001;
          const force = -textData.area / distanceSq;

          if (buttonDown) {
            const angle = Math.atan2(dy, dx);
            px -= force * Math.cos(angle);
            py -= force * Math.sin(angle);

            colorChange.setHSL(0.5 + zigzagTime, 1, 0.5);
            colors.setXYZ(index, colorChange.r, colorChange.g, colorChange.b);

            if (
              px > initX + 70 ||
              px < initX - 70 ||
              py > initY + 70 ||
              py < initY - 70
            ) {
              colorChange.setHSL(0.15, 1, 0.5);
              colors.setXYZ(index, colorChange.r, colorChange.g, colorChange.b);
            }
          } else if (mouseDistance < textData.area) {
            const angle = Math.atan2(dy, dx);

            if (index % 5 === 0) {
              px -= 0.03 * Math.cos(angle);
              py -= 0.03 * Math.sin(angle);
              colorChange.setHSL(0.15, 1, 0.5);
              colors.setXYZ(index, colorChange.r, colorChange.g, colorChange.b);
              sizes.array[index] = textData.particleSize / 1.2;
            } else {
              px += force * Math.cos(angle);
              py += force * Math.sin(angle);
              sizes.array[index] = textData.particleSize * 1.3;
            }

            if (
              px > initX + 10 ||
              px < initX - 10 ||
              py > initY + 10 ||
              py < initY - 10
            ) {
              colorChange.setHSL(0.15, 1, 0.5);
              colors.setXYZ(index, colorChange.r, colorChange.g, colorChange.b);
              sizes.array[index] = textData.particleSize / 1.8;
            }
          }

          px += (initX - px) * textData.ease;
          py += (initY - py) * textData.ease;
          pz += (initZ - pz) * textData.ease;

          positions.setXYZ(index, px, py, pz);
        }

        positions.needsUpdate = true;
        colors.needsUpdate = true;
        sizes.needsUpdate = true;
      }

      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      updateMouse(event);
    };

    const handlePointerDown = (event: PointerEvent) => {
      updateMouse(event);
      buttonDown = true;
      textData.ease = 0.01;
    };

    const handlePointerUp = () => {
      buttonDown = false;
      textData.ease = 0.05;
    };

    const handlePointerLeave = () => {
      mouse.x = -200;
      mouse.y = 200;
      buttonDown = false;
      textData.ease = 0.05;
    };

    const handleResize = () => {
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }

      resizeTimeout = window.setTimeout(() => {
        syncLayout();
      }, 120);
    };

    syncLayout();
    animate();

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('resize', handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);

      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }

      clearText();
      planeArea.geometry.dispose();
      (planeArea.material as any).dispose();
      shaderMaterial.dispose();
      particleTexture?.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [lines]);

  return <div ref={containerRef} className={`absolute inset-0 ${className}`} aria-hidden="true" />;
}
