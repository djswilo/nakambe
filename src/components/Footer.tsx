
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-medium">Nakmabe Centre</h3>
            <p className="text-foreground/80 leading-relaxed">
              A community-based non-profit organization dedicated to providing holistic care and support to children, families, and communities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  How We Are
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  Our Programmes
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  Location
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium">Our Programmes</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  GBV Prevention & Support
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  Family Preservation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  After-School Care
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                  Anti-Substance Abuse
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/70">
                  1513 Section E, Greater Giyani Municipality, Mopani District, Limpopo Province, South Africa
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground/70">Contact number here</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground/70">info@nakmabe.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Location Map */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-subtle">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115899.30316233864!2d30.61340109931122!3d-23.31761765891409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec5b96d04d5ccf3%3A0xc6ebdaafd61f4a2d!2sGiyani%2C%20South%20Africa!5m2!1s0x1ec5b96d04d5ccf3%3A0xc6ebdaafd61f4a2d!2sGiyani%2C%20South%20Africa" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Nakmabe Centre location"
          ></iframe>
        </div>

        <div className="pt-8 border-t border-foreground/10 text-center">
          <p className="text-foreground/60 text-sm">
            © 2025 Nakmabe Centre for Child and Family Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
