import { useState } from 'react';
import { 
  Code, 
  Shield, 
  Database, 
  Network, 
  Terminal, 
  Globe, 
  Server, 
  Lock,
  Cpu,
  HardDrive,
  LucideIcon
} from 'lucide-react';

interface Skill {
  name: string;
  category: string;
  icon: LucideIcon;
  description: string;
  proficiency: number;
}

const skills: Skill[] = [
  { 
    name: "JavaScript", 
    category: "Programming", 
    icon: Code, 
    description: "Dynamic web development & automation",
    proficiency: 70
  },
  { 
    name: "Python", 
    category: "Programming", 
    icon: Code, 
    description: "Security scripting & backend development",
    proficiency: 75
  },
  { 
    name: "SQL", 
    category: "Database", 
    icon: Database, 
    description: "Database management & security",
    proficiency: 80
  },
  { 
    name: "Ethical Hacking", 
    category: "Security", 
    icon: Shield, 
    description: "Vulnerability assessment & penetration testing",
    proficiency: 35
  },
  { 
    name: "Event Management", 
    category: "All", 
    icon: Globe, 
    description: "Managing and Organizing tech events",
    proficiency: 95
  },
  { 
    name: "Computer Networking", 
    category: "Infrastructure", 
    icon: Network, 
    description: "Network security & protocol analysis",
    proficiency: 85
  },
  { 
    name: "Operating Systems", 
    category: "Infrastructure", 
    icon: Terminal, 
    description: "System administration & security hardening",
    proficiency: 80
  },
  { 
    name: "HTML5/CSS", 
    category: "Frontend", 
    icon: Globe, 
    description: "Secure web interface development",
    proficiency: 90
  },
  { 
    name: "DBMS", 
    category: "Database", 
    icon: HardDrive, 
    description: "Database design & security implementation",
    proficiency: 75
  },
  { 
    name: "C Programming", 
    category: "Programming", 
    icon: Cpu, 
    description: "System-level programming & security",
    proficiency: 70
  }
];

const categories = ["All", "Programming", "Security", "Database", "Infrastructure", "Frontend"];

export default function CyberArsenal() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gradient-cyber mb-4">
            Skills
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Technical skills and expertise in various technologies
          </p>
          <div className="h-px bg-gradient-to-r from-secondary via-primary to-transparent"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm transition-smooth border ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card text-muted-foreground border-border hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="relative group"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className={`bg-card p-6 rounded-lg border transition-smooth ${
                  hoveredSkill === skill.name ? 'border-secondary' : 'border-border'
                }`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${
                      skill.category === 'Security' ? 'bg-accent/20 text-accent' :
                      skill.category === 'Programming' ? 'bg-primary/20 text-primary' :
                      skill.category === 'Database' ? 'bg-secondary/20 text-secondary' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {skill.description}
                  </p>

                  {/* Proficiency Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="text-primary">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000"
                        style={{ 
                          width: hoveredSkill === skill.name ? `${skill.proficiency}%` : '0%' 
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  {hoveredSkill === skill.name && (
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground border border-primary rounded px-2 py-1 text-xs animate-[fade-in_0.3s_ease-out]">
                      Viewing Details
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Expertise Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg text-primary">
            <Lock size={16} />
            
          </div>
        </div>
      </div>
    </section>
  );
}