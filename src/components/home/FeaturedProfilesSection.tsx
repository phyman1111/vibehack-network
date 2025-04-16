
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import VideoResumeCard from "@/components/profile/VideoResumeCard";
import VoicePitchCard from "@/components/profile/VoicePitchCard";
import { ProfileType } from "@/types/profile";
import { useProfiles } from "@/hooks/use-profiles";
import { dummyProfiles } from "@/data/dummyProfiles";
import ProfileForm from "@/components/profile/ProfileForm";

const FeaturedProfilesSection = () => {
  const navigate = useNavigate();
  const { profiles, getFeaturedVideoProfiles, getFeaturedAudioProfiles } = useProfiles();

  // First try to use stored profiles, then fall back to dummy profiles if empty
  const featuredVideoProfiles = profiles.length > 0 
    ? getFeaturedVideoProfiles() 
    : dummyProfiles.filter(p => p.videoUrl).slice(0, 3);

  const featuredAudioProfiles = profiles.length > 0
    ? getFeaturedAudioProfiles()
    : dummyProfiles.filter(p => p.audioUrl).slice(0, 3);

  const hasProfiles = featuredVideoProfiles.length > 0 || featuredAudioProfiles.length > 0;

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Talent</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {hasProfiles 
              ? "Discover top professionals showcasing their skills through video resumes and voice pitches" 
              : "Create your first profile to showcase your talent"}
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              onClick={() => navigate("/discover")}
              variant="outline" 
              className="border-vibehire-primary text-vibehire-primary hover:bg-vibehire-primary/10"
            >
              View All Talent
            </Button>
            <ProfileForm />
          </div>
        </div>
        
        {hasProfiles ? (
          <>
            {featuredVideoProfiles.length > 0 && (
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
            )}

            {featuredAudioProfiles.length > 0 && (
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
            )}
          </>
        ) : (
          <div className="text-center py-12 bg-muted/20 rounded-lg">
            <p className="text-lg mb-6">No profiles available. Create your first profile!</p>
            <ProfileForm />
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProfilesSection;
