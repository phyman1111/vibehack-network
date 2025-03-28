
import { Button } from "@/components/ui/button";
import { Search, BellRing, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-gradient flex items-center justify-center">
              <span className="text-white font-bold">V</span>
            </div>
            <span className="font-bold text-xl text-gradient">VibeHire</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/discover" className="text-foreground/80 hover:text-foreground transition-colors">
              Discover
            </Link>
            <Link to="/jobs" className="text-foreground/80 hover:text-foreground transition-colors">
              Jobs
            </Link>
            <Link to="/connections" className="text-foreground/80 hover:text-foreground transition-colors">
              Connections
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <BellRing className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border py-4 animate-slide-up">
          <nav className="container flex flex-col gap-4">
            <Link to="/discover" className="text-foreground/80 hover:text-foreground transition-colors py-2">
              Discover
            </Link>
            <Link to="/jobs" className="text-foreground/80 hover:text-foreground transition-colors py-2">
              Jobs
            </Link>
            <Link to="/connections" className="text-foreground/80 hover:text-foreground transition-colors py-2">
              Connections
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
