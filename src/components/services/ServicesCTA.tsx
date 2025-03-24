
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ServicesCTA = () => {
  return (
    <section className="section bg-primary text-white text-center">
      <div className="container-custom max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
          Want to Learn More About Our Programmes?
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Contact us today to find out how our services can help you, your family, or your community.
        </p>
        <Link
          to="/contact"
          className="button-hover px-8 py-4 bg-white text-primary rounded-full inline-flex items-center font-medium shadow-lg"
        >
          Get in Touch
          <ChevronRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default ServicesCTA;
