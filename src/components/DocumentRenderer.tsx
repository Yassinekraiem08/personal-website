import Image from 'next/image';
import Link from 'next/link';

interface DocumentRendererProps {
  document: RichContentBlock[] | undefined;
}

export default function DocumentRenderer({ document }: DocumentRendererProps) {
  if (!document) return null;

  return (
    <div className="max-w-none">
      {document.map((block, index) => {
        if (block.type === 'heading') {
          if (block.level === 3) {
            return (
              <h3
                key={index}
                className="mt-8 font-display text-2xl font-semibold tracking-tight text-sky-100"
              >
                {block.text}
              </h3>
            );
          }

          return (
            <h2
              key={index}
              className="mt-10 font-display text-3xl font-semibold tracking-tight text-white"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === 'paragraph') {
          return (
            <p key={index} className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
              {block.text}
            </p>
          );
        }

        if (block.type === 'list') {
          const ListTag = block.style === 'number' ? 'ol' : 'ul';
          const listClassName =
            block.style === 'number'
              ? 'my-6 list-decimal space-y-3 pl-6 text-slate-300'
              : 'my-6 list-disc space-y-3 pl-6 text-slate-300';

          return (
            <ListTag key={index} className={listClassName}>
              {block.items.map((item) => (
                <li key={item} className="pl-1 leading-8">
                  {item}
                </li>
              ))}
            </ListTag>
          );
        }

        if (block.type === 'quote') {
          const className = block.halfWidth
            ? `my-8 w-full rounded-[24px] border border-sky-300/15 bg-sky-300/[0.06] px-6 py-6 text-base leading-7 text-slate-100 lg:w-[48%] ${
                block.floatRight ? 'lg:float-right lg:ml-6' : 'lg:float-left lg:mr-6'
              }`
            : 'my-8 rounded-[28px] border border-sky-300/15 bg-sky-300/[0.06] px-6 py-6 text-lg leading-8 text-slate-100';

          return (
            <blockquote key={index} className={className}>
              <p>{block.quote}</p>
              {block.citation ? (
                <footer className="mt-4 text-sm text-slate-400">- {block.citation}</footer>
              ) : null}
            </blockquote>
          );
        }

        const aspectRatio = block.image.aspectRatio || 1.4;
        const widthClassName = block.fullWidth
          ? 'my-10 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-3'
          : `my-8 w-full overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-3 lg:w-[48%] ${
              block.image.floatRight ? 'lg:float-right lg:ml-6' : 'lg:float-left lg:mr-6'
            }`;

        return (
          <figure key={index} className={widthClassName}>
            <div
              className={`relative overflow-hidden ${
                block.fullWidth ? 'rounded-[22px]' : 'rounded-[18px]'
              }`}
              style={{ paddingTop: `${(1 / aspectRatio) * 100}%` }}
            >
              <Image
                sizes={
                  block.fullWidth
                    ? '(min-width: 1024px) 70vw, 100vw'
                    : '(min-width: 1024px) 38vw, 100vw'
                }
                src={block.image.src}
                alt={block.image.alt}
                fill
                className="object-cover"
              />
            </div>
            {block.image.caption ? (
              <figcaption className="px-2 pb-1 pt-4 text-sm text-slate-400">
                {block.image.caption}
              </figcaption>
            ) : null}
            {block.image.link ? (
              <Link
                className="mt-3 inline-flex px-2 text-sm text-link"
                href={block.image.link}
                target={block.image.link.startsWith('/') ? undefined : '_blank'}
              >
                Open image link
              </Link>
            ) : null}
          </figure>
        );
      })}
    </div>
  );
}
