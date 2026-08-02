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
    <section id="about" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
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
                  I'm a dedicated Computer Science Engineering student with a passion for creating innovative
                  digital solutions. My journey in technology spans from frontend development with modern
                  frameworks to backend systems and mobile applications. I have hands-on experience with
                  full-stack development, machine learning projects, and have contributed to various research
                  initiatives. My goal is to leverage technology to solve real-world problems and create
                  meaningful impact through code.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Education Pipeline */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-bold mb-12 text-center text-white">Education</h3>
            <div className="flex flex-col items-center justify-center gap-8 max-w-2xl mx-auto">
              {education.map((edu, index) => (
                <div key={index} className="w-full" style={{ maxWidth: '350px' }}>
                  <Card className={`bg-purple-500/20 border-purple-400/30 border transition-all duration-300 hover:bg-gray-500/20 hover:border-gray-400/30 transform hover:scale-105 ${edu.current ? 'ring-2 ring-purple-400' : ''}`}>
                    <CardContent className="p-6 min-h-[14rem] flex flex-col justify-between">
                      <div className="flex flex-col gap-3">
                        <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                        <p className="text-purple-200">{edu.institution}</p>
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="outline" className="flex items-center gap-1 border-purple-400 text-purple-200">
                            <Calendar size={12} />
                            {edu.period}
                          </Badge>
                          <Badge className="bg-purple-400/40 text-white border-purple-400/50">{edu.score}</Badge>
                        </div>
                      </div>
                      {edu.current && (
                        <Badge className="bg-purple-500 text-white mt-2 w-fit">Completed Fresher</Badge>
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
