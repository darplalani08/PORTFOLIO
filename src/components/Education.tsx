import { Calendar, Award, MapPin, LucideIcon } from 'lucide-react';

interface Education {
  title: string;
  organization: string;
  period: string;
  status: 'ONGOING' | 'COMPLETED';
  type: 'Education';
  description: string;
  achievements?: string[];
  location?: string;
  icon: LucideIcon;
}

const education: Education[] = [
  {
    title: "B.Tech Computer Science Engineering",
    organization: "Symbiosis Institute of Technology (SIT)",
    period: "2023 - Present",
    status: "ONGOING",
    type: "Education",
    description: "Currently pursuing Bachelor's degree with specialization in Cybersecurity. Maintaining strong academic performance while actively participating in technical clubs.",
    achievements: [
      "Cybersecurity specialization track",
      "Active in technical clubs",
      "Consistent academic performance"
    ],
    location: "Pune, Maharashtra",
    icon: Award
  },
  {
    title: "Diploma in Computer Engineering",
    organization: "Darshan University",
    period: "2020 - 2023",
    status: "COMPLETED",
    type: "Education", 
    description: "Completed diploma with exceptional academic performance, achieving 8.82 CGPA. Built strong foundation in computer science fundamentals and programming.",
    achievements: [
      "8.82 CGPA achievement",
      "Strong programming foundation",
      "Excellence in computer networking"
    ],
    location: "Rajkot, Gujarat",
    icon: Award
  }
];

const certifications = [
  {
    name: "Introduction to Web Development",
    provider: "Microsoft Certification",
    icon: "primary"
  },
  {
    name: "Get Started with Python", 
    provider: "Google Certification",
    icon: "secondary"
  }
];

export default function Education() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gradient-cyber mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Academic background and continuous learning journey
          </p>
          <div className="h-px bg-gradient-to-r from-secondary via-primary to-transparent"></div>
        </div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="space-y-12">
            {education.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <div key={index} className="relative flex gap-8">
                  {/* Timeline Node */}
                  <div className={`relative z-10 w-16 h-16 rounded-full border-4 flex items-center justify-center ${
                    edu.status === 'ONGOING' ? 'border-secondary bg-secondary/20' :
                    'border-accent bg-accent/20'
                  }`}>
                    <IconComponent size={24} className={
                      edu.status === 'ONGOING' ? 'text-secondary' :
                      'text-accent'
                    } />
                  </div>

                  {/* Education Card */}
                  <div className="flex-1">
                    <div className="bg-card p-6 rounded-lg border hover:border-primary transition-smooth group">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold">{edu.title}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                              edu.status === 'ONGOING' ? 'bg-secondary/20 text-secondary border border-secondary' :
                              'bg-accent/20 text-accent border border-accent'
                            }`}>
                              {edu.status}
                            </span>
                          </div>
                          
                          <div className="text-lg text-primary font-semibold mb-1">
                            {edu.organization}
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{edu.period}</span>
                            </div>
                            {edu.location && (
                              <div className="flex items-center gap-1">
                                <MapPin size={14} />
                                <span>{edu.location}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <span className="px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wide bg-muted text-muted-foreground">
                          {edu.type}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {edu.description}
                      </p>

                      {edu.achievements && (
                        <div>
                          <h4 className="text-primary font-semibold mb-2 text-sm">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, achieveIndex) => (
                              <li key={achieveIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-primary">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Hover Effect */}
                      <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-primary rounded px-2 py-1 text-xs text-primary-foreground">
                          View Details
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-gradient-matrix mb-6">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card p-4 rounded-lg border border-border hover:border-primary transition-smooth">
                <div className="flex items-center gap-3">
                  <Award className={cert.icon === 'primary' ? 'text-primary' : 'text-secondary'} size={20} />
                  <div>
                    <div className="font-semibold">{cert.name}</div>
                    <div className="text-sm text-muted-foreground">{cert.provider}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}