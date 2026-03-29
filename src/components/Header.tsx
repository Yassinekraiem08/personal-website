import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Github from '@/src/icons/Github.svg';
import LinkedIn from '@/src/icons/LinkedIn.svg';
import X from '@/src/icons/X.svg';
import { navLinks, siteConfig } from '@/src/config/site';

export const navButtons = [
  { label: 'About', path: '/about' },
  { label: 'Resume', path: siteConfig.resumeHref },
  { label: 'Projects', path: '/projects' },
];

export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full px-6 py-5 sm:px-16">
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/65 px-4 py-3 shadow-glow backdrop-blur-xl transition sm:px-6 sm:py-4 ${
          scrolled ? 'bg-slate-950/88' : ''
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <Image
                priority
                src="/Logo.png"
                alt={`${siteConfig.name} logo`}
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <div className="hidden min-w-0 sm:block">
              <p className="text-[20px] font-bold text-white">
                {siteConfig.name}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 sm:flex">
            {navLinks.map((item) => {
              const isResumeLink = item.href === siteConfig.resumeHref;
              const isActive =
                item.href === '/'
                  ? router.pathname === '/'
                  : item.href.startsWith('/#')
                    ? false
                    : isResumeLink
                    ? false
                    : router.pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  target={isResumeLink ? '_blank' : undefined}
                  className={`rounded-full px-2 py-2 text-[18px] font-medium transition ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-5 sm:flex">
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-sky-300/30 hover:text-white"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </Link>
            <Link
              href={siteConfig.github}
              target="_blank"
              className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-sky-300/30 hover:text-white"
              aria-label="GitHub"
            >
              <Github />
            </Link>
            <Link
              href={siteConfig.x}
              target="_blank"
              className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-sky-300/30 hover:text-white"
              aria-label="X"
            >
              <X />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white sm:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                  mobileOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${
                  mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>

        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-4 grid gap-2 border-t border-white/10 pt-4 sm:hidden"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.href === siteConfig.resumeHref ? '_blank' : undefined}
                className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <Link
                href={siteConfig.linkedin}
                target="_blank"
                className="rounded-full border border-white/10 p-2 text-slate-300"
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </Link>
              <Link
                href={siteConfig.github}
                target="_blank"
                className="rounded-full border border-white/10 p-2 text-slate-300"
                aria-label="GitHub"
              >
                <Github />
              </Link>
              <Link
                href={siteConfig.x}
                target="_blank"
                className="rounded-full border border-white/10 p-2 text-slate-300"
                aria-label="X"
              >
                <X />
              </Link>
            </div>
          </motion.div>
        ) : null}
      </div>
    </header>
  );
}
