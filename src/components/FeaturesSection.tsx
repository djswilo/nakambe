
import { ArrowRight, BarChart2, LineChart, PieChart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <TrendingUp className="h-7 w-7 text-primary" />,
    title: "Strategic Growth Planning",
    description: "Develop comprehensive growth strategies tailored to your business goals and market opportunities.",
  },
  {
    icon: <BarChart2 className="h-7 w-7 text-primary" />,
    title: "Performance Optimization",
    description: "Identify and implement process improvements to enhance efficiency and reduce operational costs.",
  },
  {
    icon: <LineChart className="h-7 w-7 text-primary" />,
    title: "Financial Analysis",
    description: "Gain insights through detailed financial analysis to make data-driven business decisions.",
  },
  {
    icon: <PieChart className="h-7 w-7 text-primary" />,
    title: "Market Research",
    description: "Understand your target market and competition through comprehensive research and analysis.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Comprehensive Business Solutions
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            We offer a wide range of consulting services designed to address the unique challenges
            and opportunities facing your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
