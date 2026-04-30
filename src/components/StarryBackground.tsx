export const starRadiusRange = 6;

export interface StarryBackgroundProps {
  stars?: Star[];
}

export interface Star {
  x: string;
  y: string;
  r: string;
  opacity: number;
}

const orbiters = [
  {
    className:
      'left-[8%] top-24 h-72 w-72 bg-blue-500/16 blur-3xl sm:h-96 sm:w-96',
    duration: 14,
  },
  {
    className:
      'right-[10%] top-[22%] h-64 w-64 bg-cyan-300/12 blur-3xl sm:h-80 sm:w-80',
    duration: 18,
  },
  {
    className:
      'bottom-[-6rem] left-1/2 h-72 w-72 -translate-x-1/2 bg-sky-400/10 blur-3xl sm:h-[28rem] sm:w-[28rem]',
    duration: 22,
  },
];

export default function StarryBackground({ stars = [] }: StarryBackgroundProps) {
  const subtleStars = stars.slice(0, 80);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-fade bg-[size:48px_48px] opacity-[0.06]" />
      {orbiters.map((orbiter, idx) => (
        <div
          key={idx}
          className={`absolute rounded-full animate-orbiter ${orbiter.className}`}
          style={{ animationDuration: `${orbiter.duration}s` }}
        />
      ))}
      {subtleStars.map(({ x, y, r, opacity }, idx) => (
        <div
          key={`${x}_${y}_${idx}`}
          className="absolute rounded-full bg-white animate-star-pulse"
          style={{ left: x, top: y, width: r, height: r, opacity: opacity * 0.55 }}
          aria-hidden="true"
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050816] to-transparent" />
    </div>
  );
}
