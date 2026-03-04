const profileImage = "/hero.jpg";
import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from './ui/Button';
// Optional: add your resume link
const RESUME_URL = "/resume.pdf";

export function Hero() {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenResume = () => {
    window.open(RESUME_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 gradient-dark-bg">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(82, 113, 255, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: '15%',
            left: '-10%',
          }}
          animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(138, 43, 226, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
            bottom: '10%',
            right: '-5%',
          }}
          animate={{ y: [0, 40, 0], x: [0, -20, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 lg:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
             

              <h1 className="text-[hsl(var(--foreground))] leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-[hsl(var(--accent))] via-[hsl(260_83%_68%)] to-[hsl(280_83%_68%)] bg-clip-text text-transparent">
                  Alfredo Navarrete Montes
                </span>
              </h1>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-2xl lg:text-3xl text-[hsl(var(--muted-foreground))] font-normal"
            >
              Software Engineer | Distributed Systems | HPC | ML/NLP
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed max-w-xl opacity-80"
            >
              I build reliable data pipelines and performance focused systems, from distributed web scraping at UNM to
              HPC benchmarking with Slurm/MPI (HPL/HPCG) and practical ML projects like Spanish emotion classification with transformers.
            </motion.p>

            {/* Keyword chips */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              className="flex flex-wrap gap-2"
            >
              {[
                "Python",
                "C++",
                "SQL",
                "Distributed Systems",
                "Slurm + MPI",
                "HPL/HPCG",
                "Transformers (NLP)",
                "Angular + Django",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--background))]/35 text-[hsl(var(--muted-foreground))]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg" onClick={handleScrollToProjects}>
                View Projects
              </Button>

              <Button variant="secondary" size="lg" onClick={handleScrollToContact}>
                Contact Me
              </Button>

              
            </motion.div>
          </motion.div>

          {/* Right: Photo with glass effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow background */}
              <motion.div
                className="absolute inset-0 rounded-[2rem]"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(280 83% 68%))',
                  filter: 'blur(60px)',
                  opacity: 0.25,
                  transform: 'scale(1.05)',
                }}
                animate={{ scale: [1.05, 1.1, 1.05], opacity: [0.25, 0.3, 0.25] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Photo container with glass border */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-[2rem] overflow-hidden glass">
                <img src={profileImage} alt="Alfredo Nava" className="w-full h-full object-cover" />
              </div>

              {/* Floating glass element */}
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-3xl glass"
                style={{ background: 'rgba(82, 113, 255, 0.1)' }}
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Small accent dot */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(280_83%_68%)]"
                animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[hsl(var(--muted-foreground))]/60"
          >
            <span className="text-sm tracking-wider uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}