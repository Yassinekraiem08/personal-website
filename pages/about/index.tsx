import Head from 'next/head';
import Image from 'next/image';

import PageContentBox from '@/src/components/PageContentBox';
import SectionHeading from '@/src/components/SectionHeading';
import { siteConfig } from '@/src/config/site';

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
                From a young age, I&apos;ve been motivated to innovate and create
                impact through technology. My early exposure to entrepreneurship
                ignited my ambition, and since then, I have aimed to design
                products that enrich people&apos;s lives. I want to keep building
                products that are useful, durable, and meaningful.
              </p>
              <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
                With a strong foundation in computer science and a clear focus on
                AI, I&apos;ve become most interested in the space where technical
                depth meets real product value. I&apos;m drawn to work that requires
                ownership, curiosity, and a willingness to step outside a narrow
                job description. Whether I&apos;m building AI systems, analytics
                tools, or user-facing products, I bring a mix of engineering
                rigor, strategic thinking, and a genuine interest in creating
                technology that people find useful.
              </p>
              <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
                What sets my perspective apart is that I do not think about
                technology in isolation. I think about how it behaves when
                conditions are imperfect, users are real, and the stakes
                actually matter. That mindset pushes me to build systems that
                are not only intelligent, but dependable, usable, and grounded
                in reality.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="mx-auto w-full max-w-xl rounded-[32px] border border-white/10 bg-slate-950/60 p-3">
                <div className="relative aspect-[4/5.7] overflow-hidden rounded-[26px] border border-white/10 bg-slate-950/80">
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
                  I grew up in Tunis. Not in a place with much of a tech scene -
                  there was no startup culture,
                  no CS pipeline, no one around me building software. But there
                  was a feeling I could not shake: that the things I used every
                  day, apps, tools, systems, could be so much better. And that
                  maybe I could be the one to make them better.
                </p>
                <p>
                  When I was in high school, I built an app called Trainme. It
                  connected tennis coaches with students. It was not good. The UI
                  was rough, the code was messy, and almost no one used it. But
                  someone did. And the moment a stranger opened something I made
                  and actually tried to use it, that was it. I knew what I wanted
                  to do for the rest of my life.
                </p>
                <p>
                  I left Tunisia at 18. Moved to the US alone, learned to
                  navigate a country where I did not know anyone, in a language
                  that was not my first, on a visa that reminded me every
                  semester that none of this was guaranteed. That kind of
                  pressure does not break you, it recalibrates you. You stop
                  wasting time on things that do not matter. You learn to build
                  fast, adapt faster, and never assume the ground beneath you is
                  stable.
                </p>
                <p>
                  Since then, I have built AI systems that actually get used, a
                  RAG decision-support platform that indexes hundreds of
                  documents with hallucination guardrails, a natural language
                  analytics engine that turns plain English into SQL across
                  complex databases, workflow orchestrators that classify and
                  route real operational data. Every one of them started the same
                  way: someone had a problem, and I would not stop until the
                  system solved it under real conditions, not just clean ones.
                </p>
                <p>
                  Now I&apos;m heading to Columbia to go deeper, to close the gap
                  between what AI can do in a lab and what it can do in the
                  world. But honestly, the destination was never a school or a
                  title. It&apos;s the feeling I got in Tunis when that stranger
                  opened my app. I&apos;m still chasing that.
                </p>
              </div>
            </div>
          </div>
        </PageContentBox>
      </main>
    </>
  );
}
