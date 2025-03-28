
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import VideoResumeCard from "@/components/profile/VideoResumeCard";
import VoicePitchCard from "@/components/profile/VoicePitchCard";
import { ProfileType } from "@/types/profile";

interface FeaturedProfilesSectionProps {
  featuredVideoProfiles: ProfileType[];
  featuredAudioProfiles: ProfileType[];
}

const FeaturedProfilesSection = ({ 
  featuredVideoProfiles, 
  featuredAudioProfiles 
}: FeaturedProfilesSectionProps) => {
  const navigate = useNavigate();

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Talent</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover top professionals showcasing their skills through video resumes and voice pitches
          </p>
          <Button 
            onClick={() => navigate("/discover")}
            variant="outline" 
            className="border-vibehire-primary text-vibehire-primary hover:bg-vibehire-primary/10 mb-8"
          >
            View All Talent
          </Button>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6">Video Resumes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideoProfiles.map(profile => (
              <VideoResumeCard
                key={profile.id}
                id={profile.id}
                name={profile.name}
                title={profile.title}
                videoUrl={profile.videoUrl || ''}
                thumbnailUrl={profile.thumbnailUrl || ''}
                skills={profile.skills}
                isAnonymous={profile.isAnonymous}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6">Voice Pitches</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAudioProfiles.map(profile => (
              <VoicePitchCard
                key={profile.id}
                id={profile.id}
                name={profile.name}
                title={profile.title}
                audioUrl={profile.audioUrl || ''}
                skills={profile.skills}
                duration={profile.audioDuration || 60}
                isAnonymous={profile.isAnonymous}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProfilesSection;
