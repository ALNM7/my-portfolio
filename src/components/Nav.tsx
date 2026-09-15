import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import { roles } from '../data/experience';
import { useSectionSpy } from '../hooks/useSectionSpy';
import { useTheme } from '../hooks/useTheme';
import { cn } from '../lib/cn';

const links = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const;

const ids = links.map((link) => link.id);

/** The masthead byline: current title and the team it sits in. */
const current = roles.find((role) => role.current) ?? roles[0];
const byline = `${current.title} · ${current.org.split(',')[0]}`;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useSectionSpy(ids);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40',
        // Opaque, never translucent: the rules underneath must not show through.
        scrolled || menuOpen ? 'border-b border-line bg-bg-raised' : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-[84rem] items-center gap-8 px-5 py-[18px] sm:px-8 lg:px-12">
        <a href="#top" className="flex flex-col leading-[1.2]">
          <span className="text-[1.0625rem] tracking-[-0.005em] text-fg">{profile.shortName}</span>
          <span className="label-mono hidden sm:block">{byline}</span>
        </a>

        <div className="ml-auto flex items-center gap-7">
          <ul className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={cn(
                    'mono-ui pb-[3px] transition-colors duration-[160ms]',
                    active === link.id
                      ? 'border-b border-accent text-fg'
                      : 'border-b border-transparent text-fg-dim hover:text-fg',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="label-mono flex items-center gap-1.5 transition-colors duration-[120ms] hover:text-fg"
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-block size-2.5 rounded-full border border-current',
                theme === 'dark'
                  ? 'bg-[linear-gradient(90deg,currentColor_50%,transparent_50%)]'
                  : 'bg-[linear-gradient(90deg,transparent_50%,currentColor_50%)]',
              )}
            />
            <span className="hidden sm:inline">{theme === 'dark' ? 'Dark' : 'Light'}</span>
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="label-mono transition-colors duration-[160ms] hover:text-fg md:hidden"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-line bg-bg-raised md:hidden">
          <ul className="mx-auto max-w-[84rem] px-5 sm:px-8">
            {links.map((link) => (
              <li key={link.id} className="border-b border-line last:border-0">
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-3.5 text-[1.0625rem] text-fg-dim"
                >
                  {link.label}
                  <span className="label-mono">
                    {String(ids.indexOf(link.id) + 1).padStart(2, '0')}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
