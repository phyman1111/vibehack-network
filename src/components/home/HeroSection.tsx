
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
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
            onClick={() => navigate("/about")}
          >
            Learn More
          </Button>
        </div>
        
        <div className="mt-16">
          <p className="text-sm text-muted-foreground mb-4">Trusted by professionals from</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="h-8 w-28 bg-vibehire-primary/20 rounded flex items-center justify-center text-sm">TechCorp</div>
            <div className="h-8 w-28 bg-vibehire-primary/20 rounded flex items-center justify-center text-sm">InnoSoft</div>
            <div className="h-8 w-28 bg-vibehire-primary/20 rounded flex items-center justify-center text-sm">DataDynamics</div>
            <div className="h-8 w-28 bg-vibehire-primary/20 rounded flex items-center justify-center text-sm">CloudNative</div>
            <div className="h-8 w-28 bg-vibehire-primary/20 rounded flex items-center justify-center text-sm">QuantumTech</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
