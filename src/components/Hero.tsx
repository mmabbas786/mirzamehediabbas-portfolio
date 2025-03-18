
import { ArrowRight, Code, Server, Database, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-mirzaPurple-950 via-background to-mirzaBlue-950 z-0"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full bg-mirzaPurple-500/20 blur-[100px] animate-pulse-light"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-mirzaBlue-500/20 blur-[100px] animate-pulse-light"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{ 
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)',
        backgroundSize: '3rem 3rem'
      }}></div>

      <div className="container px-6 mx-auto grid md:grid-cols-2 gap-12 relative z-10">
        <div className="flex flex-col justify-center md:pr-8">
          <div className="space-y-6 max-w-xl">
            <span className="inline-block px-3 py-1 glass-effect rounded-full text-xs font-medium tracking-wider opacity-90 animate-fade-in">
              FULLSTACK DEVELOPER
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-shadow animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Transforming Ideas<br />
              Into <span className="text-gradient">Digital Reality</span>
            </h1>
            
            <p className="text-lg text-white/80 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              I craft exceptional web applications that redefine digital experiences. From concept to deployment, I bring your vision to life with cutting-edge technology.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-mirzaPurple-500 to-mirzaPurple-600 text-white font-medium hover:shadow-lg hover:from-mirzaPurple-600 hover:to-mirzaPurple-700 transition-all duration-300"
              >
                View Projects <ArrowRight size={18} />
              </Link>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass-effect text-white font-medium hover:bg-white/10 transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex flex-col items-center p-3 glass-effect rounded-lg">
              <Code className="text-mirzaPurple-400 mb-2" size={20} />
              <span className="text-sm text-white/80 text-center">Frontend</span>
            </div>
            <div className="flex flex-col items-center p-3 glass-effect rounded-lg">
              <Server className="text-mirzaPurple-400 mb-2" size={20} />
              <span className="text-sm text-white/80 text-center">Backend</span>
            </div>
            <div className="flex flex-col items-center p-3 glass-effect rounded-lg">
              <Database className="text-mirzaPurple-400 mb-2" size={20} />
              <span className="text-sm text-white/80 text-center">Database</span>
            </div>
            <div className="flex flex-col items-center p-3 glass-effect rounded-lg">
              <Smartphone className="text-mirzaPurple-400 mb-2" size={20} />
              <span className="text-sm text-white/80 text-center">Mobile</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center relative md:justify-end">
          {/* Phone mockups */}
          <div className="relative animate-float">
            <div className="absolute right-10 -top-6 animate-float" style={{ animationDelay: '0.5s', animationDuration: '7s' }}>
              <div className="w-52 h-[420px] rounded-[40px] border-8 border-black bg-white overflow-hidden shadow-2xl transform -rotate-6">
                <div className="w-full h-full bg-gradient-to-br from-mirzaPurple-500 to-mirzaBlue-700 flex items-center justify-center">
                  <span className="text-white/80 text-sm font-medium">App Preview</span>
                </div>
              </div>
            </div>
            
            <div className="w-60 h-[480px] rounded-[40px] border-8 border-black bg-white overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-mirzaPurple-900 to-mirzaBlue-800 flex items-center justify-center">
                <span className="text-white/80 text-sm font-medium">App Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
