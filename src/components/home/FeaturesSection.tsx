
import { Card, CardContent } from "@/components/ui/card";
import { Video, Mic, Eye, Briefcase, Star, Users } from "lucide-react";

const FeaturesSection = () => {
  return (
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
  );
};

export default FeaturesSection;
