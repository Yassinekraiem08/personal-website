import Head from 'next/head';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import ProjectShowcaseCard from '@/src/components/ProjectShowcaseCard';
import SectionShell from '@/src/components/SectionShell';
import {
  careerEntries,
  projectEntries,
  researchEntries,
} from '@/src/content/siteContent';
import { awardHonors, siteConfig } from '@/src/config/site';

const HeroParticleText = dynamic(
  () => import('@/src/components/HeroParticleText'),
  { ssr: false }
);

const leftHeroWaves = [
  'left-[-22rem] top-[-6rem] h-[44rem] w-[44rem] rotate-[10deg]',
  'left-[-18rem] top-[1rem] h-[36rem] w-[36rem] rotate-[14deg]',
  'left-[-14rem] top-[8rem] h-[28rem] w-[28rem] rotate-[18deg]',
];

const rightHeroWaves = [
  'right-[-24rem] top-[-4rem] h-[48rem] w-[48rem] -rotate-[18deg]',
  'right-[-18rem] top-[3rem] h-[40rem] w-[40rem] -rotate-[14deg]',
  'right-[-12rem] top-[10rem] h-[31rem] w-[31rem] -rotate-[10deg]',
];

export default function Home() {
  const projects = projectEntries;
  const career = careerEntries;
  const research = researchEntries;
  const featuredProjects = projects.slice(0, 3);
  const latestCareer = career.slice(0, 3);
  const [openResearch, setOpenResearch] = useState<string | null>(null);

  return (
    <>
      <Head>
        <title>{siteConfig.name}</title>
        <meta name="description" content={siteConfig.description} />
      </Head>
      <main>
        <SectionShell
          animateOnView={false}
          className="relative flex min-h-[100svh] items-center overflow-hidden pt-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#131b33_0%,#070b17_58%,#04070f_100%)]" />
          <div className="absolute inset-x-0 top-10 h-56 bg-gradient-to-b from-sky-400/8 to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_32%)]" />
          {leftHeroWaves.map((waveClass, index) => (
            <div
              key={`left-wave-${index}`}
              className={`absolute rounded-[45%] border border-indigo-300/[0.10] ${waveClass}`}
            >
              <div className="absolute inset-[7%] rounded-[45%] border border-indigo-300/[0.08]" />
              <div className="absolute inset-[14%] rounded-[45%] border border-indigo-300/[0.07]" />
              <div className="absolute inset-[21%] rounded-[45%] border border-indigo-300/[0.06]" />
              <div className="absolute inset-[28%] rounded-[45%] border border-indigo-300/[0.05]" />
            </div>
          ))}
          {rightHeroWaves.map((waveClass, index) => (
            <div
              key={`right-wave-${index}`}
              className={`absolute rounded-[42%] border border-violet-300/[0.12] ${waveClass}`}
            >
              <div className="absolute inset-[6%] rounded-[42%] border border-violet-300/[0.10]" />
              <div className="absolute inset-[12%] rounded-[42%] border border-violet-300/[0.08]" />
              <div className="absolute inset-[18%] rounded-[42%] border border-violet-300/[0.07]" />
              <div className="absolute inset-[24%] rounded-[42%] border border-violet-300/[0.06]" />
              <div className="absolute inset-[30%] rounded-[42%] border border-violet-300/[0.05]" />
            </div>
          ))}
          <HeroParticleText
            lines={["Let's Immerse", 'With Yassine']}
            className="z-[1]"
          />
          <div className="relative flex min-h-[100svh] w-full flex-col">
            <div className="mx-auto flex w-full max-w-7xl flex-1 items-start justify-center pt-16 text-center sm:pt-16">
              <div className="sr-only">
                <h1>Let&apos;s Immerse With Yassine</h1>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-6 z-[2] flex w-full animate-fade-in-up items-center justify-center px-4 sm:bottom-8 sm:px-6">
              <div className="pointer-events-auto flex w-full max-w-[350px] gap-2 rounded-[24px] border border-white/10 bg-slate-950/72 p-1.5 shadow-glow backdrop-blur-xl sm:w-auto sm:max-w-none sm:rounded-[28px] sm:p-2">
                <div className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full border border-sky-300/15 bg-white/[0.045] px-3 py-2.5 text-xs font-semibold text-slate-200 sm:flex-none sm:gap-2.5 sm:px-4 sm:py-3 sm:text-sm">
                  <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300 opacity-45" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-200" />
                  </span>
                  Click the screen
                </div>
                <Link
                  href="#introduction"
                  className="group inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full bg-white px-3 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-sky-100 sm:flex-none sm:gap-3 sm:px-4 sm:py-3 sm:text-sm"
                >
                  <span className="hidden h-7 w-5 items-start justify-center rounded-full border-2 border-slate-950/80 p-1 min-[380px]:flex" aria-hidden="true">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-950 transition group-hover:translate-y-2" />
                  </span>
                  <span className="whitespace-nowrap">Scroll down</span>
                  <span className="transition group-hover:translate-y-0.5" aria-hidden="true">
                    ↓
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="introduction" className="scroll-mt-24 pt-12 sm:pt-20 lg:pt-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-[32px] font-black leading-tight text-white sm:text-[50px] md:text-[60px]">
              Hey, I&apos;m Yassine!
            </h2>

            <div className="mt-5 grid items-center gap-8 min-[1000px]:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] min-[1000px]:gap-10">
              <div className="min-w-0">
                <div className="max-w-3xl text-[15px] leading-7 text-slate-300 sm:text-[17px] sm:leading-[30px]">
                  <p
                    className="w-full min-[1000px]:max-w-xl"
                  >
                    I&apos;m a graduate student at Columbia University building
                    applications across AI and software engineering.
                    My work focuses on turning ideas into systems that are not
                    just technically sound, but genuinely useful, reliable, and
                    impactful in practice — from AI-driven workflows and retrieval
                    systems to full-stack applications.
                    <br />
                    <br />
                    I&apos;ve also worked on research involving decision-making
                    under uncertainty and system behavior, which shapes how I
                    approach building technology that performs beyond ideal
                    conditions. I&apos;m especially drawn to problems where strong
                    engineering meets practical usefulness and real impact.
                    <br />
                    <br />
                    If you’d like to learn more, feel free to browse my work, view
                    my resume, or reach out at{' '}
                    <a href={`mailto:${siteConfig.email}`} className="text-link">
                      {siteConfig.email}
                    </a>
                    .
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row sm:flex-wrap sm:justify-start sm:gap-4">
                  <Link
                    href={siteConfig.resumeHref}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white px-5 py-2.5 text-slate-950 transition hover:bg-slate-200"
                  >
                    <span className="text-sm font-semibold tracking-[0.01em]">
                      View Resume
                    </span>
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex justify-center rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-300/35 hover:text-white"
                  >
                    About Me
                  </Link>
                </div>
              </div>

              <div className="mx-auto w-full max-w-[330px] sm:max-w-[420px] min-[1000px]:max-w-[480px]">
                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/85 shadow-glow transition duration-300 hover:-translate-y-1 hover:rotate-0 sm:rounded-[30px] min-[1000px]:rotate-[1.5deg]">
                  <div className="relative aspect-[4/4.25] overflow-hidden bg-gradient-to-br from-sky-400/20 via-slate-950 to-indigo-500/20">
                    <Image
                      src="/homepic.PNG"
                      alt="Yassine Kraiem portrait"
                      fill
                      className="object-cover object-[center_18%]"
                      sizes="(min-width: 1024px) 30vw, 90vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:34px_34px] opacity-30 mix-blend-soft-light" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/88 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </SectionShell>

        <SectionShell id="experience" className="scroll-mt-24 pt-8 sm:pt-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300/90 sm:text-base sm:tracking-[0.28em]">
                Work Experience
              </p>
            </div>
          </div>
          <div className="mt-8 sm:mt-12">
            {latestCareer.length ? (
              <div className="grid gap-5 lg:grid-cols-3">
                {latestCareer.map((item, index) => (
                  <article
                    key={item._id}
                    className={`group flex min-h-0 flex-col overflow-hidden rounded-[20px] border border-white/10 bg-slate-950/72 transition duration-200 hover:-translate-y-1.5 hover:border-sky-300/25 sm:min-h-[390px] sm:rounded-[24px] ${
                      index === 0 ? 'lg:shadow-glow' : ''
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:px-5 sm:py-4 sm:text-[11px] sm:tracking-[0.2em]">
                      <span>{item.kind || 'Experience'}</span>
                      <span>{item.dateLabel || `${item.startYear} - ${item.endYear === 9999 ? 'Present' : item.endYear}`}</span>
                    </div>

                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                      <div>
                        <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm font-semibold text-sky-200">
                          {item.company}
                        </p>
                        <p className="mt-2 text-sm text-slate-400">
                          {[item.location, item.department, item.team].filter(Boolean).join(' • ')}
                        </p>
                      </div>

                      {item.impact?.length ? (
                        <ul className="mt-4 flex flex-wrap gap-2 sm:mt-6" aria-label={`${item.company} impact`}>
                          {item.impact.map((impact) => (
                            <li
                              key={impact}
                              className="rounded-full border border-emerald-300/15 bg-emerald-300/[0.065] px-3 py-1.5 text-[11px] font-semibold text-emerald-100"
                            >
                              {impact}
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      <p className="pt-5 text-sm leading-7 text-slate-300 sm:mt-auto sm:pt-6">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-[28px] border border-dashed border-white/10 bg-white/[0.03] p-6 text-sm leading-7 text-slate-400">
                Experience entries can live here once we add your final roles, internships, leadership positions, and research appointments.
              </div>
            )}
          </div>
        </SectionShell>

        <SectionShell id="research" className="scroll-mt-24 pt-8 sm:pt-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300/90 sm:text-base sm:tracking-[0.28em]">
                Research
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-5 sm:mt-12 lg:grid-cols-3">
            {research.map((item) => (
              <article
                key={item._id}
                className="group flex min-h-0 flex-col overflow-hidden rounded-[20px] border border-white/10 bg-slate-950/72 transition duration-200 hover:-translate-y-1.5 hover:border-sky-300/25 sm:min-h-[390px] sm:rounded-[24px]"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:px-5 sm:py-4 sm:text-[11px] sm:tracking-[0.2em]">
                  <span>{item.kind || 'Research'}</span>
                  <span>{item.dateLabel}</span>
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-sky-200">
                      {item.institution}
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      {[item.subtitle, item.location].filter(Boolean).join(' • ')}
                    </p>
                  </div>

                  {item.impact?.length ? (
                    <ul className="mt-4 flex flex-wrap gap-2 sm:mt-6" aria-label={`${item.title} research impact`}>
                      {item.impact.map((impact) => (
                        <li
                          key={impact}
                          className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.065] px-3 py-1.5 text-[11px] font-semibold text-cyan-100"
                        >
                          {impact}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <p className="pt-5 text-sm leading-7 text-slate-300 sm:pt-6">
                    {item.description}
                  </p>

                  {item.whyItMatters ? (
                    <div className="mt-5">
                      <button
                        type="button"
                        aria-expanded={openResearch === item._id}
                        onClick={() =>
                          setOpenResearch(openResearch === item._id ? null : item._id)
                        }
                        className="flex w-full items-center justify-between rounded-[16px] border border-white/10 bg-white/[0.035] px-4 py-3 text-left text-sm font-semibold text-slate-100 transition hover:border-cyan-300/30 hover:bg-white/[0.055]"
                      >
                        <span>{openResearch === item._id ? 'Close details' : 'Why it matters'}</span>
                        <span className="font-mono text-lg leading-none text-cyan-200" aria-hidden="true">
                          {openResearch === item._id ? '-' : '+'}
                        </span>
                      </button>
                      {openResearch === item._id ? (
                        <p className="mt-3 rounded-[16px] border border-cyan-300/10 bg-cyan-300/[0.045] px-4 py-3 text-sm leading-6 text-slate-300">
                          {item.whyItMatters}
                        </p>
                      ) : null}
                    </div>
                  ) : null}

                  {item.linkHref ? (
                    <div className="pt-5">
                      <Link
                        href={item.linkHref}
                        target="_blank"
                        className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/35 hover:text-white"
                      >
                        {item.linkLabel || 'View'}
                      </Link>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300/90 sm:text-base sm:tracking-[0.28em]">
                Selected Projects
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300/35 hover:text-white"
            >
              Browse all projects
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-3">
            {featuredProjects.length ? (
              featuredProjects.map((project, idx) => (
                <ProjectShowcaseCard
                  key={project._id}
                  project={project}
                  priority={idx === 0}
                />
              ))
            ) : (
              <div className="rounded-[28px] border border-dashed border-white/10 bg-white/[0.03] p-6 text-sm leading-7 text-slate-400 lg:col-span-3">
                Project entries will appear here once we add your finalized portfolio content.
              </div>
            )}
          </div>
        </SectionShell>

        <SectionShell>
          <div className="mx-auto mt-8 max-w-3xl">
            <div className="mb-4 text-center">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300/90 sm:text-base sm:tracking-[0.28em]">
                Awards & Honors
              </h3>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <div className="space-y-4">
                {awardHonors.map((award) => (
                  <div
                    key={`${award.title}-${award.year}`}
                    className="border-b border-white/6 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <p className="text-sm font-semibold text-white sm:text-[15px]">
                        {award.title}
                      </p>
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                        {award.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>

      </main>
    </>
  );
}
