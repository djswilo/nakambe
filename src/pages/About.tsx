
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Users, Award, Briefcase, Target } from "lucide-react";

const AboutPage = () => {
  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      bio: "With over 15 years of experience in business consulting, Alex founded Nakambe to help businesses achieve their full potential.",
    },
    {
      name: "Sarah Chen",
      role: "Chief Strategy Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      bio: "Sarah brings extensive experience in strategic planning and market analysis to help clients navigate complex business challenges.",
    },
    {
      name: "David Williams",
      role: "Financial Consultant",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      bio: "David specializes in financial analysis and planning, helping businesses optimize their financial performance.",
    },
    {
      name: "Maya Rodriguez",
      role: "Marketing Strategist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      bio: "Maya helps clients develop effective marketing strategies to reach their target audience and grow their business.",
    },
  ];

  const coreValues = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client-Centered",
      description: "We put our clients' needs first, focusing on delivering solutions that address their unique challenges and opportunities.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "We strive for excellence in all aspects of our work, delivering high-quality consulting services that exceed expectations.",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Integrity",
      description: "We conduct business with the highest level of integrity, building trust through honesty and ethical practices.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Results-Driven",
      description: "We focus on achieving measurable results that contribute to our clients' success and growth.",
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
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
                Our Story and Mission
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We're a team of experienced business consultants dedicated to helping organizations 
                grow, optimize, and thrive in today's competitive business landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-medium">
                  Our Journey
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  Founded in 2010, Nakambe began with a vision to transform how businesses approach 
                  growth and strategic planning. Our founder, Alex Johnson, recognized that many organizations 
                  struggled to adapt to rapidly changing market conditions and needed expert guidance to navigate 
                  these challenges.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Over the years, we've expanded our team and services to provide comprehensive business 
                  consulting across industries. Today, we're proud to be trusted advisors to businesses 
                  of all sizes, helping them achieve their goals through data-driven strategies and 
                  practical solutions.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Our mission is simple: to empower businesses with the insights, strategies, and 
                  support they need to thrive in an ever-evolving marketplace.
                </p>
              </div>
              <div className="relative h-[500px]">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                    alt="Office building"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="section bg-secondary">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Our Principles
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
                Core Values
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                These core values guide our approach to business consulting and shape our relationships 
                with clients, partners, and team members.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="card-hover bg-white p-8 rounded-xl shadow-subtle text-center"
                >
                  <div className="h-14 w-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
                Meet the Experts
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Our team brings together diverse expertise and experience to provide comprehensive 
                consulting services tailored to your business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="card-hover bg-white rounded-xl shadow-subtle overflow-hidden"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-foreground/70 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default AboutPage;
