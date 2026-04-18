import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface CardProps {
  id: string;
  name: string;
  description: string;
  tech: string[];
  github: string;
}

const ProjectCard: React.FC<CardProps> = ({ name, description, tech, github }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass rounded-2xl p-6 flex flex-col h-full card-gradient group"
    >
      <div className="flex-1">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex gap-3">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass rounded-full hover:bg-white/10 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        <p className="text-white/60 text-sm mb-6 line-clamp-3">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
        {tech.map((t) => (
          <span
            key={t}
            className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-white/40"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
