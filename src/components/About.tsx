import { Section, Reveal } from './primitives/Section';
import { profile } from '../data/profile';

export function About() {
  return (
    <Section id="about" index="04 / About" title="How I got here">
      <div className="grid gap-12 lg:grid-cols-[1fr_18rem] lg:gap-16">
        <Reveal className="max-w-2xl">
          <div className="space-y-5">
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-[1.0625rem] leading-[1.75] text-fg-dim">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="space-y-6 lg:border-l lg:border-line lg:pl-8">
            <div>
              <dt className="label-mono mb-2">Based in</dt>
              <dd className="text-[0.9375rem] text-fg">{profile.location}</dd>
            </div>

            <div>
              <dt className="label-mono mb-2">Languages</dt>
              <dd className="space-y-2">
                {profile.languages.map((language) => (
                  <div key={language.name}>
                    <div className="text-[0.9375rem] text-fg">{language.name}</div>
                    <div className="text-[0.75rem] leading-snug text-fg-faint">{language.level}</div>
                  </div>
                ))}
              </dd>
            </div>

            <div>
              <dt className="label-mono mb-2">Publication</dt>
              <dd className="text-[0.875rem] leading-relaxed text-fg-dim">
                Co-author on the BUAP team paper for MentalRiskES 2026, accepted at CEUR-WS and indexed
                in Scopus and DBLP.
              </dd>
            </div>

            <div>
              <dt className="label-mono mb-2">Status</dt>
              <dd className="text-[0.875rem] leading-relaxed text-fg-dim">{profile.availability}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
