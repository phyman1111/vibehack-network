
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ProfileType } from "@/types/profile";
import { v4 as uuidv4 } from "uuid";
import { useToast } from "@/hooks/use-toast";

interface ProfilesContextType {
  profiles: ProfileType[];
  addProfile: (profile: Omit<ProfileType, "id">) => string;
  updateProfile: (id: string, profile: Partial<ProfileType>) => void;
  deleteProfile: (id: string) => void;
  getFeaturedVideoProfiles: () => ProfileType[];
  getFeaturedAudioProfiles: () => ProfileType[];
}

const ProfilesContext = createContext<ProfilesContextType | undefined>(undefined);

export const useProfiles = () => {
  const context = useContext(ProfilesContext);
  if (!context) {
    throw new Error("useProfiles must be used within a ProfilesProvider");
  }
  return context;
};

interface ProfilesProviderProps {
  children: ReactNode;
}

export const ProfilesProvider = ({ children }: ProfilesProviderProps) => {
  const [profiles, setProfiles] = useState<ProfileType[]>([]);
  const { toast } = useToast();
  
  // Load profiles from localStorage on mount
  useEffect(() => {
    const savedProfiles = localStorage.getItem("vibehire_profiles");
    if (savedProfiles) {
      try {
        setProfiles(JSON.parse(savedProfiles));
      } catch (error) {
        console.error("Failed to parse profiles from localStorage:", error);
        // Initialize with empty array if parsing fails
        localStorage.setItem("vibehire_profiles", JSON.stringify([]));
      }
    } else {
      // Initialize localStorage with empty array if it doesn't exist
      localStorage.setItem("vibehire_profiles", JSON.stringify([]));
    }
  }, []);

  // Save profiles to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("vibehire_profiles", JSON.stringify(profiles));
  }, [profiles]);

  const addProfile = (profileData: Omit<ProfileType, "id">) => {
    const newProfile: ProfileType = {
      id: uuidv4(),
      ...profileData
    };
    
    setProfiles(prevProfiles => [...prevProfiles, newProfile]);
    toast({
      title: "Profile created",
      description: `New profile for ${profileData.isAnonymous ? "Anonymous" : profileData.name} has been created.`,
    });
    
    return newProfile.id;
  };

  const updateProfile = (id: string, profileData: Partial<ProfileType>) => {
    setProfiles(prevProfiles => 
      prevProfiles.map(profile => 
        profile.id === id ? { ...profile, ...profileData } : profile
      )
    );
    
    toast({
      title: "Profile updated",
      description: "Your profile changes have been saved.",
    });
  };

  const deleteProfile = (id: string) => {
    const profileToDelete = profiles.find(profile => profile.id === id);
    
    setProfiles(prevProfiles => prevProfiles.filter(profile => profile.id !== id));
    
    toast({
      title: "Profile deleted",
      description: `Profile for ${profileToDelete?.isAnonymous ? "Anonymous" : profileToDelete?.name} has been deleted.`,
      variant: "destructive",
    });
  };

  const getFeaturedVideoProfiles = () => {
    return profiles.filter(profile => profile.videoUrl).slice(0, 3);
  };

  const getFeaturedAudioProfiles = () => {
    return profiles.filter(profile => profile.audioUrl).slice(0, 3);
  };

  return (
    <ProfilesContext.Provider 
      value={{ 
        profiles, 
        addProfile, 
        updateProfile, 
        deleteProfile,
        getFeaturedVideoProfiles,
        getFeaturedAudioProfiles
      }}
    >
      {children}
    </ProfilesContext.Provider>
  );
};
