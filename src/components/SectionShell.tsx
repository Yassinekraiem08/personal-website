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
  const sectionClassName = `relative px-6 py-10 sm:px-16 sm:py-16 ${className}`;

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
