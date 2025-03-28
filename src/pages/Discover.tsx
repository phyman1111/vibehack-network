
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import VideoResumeCard from "@/components/profile/VideoResumeCard";
import VoicePitchCard from "@/components/profile/VoicePitchCard";
import SearchFilter, { FilterOptions } from "@/components/ui/search-filter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

// Mock data for demonstration
const MOCK_PROFILES = [
  {
    id: "1",
    name: "Alex Johnson",
    title: "Full Stack Developer",
    videoUrl: "https://example.com/video1.mp4",
    audioUrl: "https://example.com/audio1.mp3",
    thumbnailUrl: "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Video+Resume",
    skills: ["React", "Node.js", "TypeScript", "MongoDB"],
    audioDuration: 65,
    isAnonymous: false
  },
  {
    id: "2",
    name: "Jamie Smith",
    title: "UX/UI Designer",
    videoUrl: "https://example.com/video2.mp4",
    audioUrl: "https://example.com/audio2.mp3",
    thumbnailUrl: "https://via.placeholder.com/600x400/60A5FA/FFFFFF?text=Design+Portfolio",
    skills: ["Figma", "UI Design", "User Research", "Prototyping", "Adobe XD"],
    audioDuration: 48,
    isAnonymous: true
  },
  {
    id: "3",
    name: "Taylor Reyes",
    title: "Product Manager",
    videoUrl: "https://example.com/video3.mp4",
    audioUrl: "https://example.com/audio3.mp3",
    thumbnailUrl: "https://via.placeholder.com/600x400/1E40AF/FFFFFF?text=Product+Strategy",
    skills: ["Product Strategy", "Agile", "Roadmapping", "User Stories", "A/B Testing"],
    audioDuration: 72,
    isAnonymous: false
  },
  {
    id: "4",
    name: "Morgan Williams",
    title: "Data Scientist",
    videoUrl: "https://example.com/video4.mp4",
    audioUrl: "https://example.com/audio4.mp3",
    thumbnailUrl: "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Data+Science",
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization", "Statistics"],
    audioDuration: 59,
    isAnonymous: true
  },
  {
    id: "5",
    name: "Jordan Lee",
    title: "Marketing Specialist",
    videoUrl: "https://example.com/video5.mp4",
    audioUrl: "https://example.com/audio5.mp3",
    thumbnailUrl: "https://via.placeholder.com/600x400/60A5FA/FFFFFF?text=Marketing+Strategy",
    skills: ["Digital Marketing", "Content Strategy", "SEO", "Social Media", "Analytics"],
    audioDuration: 68,
    isAnonymous: false
  },
  {
    id: "6",
    name: "Casey Martinez",
    title: "DevOps Engineer",
    videoUrl: "https://example.com/video6.mp4",
    audioUrl: "https://example.com/audio6.mp3",
    thumbnailUrl: "https://via.placeholder.com/600x400/1E40AF/FFFFFF?text=DevOps+Engineer",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Infrastructure as Code"],
    audioDuration: 54,
    isAnonymous: true
  }
];

