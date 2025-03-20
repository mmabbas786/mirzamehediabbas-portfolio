import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-[100] transition-all duration-300 rounded-2xl ${
          isScrolled
            ? "backdrop-blur-md bg-white/10 border border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="relative z-[102] flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img
                  src="/lovable-uploads/logo.png"
                  alt="Mirza Codes Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-semibold text-white">
                Mirza Codes
              </span>
            </Link>

            <button
              onClick={toggleMenu}
              className="relative z-[102] text-white md:hidden"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <nav className="hidden md:flex space-x-6 pr-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-medium text-sm transition-all duration-300 text-white/80 hover:text-white after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-mirzaPurple-400 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    location.pathname === link.path
                      ? "text-white after:scale-x-100"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[99] flex items-center justify-center overflow-hidden">
          {/* Full-screen background with same styling as scrolled navbar */}
          <div className="absolute inset-0 backdrop-blur-md bg-white/10 border border-white/10" />

          {/* Navigation Links Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-3xl font-medium transition-all duration-300 hover:scale-105 ${
                    location.pathname === link.path
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
