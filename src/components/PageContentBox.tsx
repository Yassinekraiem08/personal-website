import { PropsWithChildren } from 'react';

interface PageContentBoxProps extends PropsWithChildren {
  className?: string;
  variant?: 'default' | 'dark';
}

export default function PageContentBox({
  children,
  className = '',
  variant = 'default',
}: PageContentBoxProps) {
  const surfaceClassName =
    variant === 'dark'
      ? 'border-slate-800/80 bg-slate-950/75 shadow-none backdrop-blur-none'
      : 'border border-white/10 bg-white/[0.04] shadow-glow backdrop-blur-xl';

  return (
    <section className="relative px-5 pb-16 pt-28 sm:px-8 sm:pt-32">
      <div
        className={`mx-auto w-full max-w-6xl rounded-[32px] p-6 sm:p-10 ${surfaceClassName} ${className}`}
      >
        {children}
      </div>
    </section>
  );
}
