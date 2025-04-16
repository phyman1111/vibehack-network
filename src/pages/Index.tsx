
import Layout from "@/components/layout/Layout";
import { useState, useContext } from "react";
import { getRandomProfiles } from "@/data/dummyProfiles";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FeaturedProfilesSection from "@/components/home/FeaturedProfilesSection";
import AnonymousDemoSection from "@/components/home/AnonymousDemoSection";
import CTASection from "@/components/home/CTASection";
import { AppContext } from "@/App";
import { ProfileType } from "@/types/profile";

const Index = () => {
  const { isAnonymous, setIsAnonymous } = useContext(AppContext);
  
  // Get a few random profiles for the featured section and convert them to ProfileType
  const featuredVideoProfiles = getRandomProfiles(3)
    .filter(p => p.videoUrl)
    .map(p => ({ ...p, id: p.id }) as ProfileType);
    
  const featuredAudioProfiles = getRandomProfiles(3)
    .filter(p => p.audioUrl)
    .map(p => ({ ...p, id: p.id }) as ProfileType);

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
