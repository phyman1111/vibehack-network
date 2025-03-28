
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import VideoResumeCard from "@/components/profile/VideoResumeCard";
import VoicePitchCard from "@/components/profile/VoicePitchCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { dummyProfiles } from "@/data/dummyProfiles";

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filterProfiles = () => {
    return dummyProfiles.filter(profile => {
      if (selectedTab === "video" && !profile.videoUrl) return false;
      if (selectedTab === "audio" && !profile.audioUrl) return false;
      
      const searchLower = searchTerm.toLowerCase();
      return (
        profile.name.toLowerCase().includes(searchLower) ||
        profile.title.toLowerCase().includes(searchLower) ||
        profile.skills.some(skill => skill.toLowerCase().includes(searchLower))
      );
    });
  };

  const filteredProfiles = filterProfiles();
  const totalPages = Math.ceil(filteredProfiles.length / itemsPerPage);
  const paginatedProfiles = filteredProfiles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
    setCurrentPage(1);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Discover Talent</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by name, title, or skills..."
                className="pl-10"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" className="md:w-auto">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Advanced
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" onValueChange={handleTabChange}>
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Profiles</TabsTrigger>
            <TabsTrigger value="video">Video Resumes</TabsTrigger>
            <TabsTrigger value="audio">Voice Pitches</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProfiles.map(profile => (
                profile.videoUrl ? (
                  <VideoResumeCard
                    key={profile.id}
                    id={profile.id}
                    name={profile.name}
                    title={profile.title}
                    videoUrl={profile.videoUrl}
                    thumbnailUrl={profile.thumbnailUrl || ''}
                    skills={profile.skills}
                    isAnonymous={profile.isAnonymous}
                  />
                ) : (
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
                )
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="video" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProfiles
                .filter(profile => profile.videoUrl)
                .map(profile => (
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
          </TabsContent>
          
          <TabsContent value="audio" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProfiles
                .filter(profile => profile.audioUrl)
                .map(profile => (
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
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              
              <div className="flex items-center space-x-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  // Show 5 pages around current page
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      className="w-10 h-10 p-0"
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </Button>
                  );
                })}
                
                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <>
                    <span className="mx-1">...</span>
                    <Button
                      variant="outline"
                      className="w-10 h-10 p-0"
                      onClick={() => setCurrentPage(totalPages)}
                    >
                      {totalPages}
                    </Button>
                  </>
                )}
              </div>
              
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        )}
        
        <div className="mt-6 text-center text-sm text-muted-foreground">
          Showing {paginatedProfiles.length} of {filteredProfiles.length} profiles
        </div>
      </div>
    </Layout>
  );
};

export default Discover;
