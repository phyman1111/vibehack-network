
import Layout from "@/components/layout/Layout";
import ShortsPlayer from "@/components/shorts/ShortsPlayer";
import { useProfiles } from "@/hooks/use-profiles";

const Shorts = () => {
  const { profiles } = useProfiles();
  
  // Filter to only get profiles with video content
  const videoProfiles = profiles.filter(profile => profile.videoUrl);
  
  return (
    <Layout>
      <div className="py-8">
        <div className="container max-w-screen-xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">VibeHire Shorts</h1>
            <p className="text-muted-foreground">Discover talent with short video pitches</p>
          </div>
          
          {videoProfiles.length > 0 ? (
            <ShortsPlayer profiles={videoProfiles} />
          ) : (
            <div className="text-center py-20 bg-muted/20 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">No video profiles available</h2>
              <p className="text-muted-foreground">
                Create a profile with a video to see it here!
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Shorts;
