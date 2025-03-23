
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-24 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div>
              <span className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Established 2017
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight">
                Building a Safer, Healthier Community Together
              </h1>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
              Nakmabe Centre for Child and Family Care is a community-based non-profit organization dedicated to providing holistic care and support to children, families, and communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="button-hover px-8 py-4 bg-primary text-white rounded-full inline-flex items-center font-medium"
              >
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/services" 
                className="button-hover px-8 py-4 bg-white border border-foreground/10 text-foreground rounded-full inline-flex items-center font-medium shadow-subtle"
              >
                Our Programmes
              </Link>
            </div>
          </div>

          <div className="relative lg:h-[540px] h-[400px] animate-fade-in">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1536337005238-94b997371b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" 
                alt="Children and families supported by Nakmabe Centre" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent mix-blend-overlay"></div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 lg:left-auto lg:-right-8 max-w-xs p-6 glass-card rounded-xl animate-blur-in">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-xl">6+</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Core Programmes</h3>
                  <p className="text-sm text-foreground/70">
                    Supporting children, families and communities through integrated services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
