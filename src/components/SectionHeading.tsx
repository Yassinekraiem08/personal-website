interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const textAlign = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`max-w-3xl ${textAlign}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300/80 sm:tracking-[0.32em]">
        {eyebrow}
      </p>
      <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
