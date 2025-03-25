
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

const NotFound = () => {
  return (
    <PageTransition>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-lg mx-auto text-center">
            <div className="text-9xl font-serif font-bold text-primary/20 mb-4">404</div>
            <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">Page Not Found</h1>
            <p className="text-foreground/70 mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
              to="/"
              className="button-hover px-8 py-4 bg-primary text-white rounded-full inline-flex items-center font-medium"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingContactButton />
    </PageTransition>
  );
};

export default NotFound;
