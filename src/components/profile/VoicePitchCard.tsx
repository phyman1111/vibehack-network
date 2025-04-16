import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Volume2, Pause, Bookmark, Share2, ThumbsUp, Trash2, Music } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useProfiles } from "@/hooks/use-profiles";

interface VoicePitchCardProps {
  id: string;
  name: string;
  title: string;
  audioUrl: string;
  skills: string[];
  duration: number; // in seconds
  isAnonymous?: boolean;
}

const VoicePitchCard = ({ 
  id, 
  name, 
  title, 
  audioUrl, 
  skills,
  duration,
  isAnonymous = false
}: VoicePitchCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [likesCount, setLikesCount] = useState(Math.floor(Math.random() * 50));
  const { toast } = useToast();
  const [audioError, setAudioError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { deleteProfile } = useProfiles();
  
  useEffect(() => {
    // Create audio element
    const audio = new Audio(audioUrl);
    audioRef.current = audio;
    
    // Reset states when audioUrl changes
    setAudioError(false);
    setIsLoading(true);
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    
    // Add event listeners
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleAudioEnd);
    audio.addEventListener('error', handleAudioError);
    audio.addEventListener('loadeddata', handleAudioLoaded);
    
    // Preload audio metadata
    audio.preload = 'metadata';
    
    // Clean up
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleAudioEnd);
      audio.removeEventListener('error', handleAudioError);
      audio.removeEventListener('loadeddata', handleAudioLoaded);
      audio.pause();
      audio.src = '';
    };
  }, [audioUrl]);

  const handleAudioEnd = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };

  const handleAudioError = (e: Event) => {
    console.error("Audio error:", e);
    setAudioError(true);
    setIsPlaying(false);
    setIsLoading(false);
    console.log("Audio error for:", audioUrl);
  };
  
  const handleAudioLoaded = () => {
    setIsLoading(false);
  };

  const updateProgress = () => {
    if (audioRef.current) {
      const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(percent);
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const togglePlay = () => {
    if (audioError) {
      toast({
        title: "Hey! This is just a demo",
        description: "This audio file is a placeholder for demonstration purposes.",
        variant: "default",
      });
      return;
    }

    if (isLoading) {
      toast({
        title: "Loading Audio",
        description: "The audio is still loading. Please wait a moment.",
      });
      return;
    }

    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current?.play();
      if (playPromise) {
        playPromise.catch(error => {
          console.error("Play failed:", error);
          setAudioError(true);
          setIsPlaying(false);
          toast({
            title: "Hey! This is just a demo",
            description: "This audio file is a placeholder for demonstration purposes.",
            variant: "default",
          });
        });
        setIsPlaying(true);
      }
    }
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast({
      title: isBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      description: `${isAnonymous ? "Anonymous profile" : name} has been ${isBookmarked ? "removed from" : "added to"} your bookmarks.`,
    });
  };

  const handleLike = () => {
    setLikesCount(likesCount + 1);
    toast({
      title: "Profile liked",
      description: `You liked ${isAnonymous ? "an anonymous profile" : name}'s voice pitch.`,
    });
  };
  
  const handleShare = () => {
    toast({
      title: "Share Profile",
      description: `Sharing options for ${isAnonymous ? "this anonymous profile" : name} will appear soon.`,
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleDelete = () => {
    deleteProfile(id);
  };

  return (
    <Card className="overflow-hidden interactive-card bg-secondary/50">
      <div className="h-32 bg-gradient-to-r from-vibehire-primary/20 to-vibehire-accent/20 flex items-center justify-center">
        <div className="relative p-4 w-full h-full flex flex-col justify-center">
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            {Array.from({ length: 40 }).map((_, i) => (
              <div 
                key={i}
                className="w-px bg-vibehire-primary/50"
                style={{ 
                  height: `${20 + Math.sin(i * 0.5) * 20}px`,
                  marginLeft: '3px',
                  animation: isPlaying ? `pulse 1s ease-in-out ${i * 0.05}s infinite alternate` : 'none'
                }}
              ></div>
            ))}
          </div>
          
          <div className="flex items-center justify-center z-10">
            <Button 
              onClick={togglePlay} 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-vibehire-primary/20 border-vibehire-primary/50 hover:bg-vibehire-primary/30 backdrop-blur-sm"
              disabled={isLoading && !audioError}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 text-white" />
              ) : (
                <Volume2 className="h-5 w-5 text-white" />
              )}
            </Button>
          </div>
          
          <div className="mt-4 z-10">
            <Progress value={progress} className="h-1.5" />
            <div className="flex justify-between mt-1 text-xs text-foreground/70">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(audioRef.current?.duration || duration)}</span>
            </div>
          </div>
        </div>
      </div>
      <CardContent className="pt-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg mb-1">
              {isAnonymous ? "Anonymous Professional" : name}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">{title}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.slice(0, 3).map((skill) => (
                <span 
                  key={skill} 
                  className="px-2 py-1 bg-vibehire-primary/10 text-vibehire-primary rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
              {skills.length > 3 && (
                <span className="px-2 py-1 bg-muted/30 text-muted-foreground rounded-full text-xs">
                  +{skills.length - 3} more
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full" 
              onClick={toggleBookmark}
            >
              <Bookmark 
                className={`h-5 w-5 ${isBookmarked ? 'fill-vibehire-primary text-vibehire-primary' : 'text-muted-foreground'}`} 
              />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full" 
              onClick={handleLike}
            >
              <ThumbsUp className="h-5 w-5 text-muted-foreground" />
              <span className="sr-only">Like</span>
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="h-5 w-5" />
                  <span className="sr-only">Delete</span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete this profile?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete this voice pitch profile.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </CardContent>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse {
          0% {
            height: 10px;
          }
          100% {
            height: 40px;
          }
        }
      `}} />
    </Card>
  );
};

export default VoicePitchCard;
