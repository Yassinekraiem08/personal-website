import { PropsWithChildren } from 'react';

interface SectionShellProps extends PropsWithChildren {
  className?: string;
  id?: string;
}

export default function SectionShell({
  children,
  className = '',
  id,
}: SectionShellProps) {
  return (
    <section id={id} className={`relative px-5 py-12 sm:px-8 sm:py-16 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
