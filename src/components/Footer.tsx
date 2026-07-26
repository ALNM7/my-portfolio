import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-[0.75rem] text-fg-faint">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="max-w-md text-[0.75rem] leading-relaxed text-fg-faint">
          Built with React, Vite and Tailwind. Every metric on this site is traceable to the linked
          repository or its report.
        </p>
        <a
          href="#top"
          className="label-mono transition-colors hover:text-fg"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
