
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Volume2, Pause, Bookmark, Share2, ThumbsUp, Waveform } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

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

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', updateProgress);
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
        setProgress(0);
        setCurrentTime(0);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateProgress);
        audioRef.current.removeEventListener('ended', () => {
          setIsPlaying(false);
          setProgress(0);
          setCurrentTime(0);
        });
      }
    };
  }, []);

  const updateProgress = () => {
    if (audioRef.current) {
      const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(percent);
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleLike = () => {
    setLikesCount(likesCount + 1);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <Card className="overflow-hidden interactive-card bg-secondary/50">
      <audio ref={audioRef} src={audioUrl} />
      <div className="h-32 bg-gradient-to-r from-vibehire-primary/20 to-vibehire-accent/20 flex items-center justify-center">
        <div className="relative p-4 w-full h-full flex flex-col justify-center">
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            {Array.from({ length: 40 }).map((_, i) => (
              <div 
                key={i}
                className="w-px bg-vibehire-primary/50"
                style={{ 
                  height: `${20 + Math.sin(i * 0.5) * 20}px`,
                  marginLeft: '3px'
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
              <span>{formatTime(duration)}</span>
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
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
            >
              <Share2 className="h-5 w-5 text-muted-foreground" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VoicePitchCard;
