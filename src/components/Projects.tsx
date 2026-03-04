import React from 'react';
import { motion } from 'motion/react';
import { ProjectCard } from './ui/ProjectCard';

const projects = [
  {
    title: 'HPCG GPU vs CPU Scaling',
    description: 'Performance analysis of the High Performance Conjugate Gradient benchmark on an HPC cluster, comparing GPU acceleration against multi-node CPU execution using MPI. Achieved 460 GFLOP/s using NVIDIA L40S GPUs and demonstrated strong and weak scaling behavior.',
    image: 'https://images.unsplash.com/photo-1761132046162-01e1b6d29dd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHUFUlMjBjb21wdXRpbmclMjBoYXJkd2FyZXxlbnwxfHx8fDE3NzA4NjUzODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['MPI', 'HPCG', 'Slurm', 'Apptainer', 'GPU Acceleration'],
    githubUrl: '#',
    metric: '460 GFLOP/s'
  },
  {
    title: 'HPL Cluster Benchmark Analysis',
    description: 'Distributed benchmarking project analyzing cluster performance using the HPL benchmark. Tuned matrix size (N), block size (NB), and process grid (P×Q) to maximize performance and studied strong/weak scaling behavior.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVycyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwODY1MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['MPI', 'HPL', 'Slurm', 'Python', 'Performance Analysis'],
    githubUrl: '#',
    metric: 'Multi-node'
  },
  {
    title: 'Spanish Emotion Classification with Transformers',
    description: 'NLP system for emotion classification in Spanish text using RoBERTuito embeddings and transformer models. Implemented preprocessing with spaCy and fine-tuned embeddings for improved representation learning, achieving 95% accuracy and F1 score.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG5ldXJhbCUyMG5ldHdvcmslMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDg2NTM4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'Transformers', 'RoBERTuito', 'spaCy', 'NLP'],
    githubUrl: '#',
    metric: '95% accuracy'
  },
  {
    title: 'Food Recognition & Nutrition Analysis App',
    description: 'Full-stack application that recognizes food from a photo and returns nutritional information (calories, macros, ingredients) by integrating the LogMeal API. Includes a backend service for request handling and a responsive front-end/mobile UI for real-time results.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwbnV0cml0aW9uJTIwaGVhbHRoeXxlbnwxfHx8fDE3NzA4NjUzODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['LogMeal API', 'REST API', 'Python', 'Computer Vision', 'Mobile App'],
    githubUrl: '#',
    metric: 'Real-time'
  },
  {
    title: 'Kickstarter Data Pipeline',
    description: 'Large-scale web scraping and data engineering pipeline designed to collect and analyze Kickstarter projects for machine learning applications. High-performance multi-worker system with proxy rotation, rate limiting, and fault tolerance processing 150k+ campaign records.',
    image: 'https://images.unsplash.com/photo-1664526936810-ec0856d31b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXN0cmlidXRlZCUyMGNvbXB1dGluZyUyMG5ldHdvcmt8ZW58MXx8fHwxNzcwODY1MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'Selenium', 'Data Engineering', 'Web Scraping', 'Redis'],
    githubUrl: '#',
    metric: '150k+ records'
  },
  {
    title: 'Liora Luxury E-commerce',
    description: 'Full-stack luxury e-commerce platform featuring a modern UI, product catalog, and responsive shopping experience. Built with Angular front-end, Django REST backend, MySQL database, and deployed on Cloudflare/Vercel with complete cart and checkout functionality.',
    image: 'https://images.unsplash.com/photo-1740161695720-abde5c9d62b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc3MDg2NTM4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Angular', 'Django', 'MySQL', 'REST API', 'Cloudflare'],
    githubUrl: '#',
    metric: 'Production'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden gradient-dark-bg">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/3 left-1/2 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(82, 113, 255, 0.15) 0%, transparent 70%)',
            filter: 'blur(100px)',
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
          <h2 className="text-[hsl(var(--foreground))] mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(280_83%_68%)] mx-auto rounded-full" />
          <p className="text-[hsl(var(--muted-foreground))] mt-6 max-w-2xl mx-auto text-lg">
            A showcase of high-performance computing, distributed systems, and full-stack 
            engineering projects demonstrating scalability and technical depth.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>

        {/* View more section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-[hsl(var(--muted-foreground))] mb-4 text-lg">
            Interested in seeing more detailed case studies?
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-full glass hover:glass-hover text-[hsl(var(--accent))] font-medium transition-all"
          >
            Get in touch to discuss projects →
          </a>
        </motion.div>
      </div>
    </section>
  );
}