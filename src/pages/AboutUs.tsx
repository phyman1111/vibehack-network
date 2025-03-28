
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Video, Mic, Eye, Users, ArrowRight, Twitter, Linkedin, Mail } from "lucide-react";

const AboutUs = () => {
  return (
    <Layout>
      <div className="container py-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About VibeHire</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Revolutionizing professional networking through authentic video and voice connections
          </p>
        </div>
        
        {/* Mission Section */}
        <div className="mb-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At VibeHire, our mission is to transform professional networking from outdated resume exchanges 
              to authentic connections based on personality, skills, and potential rather than just credentials.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe that traditional text-based resumes fail to capture the essence of a person, which is why 
              we've built a platform that uses video and voice to showcase who professionals truly are.
            </p>
          </div>
          <div className="bg-gradient-to-r from-vibehire-primary/30 to-vibehire-accent/30 p-10 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="mb-6">
              A professional world where opportunities are matched based on genuine compatibility rather than 
              keyword matching or company names.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-vibehire-primary/20 p-1 rounded mr-3 mt-1">
                  <ArrowRight className="h-4 w-4 text-vibehire-primary" />
                </div>
                <span>Breaking down barriers that prevent great talent from being discovered</span>
              </li>
              <li className="flex items-start">
                <div className="bg-vibehire-primary/20 p-1 rounded mr-3 mt-1">
                  <ArrowRight className="h-4 w-4 text-vibehire-primary" />
                </div>
                <span>Creating a truly level playing field through anonymous talent mode</span>
              </li>
              <li className="flex items-start">
                <div className="bg-vibehire-primary/20 p-1 rounded mr-3 mt-1">
                  <ArrowRight className="h-4 w-4 text-vibehire-primary" />
                </div>
                <span>Building technology that puts humans first in the hiring process</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Core Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-secondary/50 interactive-card">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-vibehire-primary/20 flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-vibehire-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Video Resumes</h3>
                <p className="text-muted-foreground">
                  Our platform prioritizes engaging video introductions that showcase personality, communication skills, and passion - the human elements that no text resume can capture.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/50 interactive-card">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-vibehire-primary/20 flex items-center justify-center mb-4">
                  <Mic className="h-6 w-6 text-vibehire-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Voice Pitches</h3>
                <p className="text-muted-foreground">
                  For professionals who prefer audio, our voice pitch feature allows for concise, compelling introductions that busy recruiters can listen to while on the go.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/50 interactive-card">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-vibehire-primary/20 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-vibehire-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Anonymous Mode</h3>
                <p className="text-muted-foreground">
                  Our anonymous talent mode helps eliminate bias by focusing on skills and experience without revealing identifying information, ensuring fair evaluation of all candidates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Separator className="my-16" />
        
        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hriday Kadam's Card */}
            <Card className="bg-secondary/50 interactive-card col-span-full md:col-span-1">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-vibehire-primary/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-vibehire-primary">HK</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Hriday Kadam</h3>
                  <p className="text-muted-foreground mb-4">Founder & CEO</p>
                  
                  <div className="flex justify-center gap-3 mt-4">
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 rounded-full bg-vibehire-primary/10 hover:bg-vibehire-primary/20 transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-vibehire-primary" />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 rounded-full bg-vibehire-primary/10 hover:bg-vibehire-primary/20 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-vibehire-primary" />
                    </a>
                    <a 
                      href="mailto:hridaykadam1111@gmail.com" 
                      className="p-2 rounded-full bg-vibehire-primary/10 hover:bg-vibehire-primary/20 transition-colors"
                    >
                      <Mail className="h-5 w-5 text-vibehire-primary" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/50 interactive-card">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-vibehire-primary/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-vibehire-primary">AS</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Alex Smith</h3>
                  <p className="text-muted-foreground mb-4">CTO</p>
                  <p className="text-sm">
                    Leading our engineering team to build innovative features that revolutionize how professionals connect.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/50 interactive-card">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-vibehire-primary/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-vibehire-primary">MB</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Mira Basu</h3>
                  <p className="text-muted-foreground mb-4">Head of Design</p>
                  <p className="text-sm">
                    Creating intuitive and beautiful user experiences that make connecting with opportunities seamless.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mb-16 py-10 bg-gradient-to-r from-vibehire-primary/5 to-vibehire-accent/10 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Our Impact</h2>
            <p className="text-muted-foreground">Transforming professional networking, one connection at a time</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-vibehire-primary mb-2">10K+</p>
              <p className="text-sm text-muted-foreground">Professionals</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-vibehire-primary mb-2">500+</p>
              <p className="text-sm text-muted-foreground">Companies</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-vibehire-primary mb-2">2,500+</p>
              <p className="text-sm text-muted-foreground">Successful Matches</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-vibehire-primary mb-2">30+</p>
              <p className="text-sm text-muted-foreground">Countries</p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Join the Revolution</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to experience a new way of professional networking? Join VibeHire today and showcase your authentic self.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-blue-gradient hover:opacity-90 text-white"
              size="lg"
            >
              Create Your Profile
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
      </div>
    </Layout>
  );
};

export default AboutUs;
