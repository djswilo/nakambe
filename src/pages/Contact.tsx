
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import PageTransition from "@/components/PageTransition";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Location",
      details: ["1513 Section E", "Greater Giyani Municipality", "Mopani District, Limpopo Province"],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Number",
      details: ["Contact number here"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      details: ["info@nakmabe.org"],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 5PM", "Saturday - Sunday: Closed"],
    },
  ];

  return (
    <PageTransition>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-secondary">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Have questions about our programs and services? Ready to get involved? Contact us today and let's discuss how we can work together for community empowerment.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="card-hover bg-white p-6 rounded-xl shadow-subtle text-center"
                >
                  <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-medium mb-3">{item.title}</h3>
                  <div className="text-foreground/70">
                    {item.details.map((detail, i) => (
                      <p key={i} className="mb-1">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section bg-secondary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-serif font-medium mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-foreground/80 mb-6">
                    Fill out the form below and our team will get back to you as soon as possible.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Find answers to commonly asked questions about our programs and services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "What services does Nakmabe Centre offer?",
                    answer: "Nakmabe Centre offers a range of services including Gender-Based Violence prevention and support, family preservation services, after-school care programs, anti-substance abuse services, restorative justice programs, and child protection services."
                  },
                  {
                    question: "How can I access your services?",
                    answer: "You can access our services by contacting our office directly, visiting our center during business hours, or completing the contact form on our website. Our team will guide you through the process based on your specific needs."
                  },
                  {
                    question: "Are your services free?",
                    answer: "As a non-profit organization, many of our core services are provided free of charge to vulnerable community members. Some specialized programs may have nominal fees, but we work to ensure that cost is not a barrier to accessing needed support."
                  },
                  {
                    question: "How can I support Nakmabe Centre's work?",
                    answer: "There are many ways to support our work, including volunteering your time, making donations, partnering with us as a business or organization, or helping raise awareness about our programs in the community. Contact us to discuss how you can contribute."
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-subtle">
                    <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
                    <p className="text-foreground/70">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default ContactPage;
