import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticPropsContext } from 'next';
import DocumentRenderer from '@/src/components/DocumentRenderer';
import PageContentBox from '@/src/components/PageContentBox';
import { getProjectBySlug, projectEntries } from '@/src/content/siteContent';
import { siteConfig } from '@/src/config/site';

interface ProjectProps {
  project: ProjectEntry;
}

export default function Project({ project }: ProjectProps) {
  return (
    <>
      <Head>
        <title>{`${project.name} | ${siteConfig.name}`}</title>
        <meta
          name="description"
          content={`Project detail page for ${project.name} by ${siteConfig.name}.`}
        />
      </Head>
      <main>
        <PageContentBox>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/80">
                Project
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {project.name}
              </h1>
              <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <span className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-300">
                  Started {project.startYear}
                </span>
                <Link
                  href="/projects"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-300/35 hover:text-white"
                >
                  Back to projects
                </Link>
                {project.demoLink ? (
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                  >
                    Live demo
                  </Link>
                ) : null}
                {project.codeLink ? (
                  <Link
                    href={project.codeLink}
                    target="_blank"
                    className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-300/35 hover:text-white"
                  >
                    View code
                  </Link>
                ) : null}
              </div>
            </div>

            <div className="relative aspect-[16/11] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04]">
              <Image
                src={project.mainImage.src}
                alt={project.mainImage.alt || project.name}
                fill
                className={project.mainImage.contain ? 'object-contain p-8' : 'object-cover'}
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
          </div>

          {project.body?.length ? (
            <div className="mt-14 rounded-[28px] border border-white/10 bg-slate-950/45 p-6 sm:p-8">
              <DocumentRenderer document={project.body} />
            </div>
          ) : null}

          {project.images?.length ? (
            <div className="mt-14">
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/80">
                  Gallery
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-white">
                  Supporting visuals
                </h2>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {project.images.map((image, idx) => (
                  <div
                    key={`${image.src}_${idx}`}
                    className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-3"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
                      <Image
                        src={image.src}
                        alt={image.alt || project.name}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 45vw, 100vw"
                      />
                    </div>
                    {image.caption ? (
                      <p className="px-2 pb-1 pt-4 text-sm text-slate-400">
                        {image.caption}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </PageContentBox>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: projectEntries.map(({ slug }) => ({
      params: { slug: slug.current },
    })),
    fallback: false,
  };
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const slug = ctx.params?.slug;
  if (!slug) throw Error('Slug not found for /projects/{slug}');

  const project = getProjectBySlug(slug as string);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project,
    },
  };
}
