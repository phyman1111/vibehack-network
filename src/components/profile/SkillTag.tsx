
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SkillTagProps {
  skill: string;
  onRemove?: () => void;
  removable?: boolean;
}

const SkillTag = ({ skill, onRemove, removable = false }: SkillTagProps) => {
  return (
    <div className="inline-flex items-center gap-1 px-3 py-1 bg-vibehire-primary/10 text-vibehire-primary rounded-full text-sm group">
      <span>{skill}</span>
      {removable && onRemove && (
        <Button 
          variant="ghost"
          size="icon"
          className="h-4 w-4 rounded-full p-0 opacity-70 hover:opacity-100 hover:bg-vibehire-primary/20"
          onClick={onRemove}
        >
          <X className="h-3 w-3" />
        </Button>
      )}
    </div>
  );
};

export default SkillTag;
