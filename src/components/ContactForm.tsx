
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Send, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-white/80">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg glass-effect text-white bg-white/5 border-white/10 focus:border-mirzaPurple-400 focus:ring-1 focus:ring-mirzaPurple-400 focus:outline-none transition-smooth"
          placeholder="John Doe"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-white/80">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg glass-effect text-white bg-white/5 border-white/10 focus:border-mirzaPurple-400 focus:ring-1 focus:ring-mirzaPurple-400 focus:outline-none transition-smooth"
          placeholder="john@example.com"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-white/80">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg glass-effect text-white bg-white/5 border-white/10 focus:border-mirzaPurple-400 focus:ring-1 focus:ring-mirzaPurple-400 focus:outline-none transition-smooth resize-none"
          placeholder="Hello, I'd like to discuss a project..."
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded-lg bg-gradient-to-r from-mirzaPurple-500 to-mirzaPurple-600 text-white font-medium flex items-center justify-center hover:shadow-lg hover:from-mirzaPurple-600 hover:to-mirzaPurple-700 transition-all duration-300 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} className="mr-2" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
