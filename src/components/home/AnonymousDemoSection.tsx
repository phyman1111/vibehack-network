
import { useContext } from "react";
import { Eye } from "lucide-react";
import AnonymousToggle from "@/components/profile/AnonymousToggle";

interface AnonymousDemoSectionProps {
  isAnonymous: boolean;
  setIsAnonymous: (value: boolean) => void;
}

const AnonymousDemoSection = ({ isAnonymous, setIsAnonymous }: AnonymousDemoSectionProps) => {
  return (
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
                <div className="w-16 h-16 rounded-full bg-vibehire-primary/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-vibehire-primary">SJ</span>
                </div>
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
  );
};

export default AnonymousDemoSection;
