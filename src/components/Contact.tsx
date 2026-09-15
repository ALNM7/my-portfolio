import { Section, Reveal } from './primitives/Section';
import { profile } from '../data/profile';

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, external: false },
  { label: 'GitHub', value: profile.githubHandle, href: profile.github, external: true },
  { label: 'LinkedIn', value: profile.linkedinHandle, href: profile.linkedin, external: true },
];

export function Contact() {
  return (
    <Section id="contact" index="05" title="Get in touch" lede={profile.availability}>
      <Reveal>
        <ul className="border-t border-line">
          {channels.map(({ label, value, href, external }) => (
            <li key={label} className="border-b border-line">
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex flex-wrap items-baseline gap-x-6 gap-y-1 py-5 transition-transform duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] sm:hover:translate-x-1.5"
              >
                <span className="label-mono w-24 shrink-0 transition-colors duration-[200ms] group-hover:text-accent">
                  {label}
                </span>
                <span className="mono-ui min-w-0 break-all text-fg">{value}</span>
                <span className="label-mono ml-auto hidden text-accent sm:block">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.06} className="mt-10">
        <div className="flex flex-wrap items-center gap-x-[26px] gap-y-4">
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent('Hello Alfredo')}`}
            className="btn-solid inline-block"
          >
            Write to me →
          </a>
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-ui link-rule text-fg"
          >
            Download CV
          </a>
        </div>
        <p className="mt-6 max-w-[54ch] text-[0.9375rem] leading-[1.6] text-fg-faint">
          Email is the fastest way to reach me.
        </p>
      </Reveal>
    </Section>
  );
}
