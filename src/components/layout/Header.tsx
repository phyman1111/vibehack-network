
import { Button } from "@/components/ui/button";
import { Search, BellRing, User, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-vibehire-primary font-medium" : "text-foreground/80 hover:text-foreground transition-colors";
  };

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
            <Link to="/discover" className={isActive("/discover")}>
              Discover
            </Link>
            <Link to="/jobs" className={isActive("/jobs")}>
              Jobs
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-foreground/80 hover:text-foreground transition-colors">
                  Company
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/about">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/careers">Careers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/contact">Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-foreground/80 hover:text-foreground transition-colors">
                  Legal
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/privacy">Privacy Policy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/terms">Terms of Service</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/cookies">Cookie Policy</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
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
            <div className="py-2">
              <p className="text-sm font-medium text-muted-foreground mb-2">Company</p>
              <div className="pl-4 space-y-2">
                <Link to="/about" className="block text-foreground/80 hover:text-foreground transition-colors">
                  About Us
                </Link>
                <Link to="/careers" className="block text-foreground/80 hover:text-foreground transition-colors">
                  Careers
                </Link>
                <Link to="/contact" className="block text-foreground/80 hover:text-foreground transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div className="py-2">
              <p className="text-sm font-medium text-muted-foreground mb-2">Legal</p>
              <div className="pl-4 space-y-2">
                <Link to="/privacy" className="block text-foreground/80 hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="block text-foreground/80 hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="block text-foreground/80 hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
