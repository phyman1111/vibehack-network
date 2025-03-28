
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time"
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time"
    },
    {
      id: 4,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time"
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "Data",
      location: "Remote",
      type: "Full-time"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We're committed to pushing boundaries and redefining what's possible in professional networking."
    },
    {
      title: "Inclusivity",
      description: "We believe in creating a level playing field where skills and talents shine regardless of background."
    },
    {
      title: "Transparency",
      description: "We foster honest communication with our team members, users, and partners."
    },
    {
      title: "User-Centered",
      description: "Everything we build is designed with our users' needs and experiences in mind."
    }
  ];

  return (
    <Layout>
      <div className="container py-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help us revolutionize professional networking through innovative video and voice technologies
          </p>
        </div>
        
        {/* Mission Section */}
        <div className="mb-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At VibeHire, we're transforming how professionals connect in the digital age. We believe in showcasing 
              authentic talent beyond traditional resumes, creating meaningful connections between professionals and 
              opportunities.
            </p>
            <p className="text-lg text-muted-foreground">
              We're building a platform that values skills over background, personality over paperwork, and authentic 
              connections over transactional networking.
            </p>
          </div>
          <div className="bg-gradient-to-r from-vibehire-primary/30 to-vibehire-accent/30 p-10 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Why join us?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-vibehire-primary/20 p-1 rounded mr-3 mt-1">
                  <ArrowRight className="h-4 w-4 text-vibehire-primary" />
                </div>
                <span>Work on cutting-edge technology that's changing how people find opportunities</span>
              </li>
              <li className="flex items-start">
                <div className="bg-vibehire-primary/20 p-1 rounded mr-3 mt-1">
                  <ArrowRight className="h-4 w-4 text-vibehire-primary" />
                </div>
                <span>Flexible remote-first environment with a global team</span>
              </li>
              <li className="flex items-start">
                <div className="bg-vibehire-primary/20 p-1 rounded mr-3 mt-1">
                  <ArrowRight className="h-4 w-4 text-vibehire-primary" />
                </div>
                <span>Competitive compensation and equity packages</span>
              </li>
              <li className="flex items-start">
                <div className="bg-vibehire-primary/20 p-1 rounded mr-3 mt-1">
                  <ArrowRight className="h-4 w-4 text-vibehire-primary" />
                </div>
                <span>Learning and development budget to grow your skills</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-secondary/50 interactive-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <Separator className="my-16" />
        
        {/* Open Positions */}
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center">Open Positions</h2>
          
          <div className="grid grid-cols-1 gap-4 mb-8">
            {openPositions.map((position) => (
              <Card key={position.id} className="interactive-card bg-secondary/50 hover:bg-secondary/70 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {position.location}
                        </span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <Button className="mt-4 md:mt-0 bg-blue-gradient hover:opacity-90 text-white">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-lg mb-6">Don't see a role that fits your skills?</p>
            <Button className="bg-blue-gradient hover:opacity-90 text-white">
              Submit General Application
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