const Discover = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterOptions>({
    contentType: "all",
    skills: [],
    experience: "all",
    sortBy: "relevance"
  });
  const [filteredProfiles, setFilteredProfiles] = useState(MOCK_PROFILES);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Apply filtering logic
    let filtered = MOCK_PROFILES;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(profile => 
        profile.name.toLowerCase().includes(query) ||
        profile.title.toLowerCase().includes(query) ||
        profile.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }

    // Filter by content type
    if (filters.contentType !== "all") {
      if (filters.contentType === "video") {
        filtered = filtered.filter(profile => !profile.isAnonymous);
      } else if (filters.contentType === "audio") {
        filtered = filtered.filter(profile => !profile.isAnonymous);
      } else if (filters.contentType === "anonymous") {
        filtered = filtered.filter(profile => profile.isAnonymous);
      }
    }

    // Filter by skills
    if (filters.skills.length > 0) {
      filtered = filtered.filter(profile => 
        filters.skills.some(skill => 
          profile.skills.some(profileSkill => 
            profileSkill.toLowerCase().includes(skill.toLowerCase())
          )
        )
      );
    }

    // Apply tab filtering
    if (activeTab === "videos") {
      filtered = filtered.filter(profile => !profile.isAnonymous);
    } else if (activeTab === "voices") {
      filtered = filtered.filter(profile => !profile.isAnonymous);
    } else if (activeTab === "anonymous") {
      filtered = filtered.filter(profile => profile.isAnonymous);
    }

    setFilteredProfiles(filtered);
  }, [searchQuery, filters, activeTab]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (filterOptions: FilterOptions) => {
    setFilters(filterOptions);
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Discover Talent</h1>
          <p className="text-muted-foreground mb-6">
            Browse through video resumes, voice pitches, and anonymous profiles to find the perfect match for your team.
          </p>
          
          <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Profiles</TabsTrigger>
            <TabsTrigger value="videos">Video Resumes</TabsTrigger>
            <TabsTrigger value="voices">Voice Pitches</TabsTrigger>
            <TabsTrigger value="anonymous">Anonymous Talent</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="space-y-3">
                    <Skeleton className="h-48 w-full rounded-md" />
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-1/2" />
                      <Skeleton className="h-4 w-1/3" />
                      <div className="flex gap-2 mt-2">
                        <Skeleton className="h-6 w-16 rounded-full" />
                        <Skeleton className="h-6 w-16 rounded-full" />
                        <Skeleton className="h-6 w-16 rounded-full" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {filteredProfiles.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No profiles match your search criteria.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProfiles.map((profile, index) => (
                      index % 2 === 0 ? (
                        <VideoResumeCard 
                          key={profile.id}
                          id={profile.id}
                          name={profile.name}
                          title={profile.title}
                          videoUrl={profile.videoUrl}
                          thumbnailUrl={profile.thumbnailUrl}
                          skills={profile.skills}
                          isAnonymous={profile.isAnonymous}
                        />
                      ) : (
                        <VoicePitchCard 
                          key={profile.id}
                          id={profile.id}
                          name={profile.name}
                          title={profile.title}
                          audioUrl={profile.audioUrl}
                          skills={profile.skills}
                          duration={profile.audioDuration}
                          isAnonymous={profile.isAnonymous}
                        />
                      )
                    ))}
                  </div>
                )}
              </>
            )}
          </TabsContent>
          
          <TabsContent value="videos" className="mt-0">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="space-y-3">
                    <Skeleton className="h-48 w-full rounded-md" />
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-1/2" />
                      <Skeleton className="h-4 w-1/3" />
                      <div className="flex gap-2 mt-2">
                        <Skeleton className="h-6 w-16 rounded-full" />
                        <Skeleton className="h-6 w-16 rounded-full" />
                        <Skeleton className="h-6 w-16 rounded-full" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProfiles
                  .filter(profile => !profile.isAnonymous)
                  .map(profile => (
                    <VideoResumeCard 
                      key={profile.id}
                      id={profile.id}
                      name={profile.name}
                      title={profile.title}
                      videoUrl={profile.videoUrl}
                      thumbnailUrl={profile.thumbnailUrl}
                      skills={profile.skills}
                      isAnonymous={profile.isAnonymous}
                    />
                  ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="voices" className="mt-0">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="space-y-3">
                    <Skeleton className="h-32 w-full rounded-md" />
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-1/2" />
                      <Skeleton className="h-4 w-1/3" />
                      <div className="flex gap-2 mt-2">
                        <Skeleton className="h-6 w-16 rounded-full" />
                        <Skeleton className="h-6 w-16 rounded-full" />
                        <Skeleton className="h-6 w-16 rounded-full" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProfiles
                  .filter(profile => !profile.isAnonymous)
                  .map(profile => (
                    <VoicePitchCard 
                      key={profile.id}
                      id={profile.id}
                      name={profile.name}
                      title={profile.title}
                      audioUrl={profile.audioUrl}
                      skills={profile.skills}
                      duration={profile.audioDuration}
                      isAnonymous={profile.isAnonymous}
                    />
                  ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="anonymous" className="mt-0">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="space-y-3">
                    <Skeleton className="h-48 w-full rounded-md" />
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-1/2" />
                      <Skeleton className="h-4 w-1/3" />
                      <div className="flex gap-2 mt-2">
                        <Skeleton className="h-6 w-16 rounded-full" />
                        <Skeleton className="h-6 w-16 rounded-full" />
                        <Skeleton className="h-6 w-16 rounded-full" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProfiles
                  .filter(profile => profile.isAnonymous)
                  .map((profile, index) => (
                    index % 2 === 0 ? (
                      <VideoResumeCard 
                        key={profile.id}
                        id={profile.id}
                        name={profile.name}
                        title={profile.title}
                        videoUrl={profile.videoUrl}
                        thumbnailUrl={profile.thumbnailUrl}
                        skills={profile.skills}
                        isAnonymous={profile.isAnonymous}
                      />
                    ) : (
                      <VoicePitchCard 
                        key={profile.id}
                        id={profile.id}
                        name={profile.name}
                        title={profile.title}
                        audioUrl={profile.audioUrl}
                        skills={profile.skills}
                        duration={profile.audioDuration}
                        isAnonymous={profile.isAnonymous}
                      />
                    )
                  ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Discover;
