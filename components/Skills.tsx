import React from 'react';
import { motion } from 'motion/react';
import { Server, Globe, Database, Wrench, Brain } from 'lucide-react';
import { SkillCard } from './ui/SkillCard';

const skillGroups = [
  {
    title: 'Systems & HPC',
    description: 'High-performance computing and cluster management expertise',
    icon: Server,
    skills: ['Slurm', 'MPI', 'CUDA/GPU', 'Linux', 'HPL/HPCG', 'OpenMP']
  },
  {
    title: 'Web Development',
    description: 'Modern web application development',
    icon: Globe,
    skills: ['React', 'TypeScript', 'Angular', 'Django', 'REST APIs', 'MySQL']
  },
  {
    title: 'Data Engineering',
    description: 'Large-scale data processing and distributed systems',
    icon: Database,
    skills: ['Python', 'Selenium', 'Web Scraping', 'Data Pipelines', 'Analytics', 'PostgreSQL']
  },
  {
    title: 'AI & Applied Machine Learning',
    description: 'Machine learning systems applied to real-world datasets',
    icon: Brain,
    skills: ['Transformers', 'NLP', 'Embeddings', 'Model Evaluation', 'Dataset Processing', 'Feature Engineering']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(138, 43, 226, 0.1) 0%, transparent 70%)',
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
          <h2 className="text-[hsl(var(--foreground))] mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(280_83%_68%)] mx-auto rounded-full" />
          <p className="text-[hsl(var(--muted-foreground))] mt-6 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building scalable systems, from distributed computing 
            to modern web applications and data engineering solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillGroups.map((group, index) => (
            <SkillCard
              key={group.title}
              title={group.title}
              description={group.description}
              icon={group.icon}
              skills={group.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}