import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import {
  DocumentType,
  Order,
  OrderBy,
  getAllForDocumentType,
  getAllForDocumentTypeByCreatedDate,
  getAllForDocumentTypeOrdered,
} from '@/src/cms/client';
import ProjectShowcaseCard from '@/src/components/ProjectShowcaseCard';
import SectionHeading from '@/src/components/SectionHeading';
import SectionShell from '@/src/components/SectionShell';
import { highlightPillars, siteConfig, skillGroups } from '@/src/config/site';

interface HomeProps {
  about: AboutEntry | null;
  projects: ProjectEntry[];
  career: CareerEntry[];
  education: EducationEntry[];
}

const stats = [
  { label: 'Focus', value: 'AI systems + robotics' },
  { label: 'Approach', value: 'Engineer with founder energy' },
  { label: 'Strength', value: 'Technical depth + execution' },
];

export default function Home({
  about,
  projects,
  career,
  education,
}: HomeProps) {
  const featuredProjects = projects.slice(0, 3);
  const latestCareer = career.slice(0, 3);
  const aboutPreview =
    'Computer science student building intelligent systems with a long-term focus on embodied AI, robotics, and software that matters.';

  return (
    <>
      <Head>
        <title>{siteConfig.name} | AI Engineer and Robotics-Focused Builder</title>
        <meta name="description" content={siteConfig.description} />
      </Head>
      <main>
        <SectionShell className="pt-16 sm:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mb-5 inline-flex rounded-full border border-sky-300/15 bg-sky-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.34em] text-sky-200"
              >
                {siteConfig.location}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="font-display text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
              >
                Yassine Kraiem
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12 }}
                className="mt-6 max-w-2xl text-xl font-medium leading-8 text-slate-200 sm:text-2xl"
              >
                Computer science student building ambitious AI systems, high-impact
                software, and robotics-oriented technology with research and founder
                upside.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
              >
                I am interested in embodied AI, intelligent systems, and the kind of
                engineering that moves from prototype to real-world leverage. I care
                about building fast, thinking deeply, and working on systems that
                compound.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.28 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href="/projects"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  View Projects
                </Link>
                <Link
                  href="/resume"
                  className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-300/35 hover:bg-white/[0.06]"
                >
                  Resume
                </Link>
                <Link
                  href="#contact"
                  className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-300/35 hover:text-white"
                >
                  Contact
                </Link>
              </motion.div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
                  >
                    <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-sm font-medium leading-6 text-white">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="relative mx-auto w-full max-w-[430px]"
            >
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-sky-400/20 via-transparent to-emerald-300/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-4 shadow-glow backdrop-blur-xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] border border-white/10">
                  <Image
                    priority
                    src="/ProfilePicture.jpg"
                    alt="Yassine Kraiem"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 32vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
                      Current trajectory
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">
                      AI engineering, research credibility, and product-level execution.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
                      Long-term direction
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">
                      Embodied AI, robotics, and intelligent systems with real-world reach.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionShell>

        <SectionShell>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <SectionHeading
              eyebrow="About"
              title="An international background with technical ambition."
              description={aboutPreview}
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {highlightPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="font-display text-xl font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 sm:p-8">
            <p className="max-w-4xl text-base leading-8 text-slate-300">
              {about?.body?.length
                ? 'I have built my path by combining academic discipline, international perspective, and a strong pull toward technology with leverage. The through-line is clear: learn fast, build systems that matter, and aim toward technical work with long-term consequence.'
                : aboutPreview}
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300/35 hover:text-white"
            >
              Read full story
            </Link>
          </div>
        </SectionShell>

        <SectionShell>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Selected Work"
              title="Projects that show systems thinking, implementation depth, and product instinct."
              description="A mix of technical builds, interface work, and ambitious experiments that point toward larger systems."
            />
            <Link
              href="/projects"
              className="inline-flex rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300/35 hover:text-white"
            >
              Browse all projects
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project, idx) => (
              <ProjectShowcaseCard
                key={project._id}
                project={project}
                priority={idx === 0}
              />
            ))}
          </div>
        </SectionShell>

        <SectionShell>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <SectionHeading
                eyebrow="Experience"
                title="Early career momentum across software, leadership, and international work."
                description="Experience that signals range, but with a clear center of gravity: technical growth, high ownership, and building toward harder problems."
              />
              <div className="mt-8 space-y-4">
                {latestCareer.map((item) => (
                  <div
                    key={item._id}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-sky-200">
                          {item.company}
                        </p>
                        {item.department || item.team ? (
                          <p className="mt-2 text-sm text-slate-400">
                            {[item.department, item.team].filter(Boolean).join(' • ')}
                          </p>
                        ) : null}
                      </div>
                      <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                        {item.startYear} - {item.endYear === 9999 ? 'Present' : item.endYear}
                      </p>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Skills"
                title="A builder stack shaped by software, AI, and systems."
                description="Broad enough to ship, focused enough to signal a clear direction."
              />
              <div className="mt-8 grid gap-4">
                {skillGroups.map((group) => (
                  <div
                    key={group.label}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
                      {group.label}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-sky-500/10 to-emerald-400/5 p-5">
                  <p className="text-xs uppercase tracking-[0.26em] text-slate-300">
                    Education
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    {education[0]?.school}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Studying computer science while building practical systems and
                    sharpening the research, product, and engineering instincts needed
                    for high-leverage technical work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="contact" className="pb-20">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.05] p-8 shadow-glow sm:p-10">
            <SectionHeading
              eyebrow="Contact"
              title="Open to research, startup, and high-caliber engineering conversations."
              description="If you are building in AI, robotics, or ambitious software, I am interested in the right conversations."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={siteConfig.linkedin}
                target="_blank"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Contact on LinkedIn
              </Link>
              <Link
                href={siteConfig.github}
                target="_blank"
                className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300/35 hover:text-white"
              >
                GitHub
              </Link>
              <Link
                href="/resume"
                className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300/35 hover:text-white"
              >
                View resume
              </Link>
            </div>
          </div>
        </SectionShell>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const [abouts, projects, career, education] = await Promise.all([
    getAllForDocumentTypeByCreatedDate<AboutEntry>(DocumentType.About, 1),
    getAllForDocumentType<ProjectEntry>(DocumentType.Project),
    getAllForDocumentTypeOrdered<CareerEntry>(
      DocumentType.Career,
      OrderBy.EndYear,
      Order.DESC
    ),
    getAllForDocumentTypeOrdered<EducationEntry>(
      DocumentType.Education,
      OrderBy.EndYear,
      Order.DESC
    ),
  ]);

  return {
    props: {
      about: abouts[0] || null,
      projects,
      career,
      education,
    },
  };
}
