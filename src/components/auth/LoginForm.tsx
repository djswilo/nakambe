
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Key, UserCircle, Github, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

type LoginFormProps = {
  onSuccess?: () => void;
};

const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // This would be replaced with actual Supabase authentication
      console.log("Login with:", email, password);
      
      toast({
        title: "Authentication Coming Soon",
        description: "User authentication will be implemented with Supabase integration.",
      });
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during login.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6 py-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10"
              required
            />
            <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              className="rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label htmlFor="remember" className="text-sm text-gray-500">
              Remember me
            </label>
          </div>
          <Link
            to="#"
            className="text-sm text-primary hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing in...
            </span>
          ) : (
            "Sign in"
          )}
        </Button>
      </form>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-2 text-xs text-muted-foreground">
            OR CONTINUE WITH
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Button variant="outline" type="button" className="w-full" onClick={() => toast({ title: "Coming Soon", description: "Social login will be implemented with Supabase." })}>
          <UserCircle className="h-4 w-4 mr-2" />
          Google
        </Button>
        <Button variant="outline" type="button" className="w-full" onClick={() => toast({ title: "Coming Soon", description: "Social login will be implemented with Supabase." })}>
          <Facebook className="h-4 w-4 mr-2" />
          Facebook
        </Button>
        <Button variant="outline" type="button" className="w-full" onClick={() => toast({ title: "Coming Soon", description: "Social login will be implemented with Supabase." })}>
          <Github className="h-4 w-4 mr-2" />
          Github
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
