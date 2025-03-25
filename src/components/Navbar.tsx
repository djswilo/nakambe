
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { useAuth } from "@/components/auth/AuthProvider";
import { useToast } from "@/hooks/use-toast";
import LoginForm from "@/components/auth/LoginForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { toast } = useToast();

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

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account",
      });
      navigate("/");
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 shadow-sm backdrop-blur-md py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
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
              Who We Are
            </Link>
            <Link to="/services" className={cn("nav-link py-2", location.pathname === "/services" && "after:scale-x-100")}>
              Our Programmes
            </Link>
            <Link to="/contact" className={cn("nav-link py-2", location.pathname === "/contact" && "after:scale-x-100")}>
              Get in Touch
            </Link>
          </nav>

          {/* Auth buttons on right */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <Link to="/dashboard">
                  <Button variant="outline" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleSignOut}
                  className="flex items-center gap-1"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">Sign Out</span>
                </Button>
              </div>
            ) : (
              <Link to="/auth/login">
                <Button className="bg-primary hover:bg-primary/90">
                  Nakambe
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden ml-4 p-2 rounded-md text-foreground"
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
              Who We Are
            </Link>
            <Link to="/services" className="nav-link py-3 text-lg">
              Our Programmes
            </Link>
            <Link to="/contact" className="nav-link py-3 text-lg">
              Get in Touch
            </Link>
            {user ? (
              <>
                <Link to="/dashboard" className="nav-link py-3 text-lg">
                  Dashboard
                </Link>
                <button 
                  onClick={handleSignOut}
                  className="flex items-center text-primary py-3 text-lg"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/auth/login" className="nav-link py-3 text-lg text-primary">
                Sign In
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
