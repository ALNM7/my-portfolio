import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/Button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20"
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
          <h2 className="text-[hsl(var(--foreground))] mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(280_83%_68%)] mx-auto rounded-full" />
          <p className="text-[hsl(var(--muted-foreground))] mt-6 max-w-2xl mx-auto text-lg">
            I'm always open to discussing new projects, opportunities, or collaborations. 
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-[hsl(var(--foreground))] mb-6">Contact Information</h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:alfredonava794@gmail.com"
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-4 p-5 rounded-2xl glass hover:glass-hover transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(var(--accent))]/20 to-[hsl(280_83%_68%)]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-[hsl(var(--accent))]" />
                  </div>
                  <div>
                    <div className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Email</div>
                    <div className="text-[hsl(var(--foreground))] font-medium">alfredonava794@gmail.com</div>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+522214212033"
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-4 p-5 rounded-2xl glass hover:glass-hover transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(var(--accent))]/20 to-[hsl(280_83%_68%)]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-[hsl(var(--accent))]" />
                  </div>
                  <div>
                    <div className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Phone</div>
                    <div className="text-[hsl(var(--foreground))] font-medium">+52 221 421 2033</div>
                  </div>
                </motion.a>

                <div className="flex items-center gap-4 p-5 rounded-2xl glass">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(var(--accent))]/20 to-[hsl(280_83%_68%)]/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[hsl(var(--accent))]" />
                  </div>
                  <div>
                    <div className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Location</div>
                    <div className="text-[hsl(var(--foreground))] font-medium">Puebla, Mexico</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-[hsl(var(--foreground))] mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {[
                  { Icon: Github, href: 'https://github.com/ALNM7', label: 'GitHub' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/alfredo-navarrete-montes-2997962b7/', label: 'LinkedIn' },
                  { Icon: Mail, href: 'mailto:alfredonava794@gmail.com', label: 'Email' }
                ].map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="flex flex-col items-center gap-3 p-5 rounded-2xl glass hover:glass-hover transition-all group flex-1"
                    whileHover={{ y: -6, scale: 1.02 }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[hsl(var(--accent))]/20 to-[hsl(280_83%_68%)]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[hsl(var(--accent))]" />
                    </div>
                    <div className="text-sm font-medium text-[hsl(var(--foreground))]">{label}</div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability callout */}
            <div className="p-6 rounded-2xl glass">
              <h4 className="font-semibold text-[hsl(var(--foreground))] mb-3">Currently Available</h4>
              <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                Open to full-time opportunities, internships, and consulting projects in HPC, 
                distributed systems, and data engineering.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-32 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[hsl(var(--muted-foreground))]">
            <div>
              © 2026 Alfredo Nava. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-[hsl(var(--accent))] transition-colors">
                About
              </a>
              <a href="#projects" className="hover:text-[hsl(var(--accent))] transition-colors">
                Projects
              </a>
              <a href="#experience" className="hover:text-[hsl(var(--accent))] transition-colors">
                Experience
              </a>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}