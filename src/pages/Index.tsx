
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Users, Building, TrendingUp, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  const stats = [
    { number: "5+", label: "Years of Service" },
    { number: "200+", label: "Families Supported" },
    { number: "6", label: "Core Programs" },
    { number: "20+", label: "Community Partners" },
  ];

  return (
    <PageTransition>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />

        {/* Why Choose Us Section */}
        <section className="section">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] animate-fade-in">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                    alt="Community support and family care"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Stats overlay */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-subtle"
                    >
                      <div className="text-2xl font-serif font-semibold text-primary">
                        {stat.number}
                      </div>
                      <div className="text-sm text-foreground/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <span className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Why Choose Us
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
                    Committed to Empowering Communities
                  </h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Since 2017, Nakmabe Centre has been dedicated to providing holistic care and support to children, families, and communities, focusing on gender-based violence prevention, psychosocial support, family preservation, and child protection.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "Community-driven approach to service delivery",
                    "Qualified and registered professional staff",
                    "Integrated and multidisciplinary services",
                    "Focus on creating safe, supportive environments",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span className="ml-3 text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/about"
                  className="button-hover px-8 py-4 bg-primary text-white rounded-full inline-flex items-center font-medium"
                >
                  Learn More About Us
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-r from-primary/90 to-primary text-white">
          <div className="container-custom text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Ready to Support Our Mission?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our programs, volunteer opportunities, or how you can contribute to creating a healthier, empowered community.
            </p>
            <Link
              to="/contact"
              className="button-hover px-8 py-4 bg-white text-primary rounded-full inline-flex items-center font-medium shadow-lg"
            >
              Contact Us Today
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Index;
