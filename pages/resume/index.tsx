import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import PageContentBox from '@/src/components/PageContentBox';
import SectionHeading from '@/src/components/SectionHeading';
import { careerEntries, educationEntries } from '@/src/content/siteContent';
import { siteConfig } from '@/src/config/site';

const achievementItems = [
  'Computer science student with a demonstrated pattern of self-direction and technical growth.',
  'Cross-disciplinary background spanning technology, international studies, leadership, and high-accountability roles.',
  'Motivated by intelligent systems, software leverage, and technical work with long-term significance.',
];

export default function Resume() {
  const career = careerEntries;
  const education = educationEntries;

  return (
    <>
      <Head>
        <title>{`Resume | ${siteConfig.name}`}</title>
        <meta
          name="description"
          content="Experience, education, and key achievements for Yassine Kraiem."
        />
      </Head>
      <main>
        <PageContentBox>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Resume"
              title="A trajectory built around learning velocity, ownership, and technical ambition."
              description="A concise view of experience, education, and the signal behind the work."
            />
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              className="inline-flex justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Contact
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3">
            {achievementItems.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-slate-300 sm:rounded-[24px] sm:p-5"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-10 sm:mt-14 sm:gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <SectionHeading
                eyebrow="Experience"
                title="Roles that show range, initiative, and progression."
              />
              <div className="mt-8 space-y-5">
                {career.length ? (
                  career.map((item) => (
                    <article
                      key={item._id}
                      className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 sm:rounded-[28px] sm:p-6"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4">
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                            <Image
                              src={item.image.src}
                              alt={item.image.alt || item.company}
                              fill
                              className="object-cover"
                              sizes="56px"
                            />
                          </div>
                          <div>
                            <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                              {item.title}
                            </h2>
                            <p className="mt-1 text-sm font-medium text-sky-200">
                              {item.company}
                            </p>
                            {item.location ? (
                              <p className="mt-2 text-sm text-slate-400">
                                {item.location}
                              </p>
                            ) : null}
                            {item.department || item.team ? (
                              <p className="mt-2 text-sm text-slate-400">
                                {[item.department, item.team].filter(Boolean).join(' • ')}
                              </p>
                            ) : null}
                          </div>
                        </div>
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-400 sm:text-sm sm:tracking-[0.22em]">
                          {item.dateLabel || `${item.startYear} - ${item.endYear === 9999 ? 'Present' : item.endYear}`}
                        </p>
                      </div>
                      <p className="mt-5 text-sm leading-7 text-slate-300">
                        {item.description}
                      </p>
                    </article>
                  ))
                ) : (
                  <div className="rounded-[28px] border border-dashed border-white/10 bg-white/[0.03] p-6 text-sm leading-7 text-slate-400">
                    Experience entries will go here once we add your final resume content.
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <SectionHeading
                  eyebrow="Education"
                  title="Academic foundation"
                />
                <div className="mt-8 space-y-5">
                  {education.length ? (
                    education.map((item) => (
                      <article
                        key={item._id}
                        className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 sm:rounded-[28px] sm:p-6"
                      >
                        <div className="flex items-start gap-4">
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                            <Image
                              src={item.image.src}
                              alt={item.image.alt || item.school}
                              fill
                              className="object-cover"
                              sizes="56px"
                            />
                          </div>
                          <div className="min-w-0">
                            <h2 className="font-display text-lg font-semibold text-white sm:text-xl">
                              {item.school}
                            </h2>
                            <p className="mt-1 text-sm font-medium leading-6 text-sky-200">
                              {item.major} • {item.degree}
                            </p>
                            <p className="mt-2 text-sm text-slate-400">
                              {item.startYear} - {item.endYear} • GPA {item.gpa.toFixed(1)}
                            </p>
                          </div>
                        </div>
                        <p className="mt-5 text-sm leading-7 text-slate-300">
                          {item.description}
                        </p>
                      </article>
                    ))
                  ) : (
                    <div className="rounded-[28px] border border-dashed border-white/10 bg-white/[0.03] p-6 text-sm leading-7 text-slate-400">
                      Education details will go here once we add your final academic content.
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-gradient-to-br from-sky-500/10 to-emerald-400/5 p-4 sm:rounded-[28px] sm:p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300 sm:tracking-[0.26em]">
                  Snapshot
                </p>
                <p className="mt-4 text-base leading-7 text-white sm:text-lg sm:leading-8">
                  The pattern across my work is consistent: learn aggressively,
                  take ownership early, and build toward systems that combine
                  intelligence, engineering, and practical impact.
                </p>
              </div>
            </div>
          </div>
        </PageContentBox>
      </main>
    </>
  );
}
