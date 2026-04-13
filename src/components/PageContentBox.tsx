import { PropsWithChildren } from 'react';

interface PageContentBoxProps extends PropsWithChildren {
  className?: string;
}

export default function PageContentBox({
  children,
  className = '',
}: PageContentBoxProps) {
  return (
    <section className="relative px-5 pb-16 pt-28 sm:px-8 sm:pt-32">
      <div
        className={`mx-auto w-full max-w-6xl rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-glow backdrop-blur-xl sm:p-10 ${className}`}
      >
        {children}
      </div>
    </section>
  );
}
