
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ProfileType } from "@/types/profile";
import { useProfiles } from "@/hooks/use-profiles";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { UserPlus } from "lucide-react";

type FormValues = Omit<ProfileType, "id">;

const ProfileForm = () => {
  const { addProfile } = useProfiles();
  const [open, setOpen] = useState(false);
  
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      title: "",
      skills: [],
      isAnonymous: false,
    }
  });
  
  const onSubmit = (data: FormValues) => {
    // Convert comma-separated skills string to array
    const skillsArray = data.skills && typeof data.skills === 'string' 
      ? data.skills.split(',').map(skill => skill.trim()) 
      : (Array.isArray(data.skills) ? data.skills : []);
      
    const profile = {
      ...data,
      skills: skillsArray,
      // If video URL is provided, add a thumbnail
      thumbnailUrl: data.videoUrl ? "/placeholder-thumbnail.jpg" : undefined,
      // If audio URL is provided, add a default duration
      audioDuration: data.audioUrl ? 60 : undefined,
    };
    
    addProfile(profile);
    form.reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-gradient hover:opacity-90">
          <UserPlus className="mr-2 h-4 w-4" />
          Create Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Profile</DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex items-center space-x-2">
              <Switch
                id="isAnonymous"
                checked={form.watch("isAnonymous")}
                onCheckedChange={(checked) => form.setValue("isAnonymous", checked)}
              />
              <Label htmlFor="isAnonymous">Anonymous Mode</Label>
            </div>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="John Doe" 
                      {...field}
                      disabled={form.watch("isAnonymous")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Professional Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Senior Software Engineer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Skills (comma separated)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="React, TypeScript, Node.js" 
                      {...field} 
                      value={Array.isArray(field.value) ? field.value.join(", ") : field.value}
                    />
                  </FormControl>
                  <FormDescription>Enter skills separated by commas</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="videoUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video URL (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="/placeholder-video.mp4" {...field} />
                    </FormControl>
                    <FormDescription>For demo, use "/placeholder-video.mp4"</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="audioUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Audio URL (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="/placeholder-audio.mp3" {...field} />
                    </FormControl>
                    <FormDescription>For demo, use "/placeholder-audio.mp3"</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end gap-2">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Create Profile</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileForm;
