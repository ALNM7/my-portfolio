import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
  index: number;
}

export function SkillCard({ title, description, icon: Icon, skills, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="glass rounded-3xl p-8 hover:glass-hover transition-all duration-300 group"
    >
      {/* Icon with gradient background */}
      <motion.div 
        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(var(--accent))]/20 to-[hsl(280_83%_68%)]/20 flex items-center justify-center mb-6"
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="w-7 h-7 text-[hsl(var(--accent))]" />
      </motion.div>

      {/* Title & Description */}
      <h3 className="mb-3 text-[hsl(var(--foreground))]">{title}</h3>
      <p className="text-sm text-[hsl(var(--muted-foreground))] mb-6 leading-relaxed">
        {description}
      </p>

      {/* Skills tags with glass effect */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + idx * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-xs text-[hsl(var(--foreground))] border border-white/10 hover:border-white/20 transition-all"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}