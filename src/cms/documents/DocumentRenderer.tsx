import { PortableText, PortableTextComponents } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { urlForImage } from '@/src/cms/images';

interface DocumentRendererProps {
  document: PortableTextBlock[] | undefined;
}

interface ImageComponent {
  value: Image;
}

interface Quote {
  quote: string;
  citation: string;
  floatRight?: boolean;
}

interface QuoteComponent {
  value: Quote;
}

interface PortableTextChildrenProps {
  children: ReactNode;
}

interface PortableTextLinkMarkProps extends PortableTextChildrenProps {
  value: {
    href: string;
  };
}

const customComponents: PortableTextComponents = {
  types: {
    fullWidthImage: ({ value: { asset, alt, caption } }: ImageComponent) => {
      const aspectRatio = asset.metadata?.dimensions.aspectRatio || 1;
      return (
        <figure className="my-10 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-3">
          <div
            className="relative overflow-hidden rounded-[22px]"
            style={{ paddingTop: `${(1 / aspectRatio) * 100}%` }}
          >
            <Image
              placeholder="blur"
              blurDataURL={asset.metadata?.lqip}
              sizes="(min-width: 1024px) 70vw, 100vw"
              src={urlForImage(asset).url()}
              alt={alt}
              fill
              className="object-cover"
            />
          </div>
          {caption ? (
            <figcaption className="px-2 pb-1 pt-4 text-sm text-slate-400">
              {caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
    halfWidthImage: ({ value: { asset, alt, floatRight, caption } }: ImageComponent) => {
      const aspectRatio = asset.metadata?.dimensions.aspectRatio || 1;
      return (
        <figure
          className={`my-8 w-full overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-3 lg:w-[48%] ${
            floatRight ? 'lg:float-right lg:ml-6' : 'lg:float-left lg:mr-6'
          }`}
        >
          <div
            className="relative overflow-hidden rounded-[18px]"
            style={{ paddingTop: `${(1 / aspectRatio) * 100}%` }}
          >
            <Image
              placeholder="blur"
              blurDataURL={asset.metadata?.lqip}
              sizes="(min-width: 1024px) 38vw, 100vw"
              src={urlForImage(asset).url()}
              alt={alt}
              fill
              className="object-cover"
            />
          </div>
          {caption ? (
            <figcaption className="px-1 pb-1 pt-3 text-sm text-slate-400">
              {caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
    fullWidthQuote: ({ value: { citation, quote } }: QuoteComponent) => (
      <blockquote className="my-8 rounded-[28px] border border-sky-300/15 bg-sky-300/[0.06] px-6 py-6 text-lg leading-8 text-slate-100">
        <p>{quote}</p>
        <footer className="mt-4 text-sm text-slate-400">- {citation}</footer>
      </blockquote>
    ),
    halfWidthQuote: ({ value: { citation, quote, floatRight } }: QuoteComponent) => (
      <blockquote
        className={`my-8 w-full rounded-[24px] border border-sky-300/15 bg-sky-300/[0.06] px-6 py-6 text-base leading-7 text-slate-100 lg:w-[48%] ${
          floatRight ? 'lg:float-right lg:ml-6' : 'lg:float-left lg:mr-6'
        }`}
      >
        <p>{quote}</p>
        <footer className="mt-4 text-sm text-slate-400">- {citation}</footer>
      </blockquote>
    ),
  },
  block: {
    h1: ({ children }: PortableTextChildrenProps) => (
      <h2 className="mt-10 font-display text-3xl font-semibold tracking-tight text-white">
        {children}
      </h2>
    ),
    h3: ({ children }: PortableTextChildrenProps) => (
      <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-sky-100">
        {children}
      </h3>
    ),
    normal: ({ children }: PortableTextChildrenProps) => (
      <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: PortableTextChildrenProps) => <ul className="my-6 list-disc space-y-3 pl-6 text-slate-300">{children}</ul>,
    number: ({ children }: PortableTextChildrenProps) => <ol className="my-6 list-decimal space-y-3 pl-6 text-slate-300">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: PortableTextChildrenProps) => <li className="pl-1 leading-8">{children}</li>,
    number: ({ children }: PortableTextChildrenProps) => <li className="pl-1 leading-8">{children}</li>,
  },
  marks: {
    link: ({ children, value: { href } }: PortableTextLinkMarkProps) => {
      const target = !href.startsWith('/') ? '_blank' : undefined;
      return (
        <Link className="text-link" href={href} target={target}>
          {children}
        </Link>
      );
    },
  },
};

export default function DocumentRenderer({ document }: DocumentRendererProps) {
  if (!document) return null;
  return (
    <div className="max-w-none">
      <PortableText value={document} components={customComponents} />
    </div>
  );
}
