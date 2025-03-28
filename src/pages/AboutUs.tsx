
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <Layout>
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">About VibeHire</h1>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Revolutionizing professional networking through video resumes and authentic connections
          </p>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              At VibeHire, we're on a mission to transform how professionals connect in the digital age. 
              We believe that traditional resumes fail to capture the essence of a person's skills, personality, 
              and potential. That's why we've built a platform that leverages the power of video and audio to
              create more meaningful connections between talent and opportunities.
            </p>
            <p className="text-muted-foreground mb-6">
              We're passionate about creating a space where professionals can showcase their authentic selves,
              while also providing tools that reduce bias in the hiring process through our anonymous talent mode.
              Our goal is to make the job search and recruitment process more human, more efficient, and more equitable.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground mb-6">
              We envision a future where professional connections are formed based on a holistic understanding of skills, 
              experiences, and personality - not just keywords on a resume. VibeHire aims to be the bridge that connects 
              talented individuals with organizations that value their unique contributions.
            </p>
            <p className="text-muted-foreground mb-6">
              By leveraging cutting-edge technology and innovative design, we're creating a platform that makes it easier 
              for professionals to stand out and for recruiters to find the perfect match for their teams. We believe that 
              when the right people connect, amazing things happen.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Team</h2>
            <div className="flex justify-center">
              <Card className="w-full max-w-md bg-gradient-to-br from-vibehire-primary/10 to-vibehire-accent/10 overflow-hidden">
                <div className="h-20 bg-gradient-to-r from-vibehire-primary/20 to-vibehire-accent/20"></div>
                <CardContent className="pt-6 pb-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-vibehire-primary/20 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl font-bold text-vibehire-primary">HK</span>
                    </div>
                    <h3 className="text-xl font-bold mt-4">Hriday Kadam</h3>
                    <p className="text-muted-foreground mb-6">Founder & CEO</p>
                    
                    <div className="flex justify-center space-x-4">
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-vibehire-primary/10 hover:text-vibehire-primary">
                          <Twitter className="h-5 w-5" />
                          <span className="sr-only">Twitter</span>
                        </Button>
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-vibehire-primary/10 hover:text-vibehire-primary">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </a>
                      <a href="mailto:hridaykadam1111@gmail.com">
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-vibehire-primary/10 hover:text-vibehire-primary">
                          <Mail className="h-5 w-5" />
                          <span className="sr-only">Email</span>
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-vibehire-primary/10 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Authenticity</h3>
                <p className="text-muted-foreground">
                  We believe in the power of authentic connections and encourage professionals 
                  to showcase their true selves.
                </p>
              </div>
              <div className="p-6 bg-vibehire-primary/10 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly push the boundaries of what's possible in professional 
                  networking through technology and design.
                </p>
              </div>
              <div className="p-6 bg-vibehire-primary/10 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Inclusivity</h3>
                <p className="text-muted-foreground">
                  We're committed to creating a platform that reduces bias and provides 
                  equal opportunities for all professionals.
                </p>
              </div>
              <div className="p-6 bg-vibehire-primary/10 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, from our platform's 
                  user experience to our customer support.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Join the Revolution</h2>
            <p className="text-muted-foreground mb-8">
              Ready to transform how you connect with professional opportunities? 
              Join VibeHire today and be part of the future of professional networking.
            </p>
            <Button className="bg-blue-gradient hover:opacity-90 text-white glow-button" size="lg">
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
