
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Link } from "react-router-dom";
import { 
  TrendingUp, Briefcase, BarChart2, PieChart, 
  LineChart, Users, Target, ChevronRight 
} from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Strategic Growth Planning",
      description: "Develop comprehensive strategies to achieve sustainable business growth aligned with your vision and goals.",
      details: [
        "Market opportunity assessment",
        "Growth strategy development",
        "Implementation roadmap",
        "Performance metrics and monitoring"
      ]
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Business Process Optimization",
      description: "Streamline your business processes to improve efficiency, reduce costs, and enhance overall performance.",
      details: [
        "Process mapping and analysis",
        "Efficiency optimization",
        "Automation opportunities",
        "Implementation support"
      ]
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Financial Analysis & Planning",
      description: "Gain valuable insights into your financial performance and develop strategies to improve financial health.",
      details: [
        "Financial performance analysis",
        "Budgeting and forecasting",
        "Cost reduction strategies",
        "Investment planning"
      ]
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Market Research & Analysis",
      description: "Understand your market, competitors, and customers to make informed business decisions.",
      details: [
        "Market trend analysis",
        "Competitive landscape assessment",
        "Customer insights research",
        "Market opportunity identification"
      ]
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Performance Metrics & KPIs",
      description: "Develop and implement key performance indicators to measure and improve business performance.",
      details: [
        "KPI framework development",
        "Performance dashboard creation",
        "Data analysis and insights",
        "Performance improvement strategies"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Organizational Development",
      description: "Enhance your organizational structure, culture, and team performance to support business goals.",
      details: [
        "Organizational assessment",
        "Team structure optimization",
        "Leadership development",
        "Culture enhancement strategies"
      ]
    },
  ];

  const process = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We begin with a thorough consultation to understand your business, challenges, and goals."
    },
    {
      number: "02",
      title: "Assessment & Analysis",
      description: "Our team conducts a comprehensive analysis of your business situation and identifies opportunities."
    },
    {
      number: "03",
      title: "Strategy Development",
      description: "We develop tailored strategies and solutions designed to address your specific needs."
    },
    {
      number: "04",
      title: "Implementation",
      description: "We support you throughout the implementation process to ensure effective execution."
    },
    {
      number: "05",
      title: "Monitoring & Refinement",
      description: "We track progress, measure results, and refine strategies as needed to achieve optimal outcomes."
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
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
                Comprehensive Business Consulting
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We offer a wide range of consulting services designed to help your business thrive.
                Each service is tailored to address your unique challenges and opportunities.
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

        {/* Our Process Section */}
        <section className="section bg-secondary">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
                Our Consulting Process
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                We follow a structured, collaborative approach to ensure we deliver 
                effective solutions tailored to your business needs.
              </p>
            </div>

            <div className="relative">
              {/* Process timeline line */}
              <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 w-0.5 bg-primary/20"></div>
              
              <div className="space-y-12">
                {process.map((step, index) => (
                  <div key={index} className="relative">
                    <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      {/* Timeline circle */}
                      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-subtle flex items-center justify-center z-10">
                        <span className="text-primary font-medium">{step.number}</span>
                      </div>

                      {/* Content */}
                      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'} pl-20 md:pl-0`}>
                        <div className="bg-white p-6 rounded-xl shadow-subtle">
                          <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                          <p className="text-foreground/70">{step.description}</p>
                        </div>
                      </div>
                      
                      {/* Empty space for alternating layout */}
                      <div className="hidden md:block md:w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary text-white text-center">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Contact us today to schedule a consultation and discover how our services can help your business reach its full potential.
            </p>
            <Link
              to="/contact"
              className="button-hover px-8 py-4 bg-white text-primary rounded-full inline-flex items-center font-medium shadow-lg"
            >
              Get Started
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
