
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, FileText, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DashboardPage = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");

  // This would come from Supabase auth in a real implementation
  const user = {
    name: "Demo User",
    role: "Parent",
    email: "user@example.com"
  };

  const handleBookSession = () => {
    toast({
      title: "Coming Soon",
      description: "Booking functionality will be implemented with Supabase integration.",
    });
  };

  return (
    <PageTransition>
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container-custom">
          <div className="flex flex-col space-y-8">
            <div>
              <h1 className="text-3xl font-medium mb-2">Dashboard</h1>
              <p className="text-foreground/70">Welcome back, {user.name}</p>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-4 w-full max-w-lg">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="bookings">Bookings</TabsTrigger>
                <TabsTrigger value="children">Children</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>
              
              <div className="mt-6">
                <TabsContent value="overview" className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Upcoming Bookings
                        </CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">0</div>
                        <p className="text-xs text-muted-foreground">
                          No upcoming bookings
                        </p>
                        <Button 
                          size="sm" 
                          className="mt-4 w-full"
                          onClick={handleBookSession}
                        >
                          Book a Session
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Registered Children
                        </CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">0</div>
                        <p className="text-xs text-muted-foreground">
                          No children registered
                        </p>
                        <Button 
                          size="sm" 
                          className="mt-4 w-full"
                          onClick={() => setActiveTab("children")}
                        >
                          Add a Child
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Documents
                        </CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">0</div>
                        <p className="text-xs text-muted-foreground">
                          No documents uploaded
                        </p>
                        <Button 
                          size="sm" 
                          className="mt-4 w-full"
                          onClick={() => setActiveTab("documents")}
                        >
                          Upload Documents
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>
                        Your recent interactions with Nakmabe Centre
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
                        <Clock className="h-12 w-12 mb-4 opacity-20" />
                        <p>No recent activity</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="bookings">
                  <Card>
                    <CardHeader>
                      <CardTitle>Book a Session</CardTitle>
                      <CardDescription>
                        Schedule a 60-minute consultation or service
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
                        <Calendar className="h-12 w-12 mb-4 opacity-20" />
                        <p>Booking system coming soon</p>
                        <Button 
                          className="mt-4"
                          onClick={handleBookSession}
                        >
                          Reserve a Time Slot
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="children">
                  <Card>
                    <CardHeader>
                      <CardTitle>Child Management</CardTitle>
                      <CardDescription>
                        Register and manage your children for aftercare services
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
                        <Users className="h-12 w-12 mb-4 opacity-20" />
                        <p>Child management coming soon</p>
                        <Button 
                          className="mt-4"
                          onClick={() => toast({
                            title: "Coming Soon",
                            description: "Child registration will be implemented with Supabase integration.",
                          })}
                        >
                          Register a Child
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="documents">
                  <Card>
                    <CardHeader>
                      <CardTitle>Document Management</CardTitle>
                      <CardDescription>
                        Upload and manage medical documents and referral notes
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
                        <FileText className="h-12 w-12 mb-4 opacity-20" />
                        <p>Document management coming soon</p>
                        <Button 
                          className="mt-4"
                          onClick={() => toast({
                            title: "Coming Soon",
                            description: "Document upload will be implemented with Supabase integration.",
                          })}
                        >
                          Upload Documents
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default DashboardPage;
