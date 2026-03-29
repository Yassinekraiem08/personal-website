import { HTMLAttributes, PropsWithChildren } from 'react';

import { motion } from 'framer-motion';

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
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={sectionClassName}
      {...props}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </motion.section>
  );
}
