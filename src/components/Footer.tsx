import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-line py-9">
      <div className="mx-auto flex max-w-[84rem] flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p className="label-mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="label-mono transition-colors duration-[160ms] hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
