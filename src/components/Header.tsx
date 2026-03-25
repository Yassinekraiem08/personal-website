import { useState } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Github from '@/src/icons/Github.svg';
import LinkedIn from '@/src/icons/LinkedIn.svg';
import { navLinks, siteConfig } from '@/src/config/site';

export const navButtons = [
  { label: 'About', path: '/about' },
  { label: 'Resume', path: '/resume' },
  { label: 'Projects', path: '/projects' },
];

export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-full border border-white/10 bg-slate-950/65 px-4 py-3 shadow-glow backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-11 w-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                priority
                src="/Logo.png"
                alt={`${siteConfig.name} logo`}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div className="hidden min-w-0 sm:block">
              <p className="font-display text-sm font-semibold tracking-[0.22em] text-white">
                {siteConfig.name}
              </p>
              <p className="text-xs text-slate-400">
                AI engineer • software builder • robotics-focused
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navLinks.map((item) => {
              const isActive =
                item.href === '/'
                  ? router.pathname === '/'
                  : item.href.startsWith('/#')
                    ? false
                    : router.pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-white text-slate-950'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
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
              href="/projects"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              See work
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
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
            className="mt-4 grid gap-2 border-t border-white/10 pt-4 lg:hidden"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
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
            </div>
          </motion.div>
        ) : null}
      </div>
    </header>
  );
}
