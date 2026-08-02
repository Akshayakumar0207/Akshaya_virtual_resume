import { ExternalLink, Star, Code2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FreelanceWork = () => {
  const freelanceProjects = [
    {
      id: 1,
      title: "Unity Foundation Salem - Full Stack Web Development",
      description: "Developed a comprehensive full-stack web application for Unity Foundation Salem, an NGO focused on community development and social welfare.",
      organization: "Unity Foundation Salem",
      type: "NGO",
      technologies: ["React.js", "Python", "REST APIs", "Database Design"],
      impact: "Streamlined operations and improved digital presence",
      liveLink: "https://unity-foundation-salem-website.vercel.app",
      status: "Completed",
      year: "2025",
      highlights: [
        "Full-stack web application development",
        "Database design and optimization",
        "Responsive UI/UX implementation",
        "API integration and backend development"
      ]
    }
  ];

  return (
    <section id="freelance" className="py-20 gradient-section relative overflow-hidden">
      {/* Glow background effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="text-yellow-400 fill-yellow-400" size={24} />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Freelance Work
              </h2>
              <Star className="text-yellow-400 fill-yellow-400" size={24} />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Impactful freelance projects delivering custom web solutions for organizations and businesses
            </p>
          </div>

          {/* Freelance Projects Grid */}
          <div className="space-y-8">
            {freelanceProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="animate-fade-in-up" 
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <Card className="bg-gradient-to-r from-purple-500/10 to-purple-400/10 border-purple-400/40 hover:border-purple-300/60 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-102 relative overflow-hidden group">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-400/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-purple-400/20 group-hover:to-purple-500/10 transition-all duration-500"></div>

                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/30 flex items-center justify-center flex-shrink-0">
                          <Code2 size={24} className="text-purple-300" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl font-bold text-white mb-2">
                            {project.title}
                          </CardTitle>
                          <p className="text-purple-200 font-semibold">{project.organization}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-wrap justify-end">
                        <Badge className="bg-purple-500/40 text-purple-100 border-purple-400/50 border">
                          {project.type}
                        </Badge>
                        <Badge variant="outline" className="border-purple-400 text-purple-200">
                          {project.year}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-6">
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-purple-300 mb-3">Key Highlights:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0 mt-1.5"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-purple-300 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} className="bg-purple-400/20 text-purple-200 border-purple-400/40 border">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Impact & Live Link */}
                    <div className="border-t border-purple-400/30 pt-4 flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Impact:</p>
                        <p className="text-purple-200 font-semibold">{project.impact}</p>
                      </div>
                      {project.liveLink ? (
                        <Button
                          size="sm"
                          className="bg-purple-500 hover:bg-purple-600 text-white transition-all duration-300"
                          onClick={() => window.open(project.liveLink, '_blank')}
                        >
                          <ExternalLink size={16} className="mr-2" />
                          View Live
                        </Button>
                      ) : (
                        <div className="text-sm text-muted-foreground italic">
                          Live link coming soon...
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Card className="bg-purple-500/10 border-purple-400/30 hover:bg-purple-500/15 transition-all duration-300 inline-block">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-purple-300 mb-2">Interested in collaboration?</h4>
                <p className="text-muted-foreground mb-4">
                  I'm open to freelance opportunities and exciting projects. Let's create something amazing together!
                </p>
                <Button
                  size="lg"
                  className="bg-purple-500 hover:bg-purple-600 text-white transition-all duration-300 transform hover:scale-105"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get in Touch
                  <ExternalLink className="ml-2" size={20} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelanceWork;
