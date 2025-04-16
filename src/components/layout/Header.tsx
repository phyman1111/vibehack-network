import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { AppContext } from "@/App";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Bell, Menu, Search } from "lucide-react";

const Header = () => {
  const { isAnonymous, setIsAnonymous, searchQuery, setSearchQuery, notifications, markAllNotificationsAsRead } = useContext(AppContext);

  const unreadNotifications = notifications.filter(n => !n.read).length;

  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-bold text-2xl">
          VibeHire
        </Link>

        <div className="flex items-center gap-4">
          <Input 
            type="search" 
            placeholder="Search..." 
            className="max-w-xs hidden md:block"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          <Button variant="ghost" size="icon" asChild>
            <Link to="/discover">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5 relative">
                  {unreadNotifications > 0 && (
                    <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -right-1 dark:border-gray-900">
                      {unreadNotifications}
                    </div>
                  )}
                </Bell>
                <span className="sr-only">Notifications</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-96">
              <SheetHeader>
                <SheetTitle>Notifications</SheetTitle>
                <SheetDescription>
                  {notifications.length === 0 ? "No notifications yet." : (
                    <ul>
                      {notifications.map(notification => (
                        <li key={notification.id} className="py-2">
                          {notification.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <Button onClick={markAllNotificationsAsRead} disabled={unreadNotifications === 0}>
                  Mark all as read
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <ThemeToggle />

          {isAnonymous ? (
            <Button onClick={() => setIsAnonymous(false)}>
              Enable Profile
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>User Menu</SheetTitle>
                    <SheetDescription>
                      Manage your account settings and preferences.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <Link to="/profile">
                      <Button>Profile</Button>
                    </Link>
                    <Link to="/settings">
                      <Button>Settings</Button>
                    </Link>
                    <Button onClick={() => setIsAnonymous(true)}>
                      Disable Profile
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
