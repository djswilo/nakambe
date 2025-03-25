
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingContactButton = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-8 right-8 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group"
    >
      <Phone className="h-5 w-5" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
        Contact Us
      </span>
    </Link>
  );
};

export default FloatingContactButton;
