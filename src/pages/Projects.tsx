
import { Fragment, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projectCategories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' },
  ];

  const projects = [
    {
      title: 'TaskMaster Pro',
      description: 'A sophisticated task management app with AI-powered prioritization, custom categories, and real-time collaboration features.',
      image: 'https://images.unsplash.com/photo-1570447997875-cbf8b4df8fba?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
      technologies: [
        { name: 'React', color: '#61DAFB' },
        { name: 'Firebase', color: '#FFCA28' },
        { name: 'TensorFlow.js', color: '#FF6F00' },
      ],
      projectLink: '#',
      category: 'web',
    },
    {
      title: 'Fitness Tracker Dashboard',
      description: 'Comprehensive fitness tracking platform with workout scheduling, progress visualization, and integration with wearable devices.',
      image: 'https://images.unsplash.com/photo-1434494817513-cc112a976722?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
      technologies: [
        { name: 'Vue.js', color: '#4FC08D' },
        { name: 'Node.js', color: '#8BC34A' },
        { name: 'MongoDB', color: '#47A248' },
      ],
      projectLink: '#',
      category: 'web',
    },
    {
      title: 'EcoTrack Mobile App',
      description: 'Mobile application for tracking personal carbon footprint with gamification elements to encourage sustainable behaviors.',
      image: 'https://images.unsplash.com/photo-1542893832-42e4782c16c9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
      technologies: [
        { name: 'React Native', color: '#61DAFB' },
        { name: 'Redux', color: '#764ABC' },
        { name: 'Node.js', color: '#8BC34A' },
      ],
      projectLink: '#',
      category: 'mobile',
    },
    {
      title: 'Financial Dashboard UI Design',
      description: 'Clean and intuitive interface design for a financial analytics platform with data visualization components.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
      technologies: [
        { name: 'Figma', color: '#F24E1E' },
        { name: 'Adobe XD', color: '#FF61F6' },
        { name: 'Illustrator', color: '#FF9A00' },
      ],
      projectLink: '#',
      category: 'design',
    },
    {
      title: 'Local Restaurant Marketplace',
      description: 'Online marketplace connecting local restaurants with customers, featuring order tracking and delivery integration.',
      image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
      technologies: [
        { name: 'Angular', color: '#DD0031' },
        { name: 'Express', color: '#000000' },
        { name: 'PostgreSQL', color: '#336791' },
      ],
      projectLink: '#',
      category: 'web',
    },
    {
      title: 'Travel Companion App',
      description: 'Mobile app for travelers with itinerary planning, local recommendations, and offline mapping capabilities.',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
      technologies: [
        { name: 'Flutter', color: '#02569B' },
        { name: 'Firebase', color: '#FFCA28' },
        { name: 'Google Maps API', color: '#4285F4' },
      ],
      projectLink: '#',
      category: 'mobile',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <Fragment>
      <Navbar />
      
      <main className="pt-28 pb-24">
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 animate-fade-in-up">
            <span className="inline-block px-3 py-1 glass-effect rounded-full text-xs font-medium tracking-wider opacity-90">
              MY WORK
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">Projects Portfolio</h1>
            <p className="text-white/70">
              Explore my collection of projects showcasing my technical skills and creative problem-solving.
            </p>
          </div>
          
          <div className="flex justify-center mb-12 overflow-x-auto pb-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex space-x-2">
              {projectCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth whitespace-nowrap ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-mirzaPurple-500 to-mirzaPurple-600 text-white'
                      : 'glass-effect text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-24 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
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
