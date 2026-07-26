import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { profile } from '../data/profile';
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
        'fixed inset-x-0 top-0 z-40 transition-colors duration-300',
        scrolled || menuOpen
          ? 'border-b border-line bg-bg'
          : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="group flex items-baseline gap-2.5 text-[0.9375rem] font-semibold tracking-tight text-fg"
        >
          {profile.shortName}
          <span className="label-mono hidden sm:inline">{profile.role}</span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={cn(
                    'rounded-md px-3 py-1.5 text-[0.8125rem] transition-colors',
                    active === link.id ? 'text-fg' : 'text-fg-dim hover:text-fg',
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'mx-auto mt-1 block h-px transition-all duration-300',
                      active === link.id ? 'w-full bg-accent' : 'w-0 bg-transparent',
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="ml-1 rounded-md border border-line p-2 text-fg-dim transition-colors hover:border-line-strong hover:text-fg"
          >
            {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="rounded-md border border-line p-2 text-fg-dim transition-colors hover:text-fg md:hidden"
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-line bg-bg md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-2 sm:px-8">
            {links.map((link) => (
              <li key={link.id} className="border-b border-line last:border-0">
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-[0.9375rem] text-fg-dim"
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
