import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Experience } from './components/Experience';
import { Stack } from './components/Stack';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudy } from './components/CaseStudy';
import { projects } from './data/projects';
import { useCaseStudyRoute } from './hooks/useCaseStudyRoute';

export default function App() {
  const { openId, open, close } = useCaseStudyRoute();
  const openProject = projects.find((project) => project.id === openId) ?? null;

  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>

      <Nav />

      <main>
        <Hero />
        <Work onOpen={open} />
        <Experience />
        <Stack />
        <About />
        <Contact />
      </main>

      <Footer />

      <CaseStudy project={openProject} onClose={close} />
    </>
  );
}
