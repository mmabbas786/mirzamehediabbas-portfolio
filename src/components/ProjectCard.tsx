
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Technology {
  name: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  projectLink?: string;
  isReversed?: boolean;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  projectLink,
  isReversed = false,
  delay = 0,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative grid md:grid-cols-2 gap-6 lg:gap-10 animate-fade-in-up`} 
      style={{ 
        animationDelay: `${delay}s`,
        opacity: 0 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`glass-card rounded-2xl overflow-hidden ${isReversed ? 'md:order-2' : ''}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className={`w-full h-full object-cover transform transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`} 
          />
          
          {projectLink && (
            <a 
              href={projectLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`absolute inset-0 bg-mirzaPurple-900/70 flex items-center justify-center opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}
            >
              <span className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-mirzaPurple-900 font-medium">
                View Project <ExternalLink size={16} />
              </span>
            </a>
          )}
        </div>
      </div>
      
      <div className={`flex flex-col justify-center ${isReversed ? 'md:order-1 md:pr-6' : 'md:pl-6'}`}>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-white/70">{description}</p>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 rounded-full text-xs font-medium" 
                style={{ backgroundColor: `${tech.color}25`, color: tech.color }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
