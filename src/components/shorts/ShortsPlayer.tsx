
import { useEffect, useState, useRef } from "react";
import { ProfileType } from "@/types/profile";
import ShortCard from "./ShortCard";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ShortsPlayerProps {
  profiles: ProfileType[];
}

const ShortsPlayer = ({ profiles }: ShortsPlayerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const handleNext = () => {
    if (currentIndex < profiles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Loop back to first video
      setCurrentIndex(0);
    }
  };
  
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Loop to last video
      setCurrentIndex(profiles.length - 1);
    }
  };
  
  useEffect(() => {
    // When currentIndex changes, scroll to the corresponding element
    if (containerRef.current && itemRefs.current[currentIndex]) {
      itemRefs.current[currentIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }, [currentIndex]);

  // Set up intersection observer to detect which video is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index) && index !== currentIndex) {
              setCurrentIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.6 // When 60% of the item is visible
      }
    );
    
    // Observe all short items
    itemRefs.current.forEach(item => {
      if (item) observer.observe(item);
    });
    
    return () => {
      itemRefs.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, [profiles, currentIndex]);

  return (
    <div className="relative h-[calc(100vh-200px)] max-h-[800px] w-full">
      <ScrollArea className="h-full rounded-md border bg-secondary/30">
        <div 
          ref={containerRef}
          className="flex flex-col w-full h-full snap-y snap-mandatory"
        >
          {profiles.map((profile, index) => (
            <div 
              key={profile.id}
              ref={el => itemRefs.current[index] = el}
              data-index={index}
              className="w-full h-full flex-shrink-0 snap-start snap-always"
            >
              <ShortCard 
                profile={profile} 
                isActive={currentIndex === index}
                onComplete={handleNext}
              />
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-10">
        <Button 
          onClick={handlePrevious} 
          size="icon" 
          variant="secondary" 
          className="rounded-full shadow-lg bg-secondary/70 backdrop-blur-sm"
        >
          <ChevronUp className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button 
          onClick={handleNext} 
          size="icon" 
          variant="secondary" 
          className="rounded-full shadow-lg bg-secondary/70 backdrop-blur-sm"
        >
          <ChevronDown className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  );
};

export default ShortsPlayer;
