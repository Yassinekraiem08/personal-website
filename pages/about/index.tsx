import Head from 'next/head';
import Image from 'next/image';

import {
  DocumentType,
  getAllForDocumentTypeByCreatedDate,
} from '@/src/cms/client';
import DocumentRenderer from '@/src/cms/documents/DocumentRenderer';
import PageContentBox from '@/src/components/PageContentBox';
import SectionHeading from '@/src/components/SectionHeading';
import { siteConfig } from '@/src/config/site';

interface AboutProps {
  about: AboutEntry;
}

const storyPoints = [
  'International perspective shaped by movement across cultures, institutions, and disciplines.',
  'A strong pull toward AI, robotics, and software systems with real-world consequence.',
  'Motivated by hard problems, technical range, and building things that scale beyond a single project.',
];

export default function About({ about }: AboutProps) {
  return (
    <>
      <Head>
        <title>About | {siteConfig.name}</title>
        <meta
          name="description"
          content="Learn more about Yassine Kraiem, his background, and the technical direction behind his work in AI, robotics, and software engineering."
        />
      </Head>
      <main>
        <PageContentBox>
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/80">
                About
              </p>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Building toward intelligent systems with reach.
              </h1>
              <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
                I am a computer science student focused on AI engineering,
                software systems, and the long arc toward robotics and embodied
                intelligence. My path combines international context, academic
                discipline, and a builder mindset.
              </p>

              <div className="mt-8 space-y-3">
                {storyPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-slate-200"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="relative mx-auto aspect-[5/4] w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05]">
                <Image
                  priority
                  src="/ProfilePicture.jpg"
                  alt="Yassine Kraiem"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>
              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-sky-500/10 to-transparent p-6">
                <p className="text-xs uppercase tracking-[0.26em] text-slate-300">
                  Direction
                </p>
                <p className="mt-4 text-lg leading-8 text-white">
                  The long-term goal is to work on systems that blend intelligence,
                  software, and real-world interaction. That is why AI, automation,
                  robotics, and high-agency engineering matter to me.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <SectionHeading
              eyebrow="Story"
              title="The longer version"
              description="A concise narrative shaped by the Sanity content powering this site."
            />
            <div className="mt-8 rounded-[28px] border border-white/10 bg-slate-950/40 p-6 sm:p-8">
              <DocumentRenderer document={about.body} />
            </div>
          </div>
        </PageContentBox>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const abouts: AboutEntry[] =
    await getAllForDocumentTypeByCreatedDate<AboutEntry>(DocumentType.About, 1);

  if (!abouts || abouts.length < 1) {
    throw Error('about page content not found');
  }

  return {
    props: {
      about: abouts[0],
    },
  };
}
