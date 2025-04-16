
import Layout from "@/components/layout/Layout";
import { useContext } from "react";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FeaturedProfilesSection from "@/components/home/FeaturedProfilesSection";
import AnonymousDemoSection from "@/components/home/AnonymousDemoSection";
import CTASection from "@/components/home/CTASection";
import { AppContext } from "@/App";
import ShortsPreviewSection from "@/components/home/ShortsPreviewSection";

const Index = () => {
  const { isAnonymous, setIsAnonymous } = useContext(AppContext);
  
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Shorts Preview Section */}
      <ShortsPreviewSection />
      
      {/* Featured Profiles Section */}
      <FeaturedProfilesSection />
      
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
