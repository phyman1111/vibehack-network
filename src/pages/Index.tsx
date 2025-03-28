
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Video, Mic, Eye, Briefcase, Star, Users } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnonymousToggle from "@/components/profile/AnonymousToggle";

const Index = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-dark-gradient opacity-70"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-vibehire-primary opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-vibehire-accent opacity-10 blur-3xl"></div>
        
        <div className="container text-center relative z-10 max-w-4xl">
          <div className="animate-fade-in mb-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Revolutionize Your Professional Presence
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              VibeHire transforms networking with video resumes and anonymous talent profiles, 
              connecting professionals and recruiters in a more authentic way.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-blue-gradient hover:opacity-90 text-white glow-button"
              size="lg"
              onClick={() => navigate("/discover")}
            >
              Discover Talent
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-vibehire-primary text-vibehire-primary hover:bg-vibehire-primary/10"
              onClick={() => navigate("/profile/create")}
            >
              Create Your Profile
            </Button>
          </div>
          
          <div className="mt-16">
            <p className="text-sm text-muted-foreground mb-4">Trusted by professionals from</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              <img src="https://via.placeholder.com/120x40" alt="Company logo" className="h-8" />
              <img src="https://via.placeholder.com/120x40" alt="Company logo" className="h-8" />
              <img src="https://via.placeholder.com/120x40" alt="Company logo" className="h-8" />
              <img src="https://via.placeholder.com/120x40" alt="Company logo" className="h-8" />
              <img src="https://via.placeholder.com/120x40" alt="Company logo" className="h-8" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              VibeHire introduces a new approach to professional networking, focusing on authenticity
              and skill-based connections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background/50 interactive-card">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-vibehire-primary/20 flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-vibehire-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Video Resumes</h3>
                <p className="text-muted-foreground">
                  Showcase your personality and skills with engaging video resumes that stand out to potential employers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 interactive-card">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-vibehire-primary/20 flex items-center justify-center mb-4">
                  <Mic className="h-6 w-6 text-vibehire-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Voice Pitches</h3>
                <p className="text-muted-foreground">
                  Create concise audio introductions highlighting your expertise, perfect for busy recruiters on the go.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 interactive-card">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-vibehire-primary/20 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-vibehire-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Anonymous Mode</h3>
                <p className="text-muted-foreground">
                  Present your skills without revealing your identity, enabling bias-free connections based solely on talent.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 interactive-card">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-vibehire-primary/20 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-vibehire-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Smart Job Matching</h3>
                <p className="text-muted-foreground">
                  Our AI algorithm connects you with relevant opportunities based on your skills and preferences.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 interactive-card">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-vibehire-primary/20 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-vibehire-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Skill Endorsements</h3>
                <p className="text-muted-foreground">
                  Build credibility with verified skill endorsements from colleagues and previous employers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 interactive-card">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-vibehire-primary/20 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-vibehire-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Direct Messaging</h3>
                <p className="text-muted-foreground">
                  Connect and communicate directly with potential employers or talents through our integrated messaging system.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Anonymous Mode Demo */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Experience Anonymous Talent Mode</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Toggle between revealing or hiding your identity while still showcasing your professional expertise.
            </p>
          </div>
          
          <div className="max-w-xl mx-auto animate-fade-in">
            <AnonymousToggle 
              isAnonymous={isAnonymous} 
              onToggle={setIsAnonymous} 
            />
            
            <div className="mt-12 p-6 glass-card rounded-lg">
              <div className="flex items-center mb-6">
                {isAnonymous ? (
                  <div className="w-16 h-16 rounded-full bg-vibehire-gray/20 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-vibehire-gray" />
                  </div>
                ) : (
                  <img 
                    src="https://via.placeholder.com/150" 
                    alt="Profile" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
                <div className="ml-4">
                  <h3 className="text-xl font-medium">
                    {isAnonymous ? "Anonymous Professional" : "Sarah Johnson"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isAnonymous ? "Senior Developer" : "Senior Developer at TechCorp"}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-foreground/70 mb-1">About</h4>
                  <p className="text-foreground/90">
                    {isAnonymous 
                      ? "A passionate developer with 7+ years of experience in building scalable web applications and mentoring junior developers."
                      : "I'm a passionate developer with 7+ years of experience in building scalable web applications at TechCorp and previously at InnoSoft. I enjoy mentoring junior developers and contributing to open source."
                    }
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-foreground/70 mb-1">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-vibehire-primary/10 text-vibehire-primary rounded-full text-xs">
                      React
                    </span>
                    <span className="px-2 py-1 bg-vibehire-primary/10 text-vibehire-primary rounded-full text-xs">
                      Node.js
                    </span>
                    <span className="px-2 py-1 bg-vibehire-primary/10 text-vibehire-primary rounded-full text-xs">
                      TypeScript
                    </span>
                    <span className="px-2 py-1 bg-vibehire-primary/10 text-vibehire-primary rounded-full text-xs">
                      GraphQL
                    </span>
                    <span className="px-2 py-1 bg-vibehire-primary/10 text-vibehire-primary rounded-full text-xs">
                      AWS
                    </span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-foreground/70 mb-1">Experience</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">
                        {isAnonymous ? "Senior Developer" : "Senior Developer at TechCorp"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {isAnonymous ? "Current" : "Jan 2020 - Present"}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">
                        {isAnonymous ? "Full Stack Developer" : "Full Stack Developer at InnoSoft"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {isAnonymous ? "Previous" : "Mar 2016 - Dec 2019"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-vibehire-primary/5 to-vibehire-accent/10">
        <div className="container text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Professional Presence?</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of professionals who are leveraging video and voice profiles to make meaningful connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-blue-gradient hover:opacity-90 text-white"
              size="lg"
            >
              Get Started Now
            </Button>
            <Button 
              variant="outline" 
              className="border-vibehire-primary text-vibehire-primary hover:bg-vibehire-primary/10"
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
