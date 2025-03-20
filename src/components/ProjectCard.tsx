import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface Technology {
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
  appType?: "flutter" | "react-native" | "ios" | "android";
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
  appType = "flutter",
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  // Debug information
  useEffect(() => {
    console.log(`Project ${title} - Image paths:`, appScreenshots);
  }, [title, appScreenshots]);

  // Convert file paths to ensure proper extension
  const processImagePath = (path: string) => {
    // If the path already ends with .png, use it as is
    if (path.toLowerCase().endsWith(".png")) {
      return path;
    }

    // If the path has a different extension, keep it (might be .jpg, .jpeg, etc.)
    if (/\.(jpg|jpeg|gif|webp|svg)$/i.test(path)) {
      return path;
    }

    // Add .png extension to paths without extensions
    if (!path.includes(".")) {
      return `${path}.png`;
    }

    // Default case: return the original path
    return path;
  };

  return (
    <div
      className="relative rounded-3xl overflow-hidden bg-mirzaPurple-950/50 p-8 md:p-12 backdrop-blur-md border border-white/5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-mirzaPurple-900/20 hover:border-mirzaPurple-500/30"
      style={{
        animationDelay: `${delay}s`,
        opacity: 1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`grid md:grid-cols-2 gap-10 items-center`}>
        <div
          className={`flex flex-col justify-center ${
            isReversed && !isMobile ? "md:order-2" : ""
          }`}
        >
          <div className="space-y-4">
            <h3
              className={`text-3xl md:text-4xl font-bold ${
                title === "FitFlow"
                  ? "text-green-400"
                  : title === "Elite11"
                  ? "text-purple-400"
                  : title === "GoTravels"
                  ? "text-yellow-400"
                  : title === "NeonVault"
                  ? "text-blue-400"
                  : "text-blue-400"
              }`}
            >
              {title}
            </h3>
            <p className="text-white/70 text-lg">{description}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: `${tech.color}25`,
                    color: tech.color,
                  }}
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

        <div className={`${isReversed && !isMobile ? "md:order-1" : ""}`}>
          {appScreenshots && appScreenshots.length > 0 ? (
            <div className="relative w-full max-w-xs mx-auto">
              <Carousel className="w-full">
                <div className="relative w-full aspect-[9/19] rounded-[50px] border-[14px] border-black bg-black shadow-xl overflow-hidden mb-8">
                  {/* iPhone Dynamic Island */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-[18px] z-20"></div>

                  <CarouselContent className="h-full">
                    {appScreenshots.map((screenshot, index) => {
                      const processedPath = processImagePath(screenshot);
                      return (
                        <CarouselItem key={index} className="h-full">
                          <div className="flex items-center justify-center w-full h-full">
                            <div className="relative w-full h-full bg-gray-800">
                              <img
                                src={processedPath}
                                alt={`${title} screenshot ${index + 1}`}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                  console.error(
                                    `Failed to load image: ${processedPath}`
                                  );
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = "none";
                                  console.log(
                                    `Image load error for ${title}, screenshot ${
                                      index + 1
                                    }`
                                  );
                                }}
                              />

                              {/* Invisible fallback that only appears if image fails to load */}
                              <div
                                className="absolute inset-0 flex items-center justify-center bg-gray-800 opacity-0"
                                style={{ opacity: 0 }}
                              >
                                <div className="p-4 text-white text-center">
                                  Image not available
                                </div>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                </div>

                {/* Navigation buttons below the phone mockup */}
                <div className="flex justify-center items-center gap-8 mt-2">
                  <CarouselPrevious className="static h-12 w-12 bg-white/20 hover:bg-white/30 rounded-full transform transition-transform duration-300 hover:scale-110 shadow-lg focus:outline-none" />
                  <CarouselNext className="static h-12 w-12 bg-white/20 hover:bg-white/30 rounded-full transform transition-transform duration-300 hover:scale-110 shadow-lg focus:outline-none" />
                </div>
              </Carousel>
            </div>
          ) : (
            <div className="relative w-full max-w-xs mx-auto transform transition-all duration-300 hover:scale-105">
              <div className="w-full aspect-[9/19] rounded-[50px] border-[14px] border-black bg-black shadow-xl relative overflow-hidden">
                {/* iPhone Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-[18px] z-20"></div>

                {/* Fallback for main image */}
                <div className="w-full h-full flex items-center justify-center bg-gray-800">
                  <img
                    src={processImagePath(image)}
                    alt={title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      console.error(`Failed to load main image: ${image}`);
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  {/* Empty fallback that only shows if image fails to load */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0"
                    style={{ opacity: 0 }}
                  >
                    <div className="p-4 text-white text-center">
                      Image not available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
