import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface TimelineItemProps {
  role: string;
  organization: string;
  location: string;
  period: string;
  achievements: string[];
  index: number;
}

function TimelineItem({ role, organization, location, period, achievements, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-10 pb-16 last:pb-0"
    >
      {/* Timeline line with glow */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[hsl(var(--accent))]/50 via-[hsl(var(--accent))]/20 to-transparent">
        {/* Dot with glow effect */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
          className="absolute top-0 left-1/2 -translate-x-1/2"
        >
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(280_83%_68%)] shadow-lg shadow-[hsl(var(--accent))]/50" />
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-[hsl(var(--accent))] blur-md opacity-50" />
        </motion.div>
      </div>

      {/* Content with glass effect */}
      <motion.div 
        className="glass rounded-3xl p-6 lg:p-8 hover:glass-hover transition-all duration-300"
        whileHover={{ scale: 1.01, y: -4 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div>
            <h3 className="text-[hsl(var(--foreground))] mb-2">{role}</h3>
            <div className="flex items-center gap-2 text-[hsl(var(--accent))] mb-1">
              <Briefcase className="w-4 h-4" />
              <span className="font-medium">{organization}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-[hsl(var(--muted-foreground))] mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{period}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>

        <ul className="space-y-3">
          {achievements.map((achievement, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + idx * 0.1 }}
              className="flex items-start gap-3 text-[hsl(var(--muted-foreground))]"
            >
              <span className="text-[hsl(var(--accent))] mt-1.5 flex-shrink-0 text-lg">•</span>
              <span className="text-sm leading-relaxed">{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

const experiences = [
  {
    role: 'Research Assistant ',
    organization: 'UNM Anderson School of Management',
    location: 'Albuquerque, NM, USA',
    period: 'August 2025 - December 2025',
    achievements: [
      'Built and maintained a distributed web scraping pipeline to collect structured Kickstarter data at scale (multi-worker execution, proxy rotation, rate limiting)',
      'Designed preprocessing workflows to clean and merge raw datasets into ML-ready tables for training',
      'Implemented data quality checks to reduce manual intervention and improve dataset quality',
      'Collaborated with the research team to define data requirements and deliver reproducible outputs for analysis and experimentation'
    ]
  },
  {
    role: 'HPC Coursework & Benchmarking Projects (CARC / Easley)',
    organization: 'Center for Advanced Research Computing (CARC) — University of New Mexico',
    location: 'Albuquerque, NM, USA',
    period: 'August 2025 - December 2025',
    achievements: [
      'Ran and tuned HPL on multiple clusters using Slurm + MPI (matrix size N, block size NB, and P×Q process grid) to maximize performance and analyze scaling behavior',
      'Executed HPCG on CPU and NVIDIA L40S GPUs using containers (Apptainer/Singularity) and MPI, comparing GPU vs multi-node CPU performance',
      'Performed strong and weak scaling analysis (Amdahl’s and Gustafson’s Law) and documented results in technical reports',
      'Worked in Linux HPC environments with job scripts, module systems, and batch scheduling workflows'
    ]
  },
  {
    role: 'Medical Equipment Maintenance Technician (Part-time)',
    organization: 'TAGLMON',
    location: 'Puebla, Mexico (On-site)',
    period: 'Jan 2025 - Present',
    achievements: [
      'Verified, configured, and installed patient monitoring software and device settings to ensure correct operation in clinical environments',
      'Performed maintenance and parameter calibration for BiPAP devices (ResMed, Philips), ensuring optimal performance and safe operation',
      'Followed COFEPRIS-aligned procedures and documentation practices to support compliance and quality control',
      'Diagnosed device/software issues, validated functionality after adjustments, and communicated results clearly to users'
    ]
  }
];

export function Timeline() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(138, 43, 226, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-[hsl(var(--foreground))] mb-4">Experience & Research</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(280_83%_68%)] mx-auto rounded-full" />
          <p className="text-[hsl(var(--muted-foreground))] mt-6 max-w-2xl mx-auto text-lg">
            Professional journey spanning high-performance computing, distributed systems, 
            and full-stack development.
          </p>
        </motion.div>

        <div>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={`${exp.organization}-${exp.period}`}
              {...exp}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}