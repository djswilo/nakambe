
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ServicesHero from "@/components/services/ServicesHero";
import ProgramsGrid from "@/components/services/ProgramsGrid";
import ServicesCTA from "@/components/services/ServicesCTA";
import FloatingContactButton from "@/components/FloatingContactButton";

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
      <FloatingContactButton />
    </PageTransition>
  );
};

export default ServicesPage;
