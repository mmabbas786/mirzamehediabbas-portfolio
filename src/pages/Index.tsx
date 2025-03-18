
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Code, PaintBucket, Layers, Cpu, Database, GitBranch } from 'lucide-react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';

const Index = () => {
  const featuredProjects = [
    {
      title: 'TaskMaster Pro',
      description: 'A sophisticated task management app with AI-powered prioritization, custom categories, and real-time collaboration features.',
      image: 'https://images.unsplash.com/photo-1570447997875-cbf8b4df8fba?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
      appScreenshots: [
        '/lovable-uploads/5e621d18-a56d-4b41-99cf-2b2bb920a5d8.png',
        '/lovable-uploads/9bf63242-4052-460e-81aa-92ca6cb88854.png',
        '/lovable-uploads/f1b8ad0c-dfc1-47e6-a8ee-c671bc0ea2ad.png'
      ],
      technologies: [
        { name: 'Flutter', color: '#61DAFB' },
        { name: 'Firebase', color: '#FFCA28' },
        { name: 'Supabase', color: '#3ECF8E' },
      ],
      projectLink: '#',
      appType: 'flutter' as const,
    },
    {
      title: 'Fitness Tracker',
      description: 'Comprehensive fitness tracking platform with workout scheduling, progress visualization, and integration with wearable devices.',
      image: 'https://images.unsplash.com/photo-1434494817513-cc112a976722?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
      appScreenshots: [
        '/lovable-uploads/9bf63242-4052-460e-81aa-92ca6cb88854.png',
        '/lovable-uploads/f1b8ad0c-dfc1-47e6-a8ee-c671bc0ea2ad.png',
        '/lovable-uploads/5e621d18-a56d-4b41-99cf-2b2bb920a5d8.png'
      ],
      technologies: [
        { name: 'Flutter', color: '#4FC08D' },
        { name: 'Supabase', color: '#3ECF8E' },
        { name: 'Firebase', color: '#FFCA28' },
      ],
      projectLink: '#',
      isReversed: true,
      appType: 'flutter' as const,
    },
  ];

  const skills = [
    {
      icon: <Code size={24} />,
      title: 'Flutter Development',
      description: 'Creating responsive and interactive mobile apps with Flutter.',
      color: 'from-blue-500 to-cyan-400',
    },
    {
      icon: <Database size={24} />,
      title: 'Backend Integration',
      description: 'Building robust APIs and database solutions for mobile apps.',
      color: 'from-purple-500 to-indigo-400',
    },
    {
      icon: <PaintBucket size={24} />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually appealing mobile experiences.',
      color: 'from-pink-500 to-rose-400',
    },
    {
      icon: <Layers size={24} />,
      title: 'Cross-Platform',
      description: 'Developing apps that work seamlessly on iOS and Android.',
      color: 'from-amber-500 to-orange-400',
    },
    {
      icon: <Cpu size={24} />,
      title: 'Native Performance',
      description: 'Optimizing mobile apps for speed and resource efficiency.',
      color: 'from-green-500 to-emerald-400',
    },
    {
      icon: <GitBranch size={24} />,
      title: 'Agile Development',
      description: 'Implementing continuous integration and delivery for mobile.',
      color: 'from-red-500 to-rose-400',
    },
  ];

  return (
    <Fragment>
      <Navbar />
      
      <main className="overflow-hidden">
        <Hero />
        
        {/* Projects Section */}
        <section className="py-24 relative">
          {/* Updated background to match Projects page - darker with animated orbs */}
          <div className="absolute inset-0 bg-gradient-to-b from-mirzaPurple-950 via-mirzaPurple-950 to-mirzaBlue-950 z-0"></div>
          <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-mirzaPurple-600/10 blur-[120px] animate-pulse-light"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-mirzaBlue-600/10 blur-[100px] animate-pulse-light"></div>
          
          <div className="container px-6 mx-auto relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="inline-block px-3 py-1 glass-effect rounded-full text-xs font-medium tracking-wider opacity-90">
                FEATURED WORK
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">Recent Projects</h2>
              <p className="text-white/70">
                Explore a selection of my latest mobile app development work.
              </p>
            </div>
            
            <div className="space-y-24">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                  delay={0.2 * index}
                />
              ))}
            </div>
            
            <div className="flex justify-center mt-16">
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass-effect text-white font-medium hover:bg-white/10 transition-all duration-300"
              >
                View All Projects <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-mirzaPurple-950/10 to-background z-0"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-mirzaPurple-500/10 blur-[80px] animate-pulse-light"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-mirzaBlue-500/10 blur-[80px] animate-pulse-light"></div>
          
          <div className="container px-6 mx-auto relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="inline-block px-3 py-1 glass-effect rounded-full text-xs font-medium tracking-wider opacity-90">
                EXPERTISE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
              <p className="text-white/70">
                A comprehensive toolkit for building powerful mobile applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl p-6 hover:-translate-y-2 transition-smooth animate-fade-in-up hover:border-mirzaPurple-500/30 hover:shadow-lg hover:shadow-mirzaPurple-900/20 group"
                  style={{ animationDelay: `${0.1 * index}s`, opacity: 0 }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-mirzaPurple-300 transition-colors duration-300">{skill.title}</h3>
                  <p className="text-white/70 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 relative">
          <div className="container px-6 mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-12 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-mirzaPurple-900/90 to-mirzaBlue-900/90 z-0"></div>
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-mirzaPurple-500/20 blur-[100px] z-0"></div>
              
              <div className="relative z-10 text-center max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Let's Create Together</h2>
                <p className="text-white/80">
                  Ready to bring your app idea to life? Get in touch with me and let's make it happen.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-mirzaPurple-900 font-medium hover:bg-white/90 transition-all duration-300"
                  >
                    Start Your Project <ArrowUpRight size={18} />
                  </Link>
                  <a 
                    href="mailto:contact@mirzacodes.com" 
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass-effect text-white font-medium hover:bg-white/10 transition-all duration-300"
                  >
                    Email Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </Fragment>
  );
};

export default Index;
