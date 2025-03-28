
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Briefcase, Clock } from "lucide-react";
import { useState } from "react";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const jobListings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA (Remote)",
      type: "Full-time",
      posted: "2 days ago",
      salary: "$120,000 - $150,000",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      description: "We're looking for an experienced Frontend Developer to join our growing team...",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "InnoSoft",
      location: "New York, NY (Hybrid)",
      type: "Full-time",
      posted: "1 week ago",
      salary: "$90,000 - $120,000",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      description: "Join our creative team to design beautiful and functional interfaces...",
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "DataDynamics",
      location: "Remote",
      type: "Full-time",
      posted: "3 days ago",
      salary: "$130,000 - $160,000",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      description: "Help us build the next generation of data-driven solutions...",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "CloudNative",
      location: "Seattle, WA (On-site)",
      type: "Full-time",
      posted: "Just now",
      salary: "$140,000 - $170,000",
      skills: ["AWS", "Kubernetes", "Docker", "CI/CD"],
      description: "Scale our infrastructure and improve our deployment processes...",
    },
    {
      id: 5,
      title: "Mobile Developer",
      company: "AppWorks",
      location: "Austin, TX (Remote)",
      type: "Contract",
      posted: "5 days ago",
      salary: "$80 - $100 per hour",
      skills: ["React Native", "iOS", "Android", "Firebase"],
      description: "Develop cross-platform mobile applications for our clients...",
    },
    {
      id: 6,
      title: "Backend Engineer",
      company: "ServerSide",
      location: "Remote",
      type: "Full-time",
      posted: "1 day ago",
      salary: "$110,000 - $140,000",
      skills: ["Node.js", "Express", "MongoDB", "GraphQL"],
      description: "Build scalable APIs and microservices for our growing platform...",
    },
  ];

  const filteredJobs = jobListings.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Find Jobs</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by title, company, skills..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="default" className="bg-blue-gradient hover:opacity-90">
              Search Jobs
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Card key={job.id} className="interactive-card bg-secondary/50">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold mb-1">{job.title}</h2>
                      <p className="text-vibehire-primary font-medium mb-2">{job.company}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.posted}
                        </div>
                      </div>
                      
                      <p className="text-foreground mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className="px-2 py-1 bg-vibehire-primary/10 text-vibehire-primary rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <p className="font-medium">{job.salary}</p>
                    </div>
                    
                    <div className="flex md:flex-col gap-2">
                      <Button className="bg-blue-gradient hover:opacity-90 text-white">
                        Apply Now
                      </Button>
                      <Button variant="outline" className="border-vibehire-primary text-vibehire-primary hover:bg-vibehire-primary/10">
                        Save Job
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No jobs found matching your criteria.</p>
              <p className="mt-2">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Jobs;
