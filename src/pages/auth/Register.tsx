
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Key, User, UserCircle, Facebook, Github } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

const RegisterPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);

    try {
      // This would be replaced with actual Supabase auth
      console.log("Register with:", formData);
      
      toast({
        title: "Registration Coming Soon",
        description: "User registration will be implemented with Supabase integration.",
      });
      
      // Redirect to home page after successful registration
      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during registration.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageTransition>
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container-custom">
          <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-subtle">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-medium mb-2">Create an Account</h1>
              <p className="text-foreground/70">Join Nakmabe Centre community</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                  <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                  <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-500">
                  I agree to the <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                </label>
              </div>
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating account...
                  </span>
                ) : (
                  "Sign up"
                )}
              </Button>
            </form>

            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/" className="text-primary hover:underline" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector<HTMLButtonElement>("[aria-label='Sign In']")?.click();
                }}>
                  Sign in
                </Link>
              </p>
            </div>

            <div className="relative mt-8">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-background px-2 text-xs text-muted-foreground">
                  OR SIGN UP WITH
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-8">
              <Button variant="outline" type="button" className="w-full" onClick={() => toast({ title: "Coming Soon", description: "Social signup will be implemented with Supabase." })}>
                <UserCircle className="h-4 w-4 mr-2" />
                Google
              </Button>
              <Button variant="outline" type="button" className="w-full" onClick={() => toast({ title: "Coming Soon", description: "Social signup will be implemented with Supabase." })}>
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </Button>
              <Button variant="outline" type="button" className="w-full" onClick={() => toast({ title: "Coming Soon", description: "Social signup will be implemented with Supabase." })}>
                <Github className="h-4 w-4 mr-2" />
                Github
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingContactButton />
    </PageTransition>
  );
};

export default RegisterPage;
