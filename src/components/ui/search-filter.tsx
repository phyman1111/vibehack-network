
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { Search, Filter, X } from "lucide-react";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SkillTag from "../profile/SkillTag";

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilter: (filters: FilterOptions) => void;
}

export interface FilterOptions {
  contentType: string;
  skills: string[];
  experience: string;
  sortBy: string;
}

const POPULAR_SKILLS = [
  "React", "JavaScript", "TypeScript", "CSS", "HTML", 
  "Node.js", "Python", "Java", "UX Design", "UI Design",
  "Product Management", "Marketing", "SEO", "Content Writing", 
  "Data Analysis", "Machine Learning", "Project Management"
];

const SearchFilter = ({ onSearch, onFilter }: SearchFilterProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterOptions>({
    contentType: "all",
    skills: [],
    experience: "all",
    sortBy: "relevance"
  });
  const [skillInput, setSkillInput] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const addSkill = (skill: string) => {
    if (!filters.skills.includes(skill) && skill.trim()) {
      const newSkills = [...filters.skills, skill];
      handleFilterChange('skills', newSkills);
    }
    setSkillInput("");
  };

  const removeSkill = (skillToRemove: string) => {
    const newSkills = filters.skills.filter(skill => skill !== skillToRemove);
    handleFilterChange('skills', newSkills);
  };

  const clearFilters = () => {
    const resetFilters = {
      contentType: "all",
      skills: [],
      experience: "all",
      sortBy: "relevance"
    };
    setFilters(resetFilters);
    onFilter(resetFilters);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, skills, or keywords..."
            className="pl-10 w-full"
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        <div className="flex gap-2">
          <Button onClick={handleSearch} className="bg-blue-gradient hover:opacity-90">
            Search
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filters
                {(filters.contentType !== "all" || 
                  filters.skills.length > 0 || 
                  filters.experience !== "all" || 
                  filters.sortBy !== "relevance") && (
                  <span className="ml-1 w-5 h-5 rounded-full bg-vibehire-primary text-white text-xs flex items-center justify-center">
                    {filters.skills.length + 
                      (filters.contentType !== "all" ? 1 : 0) + 
                      (filters.experience !== "all" ? 1 : 0) + 
                      (filters.sortBy !== "relevance" ? 1 : 0)}
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Filters</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 text-sm text-muted-foreground hover:text-foreground"
                    onClick={clearFilters}
                  >
                    Clear All
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Content Type</label>
                  <Select 
                    value={filters.contentType} 
                    onValueChange={(value) => handleFilterChange('contentType', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Content" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Content</SelectItem>
                      <SelectItem value="video">Video Resumes</SelectItem>
                      <SelectItem value="audio">Voice Pitches</SelectItem>
                      <SelectItem value="anonymous">Anonymous Profiles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Skills</label>
                  <div className="flex gap-2">
                    <Input
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      placeholder="Add skill..."
                      className="flex-grow"
                      onKeyDown={(e) => e.key === 'Enter' && addSkill(skillInput)}
                    />
                    <Button 
                      variant="outline" 
                      onClick={() => addSkill(skillInput)}
                      disabled={!skillInput.trim()}
                    >
                      Add
                    </Button>
                  </div>
                  
                  {filters.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {filters.skills.map(skill => (
                        <SkillTag 
                          key={skill} 
                          skill={skill} 
                          onRemove={() => removeSkill(skill)} 
                          removable
                        />
                      ))}
                    </div>
                  )}
                  
                  <div className="mt-2">
                    <p className="text-xs text-muted-foreground mb-1">Popular skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {POPULAR_SKILLS.slice(0, 8).map(skill => (
                        <Button 
                          key={skill} 
                          variant="ghost" 
                          size="sm" 
                          className="h-6 text-xs px-2 py-0"
                          onClick={() => addSkill(skill)}
                          disabled={filters.skills.includes(skill)}
                        >
                          {skill}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Experience Level</label>
                  <Select 
                    value={filters.experience} 
                    onValueChange={(value) => handleFilterChange('experience', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Experience Levels" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Experience Levels</SelectItem>
                      <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                      <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                      <SelectItem value="senior">Senior Level (6+ years)</SelectItem>
                      <SelectItem value="executive">Executive (10+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Sort By</label>
                  <Select 
                    value={filters.sortBy} 
                    onValueChange={(value) => handleFilterChange('sortBy', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by relevance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="recent">Most Recent</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="trending">Trending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      {(filters.contentType !== "all" || 
        filters.skills.length > 0 || 
        filters.experience !== "all" || 
        filters.sortBy !== "relevance") && (
        <div className="flex flex-wrap items-center gap-2 p-2 bg-secondary/30 rounded-md">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          
          {filters.contentType !== "all" && (
            <div className="flex items-center gap-1 px-2 py-1 bg-vibehire-primary/10 text-vibehire-primary rounded-full text-xs">
              <span>Content: {filters.contentType}</span>
              <Button 
                variant="ghost"
                size="icon"
                className="h-4 w-4 rounded-full p-0 opacity-70 hover:opacity-100 hover:bg-vibehire-primary/20"
                onClick={() => handleFilterChange('contentType', 'all')}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          )}
          
          {filters.experience !== "all" && (
            <div className="flex items-center gap-1 px-2 py-1 bg-vibehire-primary/10 text-vibehire-primary rounded-full text-xs">
              <span>Experience: {filters.experience}</span>
              <Button 
                variant="ghost"
                size="icon"
                className="h-4 w-4 rounded-full p-0 opacity-70 hover:opacity-100 hover:bg-vibehire-primary/20"
                onClick={() => handleFilterChange('experience', 'all')}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          )}
          
          {filters.sortBy !== "relevance" && (
            <div className="flex items-center gap-1 px-2 py-1 bg-vibehire-primary/10 text-vibehire-primary rounded-full text-xs">
              <span>Sort: {filters.sortBy}</span>
              <Button 
                variant="ghost"
                size="icon"
                className="h-4 w-4 rounded-full p-0 opacity-70 hover:opacity-100 hover:bg-vibehire-primary/20"
                onClick={() => handleFilterChange('sortBy', 'relevance')}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          )}
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="ml-auto h-7 text-xs text-muted-foreground hover:text-foreground"
            onClick={clearFilters}
          >
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
