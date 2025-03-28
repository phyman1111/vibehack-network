
export interface ProfileType {
  id: number;
  name: string;
  title: string;
  skills: string[];
  isAnonymous: boolean;
  videoUrl?: string;
  thumbnailUrl?: string;
  audioUrl?: string;
  audioDuration?: number;
}
