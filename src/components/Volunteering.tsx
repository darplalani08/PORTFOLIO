import { Calendar, Users, Award, MapPin, LucideIcon } from 'lucide-react';

interface Volunteer {
  title: string;
  organization: string;
  period: string;
  status: 'ONGOING' | 'COMPLETED';
  type: 'Community' | 'Volunteer';
  description: string;
  achievements?: string[];
  location?: string;
  icon: LucideIcon;
}

const volunteers: Volunteer[] = [
  {
    title: "Crew Member",
    organization: "GDG Cloud Rajkot",
    period: "2024 - Present",
    status: "ONGOING",
    type: "Community",
    description: "Active contributor to Google Developer Group focusing on cloud technologies and cybersecurity. Participating in community events and knowledge sharing sessions.",
    achievements: [
      "Contributed to cloud security discussions",
      "Mentored junior developers",
      "Participated in technical sessions"
    ],
    location: "Rajkot, Gujarat",
    icon: Users
  },
  {
    title: "Volunteer",
    organization: "Google Developers Group Gandhinagar",
    period: "DevFest 2025",
    status: "COMPLETED", 
    type: "Volunteer",
    description: "Volunteered at DevFest 2025, one of the largest developer conferences in Gujarat. Assisted with event management and technical support.",
    achievements: [
      "Supported 500+ developers",
      "Managed registration desk",
      "Assisted speakers and attendees"
    ],
    location: "Gandhinagar, Gujarat",
    icon: Award
  }
];

export default function Volunteering() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gradient-cyber mb-4">
            Volunteering
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Community engagement and volunteer contributions
          </p>
          <div className="h-px bg-gradient-to-r from-secondary via-primary to-transparent"></div>
        </div>

        {/* Volunteering Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="space-y-12">
            {volunteers.map((volunteer, index) => {
              const IconComponent = volunteer.icon;
              return (
                <div key={index} className="relative flex gap-8">
                  {/* Timeline Node */}
                  <div className={`relative z-10 w-16 h-16 rounded-full border-4 flex items-center justify-center ${
                    volunteer.status === 'ONGOING' ? 'border-secondary bg-secondary/20' :
                    'border-accent bg-accent/20'
                  }`}>
                    <IconComponent size={24} className={
                      volunteer.status === 'ONGOING' ? 'text-secondary' :
                      'text-accent'
                    } />
                  </div>

                  {/* Volunteer Card */}
                  <div className="flex-1">
                    <div className="bg-card p-6 rounded-lg border hover:border-primary transition-smooth group">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold">{volunteer.title}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                              volunteer.status === 'ONGOING' ? 'bg-secondary/20 text-secondary border border-secondary' :
                              'bg-accent/20 text-accent border border-accent'
                            }`}>
                              {volunteer.status}
                            </span>
                          </div>
                          
                          <div className="text-lg text-primary font-semibold mb-1">
                            {volunteer.organization}
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{volunteer.period}</span>
                            </div>
                            {volunteer.location && (
                              <div className="flex items-center gap-1">
                                <MapPin size={14} />
                                <span>{volunteer.location}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <span className={`px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wide ${
                          volunteer.type === 'Community' ? 'bg-secondary/10 text-secondary' :
                          'bg-accent/10 text-accent'
                        }`}>
                          {volunteer.type}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {volunteer.description}
                      </p>

                      {volunteer.achievements && (
                        <div>
                          <h4 className="text-primary font-semibold mb-2 text-sm">
                            Key Contributions:
                          </h4>
                          <ul className="space-y-1">
                            {volunteer.achievements.map((achievement, achieveIndex) => (
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