import Fuse from 'fuse.js';
import { ChangeEvent, useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import PageContentBox from '@/src/components/PageContentBox';
import ProjectShowcaseCard from '@/src/components/ProjectShowcaseCard';
import { projectEntries } from '@/src/content/siteContent';
import { siteConfig } from '@/src/config/site';

export default function Projects() {
  const projects = projectEntries;
  const [search, setSearch] = useState('');
  const [currentProjects, setCurrentProjects] = useState<ProjectEntry[]>(projects);
  const [projectsFuse] = useState(
    new Fuse(projects, { keys: ['name', 'description', 'tools', 'startYear'] })
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearch(value);
    setCurrentProjects(
      value
        ? projectsFuse.search(value).map((result: Fuse.FuseResult<ProjectEntry>) => result.item)
        : projects
    );
  };

  return (
    <>
      <Head>
        <title>{`Projects | ${siteConfig.name}`}</title>
        <meta
          name="description"
          content="Selected projects by Yassine Kraiem across software engineering, AI systems, and product-focused builds."
        />
      </Head>
      <main>
        <PageContentBox variant="dark">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="w-full max-w-md">
              <label htmlFor="project-search" className="sr-only">
                Search projects
              </label>
              <input
                id="project-search"
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search by name, stack, or theme"
                className="w-full rounded-full border border-white/10 bg-slate-950/70 px-5 py-3 text-sm text-white outline-none ring-0 transition placeholder:text-slate-500 focus:border-sky-300/35"
              />
            </div>
          </div>

          {currentProjects.length ? (
            <div className="mt-8 grid gap-4 xl:grid-cols-3">
              {currentProjects.map((project, idx) => (
                <ProjectShowcaseCard
                  key={project._id}
                  project={project}
                  priority={idx < 2}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.04] p-8 text-center">
              <p className="text-lg font-medium text-white">No matching projects.</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Try a different keyword or browse the full portfolio.
              </p>
              <Link
                href="/projects"
                className="mt-6 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300/35 hover:text-white"
              >
                Reset search
              </Link>
            </div>
          )}
        </PageContentBox>
      </main>
    </>
  );
}
