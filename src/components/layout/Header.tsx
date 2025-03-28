import { Button } from "@/components/ui/button";
import { Search, BellRing, User, Menu, BellOff, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../App";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { 
    isAnonymous, 
    setIsAnonymous, 
    searchQuery, 
    setSearchQuery,
    notifications,
    markAllNotificationsAsRead 
  } = useContext(AppContext);
  const [localSearchQuery, setLocalSearchQuery] = useState("");
  
  // Initialize local search with global search on component mount
  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-vibehire-primary font-medium" : "text-foreground/80 hover:text-foreground transition-colors";
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearchQuery);
    navigate("/discover");
    toast.success(`Searching for "${localSearchQuery}"`);
  };

  const unreadNotificationsCount = notifications.filter(n => !n.read).length;

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
          <form onSubmit={handleSearch} className="hidden md:flex relative">
            <Input
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
              placeholder="Search talents or jobs..."
              className="w-64 pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Button type="submit" variant="ghost" className="absolute right-0 top-0 h-full">
              <span className="sr-only">Search</span>
            </Button>
          </form>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative hidden md:flex">
                <BellRing className="h-5 w-5" />
                {unreadNotificationsCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-vibehire-primary">
                    {unreadNotificationsCount}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-80 p-0">
              <div className="p-3 border-b border-border flex items-center justify-between">
                <h3 className="font-semibold">Notifications</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 text-sm text-muted-foreground hover:text-foreground"
                  onClick={markAllNotificationsAsRead}
                >
                  Mark all as read
                </Button>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.length > 0 ? (
                  notifications.map(notification => (
                    <div 
                      key={notification.id} 
                      className={`p-3 border-b border-border ${notification.read ? '' : 'bg-secondary/40'}`}
                    >
                      <p className="text-sm">{notification.text}</p>
                    </div>
                  ))
                ) : (
                  <div className="p-3 text-center text-muted-foreground">
                    No notifications
                  </div>
                )}
              </div>
            </PopoverContent>
          </Popover>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Account Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="p-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Anonymous Mode</Label>
                    <p className="text-xs text-muted-foreground">
                      Hide your identity from other users
                    </p>
                  </div>
                  <Switch
                    checked={isAnonymous}
                    onCheckedChange={(checked) => {
                      setIsAnonymous(checked);
                      toast.success(`Anonymous mode ${checked ? 'enabled' : 'disabled'}`);
                    }}
                  />
                </div>
              </div>
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
