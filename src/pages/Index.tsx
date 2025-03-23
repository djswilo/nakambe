
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Users, Building, TrendingUp, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  const stats = [
    { number: "12+", label: "Years of Experience" },
    { number: "200+", label: "Clients Served" },
    { number: "94%", label: "Client Retention" },
    { number: "50+", label: "Industry Experts" },
  ];

  const testimonials = [
    {
      content:
        "Nakambe transformed our business operations with their strategic consulting. Their team's expertise and dedication to our success made all the difference.",
      author: "Sarah Johnson",
      role: "CEO, TechVision Inc.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    },
    {
      content:
        "Their financial analysis services provided invaluable insights that helped us make informed decisions and significantly improve our bottom line.",
      author: "Michael Chen",
      role: "CFO, Global Solutions",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    },
    {
      content:
        "The market research conducted by Nakambe helped us identify new growth opportunities and better understand our target audience.",
      author: "Lisa Rodriguez",
      role: "Marketing Director, Elevate Group",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    },
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
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                    alt="Business professionals in a meeting"
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
                    Trusted Business Advisors with Proven Results
                  </h2>
                  <p className="text-foreground/80 leading-relaxed">
                    With over a decade of experience, our team of consultants brings deep industry
                    knowledge and a results-oriented approach to every client engagement.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "Experienced industry professionals",
                    "Tailored strategies for your unique needs",
                    "Data-driven approach to problem-solving",
                    "Ongoing support and implementation guidance",
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

        {/* Testimonials Section */}
        <section className="section bg-secondary">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
                What Our Clients Say
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Don't just take our word for it. Hear from the businesses we've helped transform
                through our consulting services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="card-hover bg-white p-8 rounded-xl shadow-subtle relative"
                >
                  <div className="mb-6">
                    <svg
                      className="h-10 w-10 text-primary/20"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-foreground/80 mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h4 className="font-medium">{testimonial.author}</h4>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-gradient-to-r from-primary/90 to-primary text-white">
          <div className="container-custom text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our team to discuss how our consulting services can help
              your business achieve its goals.
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
