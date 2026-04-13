import Head from 'next/head';
import Image from 'next/image';

import PageContentBox from '@/src/components/PageContentBox';
import SectionHeading from '@/src/components/SectionHeading';
import { siteConfig } from '@/src/config/site';

const storyPoints = [
  'International perspective shaped by movement across cultures, institutions, and disciplines.',
  'A strong pull toward AI, robotics, and software systems with real-world consequence.',
  'Motivated by hard problems, technical range, and building things that scale beyond a single project.',
];

export default function About() {
  return (
    <>
      <Head>
        <title>{`About | ${siteConfig.name}`}</title>
        <meta
          name="description"
          content="Learn more about Yassine Kraiem, his background, and the technical direction behind his work in AI, robotics, and software engineering."
        />
      </Head>
      <main>
        <PageContentBox className="border-slate-800/80 bg-slate-950/75 shadow-none backdrop-blur-none">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Building intelligence that holds up in the real world.
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
              <div className="mx-auto w-full max-w-xl rounded-[32px] border border-white/10 bg-slate-950/60 p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] border border-white/10 bg-slate-950/80">
                  <Image
                    priority
                    src="/about-profile.jpg"
                    alt="Yassine Kraiem"
                    fill
                    className="object-cover object-[center_22%]"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300/90 sm:text-base">
              The Deeper Story
            </h2>
            <div className="mt-8 rounded-[28px] border border-white/10 bg-slate-950/40 p-6 sm:p-8">
              <div className="space-y-6 text-base leading-8 text-slate-300 sm:text-lg">
                <p>
                  I grew up in Tunisia, and the thing about moving across countries,
                  languages, and cultures is that you learn to adapt before you
                  learn to be comfortable. That shaped everything, how I approach
                  unfamiliar problems, how quickly I build from scratch, and why I
                  gravitate toward systems that need to perform under uncertainty,
                  not just under ideal conditions.
                </p>
                <p>
                  My first real project was not a class assignment, it was a
                  startup. In high school, I launched Trainme, an app connecting
                  tennis coaches with students. It did not become the next big
                  thing. But it taught me what no textbook could: building
                  something people actually use requires resilience, creativity,
                  and the willingness to keep going after things break.
                </p>
                <p>
                  That early experience lit something in me. Since then, I have
                  built a RAG-based AI decision support system that indexes
                  hundreds of documents with hallucination guardrails, a natural
                  language analytics platform that translates plain English into
                  SQL across complex databases, and AI workflow orchestrators that
                  classify and prioritize real operational data. Every project
                  pushed me deeper into the same question: how do you build AI
                  that does not just perform on a benchmark, but actually holds up
                  when the world gets messy?
                </p>
                <p>
                  Right now, I am heading to Columbia for graduate studies in AI,
                  focused on bridging the gap between theory and practice, and
                  building the kind of systems that create measurable impact at
                  scale. Long-term, I want to build products that genuinely change
                  how people interact with intelligent systems.
                </p>
              </div>
            </div>
          </div>
        </PageContentBox>
      </main>
    </>
  );
}
