import { Calendar, Users, LucideIcon } from 'lucide-react';

interface Experience {
  title: string;
  organization: string;
  period: string;
  status: 'ACTIVE' | 'COMPLETED' | 'ONGOING';
  type: 'Leadership';
  description: string;
  achievements?: string[];
  icon: LucideIcon;
}

const experiences: Experience[] = [
  {
    title: "Event Coordinator",
    organization: "Cyber Blockchain Club",
    period: "Aug 2025 - Present",
    status: "ACTIVE",
    type: "Leadership",
    description: "Leading cybersecurity awareness initiatives and organizing technical workshops for students. Managing club activities and coordinating with industry professionals.",
    achievements: [
      "Organized 5+ cybersecurity workshops",
      "Increased club membership by 40%",
      "Established partnerships with security firms"
    ],
    icon: Users
  }
];

export default function Experience() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gradient-cyber mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Professional leadership roles and responsibilities
          </p>
          <div className="h-px bg-gradient-to-r from-secondary via-primary to-transparent"></div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const IconComponent = experience.icon;
              return (
                <div key={index} className="relative flex gap-8">
                  {/* Timeline Node */}
                  <div className="relative z-10 w-16 h-16 rounded-full border-4 border-primary bg-primary/20 flex items-center justify-center">
                    <IconComponent size={24} className="text-primary" />
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1">
                    <div className="bg-card p-6 rounded-lg border hover:border-primary transition-smooth group">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold">{experience.title}</h3>
                            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary/20 text-primary border border-primary">
                              {experience.status}
                            </span>
                          </div>
                          
                          <div className="text-lg text-primary font-semibold mb-1">
                            {experience.organization}
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{experience.period}</span>
                            </div>
                          </div>
                        </div>

                        <span className="px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wide bg-primary/10 text-primary">
                          {experience.type}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      {experience.achievements && (
                        <div>
                          <h4 className="text-primary font-semibold mb-2 text-sm">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {experience.achievements.map((achievement, achieveIndex) => (
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
      </div>
    </section>
  );
}