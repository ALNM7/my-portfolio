import { ArrowUpRight, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { Section, Reveal } from './primitives/Section';
import { profile } from '../data/profile';

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: profile.githubHandle,
    href: profile.github,
    external: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: profile.linkedinHandle,
    href: profile.linkedin,
    external: true,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      index="05 / Contact"
      title="Get in touch"
      lede={profile.availability}
    >
      <Reveal>
        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
          {channels.map(({ icon: Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex flex-col bg-surface p-6 transition-colors hover:bg-surface-2"
            >
              <div className="mb-4 flex items-center justify-between">
                <Icon className="size-4 text-fg-faint transition-colors group-hover:text-accent" />
                <ArrowUpRight className="size-3.5 text-fg-faint opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </div>
              <div className="label-mono mb-1.5">{label}</div>
              <div className="truncate font-mono text-[0.8125rem] text-fg" title={value}>
                {value}
              </div>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent('Hello Alfredo')}`}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-[0.9375rem] font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" />
            Write to me
          </a>
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-5 py-3 text-[0.9375rem] font-medium text-fg transition-colors hover:border-line-strong"
          >
            <FileText className="size-4" />
            Download CV
          </a>
        </div>
        <p className="mt-4 max-w-xl text-[0.8125rem] leading-relaxed text-fg-faint">
          Email is the fastest way to reach me. I read it daily and usually reply within a day.
        </p>
      </Reveal>
    </Section>
  );
}
