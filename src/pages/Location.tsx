
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const LocationPage = () => {
  return (
    <PageTransition>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-secondary">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Our Location
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
                Visit Nakmabe Centre
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We are located in the Greater Giyani Municipality, serving the local community with dedication and care.
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-subtle h-[500px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115899.30316233864!2d30.61340109931122!3d-23.31761765891409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec5b96d04d5ccf3%3A0xc6ebdaafd61f4a2d!2sGiyani%2C%20South%20Africa!5m2!1s0x1ec5b96d04d5ccf3%3A0xc6ebdaafd61f4a2d!2sGiyani%2C%20South%20Africa" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nakmabe Centre location"
                ></iframe>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div className="ml-4">
                        <h3 className="font-medium mb-1">Address</h3>
                        <p className="text-foreground/70">
                          1513 Section E, Greater Giyani Municipality, Mopani District, Limpopo Province, South Africa
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div className="ml-4">
                        <h3 className="font-medium mb-1">Phone</h3>
                        <p className="text-foreground/70">
                          Contact number here
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div className="ml-4">
                        <h3 className="font-medium mb-1">Email</h3>
                        <p className="text-foreground/70">
                          info@nakmabe.org
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div className="ml-4">
                        <h3 className="font-medium mb-1">Hours</h3>
                        <p className="text-foreground/70">
                          Monday - Friday: 8:00 AM - 5:00 PM<br />
                          Saturday: 9:00 AM - 1:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transportation Section */}
        <section className="section bg-secondary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 text-center">
                How to Reach Us
              </h2>
              
              <div className="bg-white p-8 rounded-xl shadow-subtle space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-3">Public Transportation</h3>
                  <p className="text-foreground/80">
                    Information about local taxis and buses that service the area.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-3">By Car</h3>
                  <p className="text-foreground/80">
                    Directions from major highways and information about parking facilities.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-3">Landmarks</h3>
                  <p className="text-foreground/80">
                    We are located near [local landmark], which makes it easy to find our centre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default LocationPage;
