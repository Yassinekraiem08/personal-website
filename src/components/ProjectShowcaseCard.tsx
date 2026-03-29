import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
      className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] shadow-glow backdrop-blur"
    >
      <div className="relative aspect-[16/7] overflow-hidden border-b border-white/10 bg-slate-950/70">
        <Image
          fill
          priority={priority}
          src={project.mainImage.src}
          alt={project.mainImage.alt || project.name}
          className={`transition duration-500 group-hover:scale-[1.03] ${
            project.mainImage.contain ? 'object-contain p-4 sm:p-5' : 'object-cover'
          }`}
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
      </div>
      <div className="space-y-4 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-sky-200/70">
              {project.startYear}
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-[1.35rem]">
              {project.name}
            </h3>
          </div>
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-200">
            Featured
          </span>
        </div>
        <p className="text-sm leading-6 text-slate-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tools.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-slate-200"
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          <Link
            href={`/projects/${project.slug.current}`}
            className="inline-flex items-center rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Read details
          </Link>
          {project.demoLink ? (
            <Link
              href={project.demoLink}
              target="_blank"
              className="inline-flex items-center rounded-full border border-white/10 px-3.5 py-2 text-sm font-medium text-slate-100 transition hover:border-sky-300/40 hover:text-sky-200"
            >
              Live demo
            </Link>
          ) : null}
          {project.codeLink ? (
            <Link
              href={project.codeLink}
              target="_blank"
              className="inline-flex items-center rounded-full border border-white/10 px-3.5 py-2 text-sm font-medium text-slate-100 transition hover:border-sky-300/40 hover:text-sky-200"
            >
              View code
            </Link>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
