import { motion } from 'framer-motion';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import ProjectShowcaseCard from '@/src/components/ProjectShowcaseCard';
import SectionHeading from '@/src/components/SectionHeading';
import SectionShell from '@/src/components/SectionShell';
import {
  aboutContent,
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

  return (
    <>
      <Head>
        <title>{`${siteConfig.name} | AI Engineer and Systems Builder`}</title>
        <meta name="description" content={siteConfig.description} />
      </Head>
      <main>
        <SectionShell
          animateOnView={false}
          className="relative flex h-screen items-center overflow-hidden pt-0"
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
          <div className="relative flex h-screen w-full flex-col">
            <div className="mx-auto flex w-full max-w-7xl flex-1 items-start justify-center pt-14 text-center sm:pt-16">
              <div className="sr-only">
                <h1>Let&apos;s Immerse With Yassine</h1>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="pointer-events-none absolute inset-x-0 bottom-32 z-[2] flex w-full items-center justify-center flex-col sm:bottom-10"
            >
              <div className="mt-5 inline-flex w-fit items-center justify-center gap-6 rounded-xl bg-[#181430]/90 px-4 py-2 text-base font-medium text-slate-100 shadow-glow lg:mt-10 lg:px-7 lg:py-3">
                Try clicking screen!
              </div>
              <Link
                href="#introduction"
                className="pointer-events-auto group mt-5 inline-flex w-fit items-center justify-center gap-6 rounded-xl bg-[#181430]/90 px-4 py-2 text-center text-slate-200 shadow-glow transition hover:text-white lg:mt-10 lg:px-7 lg:py-3"
              >
                <span className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-white/80 p-2">
                  <motion.span
                    animate={{ y: [0, 24, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="mt-1 h-3 w-3 rounded-full bg-white"
                  />
                </span>
                <span className="text-xl font-medium tracking-[-0.03em] lg:text-2xl">
                  Scroll Down
                </span>
              </Link>
            </motion.div>
          </div>
        </SectionShell>

        <SectionShell id="introduction" className="pt-24 sm:pt-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-[30px] font-black text-white xs:text-[40px] sm:text-[50px] md:text-[60px]">
              Hey, I&apos;m Yassine!
            </h2>

            <div className="mt-6 flex items-center min-[1000px]:flex-row flex-col-reverse">
              <div>
                <div className="mt-4 max-w-3xl text-[17px] leading-[30px] text-slate-300">
                  <p
                    className="mt-4 w-full min-[1000px]:max-w-lg text-[17px] leading-[30px] text-slate-300"
                    style={{ textAlign: 'justify' }}
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

                <div className="mt-6 flex flex-wrap justify-center gap-4 sm:justify-start">
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
                    className="inline-flex rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-300/35 hover:text-white"
                  >
                    About Me
                  </Link>
                </div>
              </div>

              <div className="mx-auto w-full max-w-[420px]">
                <div className="rounded-[28px] border border-slate-800/80 bg-slate-950/75 p-4">
                  <div className="relative aspect-[4/4.4] overflow-hidden rounded-[22px] border border-white/10 bg-slate-950/80">
                      <Image
                        src="/profile-home.jpg"
                        alt="Yassine Kraiem portrait"
                        fill
                        className="object-cover object-[center_18%]"
                        sizes="(min-width: 1024px) 30vw, 90vw"
                      />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </SectionShell>

        <SectionShell id="experience">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300/90 sm:text-base">
                Work Experience
              </p>
            </div>
            <Link
              href={siteConfig.resumeHref}
              target="_blank"
              className="inline-flex rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-300/35 hover:text-white"
            >
              View Resume
            </Link>
          </div>
          <div className="mt-10">
            {latestCareer.length ? (
              <div className="grid gap-4 lg:grid-cols-3">
                {latestCareer.map((item) => (
                  <div
                    key={item._id}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
                  >
                    <div className="flex flex-col gap-3">
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
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                        {item.dateLabel || `${item.startYear} - ${item.endYear === 9999 ? 'Present' : item.endYear}`}
                      </p>
                      <p className="text-sm leading-7 text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-[28px] border border-dashed border-white/10 bg-white/[0.03] p-6 text-sm leading-7 text-slate-400">
                Experience entries can live here once we add your final roles, internships, leadership positions, and research appointments.
              </div>
            )}
          </div>
        </SectionShell>

        <SectionShell id="research">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300/90 sm:text-base">
                Research
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {research.map((item) => (
              <article
                key={item._id}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="flex h-full flex-col gap-4">
                  <div>
                    <div className="flex flex-col gap-3">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-sky-200">
                          {item.institution}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-400">
                          <span>{item.subtitle}</span>
                          {item.location ? <span>{item.location}</span> : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                  {item.linkHref ? (
                    <div className="pt-1">
                      <Link
                        href={item.linkHref}
                        target="_blank"
                        className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-300/35 hover:text-white"
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
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300/90 sm:text-base">
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
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
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
              <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300/90 sm:text-base">
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
