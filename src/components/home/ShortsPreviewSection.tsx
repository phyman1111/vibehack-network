
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useProfiles } from "@/hooks/use-profiles";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const ShortsPreviewSection = () => {
  const navigate = useNavigate();
  const { profiles } = useProfiles();
  
  // Filter to only get videos
  const videoProfiles = profiles.filter(profile => profile.videoUrl).slice(0, 5);
  
  // If no videos, don't show section
  if (videoProfiles.length === 0) return null;
  
  return (
    <section className="py-16 bg-muted/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">VibeHire Shorts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through talent video pitches in an immersive shorts-style feed
          </p>
        </div>
        
        <div className="flex items-center justify-center mb-10">
          <div className="relative w-full max-w-3xl h-[300px] md:h-[400px] bg-black rounded-lg overflow-hidden">
            {/* Preview thumbnails */}
            <div className="absolute inset-0 flex">
              {videoProfiles.map((profile, index) => (
                <motion.div 
                  key={profile.id}
                  className="relative flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                  {profile.thumbnailUrl ? (
                    <img 
                      src={profile.thumbnailUrl}
                      alt={profile.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">No thumbnail</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Overlay with call to action */}
            <div className="absolute inset-0 flex items-center justify-center flex-col z-20">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
              >
                <Button 
                  onClick={() => navigate("/shorts")}
                  size="lg" 
                  className="rounded-full px-8 bg-vibehire-primary hover:bg-vibehire-primary/90"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Shorts
                </Button>
              </motion.div>
              <motion.p 
                className="text-white mt-4 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.6 }}
              >
                Discover talent in a new immersive way
              </motion.p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            onClick={() => navigate("/shorts")} 
            variant="outline" 
            className="border-vibehire-primary text-vibehire-primary hover:bg-vibehire-primary/10"
          >
            View All Shorts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShortsPreviewSection;
