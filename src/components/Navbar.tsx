
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 shadow-sm backdrop-blur-md py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-serif font-medium tracking-tight"
            aria-label="Home"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Nakmabe
            </span>
          </Link>

          {/* Logo in center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" aria-label="Nakmabe Centre">
              <img 
                src="/lovable-uploads/89852479-5570-4b2c-979d-13ec7ce39841.png" 
                alt="Nakmabe Centre Logo" 
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link to="/about" className={cn("nav-link py-2", location.pathname === "/about" && "after:scale-x-100")}>
              How We Are
            </Link>
            <Link to="/services" className={cn("nav-link py-2", location.pathname === "/services" && "after:scale-x-100")}>
              Our Programmes
            </Link>
            <Link to="/contact" className={cn("nav-link py-2", location.pathname === "/contact" && "after:scale-x-100")}>
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-slide-down">
          <nav className="flex flex-col container-custom py-6 space-y-4">
            <Link to="/about" className="nav-link py-3 text-lg">
              How We Are
            </Link>
            <Link to="/services" className="nav-link py-3 text-lg">
              Our Programmes
            </Link>
            <Link to="/contact" className="nav-link py-3 text-lg">
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
