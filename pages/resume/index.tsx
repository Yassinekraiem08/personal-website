import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import {
  DocumentType,
  Order,
  OrderBy,
  getAllForDocumentTypeOrdered,
} from '@/src/cms/client';
import { urlForImage } from '@/src/cms/images';
import PageContentBox from '@/src/components/PageContentBox';
import SectionHeading from '@/src/components/SectionHeading';
import { siteConfig } from '@/src/config/site';
import { DAYS } from '@/src/util/time';

interface ResumeProps {
  career: CareerEntry[];
  education: EducationEntry[];
}

const achievementItems = [
  'Computer science student with a demonstrated pattern of self-direction and technical growth.',
  'Cross-disciplinary background spanning technology, international studies, leadership, and high-accountability roles.',
  'Motivated by intelligent systems, software leverage, and technical work with long-term significance.',
];

export default function Resume({ career, education }: ResumeProps) {
  return (
    <>
      <Head>
        <title>Resume | {siteConfig.name}</title>
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
              className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Contact
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {achievementItems.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <SectionHeading
                eyebrow="Experience"
                title="Roles that show range, initiative, and progression."
              />
              <div className="mt-8 space-y-5">
                {career.map((item) => (
                  <article
                    key={item._id}
                    className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                          <Image
                            src={urlForImage(item.image.asset).size(120, 120).url()}
                            alt={item.image.alt || item.company}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                        <div>
                          <h2 className="font-display text-2xl font-semibold text-white">
                            {item.title}
                          </h2>
                          <p className="mt-1 text-sm font-medium text-sky-200">
                            {item.company}
                          </p>
                          {item.department || item.team ? (
                            <p className="mt-2 text-sm text-slate-400">
                              {[item.department, item.team].filter(Boolean).join(' • ')}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                        {item.startYear} - {item.endYear === 9999 ? 'Present' : item.endYear}
                      </p>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <SectionHeading
                  eyebrow="Education"
                  title="Academic foundation"
                />
                <div className="mt-8 space-y-5">
                  {education.map((item) => (
                    <article
                      key={item._id}
                      className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                          <Image
                            src={urlForImage(item.image.asset).size(120, 120).url()}
                            alt={item.image.alt || item.school}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                        <div className="min-w-0">
                          <h2 className="font-display text-xl font-semibold text-white">
                            {item.school}
                          </h2>
                          <p className="mt-1 text-sm font-medium text-sky-200">
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
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-sky-500/10 to-emerald-400/5 p-6">
                <p className="text-xs uppercase tracking-[0.26em] text-slate-300">
                  Snapshot
                </p>
                <p className="mt-4 text-lg leading-8 text-white">
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

export async function getStaticProps() {
  const career: CareerEntry[] = await getAllForDocumentTypeOrdered<CareerEntry>(
    DocumentType.Career,
    OrderBy.EndYear,
    Order.DESC
  );

  const education: EducationEntry[] =
    await getAllForDocumentTypeOrdered<EducationEntry>(
      DocumentType.Education,
      OrderBy.EndYear,
      Order.DESC
    );

  if (!education || !career || education.length < 1 || career.length < 1) {
    throw Error('Failed to fetch education or career entries');
  }

  return {
    props: {
      career,
      education,
    },
    revalidate: 90 * DAYS,
  };
}
