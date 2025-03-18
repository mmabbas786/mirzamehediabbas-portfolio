
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Technology {
  name: string;
  color: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  appScreenshots?: string[];
  technologies: Technology[];
  projectLink?: string;
  isReversed?: boolean;
  delay?: number;
  appType?: 'flutter' | 'react-native' | 'ios' | 'android';
  category?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  appScreenshots = [],
  technologies,
  projectLink,
  isReversed = false,
  delay = 0,
  appType = 'flutter',
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div 
      className="relative rounded-3xl overflow-hidden bg-mirzaPurple-950/50 p-8 md:p-12 backdrop-blur-md border border-white/5"
      style={{ 
        animationDelay: `${delay}s`,
        opacity: 1
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`grid md:grid-cols-2 gap-10 items-center`}>
        <div className={`flex flex-col justify-center ${isReversed && !isMobile ? 'md:order-2' : ''}`}>
          <div className="space-y-4">
            <h3 className={`text-3xl md:text-4xl font-bold ${title === 'FitFlow' ? 'text-green-400' : title === 'SocialSync' ? 'text-purple-400' : 'text-blue-400'}`}>{title}</h3>
            <p className="text-white/70 text-lg">{description}</p>
            
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

            {projectLink && (
              <a 
                href={projectLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all duration-300"
              >
                View on Play Store <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
        
        <div className={`${isReversed && !isMobile ? 'md:order-1' : ''}`}>
          {appScreenshots.length > 0 ? (
            <div className="relative w-full max-w-xs mx-auto">
              <div className="w-full aspect-[9/19] rounded-3xl overflow-hidden border-8 border-black bg-white shadow-xl">
                <Carousel className="w-full">
                  <CarouselContent>
                    {appScreenshots.map((screenshot, index) => (
                      <CarouselItem key={index}>
                        <div className="w-full h-full">
                          <img 
                            src={screenshot} 
                            alt={`${title} screenshot ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-0 -translate-x-1/2" />
                  <CarouselNext className="absolute right-0 translate-x-1/2" />
                </Carousel>
              </div>
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute inset-0 rounded-3xl"></div>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-xs mx-auto">
              <div className="w-full aspect-[9/19] rounded-3xl overflow-hidden border-8 border-black bg-white shadow-xl">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
