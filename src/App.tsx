
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Discover from "./pages/Discover";
import Shorts from "./pages/Shorts";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import Cookies from "./pages/legal/Cookies";
import Careers from "./pages/company/Careers";
import Contact from "./pages/company/Contact";
import Jobs from "./pages/Jobs";
import { useState } from "react";
import { ProfilesProvider } from "./hooks/use-profiles";
import { ThemeProvider } from "./hooks/use-theme";

// Create context for global state
import { createContext } from "react";

// Create a context for anonymous mode
export const AppContext = createContext({
  isAnonymous: false,
  setIsAnonymous: (value: boolean) => {},
  searchQuery: "",
  setSearchQuery: (value: string) => {},
  notifications: [] as {id: number, text: string, read: boolean}[],
  addNotification: (text: string) => {},
  markAllNotificationsAsRead: () => {},
});

const queryClient = new QueryClient();

const App = () => {
  // Global state for anonymous mode
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications, setNotifications] = useState<{id: number, text: string, read: boolean}[]>([
    { id: 1, text: "Welcome to VibeHire! Explore our talent discovery features.", read: false },
    { id: 2, text: "New job opportunity matching your skills: Senior Developer", read: false },
    { id: 3, text: "Your profile has 5 new views this week!", read: false },
  ]);

  const addNotification = (text: string) => {
    const newId = notifications.length > 0 ? Math.max(...notifications.map(n => n.id)) + 1 : 1;
    setNotifications([...notifications, { id: newId, text, read: false }]);
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <ThemeProvider>
      <AppContext.Provider value={{ 
        isAnonymous, 
        setIsAnonymous, 
        searchQuery, 
        setSearchQuery,
        notifications,
        addNotification,
        markAllNotificationsAsRead
      }}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <ProfilesProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/discover" element={<Discover />} />
                  <Route path="/shorts" element={<Shorts />} />
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/cookies" element={<Cookies />} />
                  
                  {/* Redirect routes for any potentially broken links */}
                  <Route path="/profile" element={<Navigate to="/" />} />
                  <Route path="/settings" element={<Navigate to="/" />} />
                  
                  {/* Catch-all route for non-existent pages */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </ProfilesProvider>
          </TooltipProvider>
        </QueryClientProvider>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
