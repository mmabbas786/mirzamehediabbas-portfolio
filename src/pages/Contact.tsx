
import { Fragment } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-mirzaPurple-400" size={24} />,
      title: 'Email',
      details: 'contact@mirzacodes.com',
      link: 'mailto:contact@mirzacodes.com',
    },
    {
      icon: <Phone className="text-mirzaPurple-400" size={24} />,
      title: 'Phone',
      details: '+1 (123) 456-7890',
      link: 'tel:+11234567890',
    },
    {
      icon: <MapPin className="text-mirzaPurple-400" size={24} />,
      title: 'Location',
      details: 'San Francisco, CA',
      link: 'https://maps.google.com/?q=San+Francisco,+CA',
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: 'GitHub',
      link: '#',
    },
    {
      icon: <Linkedin size={20} />,
      name: 'LinkedIn',
      link: '#',
    },
    {
      icon: <Instagram size={20} />,
      name: 'Instagram',
      link: '#',
    },
  ];

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
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">Let's Work Together</h1>
            <p className="text-white/70 text-xl">
              Have a mobile app idea? I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-start animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="text-white/70">
                  Feel free to reach out through any of the following channels. I'm always open to discussing new mobile app projects, creative ideas, or opportunities.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    className="flex items-start space-x-4 purple-card p-4 transition-smooth hover:translate-y-[-5px] hover:border-mirzaPurple-500/30 hover:shadow-lg"
                    target={item.title === 'Location' ? '_blank' : undefined}
                    rel={item.title === 'Location' ? 'noopener noreferrer' : undefined}
                  >
                    <div className="pt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-white/70">{item.details}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.link}
                      className="w-11 h-11 rounded-full glass-effect flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-smooth hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="purple-card p-6 md:p-8 hover:border-mirzaPurple-500/30 hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </Fragment>
  );
};

export default Contact;
