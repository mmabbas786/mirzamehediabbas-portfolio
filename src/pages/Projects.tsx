import { Fragment, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projectCategories = [
    { id: "all", name: "All Apps" },
    { id: "flutter", name: "Flutter Apps" },
  ];

  const projects = [
    {
      title: "GoTravels",
      description:
        "A sophisticated hotel management app with custom categories, and real-time hotel booking, personalised profile and many more added features.",
      image:
        "https://images.unsplash.com/photo-1570447997875-cbf8b4df8fba?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      appScreenshots: [
        "./lovable-uploads/Gotravels1.png",
        "./lovable-uploads/Gotravels2.png",
        "./lovable-uploads/Gotravels3.png",
        "./lovable-uploads/Gotravels4.png",
      ],
      technologies: [
        { name: "Flutter", color: "#02569B" },
        { name: "Firebase", color: "#FFCA28" },
        { name: "TensorFlow Lite", color: "#FF6F00" },
      ],
      projectLink: "#",
      category: "flutter",
      appType: "flutter" as const,
    },
    {
      title: "Elite11",
      description:
        "Elite11 is a fantasy sports app where users create teams, compete in contests, and win real rewards.",
      image:
        "https://images.unsplash.com/photo-1434494817513-cc112a976722?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      appScreenshots: [
        "./lovable-uploads/Elite1.png",
        "./lovable-uploads/Elite2.png",
        // "public/lovable-uploads/Elite2.mp4",
      ],
      technologies: [
        { name: "Flutter", color: "#02569B" },
        { name: "Supabase", color: "#8BC34A" },
        { name: "Firebase", color: "#47A248" },
      ],
      projectLink: "#",
      category: "flutter",
      appType: "flutter" as const,
    },
    {
      title: "FitFlow",
      description:
        "FitFlow is a fitness tracker app that helps you monitor workouts, track progress, and stay motivated toward your health goals.",
      image:
        "https://images.unsplash.com/photo-1542893832-42e4782c16c9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      appScreenshots: [
        "./lovable-uploads/FitFlow1.png",
        "./lovable-uploads/FitFlow2.png",
      ],
      technologies: [
        { name: "Flutter", color: "#02569B" },
        { name: "Supabase", color: "#FF9900" },
        { name: "FlutterFire", color: "#A0A0A0" },
      ],
      projectLink: "#",
      category: "flutter",
      appType: "flutter" as const,
    },
    {
      title: "NeonVault",
      description:
        "Secure cryptocurrency wallet with multi-chain support, real-time tracking, and NFT management.",
      image:
        "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      appScreenshots: [
        "./lovable-uploads/NeonVault1.png",
        "./lovable-uploads/NeonVault2.png",
        "./lovable-uploads/NeonVault3.png",
        "./lovable-uploads/NeonVault4.png",
      ],
      technologies: [
        { name: "Flutter", color: "#61DAFB" },
        { name: "Supabase", color: "#8A8E8E" },
        { name: "BlockChain", color: "#F16861" },
      ],
      projectLink: "#",
      category: "flutter",
      appType: "flutter" as const,
    },
    // {
    //   title: "Elite11",
    //   description:
    //     "Feature-rich travel app with itinerary planning, offline maps, and local recommendations.",
    //   image:
    //     "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
    //   appScreenshots: [
    //     "/lovable-uploads/f1b8ad0c-dfc1-47e6-a8ee-c671bc0ea2ad.png",
    //     "/lovable-uploads/5e621d18-a56d-4b41-99cf-2b2bb920a5d8.png",
    //   ],
    //   technologies: [
    //     { name: "iOS Swift", color: "#F05138" },
    //     { name: "Core ML", color: "#1D8348" },
    //     { name: "Firebase", color: "#4285F4" },
    //   ],
    //   projectLink: "#",
    //   category: "ios",
    //   appType: "ios" as const,
    // },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <Fragment>
      <Navbar />

      <main className="pt-28 pb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-mirzaPurple-950/5 via-mirzaPurple-950/5 to-mirzaPurple-950/20 z-0"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-mirzaPurple-500/10 blur-[100px] animate-pulse-light"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-mirzaBlue-500/10 blur-[100px] animate-pulse-light"></div>

        <div className="container px-6 mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 animate-fade-in-up">
            <span className="inline-block px-3 py-1 glass-effect rounded-full text-xs font-medium tracking-wider opacity-90">
              MOBILE PROJECTS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
              Our Projects
            </h1>
            <p className="text-white/70 text-xl">
              Discover our portfolio of innovative Flutter applications
            </p>
          </div>

          <div
            className="flex justify-center mb-12 overflow-x-auto pb-2 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex space-x-2">
              {projectCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth whitespace-nowrap ${
                    activeFilter === category.id
                      ? "bg-gradient-to-r from-mirzaPurple-500 to-mirzaPurple-600 text-white"
                      : "glass-effect text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div
            className="space-y-12 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                isReversed={index % 2 !== 0}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};

export default Projects;
