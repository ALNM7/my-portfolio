import React from 'react';
import { motion } from 'motion/react';
import { Github } from 'lucide-react';
import { Button } from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  metric?: string;
  index: number;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
  metric,
  index
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative glass rounded-3xl overflow-hidden hover:glass-hover transition-all duration-500"
    >
      {/* Horizontal layout */}
      <div className="flex flex-col md:flex-row">
        {/* Image section */}
        <div className="relative w-full md:w-80 h-56 md:h-auto flex-shrink-0 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[hsl(var(--background))]/60" />
          
          {/* Metric badge with glass effect */}
          {metric && (
            <motion.div 
              className="absolute top-4 left-4 glass px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(280_83%_68%)] bg-clip-text text-transparent">
                {metric}
              </span>
            </motion.div>
          )}
        </div>

        {/* Content section with more space */}
        <div className="flex-1 p-6 md:p-8 flex flex-col">
          <div className="flex-1">
            <h3 className="mb-3 text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--accent))] transition-colors">
              {title}
            </h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-6 leading-relaxed">
              {description}
            </p>

            {/* Tags with glass effect */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full text-xs text-[hsl(var(--foreground))] border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub button only */}
          <div className="flex">
            {githubUrl && (
              <Button
                variant="secondary"
                size="sm"
                icon={Github}
                onClick={() => window.open(githubUrl, '_blank')}
              >
                View on GitHub
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}