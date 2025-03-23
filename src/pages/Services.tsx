
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Link } from "react-router-dom";
import { 
  HeartHandshake, Home, Shield, 
  Sparkles, BookOpen, HeartPulse, ChevronRight
} from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: <HeartHandshake className="h-8 w-8" />,
      title: "GBV Prevention & Support",
      description: "Providing psychosocial support, counselling, awareness campaigns, and community outreach to combat gender-based violence.",
      details: [
        "Initial engagement and client reception",
        "Assessment and care plan development",
        "Court preparation and support",
        "Individual and group counselling sessions"
      ]
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Family Preservation Services",
      description: "Offering mediation, parenting plan development, bereavement counselling, and conflict resolution interventions.",
      details: [
        "Marital dispute resolution",
        "Parenting agreements development",
        "Bereavement and trauma counselling",
        "Conflict resolution interventions"
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Anti-Substance Abuse Services",
      description: "Providing prevention, treatment, and rehabilitation support for individuals affected by substance abuse.",
      details: [
        "Prevention programs",
        "Counselling and therapy",
        "Outpatient support services",
        "Community awareness initiatives"
      ]
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Restorative Justice & Child Diversion",
      description: "Offering diversion and rehabilitation services for children at risk or in conflict with the law.",
      details: [
        "Victim-Offender Mediation (Mina na Makwerhu)",
        "Family Group Conferences (Midyangu ya Hina)",
        "Youth Life Skills Development (Rendzo ra Mina)",
        "Rehabilitation support"
      ]
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "After-School Care Programme",
      description: "Supporting children with academic progress and holistic development while reducing dropout rates and social risks.",
      details: [
        "Homework supervision and academic support",
        "Reading and writing skills development",
        "Sports, music, drama, and recreational activities",
        "Structured and free play under supervision"
      ]
    },
    {
      icon: <HeartPulse className="h-8 w-8" />,
      title: "Other Support Services",
      description: "Providing additional services including HIV/AIDS prevention, support for vulnerable populations, and mental health promotion.",
      details: [
        "HIV/AIDS prevention, care, and support",
        "Protection of vulnerable children",
        "Support services for persons with disabilities",
        "Elderly care and mental health services"
      ]
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
                Our Programmes
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
                Community Support & Development
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We offer a wide range of programmes designed to strengthen families, protect children,
                and build a resilient community free from violence and social ills.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="section">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="card-hover bg-white p-8 rounded-xl shadow-subtle flex flex-col h-full"
                >
                  <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                  <p className="text-foreground/70 mb-6">{service.description}</p>
                  <div className="mt-auto">
                    <h4 className="font-medium text-sm uppercase tracking-wider text-primary mb-3">
                      Key Components
                    </h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                          <span className="text-sm text-foreground/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
      </main>
      <Footer />
    </PageTransition>
  );
};

export default ServicesPage;
