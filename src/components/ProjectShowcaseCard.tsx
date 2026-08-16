import { useState } from 'react';

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
  const metrics = project.metrics || [];
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <article className="group flex min-h-0 flex-col overflow-hidden rounded-[20px] border border-white/10 bg-slate-950/78 transition duration-200 ease-out hover:-translate-y-1.5 hover:border-sky-300/25 sm:min-h-[520px] sm:rounded-[24px]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:px-6 sm:py-4 sm:text-[11px] sm:tracking-[0.2em]">
        <span>{project.kind || 'Project'}</span>
        <span>{project.startYear}</span>
      </div>

      <div className="relative mx-4 mt-4 aspect-[16/9] overflow-hidden rounded-[16px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950/50 sm:mx-6 sm:mt-5 sm:aspect-[16/8] sm:rounded-[18px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.16),transparent_42%)]" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/80 to-transparent" />
        <Image
          fill
          priority={priority}
          src={project.mainImage.src}
          alt={project.mainImage.alt || project.name}
          className={`transition duration-500 group-hover:scale-[1.04] ${
            project.mainImage.contain ? 'object-contain p-5 sm:p-6' : 'object-cover'
          }`}
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {project.name}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            {project.description}
          </p>
        </div>

        {metrics.length ? (
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-6" aria-label={`${project.name} outcomes`}>
            {metrics.map((metric) => (
              <li
                key={metric}
                className="rounded-full border border-sky-300/15 bg-sky-300/[0.07] px-3 py-1.5 text-[11px] font-semibold text-sky-100"
              >
                {metric}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="pt-5 sm:mt-auto sm:pt-6">
          <div className="mb-4 flex flex-wrap gap-2 sm:mb-5">
            {project.tools.slice(0, 4).map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-300"
              >
                {tool}
              </span>
            ))}
          </div>

          {project.whyItMatters ? (
            <div className="mb-4 sm:mb-5">
              <button
                type="button"
                aria-expanded={detailsOpen}
                onClick={() => setDetailsOpen((value) => !value)}
                className="flex w-full items-center justify-between rounded-[16px] border border-white/10 bg-white/[0.035] px-4 py-3 text-left text-sm font-semibold text-slate-100 transition hover:border-sky-300/30 hover:bg-white/[0.055]"
              >
                <span>{detailsOpen ? 'Close details' : 'Why it matters'}</span>
                <span className="font-mono text-lg leading-none text-sky-200" aria-hidden="true">
                  {detailsOpen ? '-' : '+'}
                </span>
              </button>
              {detailsOpen ? (
                <p className="mt-3 rounded-[16px] border border-sky-300/10 bg-sky-300/[0.045] px-4 py-3 text-sm leading-6 text-slate-300">
                  {project.whyItMatters}
                </p>
              ) : null}
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-2.5">
            {project.demoLink ? (
              <Link
                href={project.demoLink}
                target="_blank"
                className="inline-flex items-center rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
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
            {!project.demoLink && !project.codeLink ? (
              <span
                className="inline-flex items-center rounded-full border border-white/10 px-3.5 py-2 text-sm font-medium text-slate-400"
                aria-label="No external links available"
              >
                Case study only
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
