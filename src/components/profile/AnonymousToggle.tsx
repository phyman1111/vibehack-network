
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

interface AnonymousToggleProps {
  isAnonymous: boolean;
  onToggle: (value: boolean) => void;
}

const AnonymousToggle = ({ isAnonymous, onToggle }: AnonymousToggleProps) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 border border-border">
      <div className="flex items-center gap-3">
        {isAnonymous ? (
          <div className="w-10 h-10 rounded-full bg-vibehire-primary/20 flex items-center justify-center">
            <EyeOff className="h-5 w-5 text-vibehire-primary" />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-vibehire-gray/20 flex items-center justify-center">
            <Eye className="h-5 w-5 text-vibehire-gray" />
          </div>
        )}
        <div>
          <Label htmlFor="anonymous-mode" className="font-medium">
            Anonymous Talent Mode
          </Label>
          <p className="text-sm text-muted-foreground">
            {isAnonymous 
              ? "Your identity is hidden from recruiters" 
              : "Recruiters can see your name and company"
            }
          </p>
        </div>
      </div>
      <Switch
        id="anonymous-mode"
        checked={isAnonymous}
        onCheckedChange={onToggle}
        className={isAnonymous ? "bg-vibehire-primary" : ""}
      />
    </div>
  );
};

export default AnonymousToggle;
