
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
      details: ["1234 Business Avenue", "Suite 500", "New York, NY 10001"],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Number",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      details: ["info@nakambe.com", "support@nakambe.com"],
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
                Have questions about our services? Ready to get started? Contact us today and let's 
                discuss how we can help your business thrive.
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

        {/* Contact Form and Map Section */}
        <section className="section bg-secondary">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
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

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-serif font-medium mb-4">
                    Our Location
                  </h2>
                  <p className="text-foreground/80 mb-6">
                    Visit our office for a face-to-face consultation with our business experts.
                  </p>
                </div>
                <div className="h-[400px] bg-white rounded-xl overflow-hidden shadow-subtle">
                  {/* Map iframe */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830872278!2d-74.11976379633643!3d40.69766374879752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1659452719046!5m2!1sen!2s"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nakambe office location"
                  ></iframe>
                </div>
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
                Find answers to commonly asked questions about our consulting services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "What industries do you specialize in?",
                    answer: "We provide consulting services across a wide range of industries, including technology, healthcare, finance, retail, manufacturing, and more. Our team has diverse expertise that allows us to understand the unique challenges and opportunities in various sectors."
                  },
                  {
                    question: "How long does a typical consulting project take?",
                    answer: "The duration of our consulting projects varies depending on the scope, complexity, and specific needs of your business. Some projects may be completed in a few weeks, while others might span several months. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements."
                  },
                  {
                    question: "What is your consulting approach?",
                    answer: "Our approach is collaborative and tailored to your business needs. We begin with a thorough assessment to understand your current situation, challenges, and goals. We then develop customized strategies and work closely with your team throughout implementation, providing ongoing support and adjustments as needed."
                  },
                  {
                    question: "How do you measure the success of your consulting services?",
                    answer: "We establish clear, measurable objectives at the beginning of each project and track progress against these metrics throughout our engagement. Success might be measured in terms of revenue growth, cost reduction, process efficiency improvements, or other key performance indicators relevant to your business goals."
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
