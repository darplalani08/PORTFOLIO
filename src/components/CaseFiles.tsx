import { ExternalLink, Github, Shield, Globe, Database, Terminal, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  threatAssessment: string;
  tacticalApproach: string[];
  technologies: string[];
  systemStatus: 'SECURED' | 'IN_PROGRESS' | 'CLASSIFIED';
  category: 'Security' | 'Web Development' | 'DevOps' | 'Automation';
  githubUrl?: string;
  liveUrl?: string;
  icon: LucideIcon;
}

const projects: Project[] = [
  {
    id: "001",
    title: "Interactive Honeypot Tracker",
    threatAssessment: "Deploy a low-interaction honeypot to detect, log, and analyze unauthorized network access attempts. The system is designed to identify reconnaissance scans and capture attacker methodologies without exposing critical infrastructure.",
    tacticalApproach: [
      "Developed a TCP socket listener in Python to act as a digital trap on a specific port",
      "Engineered a simulated service with a fake firewall and login prompt to engage attackers and log their inputs",
      "Implemented a robust logging system to save all interaction details, including IP address, timestamp, and messages, to a text file",
      "Built a real-time web dashboard using Flask to parse and display captured logs from any web browser"
    ],
    technologies: ["Python", "Socket", "Flask", "HTML", "CSS"],
    systemStatus: "IN_PROGRESS",
    category: "Security",
    icon: Shield,
    githubUrl: " ",
    liveUrl: " "
    
  },
  
  
  
];

export default function CaseFiles() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gradient-matrix mb-4">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Portfolio of completed and ongoing projects with technical details
          </p>
          <div className="h-px bg-gradient-to-r from-primary via-accent to-transparent"></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div key={project.id} className="group">
                <div className="bg-card p-8 rounded-lg border hover:border-primary transition-smooth">
                  {/* Case Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${
                        project.category === 'Security' ? 'bg-accent/20 text-accent' :
                        project.category === 'Web Development' ? 'bg-primary/20 text-primary' :
                        project.category === 'DevOps' ? 'bg-secondary/20 text-secondary' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          Project ID: {project.id}_{project.title.replace(/\s+/g, '_').toUpperCase()}
                        </div>
                        <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
                        <span className="text-sm text-muted-foreground uppercase tracking-wide">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                      project.systemStatus === 'SECURED' ? 'bg-primary/20 text-primary border border-primary' :
                      project.systemStatus === 'IN_PROGRESS' ? 'bg-secondary/20 text-secondary border border-secondary' :
                      'bg-accent/20 text-accent border border-accent'
                    }`}>
                      Status: {project.systemStatus}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {/* Project Overview */}
                      <div>
                        <h4 className="text-accent font-semibold mb-3">
                          Project Overview:
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.threatAssessment}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-secondary font-semibold mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-muted rounded-full text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Implementation Details */}
                      <div>
                        <h4 className="text-primary font-semibold mb-3">
                          Implementation Approach:
                        </h4>
                        <ul className="space-y-2">
                          {project.tacticalApproach.map((approach, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary">•</span>
                              <span>{approach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4">
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" asChild className="hover:border-primary transition-smooth">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github size={16} className="mr-2" />
                              View Code
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button size="sm" asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={16} className="mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.systemStatus === 'CLASSIFIED' && (
                          <Button variant="destructive" size="sm" disabled>
                            <Shield size={16} className="mr-2" />
                            Classified
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

       
       
      </div>
    </section>
  );
}