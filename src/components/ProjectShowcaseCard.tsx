import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/src/cms/images';

interface ProjectShowcaseCardProps {
  project: ProjectEntry;
  priority?: boolean;
}

export default function ProjectShowcaseCard({
  project,
  priority = false,
}: ProjectShowcaseCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-glow backdrop-blur"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
        <Image
          fill
          priority={priority}
          placeholder="blur"
          blurDataURL={project.mainImage.asset.metadata?.lqip}
          src={urlForImage(project.mainImage.asset).url()}
          alt={project.mainImage.alt || project.name}
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
      </div>
      <div className="space-y-5 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-sky-200/70">
              {project.startYear}
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-white">
              {project.name}
            </h3>
          </div>
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
            Featured
          </span>
        </div>
        <p className="text-sm leading-7 text-slate-300 sm:text-base">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tools.slice(0, 5).map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-slate-200"
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href={`/projects/${project.slug.current}`}
            className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            View project
          </Link>
          {project.links?.[0] ? (
            <Link
              href={project.links[0]}
              target="_blank"
              className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-sky-300/40 hover:text-sky-200"
            >
              Open link
            </Link>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
