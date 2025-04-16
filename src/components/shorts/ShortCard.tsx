
import { useState, useRef, useEffect } from "react";
import { ProfileType } from "@/types/profile";
import { Card } from "@/components/ui/card";
import { Play, Pause, ThumbsUp, Share2, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useLikes } from "@/hooks/use-likes";
import { useToast } from "@/hooks/use-toast";

interface ShortCardProps {
  profile: ProfileType;
  isActive: boolean;
  onComplete: () => void;
}

const ShortCard = ({ profile, isActive, onComplete }: ShortCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [videoError, setVideoError] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();
  const { toggleLike, isLiked } = useLikes();
  const [isProfileLiked, setIsProfileLiked] = useState(false);
  
  // Check if this profile is liked
  useEffect(() => {
    setIsProfileLiked(isLiked(profile.id));
  }, [profile.id, isLiked]);

  // Handle video playback
  useEffect(() => {
    if (videoRef.current) {
      if (isActive && !videoError) {
        // Reset states when becoming active
        setIsLoading(true);
        setProgress(0);
        setCurrentTime(0);
        
        // Try to play video when it becomes active
        const playVideo = async () => {
          try {
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
              await videoRef.current.play();
              setIsPlaying(true);
            }
          } catch (error) {
            console.error("Auto-play failed:", error);
            setIsPlaying(false);
            setVideoError(true);
          }
        };
        
        playVideo();
      } else {
        // Pause when not active
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isActive, videoError]);
  
  // Set up progress monitoring
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const updateProgress = () => {
      const current = video.currentTime;
      const duration = video.duration;
      if (duration) {
        setProgress((current / duration) * 100);
        setCurrentTime(current);
      }
    };
    
    const handleLoadedData = () => {
      setVideoDuration(video.duration);
      setIsLoading(false);
    };
    
    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(100);
      // Loop the video
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {
          setVideoError(true);
        });
      }
    };
    
    const handleError = () => {
      setVideoError(true);
      setIsPlaying(false);
      setIsLoading(false);
      toast({
        title: "Video playback error",
        description: "There was a problem playing this video.",
        variant: "destructive"
      });
    };
    
    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("error", handleError);
    
    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("error", handleError);
    };
  }, [toast]);
  
  const togglePlay = () => {
    if (videoError) {
      toast({
        title: "Video Error",
        description: "This video cannot be played.",
        variant: "destructive"
      });
      return;
    }
    
    if (isLoading) {
      toast({
        description: "Video is still loading..."
      });
      return;
    }
    
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(error => {
          console.error("Play failed:", error);
          setVideoError(true);
          toast({
            title: "Playback Error",
            description: "Could not play this video.",
            variant: "destructive"
          });
        });
      }
      
      setIsPlaying(!isPlaying);
    }
  };
  
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  
  const handleLike = () => {
    const newLikeState = toggleLike(profile.id);
    setIsProfileLiked(newLikeState);
    
    toast({
      title: newLikeState ? "Profile liked" : "Like removed",
      description: `You ${newLikeState ? "liked" : "unliked"} ${profile.isAnonymous ? "an anonymous profile" : profile.name}'s video.`,
    });
  };
  
  const handleShare = () => {
    toast({
      title: "Share",
      description: "Sharing functionality will be available soon!"
    });
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <Card className="w-full h-full overflow-hidden relative border-0 rounded-none bg-background flex items-center justify-center">
      <div className="relative w-full h-full max-w-md mx-auto flex items-center justify-center bg-black">
        {/* Video Element */}
        <video
          ref={videoRef}
          src={profile.videoUrl}
          className="absolute w-full h-full object-cover"
          playsInline
          muted={isMuted}
          loop
          onError={() => setVideoError(true)}
        />
        
        {/* Loading Overlay */}
        {isLoading && !videoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
            <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
          </div>
        )}
        
        {/* Error Overlay */}
        {videoError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-10">
            <p className="text-white mb-2">Video unavailable</p>
            <Button onClick={onComplete} variant="secondary">Skip</Button>
          </div>
        )}
        
        {/* Controls Overlay */}
        <div className="absolute inset-0 flex flex-col">
          {/* Top gradient overlay */}
          <div className="w-full h-24 bg-gradient-to-b from-black/70 to-transparent"></div>
          
          {/* Play/Pause tap area (middle) */}
          <div className="flex-1" onClick={togglePlay}></div>
          
          {/* Bottom controls with gradient overlay */}
          <div className="w-full bg-gradient-to-t from-black/70 to-transparent p-4">
            {/* Progress bar */}
            <div className="mb-4">
              <Progress value={progress} className="h-1" />
              <div className="flex justify-between text-white/80 text-xs mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(videoDuration)}</span>
              </div>
            </div>
            
            {/* Profile info */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-white font-semibold truncate">
                  {profile.isAnonymous ? "Anonymous Professional" : profile.name}
                </h3>
                <p className="text-white/70 text-sm truncate">{profile.title}</p>
              </div>
              
              {/* Control buttons */}
              <div className="flex items-center gap-3">
                <Button 
                  onClick={togglePlay} 
                  size="icon" 
                  variant="ghost" 
                  className="rounded-full text-white hover:bg-white/20"
                >
                  {isPlaying ? 
                    <Pause className="h-5 w-5" /> : 
                    <Play className="h-5 w-5" />
                  }
                </Button>
                
                <Button 
                  onClick={toggleMute} 
                  size="icon" 
                  variant="ghost" 
                  className="rounded-full text-white hover:bg-white/20"
                >
                  {isMuted ? 
                    <VolumeX className="h-5 w-5" /> : 
                    <Volume2 className="h-5 w-5" />
                  }
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Side actions */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
          <Button 
            onClick={handleLike} 
            size="icon" 
            variant="ghost" 
            className={`rounded-full bg-black/30 backdrop-blur-sm ${isProfileLiked ? 'text-vibehire-primary' : 'text-white'}`}
          >
            <ThumbsUp className={`h-5 w-5 ${isProfileLiked ? 'fill-vibehire-primary' : ''}`} />
          </Button>
          
          <Button 
            onClick={handleShare} 
            size="icon" 
            variant="ghost" 
            className="rounded-full bg-black/30 backdrop-blur-sm text-white"
          >
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ShortCard;
