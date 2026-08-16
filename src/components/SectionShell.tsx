import { HTMLAttributes, PropsWithChildren } from 'react';

interface SectionShellProps
  extends PropsWithChildren,
    Omit<HTMLAttributes<HTMLElement>, 'className' | 'id'> {
  animateOnView?: boolean;
  className?: string;
  id?: string;
}

export default function SectionShell({
  animateOnView = true,
  children,
  className = '',
  id,
  ...props
}: SectionShellProps) {
  const sectionClassName = `relative px-4 py-8 sm:px-8 sm:py-12 lg:px-16 lg:py-16 ${className}`;

  if (!animateOnView) {
    return (
      <section id={id} className={sectionClassName} {...props}>
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      </section>
    );
  }

  return (
    <section id={id} className={sectionClassName} {...props}>
      <div className="mx-auto w-full max-w-7xl">
        {children}
      </div>
    </section>
  );
}
