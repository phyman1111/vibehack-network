
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { getRandomProfiles } from "@/data/dummyProfiles";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FeaturedProfilesSection from "@/components/home/FeaturedProfilesSection";
import AnonymousDemoSection from "@/components/home/AnonymousDemoSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  
  // Get a few random profiles for the featured section
  const featuredVideoProfiles = getRandomProfiles(3).filter(p => p.videoUrl);
  const featuredAudioProfiles = getRandomProfiles(3).filter(p => p.audioUrl);

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Featured Profiles Section */}
      <FeaturedProfilesSection 
        featuredVideoProfiles={featuredVideoProfiles}
        featuredAudioProfiles={featuredAudioProfiles}
      />
      
      {/* Anonymous Mode Demo */}
      <AnonymousDemoSection 
        isAnonymous={isAnonymous}
        setIsAnonymous={setIsAnonymous}
      />
      
      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default Index;
