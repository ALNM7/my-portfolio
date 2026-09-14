import { motion } from 'motion/react';
import { ArrowUpRight, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { headlineStats, profile } from '../data/profile';
import { fadeUp, staggerGroup } from '../lib/motion';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-44 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 blueprint" aria-hidden="true" />

      <motion.div
        variants={staggerGroup(0.07)}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl px-5 sm:px-8"
      >
        <motion.div
          variants={fadeUp}
          className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-2"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1">
            <span className="size-1.5 rounded-full bg-fg-faint" aria-hidden="true" />
            <span className="label-mono text-fg-dim">Not available for new roles</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-[0.8125rem] text-fg-faint">
            <MapPin className="size-3.5" />
            {profile.location}
          </span>
        </motion.div>

        {/*
          The name runs the full measure rather than sharing a row with the
          portrait, which is what lets the display size actually be a display
          size.
        */}
        <motion.h1 variants={fadeUp} className="max-w-[18ch] text-fg">
          {profile.name}
        </motion.h1>

        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-[1fr_13rem] lg:items-start lg:gap-16">
          <div className="max-w-2xl">
            <motion.p
              variants={fadeUp}
              className="font-mono text-[0.8125rem] leading-relaxed tracking-tight text-accent sm:text-sm"
            >
              {profile.focus}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-7 text-[1.0625rem] leading-[1.7] text-fg-dim sm:text-lg"
            >
              {profile.intro}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-[0.875rem] font-medium text-accent-fg transition-opacity duration-[180ms] hover:opacity-90"
              >
                Selected work
                <ArrowUpRight className="size-4 transition-transform duration-[180ms] ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2.5 text-[0.875rem] font-medium text-fg transition-colors duration-[180ms] hover:border-line-strong hover:bg-surface-2"
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
                  className="rounded-md p-2.5 text-fg-faint transition-colors duration-[180ms] hover:text-fg"
                >
                  <Github className="size-[1.125rem]" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-md p-2.5 text-fg-faint transition-colors duration-[180ms] hover:text-fg"
                >
                  <Linkedin className="size-[1.125rem]" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="rounded-md p-2.5 text-fg-faint transition-colors duration-[180ms] hover:text-fg"
                >
                  <Mail className="size-[1.125rem]" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="order-first w-36 shrink-0 lg:order-none lg:w-52">
            <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-card">
              <img
                src={profile.photo}
                alt={profile.name}
                width={208}
                height={260}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.dl
          variants={staggerGroup(0.05, 0.12)}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:mt-24 lg:grid-cols-4"
        >
          {headlineStats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="bg-surface p-6">
              <dt className="label-mono mb-4">{stat.label}</dt>
              <dd>
                <div className="flex items-baseline gap-1.5">
                  <span className="numeral text-[1.75rem] leading-none text-fg">{stat.value}</span>
                  <span className="font-mono text-[0.6875rem] text-fg-faint">{stat.unit}</span>
                </div>
                <p className="mt-3 text-[0.75rem] leading-snug text-fg-dim">{stat.detail}</p>
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
