
export interface Profile {
  id: string;
  name: string;
  title: string;
  skills: string[];
  videoUrl?: string;
  audioUrl?: string;
  thumbnailUrl?: string;
  isAnonymous?: boolean;
  audioDuration?: number;
}

// Function to generate a random set of skills
const generateRandomSkills = () => {
  const allSkills = [
    "React", "TypeScript", "JavaScript", "Node.js", "Python", "Java", "C#", "PHP",
    "UI/UX Design", "Product Management", "Data Science", "Machine Learning",
    "DevOps", "Cloud Architecture", "SQL", "NoSQL", "GraphQL", "REST API",
    "Mobile Development", "React Native", "Flutter", "Swift", "Kotlin",
    "Golang", "Ruby", "Rust", "Blockchain", "AR/VR", "Leadership", "Agile",
    "Project Management", "Digital Marketing", "Content Strategy", "Sales",
    "Customer Success", "Business Development", "Finance", "Accounting",
    "Human Resources", "Operations", "Supply Chain", "Logistics", "Legal",
    "Compliance", "Risk Management", "Cybersecurity", "Network Engineering"
  ];
  
  // Get random number of skills between 3 and 8
  const numSkills = Math.floor(Math.random() * 6) + 3;
  const shuffled = [...allSkills].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numSkills);
};

// Function to generate a random job title
const generateRandomTitle = () => {
  const roles = [
    "Software Engineer", "Product Manager", "Data Scientist", "UX Designer",
    "DevOps Engineer", "Cloud Architect", "Full-Stack Developer", "Frontend Developer",
    "Backend Developer", "Mobile Developer", "Machine Learning Engineer", "AI Researcher",
    "Security Engineer", "Database Administrator", "Network Engineer", "Systems Architect",
    "Technical Lead", "Engineering Manager", "CTO", "VP of Engineering",
    "Director of Technology", "Technical Project Manager", "Scrum Master", "Product Owner",
    "UI Designer", "Interaction Designer", "Visual Designer", "Growth Marketer",
    "Content Strategist", "Digital Marketing Manager", "SEO Specialist", "Social Media Manager",
    "Business Analyst", "Data Analyst", "Financial Analyst", "Operations Manager",
    "HR Manager", "Talent Acquisition Specialist", "Supply Chain Manager", "Logistics Coordinator"
  ];
  
  const companies = [
    "at TechCorp", "at InnoSoft", "at DataDynamics", "at CloudNative",
    "at QuantumTech", "at Nexus Systems", "at FutureForge", "at DigitalHorizon",
    "at GlobalTech", "at VisionaryApps", "at CodeCraft", "at ByteBuilders",
    "at AlgoWorks", "at SiliconSynergy", "at PulsePoint", "at NexGen Solutions",
    "at VertexVentures", "at ApexAI", "at CyberSphere", "at EchoLogic",
    "at Freelance", "at StartupName", "at Self-employed", "at Consulting",
    "at QuantumLeap", "at VirtualVelocity", "at OmniTech", "at MetaMinds",
    "at StealthStartup", "Consultant", "Freelancer", "Independent Contractor"
  ];
  
  return `${roles[Math.floor(Math.random() * roles.length)]} ${companies[Math.floor(Math.random() * companies.length)]}`;
};

// Function to generate names
const generateRandomName = () => {
  const firstNames = [
    "James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda", "William", "Elizabeth",
    "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Charles", "Karen",
    "Christopher", "Nancy", "Daniel", "Lisa", "Matthew", "Margaret", "Anthony", "Betty", "Mark", "Sandra",
    "Donald", "Ashley", "Steven", "Dorothy", "Paul", "Kimberly", "Andrew", "Emily", "Joshua", "Donna",
    "Kenneth", "Michelle", "Kevin", "Carol", "Brian", "Amanda", "George", "Melissa", "Edward", "Deborah",
    "Vikram", "Aisha", "Raj", "Priya", "Mohammed", "Fatima", "Chen", "Wei", "Jin", "Mei", "Hiroshi", "Yuki",
    "Juan", "Maria", "Carlos", "Sofia", "Abdul", "Zara", "Kwame", "Ama", "Oluwaseun", "Chioma"
  ];
  
  const lastNames = [
    "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor",
    "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson",
    "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King",
    "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter",
    "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins",
    "Patel", "Khan", "Singh", "Wong", "Nakamura", "Suzuki", "Tanaka", "Kim", "Park", "Gupta",
    "Rodriguez", "Gomez", "Okafor", "Mensah", "Osei", "Adeyemi", "Nkosi", "Ibrahim", "Hassan", "Ali"
  ];
  
  return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
};

// Generate 1000 dummy profiles
const generateDummyProfiles = (count: number): Profile[] => {
  const profiles: Profile[] = [];
  
  for (let i = 0; i < count; i++) {
    const hasVideo = Math.random() > 0.5;
    const hasAudio = !hasVideo || Math.random() > 0.3; // Ensure at least one media type
    
    profiles.push({
      id: `profile-${i + 1}`,
      name: generateRandomName(),
      title: generateRandomTitle(),
      skills: generateRandomSkills(),
      videoUrl: hasVideo ? `/placeholder-video.mp4` : undefined,
      audioUrl: hasAudio ? `/placeholder-audio.mp3` : undefined,
      thumbnailUrl: hasVideo ? `/placeholder-thumbnail.jpg` : undefined,
      isAnonymous: Math.random() > 0.7, // 30% chance to be anonymous
      audioDuration: hasAudio ? Math.floor(Math.random() * 120) + 30 : undefined, // 30-150 seconds
    });
  }
  
  return profiles;
};

export const dummyProfiles = generateDummyProfiles(1000);

// Helper functions to get profiles by type
export const getVideoProfiles = () => dummyProfiles.filter(profile => profile.videoUrl);
export const getAudioProfiles = () => dummyProfiles.filter(profile => profile.audioUrl);
export const getRandomProfiles = (count: number) => {
  const shuffled = [...dummyProfiles].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
