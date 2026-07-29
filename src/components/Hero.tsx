import { motion } from 'motion/react';
import { ArrowUpRight, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { headlineStats, profile } from '../data/profile';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 blueprint" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-ok" />
                </span>
                <span className="label-mono text-fg-dim">Open to 2026 roles</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-[0.8125rem] text-fg-faint">
                <MapPin className="size-3.5" />
                {profile.location}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease }}
              className="text-fg"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease }}
              className="mt-5 font-mono text-[0.8125rem] leading-relaxed tracking-tight text-accent sm:text-sm"
            >
              {profile.focus}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease }}
              className="mt-6 text-[1.0625rem] leading-relaxed text-fg-dim sm:text-lg"
            >
              {profile.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-[0.875rem] font-medium text-accent-fg transition-opacity hover:opacity-90"
              >
                Selected work
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2.5 text-[0.875rem] font-medium text-fg transition-colors hover:border-line-strong"
              >
                <FileText className="size-4" />
                Download CV
              </a>

              <div className="flex items-center gap-1 sm:ml-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-md p-2.5 text-fg-faint transition-colors hover:text-fg"
                >
                  <Github className="size-[1.125rem]" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-md p-2.5 text-fg-faint transition-colors hover:text-fg"
                >
                  <Linkedin className="size-[1.125rem]" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="rounded-md p-2.5 text-fg-faint transition-colors hover:text-fg"
                >
                  <Mail className="size-[1.125rem]" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="order-first w-40 shrink-0 lg:order-none lg:w-56"
          >
            <div className="overflow-hidden rounded-lg border border-line bg-surface">
              <img
                src={profile.photo}
                alt={profile.name}
                width={224}
                height={280}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Headline metrics: the numbers a technical reader scans for first. */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34, ease }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:mt-20 lg:grid-cols-4"
        >
          {headlineStats.map((stat) => (
            <div key={stat.label} className="bg-surface p-5">
              <dt className="label-mono mb-3">{stat.label}</dt>
              <dd>
                <div className="flex items-baseline gap-1.5">
                  <span className="tabular text-2xl font-semibold tracking-tight text-fg">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[0.6875rem] text-fg-faint">{stat.unit}</span>
                </div>
                <p className="mt-2 text-[0.75rem] leading-snug text-fg-dim">{stat.detail}</p>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
