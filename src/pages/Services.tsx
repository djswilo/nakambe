
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ServicesHero from "@/components/services/ServicesHero";
import ProgramsGrid from "@/components/services/ProgramsGrid";
import ServicesCTA from "@/components/services/ServicesCTA";

const ServicesPage = () => {
  return (
    <PageTransition>
      <Navbar />
      <main>
        {/* Hero Section */}
        <ServicesHero />

        {/* Services Grid Section */}
        <section className="section">
          <div className="container-custom">
            <ProgramsGrid />
          </div>
        </section>

        {/* CTA Section */}
        <ServicesCTA />
      </main>
      <Footer />
    </PageTransition>
  );
};

export default ServicesPage;
