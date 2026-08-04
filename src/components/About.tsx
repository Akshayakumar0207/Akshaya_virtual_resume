import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import certIBM from "@/assets/cert-ibm.jpg";
import certKaggle from "@/assets/cert-kaggle.jpg";
import certNovitech from "@/assets/cert-novitech.jpg";
import certLnT from "@/assets/cert-lnt.jpg";
import certIIT from "@/assets/cert-iit.jpg";
import certAws from "@/assets/aws-cer.jpg";
import certInfosysDSA from "@/assets/cert-infosys-dsa.jpg";
import certStackQueueJava from "@/assets/cert-stack-queue-java.jpg";
import certNPTELJava from "@/assets/cert-nptel-java.jpg";

// Placeholder for missing cert-ibm-uiux.jpg – using cert-ibm.jpg as stand-in
const certIBMUiUx = certIBM;

const About = () => {
  const education = [
    {
      degree: "B.E. – Computer Science & Engineering",
      institution: "Mahendra Institute of Technology, Namakkal",
      period: "2022–2026",
      score: "CGPA: 8.6",
      current: true,
      status: "Completed Fresher",
    },
    {
      degree: "Higher Secondary",
      institution: "Govt. Girls Model School, Salem",
      period: "2020–2022",
      score: "83%",
      current: false,
    },
    {
      degree: "SSLC",
      institution: "Govt. Girls Model School, Salem",
      period: "2018–2020",
      score: "78%",
      current: false,
    },
  ];

  const certifications = [
    { title: "Data Structures & Algorithms", issuer: "Infosys", year: "2024", image: certInfosysDSA },
    { title: "Google Python Course", issuer: "Kaggle", year: "2024", image: certKaggle },
    { title: "Full Stack Development", issuer: "NoviTech R&D", year: "2023", image: certNovitech },
    { title: "Core Java", issuer: "Stack Queue Institution", year: "2023", image: certStackQueueJava },
    { title: "Advanced Java Programming", issuer: "NPTEL (IIT Kharagpur)", year: "2023", image: certNPTELJava },
    { title: "AWS Cloud Architect", issuer: "Amazon Web Services", year: "2025", image: certAws },
  ];

  // suppress unused-import warnings for certLnT, certIIT, certIBMUiUx
  void certLnT; void certIIT; void certIBMUiUx;

  return (
    <section id="about" className="py-20 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #1a1a2e 50%, #16213e 75%, #0f172a 100%)',
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
        @keyframes timeline-glow {
          0% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0); }
          50% { box-shadow: 0 0 20px 10px rgba(168, 85, 247, 0.3); }
          100% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0); }
        }
      `}</style>
      
      {/* Subtle animated gradient orbs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mix-blend-screen filter blur-3xl" style={{ animation: 'float-slow 8s ease-in-out infinite' }}></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mix-blend-screen filter blur-3xl" style={{ animation: 'float-slow 10s ease-in-out infinite 1s' }}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full mix-blend-screen filter blur-3xl" style={{ animation: 'float-slow 9s ease-in-out infinite 2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate Computer Science student with a strong foundation in full-stack development,
              mobile applications, and emerging technologies.
            </p>
          </div>

          {/* Bio Section */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="glass-effect border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center">
                    <GraduationCap size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Computer Science Engineer</h3>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <MapPin size={16} />
                      Salem, Tamil Nadu, India
                    </p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Fresher seeking my first job in Software Developer, Python Developer and Full Stack Developer roles. 
                  I'm a dedicated Computer Science Engineering graduate with hands-on experience in full-stack web development, 
                  mobile applications, and emerging technologies. I have worked on production-grade applications including 
                  restaurant reservation systems and real-time collaboration platforms. My passion lies in building innovative 
                  digital solutions and leveraging technology to solve real-world problems through clean, efficient code.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Education Timeline with Glow Effect */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-bold mb-12 text-center text-white">Education Journey</h3>
            
            {/* Timeline path line */}
            <div className="flex flex-col items-center gap-8 max-w-5xl mx-auto">
              {/* Vertical connecting line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent h-96 opacity-30"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="w-full relative" style={{ maxWidth: '550px' }}>
                  {/* Timeline node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                    <div className="w-6 h-6 rounded-full bg-purple-500 border-4 border-purple-400 shadow-lg" style={{ 
                      animation: index === 0 ? 'timeline-glow 2s ease-in-out infinite' : 'none'
                    }}></div>
                  </div>
                  
                  <Card className={`bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-400/40 transition-all duration-300 hover:from-purple-900/30 hover:to-purple-800/30 hover:border-purple-400/60 transform hover:scale-102 ${edu.current ? 'ring-2 ring-purple-500 shadow-lg shadow-purple-500/30' : ''}`}>
                    <CardContent className="p-8 min-h-[16rem] flex flex-col justify-between">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                            <p className="text-purple-200 mt-1 flex items-center gap-2">
                              <MapPin size={14} />
                              {edu.institution}
                            </p>
                          </div>
                          {edu.current && (
                            <span className="px-3 py-1 bg-purple-500/40 text-purple-200 text-xs font-semibold rounded-full border border-purple-400/50">Current</span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 mt-4">
                          <Badge variant="outline" className="flex items-center gap-1 border-purple-400 text-purple-200">
                            <Calendar size={12} />
                            {edu.period}
                          </Badge>
                          <Badge className="bg-purple-500/40 text-purple-100 border border-purple-400/50">{edu.score}</Badge>
                        </div>
                      </div>
                      {edu.current && (
                        <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white mt-4 w-fit border border-purple-400">✓ {edu.status}</Badge>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-3xl font-bold mb-8 text-center text-white">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="glass-effect border-0 hover:bg-certificate-accent/20 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden border-2 border-certificate-accent/40">
                      <img
                        src={cert.image}
                        alt={`${cert.title} certification`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                    <Badge variant="outline" className="border-certificate-accent text-certificate-accent">{cert.year}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
