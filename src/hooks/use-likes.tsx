
import { useState, useEffect } from 'react';

interface LikesState {
  [profileId: string]: boolean;
}

export function useLikes() {
  const [likes, setLikes] = useState<LikesState>({});
  
  // Load likes from localStorage on mount
  useEffect(() => {
    const savedLikes = localStorage.getItem("vibehire_likes");
    if (savedLikes) {
      try {
        setLikes(JSON.parse(savedLikes));
      } catch (error) {
        console.error("Failed to parse likes from localStorage:", error);
        localStorage.setItem("vibehire_likes", JSON.stringify({}));
      }
    }
  }, []);
  
  // Save likes to localStorage when they change
  useEffect(() => {
    localStorage.setItem("vibehire_likes", JSON.stringify(likes));
  }, [likes]);
  
  const toggleLike = (profileId: string) => {
    setLikes(prevLikes => ({
      ...prevLikes,
      [profileId]: !prevLikes[profileId]
    }));
    return !likes[profileId]; // Return new state
  };
  
  const isLiked = (profileId: string): boolean => {
    return !!likes[profileId];
  };
  
  return { likes, toggleLike, isLiked };
}
