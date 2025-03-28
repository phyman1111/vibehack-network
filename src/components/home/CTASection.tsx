
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  
  return (
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
            onClick={() => navigate("/discover")}
          >
            Get Started Now
          </Button>
          <Button 
            variant="outline" 
            className="border-vibehire-primary text-vibehire-primary hover:bg-vibehire-primary/10"
            size="lg"
            onClick={() => navigate("/about")}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
