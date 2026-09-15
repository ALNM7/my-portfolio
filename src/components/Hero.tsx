import { motion } from 'motion/react';
import { headlineStats, profile } from '../data/profile';
import { enterUp, staggerGroup } from '../lib/motion';

const social = [
  { code: 'GH', label: 'GitHub', href: profile.github },
  { code: 'LI', label: 'LinkedIn', href: profile.linkedin },
  { code: 'EM', label: 'Email', href: `mailto:${profile.email}` },
];

export function Hero() {
  return (
    <section id="top" className="pt-24 sm:pt-28">
      <motion.div
        variants={staggerGroup(0.06)}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-[84rem] px-5 sm:px-8 lg:px-12"
      >
        {/* Masthead pair: heavy rule, data rail, hairline. */}
        <motion.div variants={enterUp}>
          <div className="rule-thick" />
          <div className="label-mono flex flex-wrap items-center gap-x-6 gap-y-1 py-2.5">
            <span className="text-accent">Not available for new roles</span>
            <span>{profile.location} · UTC−6</span>
            <span className="sm:ml-auto">Updated {__BUILD_STAMP__}</span>
          </div>
          <div className="rule-thin" />
        </motion.div>

        <div className="grid gap-10 pt-10 lg:grid-cols-[1fr_20rem] lg:gap-[3.75rem] lg:pt-12">
          <div>
            <motion.h1 variants={enterUp} className="text-fg">
              {profile.name}
            </motion.h1>

            <motion.p
              variants={enterUp}
              className="mt-7 font-mono text-[0.875rem] leading-[1.5] text-accent"
            >
              {profile.focus}
            </motion.p>

            <motion.p
              variants={enterUp}
              className="mt-[22px] max-w-[54ch] text-[1.0625rem] leading-[1.7] text-fg-dim"
            >
              {profile.intro}
            </motion.p>

            <motion.div
              variants={enterUp}
              className="mt-9 flex flex-wrap items-center gap-x-[26px] gap-y-4"
            >
              <a href="#work" className="btn-solid inline-block">
                Selected work →
              </a>
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="mono-ui link-rule text-fg"
              >
                Download CV
              </a>
              <div className="flex items-center gap-4 sm:ml-1.5">
                {social.map(({ code, label, href }) => (
                  <a
                    key={code}
                    href={href}
                    aria-label={label}
                    {...(href.startsWith('mailto:')
                      ? {}
                      : { target: '_blank', rel: 'noopener noreferrer' })}
                    className="label-mono transition-colors duration-[160ms] hover:text-accent-bright"
                  >
                    {code}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={enterUp} className="w-44 lg:w-80">
            <div className="halftone overflow-hidden rounded-ink">
              <img
                src={profile.photo}
                alt={profile.name}
                width={320}
                height={404}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* The four figures close the front page like an index. */}
        <motion.dl
          variants={staggerGroup(0.06, 0.1)}
          className="mt-14 grid grid-cols-2 gap-x-10 gap-y-8 border-t border-line pt-7 lg:mt-[4.25rem] lg:grid-cols-4"
        >
          {headlineStats.map((stat) => (
            <motion.div key={stat.label} variants={enterUp} className="flex flex-col gap-[7px]">
              <dd className="flex items-baseline gap-[7px]">
                <span className="numeral numeral-lg text-fg">{stat.value}</span>
                <span className="font-mono text-[0.8125rem] text-fg-dim">{stat.unit}</span>
              </dd>
              <dt className="label-mono text-fg-dim">{stat.label}</dt>
              <p className="text-[0.875rem] leading-[1.5] text-fg-faint">{stat.detail}</p>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
