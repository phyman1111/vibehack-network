
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageSquare, 
  Mail, 
  MapPin, 
  Phone,
  Twitter,
  Linkedin
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "We've received your message and will get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  
  return (
    <Layout>
      <div className="container py-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Reach out to our team using any of the methods below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          <Card className="bg-secondary/50 interactive-card">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-vibehire-primary/20 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-vibehire-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">
                For general inquiries and support requests
              </p>
              <a href="mailto:hello@vibehire.com" className="text-vibehire-primary hover:underline">
                hello@vibehire.com
              </a>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/50 interactive-card">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-vibehire-primary/20 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-vibehire-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">
                Monday to Friday, 9am to 5pm PST
              </p>
              <a href="tel:+1-800-123-4567" className="text-vibehire-primary hover:underline">
                +1 (800) 123-4567
              </a>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/50 interactive-card">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-vibehire-primary/20 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-vibehire-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Visit Us</h3>
              <p className="text-muted-foreground mb-4">
                Our headquarters location
              </p>
              <address className="not-italic">
                123 Innovation Drive<br />
                San Francisco, CA 94103
              </address>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry..."
                  rows={6}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-blue-gradient hover:opacity-90 text-white">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
            
            <div className="mb-8">
              <p className="text-muted-foreground mb-4">
                Follow us on social media to stay updated with the latest news, features, and job opportunities.
              </p>
              
              <div className="flex gap-4">
                <a href="https://twitter.com/vibehire" className="p-3 bg-vibehire-primary/10 hover:bg-vibehire-primary/20 rounded-full transition-colors">
                  <Twitter className="h-5 w-5 text-vibehire-primary" />
                </a>
                <a href="https://linkedin.com/company/vibehire" className="p-3 bg-vibehire-primary/10 hover:bg-vibehire-primary/20 rounded-full transition-colors">
                  <Linkedin className="h-5 w-5 text-vibehire-primary" />
                </a>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">How does VibeHire work?</h4>
                  <p className="text-sm text-muted-foreground">
                    VibeHire connects professionals with opportunities through innovative video and audio profiles, allowing talent to showcase their personality alongside their skills.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Is VibeHire free to use?</h4>
                  <p className="text-sm text-muted-foreground">
                    We offer both free and premium plans. Basic features are available for free, while advanced features require a subscription.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">How do I create a video resume?</h4>
                  <p className="text-sm text-muted-foreground">
                    After creating your account, you can record directly through our platform or upload a pre-recorded video from your device.
                  </p>
                </div>
              </div>
            </div>
            
            <Button variant="outline" className="w-full border-vibehire-primary text-vibehire-primary hover:bg-vibehire-primary/10">
              View All FAQs
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
