
import { ArrowRight, HeartHandshake, Home, Sparkles, BookOpen, Shield, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <HeartHandshake className="h-7 w-7 text-primary" />,
    title: "GBV Prevention & Support",
    description: "Providing psychosocial support, counselling, awareness campaigns, and community outreach to combat gender-based violence.",
  },
  {
    icon: <Home className="h-7 w-7 text-primary" />,
    title: "Family Preservation Services",
    description: "Offering mediation, parenting plan development, bereavement counselling, and conflict resolution interventions.",
  },
  {
    icon: <Shield className="h-7 w-7 text-primary" />,
    title: "Anti-Substance Abuse",
    description: "Providing prevention, treatment, and rehabilitation support for individuals affected by substance abuse.",
  },
  {
    icon: <Sparkles className="h-7 w-7 text-primary" />,
    title: "Restorative Justice",
    description: "Offering diversion and rehabilitation services for children at risk or in conflict with the law.",
  },
  {
    icon: <BookOpen className="h-7 w-7 text-primary" />,
    title: "After-School Care",
    description: "Supporting children with academic progress and holistic development while reducing dropout rates and social risks.",
  },
  {
    icon: <HeartPulse className="h-7 w-7 text-primary" />,
    title: "Community Support",
    description: "Providing HIV/AIDS prevention, vulnerable children protection, disability support, and elderly care services.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Our Programmes
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Holistic Community Support
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            We offer a wide range of programmes and services designed to empower individuals, 
            strengthen families, and build resilient communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover bg-white p-8 rounded-xl shadow-subtle transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-foreground/70 mb-6">{feature.description}</p>
              <Link
                to="/services"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
