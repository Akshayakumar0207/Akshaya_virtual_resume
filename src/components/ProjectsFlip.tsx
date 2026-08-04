
import { ExternalLink, Calendar, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FlipCard from "./FlipCard";
import blockchainImage from "@/assets/blockchain-voting.jpg";
import eatifyImage from "@/assets/eatify-logo.png";
import trackitImage from "@/assets/tracki_logo.jpg";
import pastryShopImage from "@/assets/pastry-shop.jpg";
import mockMateImage from "@/assets/mock-mate-logo.png";
import ecoShopperLogo from "@/assets/eco-shopper-logo.png";

const ProjectsFlip = () => {
  const projects = [
    {
      id: 1,
      title: "One Tap - Blockchain Voting App",
      summary: "Secure, transparent voting platform using blockchain technology",
      image: blockchainImage,
      details: "A comprehensive blockchain-based voting system that ensures transparency, security, and immutability. Features smart contracts for vote verification, real-time vote counting, and voter anonymity protection.",
      tech: ["Blockchain", "Smart Contracts", "React", "Web3.js", "Solidity"],
      links: { github: "#", demo: "https://one-tap-voting-3f0a7678.base44.app" },
      tags: ["Blockchain", "Security"],
      startedAt: "2024-03",
      updatedAt: "2024-05",
      keyAchievement: "Zero vote tampering with 99.9% uptime"
    },
    {
      id: 2,
      title: "TableReserve - Restaurant Reservation Platform",
      summary: "Full-stack restaurant reservation system with interactive floor-map booking",
      image: eatifyImage,
      details: "A comprehensive full-stack restaurant reservation platform (React, FastAPI, PostgreSQL) with interactive visual floor-map booking, multi-role authorization (customer/owner/admin), real-time conflict detection, and business analytics dashboard supporting 200+ restaurants across 4 cities.",
      tech: ["React.js", "FastAPI", "PostgreSQL", "Real-time", "Analytics"],
      links: { github: "#", demo: "https://tablereserve-frontend.vercel.app" },
      tags: ["Full-Stack", "Restaurant Tech"],
      startedAt: "2024-06",
      updatedAt: "2024-09",
      keyAchievement: "200+ restaurants with 99.8% uptime across 4 cities"
    },
    {
      id: 3,
      title: "Trackit - Smart Bus Tracking App",
      summary: "Real-time bus tracking with live location, ETA prediction, and student alerts",
      image: trackitImage,
      details: "Trackit connects GPS-enabled buses with a central dashboard so students and parents see live location, stop ETAs, and receive automatic notifications. Admins get fleet health analytics and route optimization suggestions.",
      tech: ["React", "Node.js", "Firebase", "GPS API", "ML Models"],
      links: { github: "#", demo: "https://track-it-1b978c5d.base44.app" },
      tags: ["IoT", "Mobile", "Logistics"],
      startedAt: "2023-09",
      updatedAt: "2024-08",
      keyAchievement: "Cut average wait times by 40% across pilot routes"
    },
    {
      id: 4,
      title: "Pastry Shop Website",
      summary: "Responsive e-commerce website for local pastry business",
      image: pastryShopImage,
      details: "A modern, responsive e-commerce website for a local pastry shop. Features product catalog, online ordering, payment processing, inventory management, and customer review system.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      links: { github: "#", demo: "https://stately-maamoul-cc3649.netlify.app" },
      tags: ["Frontend", "E-commerce"],
      startedAt: "2023-06",
      updatedAt: "2023-08",
      keyAchievement: "Increased online sales by 150%"
    },
    {
      id: 5,
      title: "MockMate - Mock Interview Platform",
      summary: "AI-powered mock interview platform for technical skill assessment",
      image: mockMateImage,
      details: "A comprehensive mock interview platform that uses AI to simulate real technical interviews. Features coding challenges, behavioral questions, real-time feedback, and performance analytics to help candidates prepare for their dream jobs.",
      tech: ["React", "Node.js", "AI/ML", "WebRTC", "MongoDB"],
      links: { github: "#", demo: "https://mock-mate-1.base44.app" },
      tags: ["AI", "Interview", "Processing"],
      startedAt: "2024-08",
      updatedAt: "2024-12",
      keyAchievement: "AI-powered feedback system with 95% accuracy"
    },
    {
      id: 6,
      title: "StudySphere - Real-Time Collaboration Platform",
      summary: "Full-stack real-time collaboration platform with WebSocket-driven features",
      image: ecoShopperLogo,
      details: "Designed and deployed a full-stack platform (React, FastAPI, PostgreSQL) with WebSocket-driven chat/whiteboard, JWT authentication, and Google Gemini AI study features, achieving sub-100ms latency across 10+ concurrent users for seamless real-time collaboration.",
      tech: ["React.js", "FastAPI", "PostgreSQL", "WebSocket", "Google Gemini AI"],
      links: { github: "#", demo: "https://studysphere-tan-rho.vercel.app" },
      tags: ["Real-time", "Collaboration", "AI"],
      startedAt: "2024-07",
      updatedAt: "2024-11",
      keyAchievement: "Sub-100ms latency across 10+ concurrent users"
    }
  ];

  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #16213e 75%, #1a1a2e 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradient 20s ease infinite'
    }}>
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
      `}</style>
      
      {/* Subtle animated gradient orbs */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-full mix-blend-screen filter blur-3xl" style={{ animation: 'float-slow 8s ease-in-out infinite' }}></div>
        <div className="absolute top-40 left-10 w-96 h-96 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mix-blend-screen filter blur-3xl" style={{ animation: 'float-slow 10s ease-in-out infinite 1s' }}></div>
        <div className="absolute -bottom-8 right-20 w-96 h-96 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mix-blend-screen filter blur-3xl" style={{ animation: 'float-slow 9s ease-in-out infinite 2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Click on any project card to flip and see detailed information, technologies used, and achievements.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                <FlipCard
                  front={
                    <div className="h-full flex flex-col">
                      {/* Project Image */}
                      <div className="h-48 overflow-hidden rounded-t-lg bg-white/80 flex items-center justify-center">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 p-4"
                        />
                      </div>

                      {/* Project Info */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                            {project.summary}
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 mt-4">
                          <Button
                            size="sm"
                            className="gradient-hero text-white flex-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.links.demo, '_blank');
                            }}
                          >
                            <ExternalLink size={16} className="mr-2" />
                            Demo
                          </Button>
                        </div>

                        <p className="text-xs text-muted-foreground mt-4 text-center">
                          Click to see details
                        </p>
                      </div>
                    </div>
                  }
                  back={
                    <div className="h-full flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-4">{project.title}</h3>

                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {project.details}
                        </p>

                        {/* Tech Stack */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-primary mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.tech.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs bg-skill-bg/40">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Key Achievement */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-1">
                            <Star size={14} />
                            Key Achievement:
                          </h4>
                          <p className="text-sm text-muted-foreground">{project.keyAchievement}</p>
                        </div>

                        {/* Timeline */}
                        <div className="mb-4">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar size={12} />
                              Started: {formatDate(project.startedAt)}
                            </div>
                            <div>Updated: {formatDate(project.updatedAt)}</div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-4">
                        <Button
                          size="sm"
                          className="gradient-hero text-white flex-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.links.demo, '_blank');
                          }}
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsFlip;
