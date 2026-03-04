const profileImage = "/profile.svg";
import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Code2, Cpu } from 'lucide-react';
export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(82, 113, 255, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-[hsl(var(--foreground))] mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(280_83%_68%)] mx-auto rounded-full" />
        </motion.div>

        {/* Image, Paragraph and Chips in 2 columns */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-16">
          {/* Left: Image with glass effect */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-3xl opacity-30"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(280 83% 68%))',
                  filter: 'blur(40px)',
                  transform: 'scale(0.95)',
                }}
              />

              {/* Image container with glass border */}
              <div className="relative rounded-3xl overflow-hidden glass">
                <img
                  src={profileImage}
                  alt="Alfredo Nava"
                  className="w-full h-auto aspect-square object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Content - Paragraphs and Chips */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-5 text-[hsl(var(--muted-foreground))]">
              <p className="text-lg leading-relaxed">
                I'm an early-career software engineer focused on <span className="text-[hsl(var(--foreground))] font-medium">distributed systems</span>,{' '}
                <span className="text-[hsl(var(--foreground))] font-medium">data pipelines</span>, and{' '}
                <span className="text-[hsl(var(--foreground))] font-medium">performance</span>.
                I've built large-scale web scraping workflows and worked hands-on with HPC clusters (Slurm + MPI) to benchmark and analyze multi-node performance.
              </p>

              <p className="text-lg leading-relaxed mx-[0px] mt-[50px] mb-[20px]">
                I also build ML project from preprocessing to evaluation, including Spanish NLP emotion classification with transformers.
                I enjoy shipping clean products with Angular/Django, and I care about reliability, reproducibility, and measurable results.
              </p>

              {/* Focus chips */}
              <div className="flex flex-wrap gap-2 px-[0px] pt-[50px] pb-[0px]">
                {[
                  'Distributed Systems',
                  'HPC (Slurm, MPI)',
                  'Benchmarking (HPL/HPCG)',
                  'Python + SQL',
                  'NLP Transformers',
                  'Full-Stack (Angular/Django)',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--background))]/40 text-[hsl(var(--muted-foreground))]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Glass cards below - Full width grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-4 lg:gap-6"
        >
          <motion.div
            className="flex items-start gap-4 p-5 rounded-2xl glass hover:glass-hover transition-all group"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--accent))]/20 to-[hsl(280_83%_68%)]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6 text-[hsl(var(--accent))]" />
            </div>
            <div>
              <h4 className="font-semibold text-[hsl(var(--foreground))] mb-1">Education</h4>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Engineering in Information Technologies : BUAP
                <br />
                Expected Graduation: Dec 2026
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start gap-4 p-5 rounded-2xl glass hover:glass-hover transition-all group"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--accent))]/20 to-[hsl(280_83%_68%)]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Briefcase className="w-6 h-6 text-[hsl(var(--accent))]" />
            </div>
            <div>
              <h4 className="font-semibold text-[hsl(var(--foreground))] mb-1">Experience</h4>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Research Assistant : UNM Anderson School of Management
                <br />
                Built distributed scraping + data preprocessing pipelines for ML
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start gap-4 p-5 rounded-2xl glass hover:glass-hover transition-all group"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--accent))]/20 to-[hsl(280_83%_68%)]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6 text-[hsl(var(--accent))]" />
            </div>
            <div>
              <h4 className="font-semibold text-[hsl(var(--foreground))] mb-1">HPC Focus</h4>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                CARC (UNM) : Slurm + MPI benchmarking
                <br />
                HPL / HPCG optimization, strong & weak scaling, GPU vs CPU analysis
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start gap-4 p-5 rounded-2xl glass hover:glass-hover transition-all group"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--accent))]/20 to-[hsl(280_83%_68%)]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6 text-[hsl(var(--accent))]" />
            </div>
            <div>
              <h4 className="font-semibold text-[hsl(var(--foreground))] mb-1">Currently Building</h4>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">
                Data pipelines & distributed systems, performance experiments, and ML/NLP projects :
                plus production-style Angular/Django apps.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}