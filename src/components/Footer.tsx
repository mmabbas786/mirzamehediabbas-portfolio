
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-mirzaPurple-400 to-mirzaBlue-400 flex items-center justify-center text-white font-bold text-sm">
                M
              </div>
              <span className="text-lg font-space-grotesk font-bold tracking-tight text-white">
                Mirza Codes
              </span>
            </Link>
            
            <p className="text-sm text-white/70 max-w-xs">
              Building exceptional digital experiences with modern web technologies and clean code.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-smooth" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-smooth" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-smooth" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@mirzacodes.com" className="text-white/60 hover:text-white transition-smooth" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/60 hover:text-white transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-white/60 hover:text-white transition-smooth">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/60 hover:text-white transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-white">Get In Touch</h3>
            <p className="text-sm text-white/70">
              Ready to start your next project? Let's build something amazing together.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-sm text-mirzaPurple-300 hover:text-mirzaPurple-200 transition-smooth"
            >
              Start a conversation <ArrowUpRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
        
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Mirza Codes. All rights reserved.
          </p>
          <p className="text-sm text-white/50 mt-2 sm:mt-0">
            Designed with precision. Built with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
