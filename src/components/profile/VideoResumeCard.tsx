
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Volume2, Bookmark, Share2, ThumbsUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface VideoResumeCardProps {
  id: string;
  name: string;
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
  skills: string[];
  isAnonymous?: boolean;
}

const VideoResumeCard = ({ 
  id, 
  name, 
  title, 
  videoUrl, 
  thumbnailUrl, 
  skills,
  isAnonymous = false
}: VideoResumeCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likesCount, setLikesCount] = useState(Math.floor(Math.random() * 100));
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Reset video error state when videoUrl changes
    setVideoError(false);
    setIsLoading(true);
    setIsPlaying(false);
  }, [videoUrl]);

  const togglePlay = () => {
    if (videoError) {
      toast({
        title: "Video Unavailable",
        description: "This video file cannot be played. Try another profile.",
        variant: "destructive",
      });
      return;
    }

    if (isLoading) {
      toast({
        title: "Loading Video",
        description: "The video is still loading. Please wait a moment.",
      });
      return;
    }

    setIsPlaying(!isPlaying);
    
    if (!isPlaying) {
      videoRef.current?.play().catch(error => {
        console.error("Play failed:", error);
        setVideoError(true);
        setIsPlaying(false);
        toast({
          title: "Video Playback Failed",
          description: "This video cannot be played. Please try another profile.",
          variant: "destructive",
        });
      });
    } else {
      videoRef.current?.pause();
    }
  };

  const handleVideoError = () => {
    setVideoError(true);
    setIsPlaying(false);
    setIsLoading(false);
    console.log("Video error for:", videoUrl);
  };
  
  const handleVideoLoaded = () => {
    setIsLoading(false);
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
      description: `You liked ${isAnonymous ? "an anonymous profile" : name}'s video resume.`,
    });
  };

  const handleShare = () => {
    toast({
      title: "Share Profile",
      description: `Sharing options for ${isAnonymous ? "this anonymous profile" : name} will appear soon.`,
    });
  };

  return (
    <Card className="overflow-hidden interactive-card bg-secondary/50">
      <div className="relative aspect-video bg-gray-900 overflow-hidden">
        {!isPlaying ? (
          <>
            <div className="w-full h-full bg-gradient-to-br from-vibehire-primary/20 to-vibehire-accent/20 flex items-center justify-center">
              {thumbnailUrl ? (
                <img 
                  src={thumbnailUrl} 
                  alt={isAnonymous ? "Anonymous Professional" : name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                <Button 
                  onClick={togglePlay} 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full bg-vibehire-primary/20 border-vibehire-primary/50 hover:bg-vibehire-primary/30 backdrop-blur-sm"
                  disabled={isLoading && !videoError}
                >
                  <Play className="h-5 w-5 text-white" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-800">
            <video 
              ref={videoRef}
              controls 
              autoPlay
              className="w-full h-full object-cover"
              onError={handleVideoError}
              onPause={() => setIsPlaying(false)}
              onLoadedData={handleVideoLoaded}
              onEnded={() => setIsPlaying(false)}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        
        {/* Hidden preload video for faster playback */}
        <video 
          src={videoUrl} 
          className="hidden" 
          preload="metadata"
          onError={handleVideoError}
          onLoadedData={handleVideoLoaded}
        />
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
              onClick={handleShare}
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

export default VideoResumeCard;
