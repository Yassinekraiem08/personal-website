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
    <section className="relative px-4 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-32">
      <div
        className={`mx-auto w-full max-w-6xl rounded-[24px] p-4 sm:rounded-[32px] sm:p-10 ${surfaceClassName} ${className}`}
      >
        {children}
      </div>
    </section>
  );
}
