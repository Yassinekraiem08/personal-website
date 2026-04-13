import Head from 'next/head';
import Link from 'next/link';

import PageContentBox from '@/src/components/PageContentBox';
import SectionHeading from '@/src/components/SectionHeading';
import { siteConfig } from '@/src/config/site';

export default function Contact() {
  return (
    <>
      <Head>
        <title>{`Contact | ${siteConfig.name}`}</title>
        <meta
          name="description"
          content={`Contact ${siteConfig.name} for opportunities, collaborations, and conversations around AI, robotics, and software engineering.`}
        />
      </Head>
      <main>
        <PageContentBox>
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Contact"
                title="Let's Connect"
              />
              <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                Thanks for stopping by - I appreciate you taking the time to
                visit my site. I welcome your feedback, questions, and
                suggestions. If you have a
                specific question or comment, please feel free to email me
                directly at{' '}
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="text-link"
                >
                  {siteConfig.email}
                </Link>
                . I make an effort to respond to all messages within 24 hours,
                although it may take me longer during busy periods.
                Alternatively, if you prefer to connect on social media, you can
                find me on{' '}
                <Link href={siteConfig.x} target="_blank" className="text-link">
                  X
                </Link>
                . Don&apos;t hesitate to reach out. Thanks again for your
                interest, and I look forward to hearing from you!
              </p>
              <div className="rounded-[28px] border border-sky-300/15 bg-gradient-to-br from-sky-400/10 to-transparent p-6">
                <p className="text-xs uppercase tracking-[0.26em] text-slate-300">
                  Email
                </p>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="mt-4 inline-flex break-all text-lg font-semibold text-white transition hover:text-sky-200 sm:text-xl"
                >
                  {siteConfig.email}
                </Link>
              </div>
            </div>

            <div className="lg:pt-16">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                <p className="text-xs uppercase tracking-[0.26em] text-slate-400">
                  Find Me Online
                </p>
                <div className="mt-5 grid gap-3">
                  <Link
                    href={siteConfig.github}
                    target="_blank"
                    className="flex items-center justify-between rounded-[18px] border border-white/10 bg-slate-950/45 px-4 py-4 text-sm font-semibold text-slate-100 transition hover:border-sky-300/35 hover:text-white"
                  >
                    <span>GitHub</span>
                  </Link>
                  <Link
                    href={siteConfig.linkedin}
                    target="_blank"
                    className="flex items-center justify-between rounded-[18px] border border-white/10 bg-slate-950/45 px-4 py-4 text-sm font-semibold text-slate-100 transition hover:border-sky-300/35 hover:text-white"
                  >
                    <span>LinkedIn</span>
                  </Link>
                  <Link
                    href={siteConfig.x}
                    target="_blank"
                    className="flex items-center justify-between rounded-[18px] border border-white/10 bg-slate-950/45 px-4 py-4 text-sm font-semibold text-slate-100 transition hover:border-sky-300/35 hover:text-white"
                  >
                    <span>X</span>
                  </Link>
                  <Link
                    href={siteConfig.medium}
                    target="_blank"
                    className="flex items-center justify-between rounded-[18px] border border-white/10 bg-slate-950/45 px-4 py-4 text-sm font-semibold text-slate-100 transition hover:border-sky-300/35 hover:text-white"
                  >
                    <span>Medium</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </PageContentBox>
      </main>
    </>
  );
}
