import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

interface TerminalLine {
  text: string;
  delay: number;
  className?: string;
}

const terminalLines: TerminalLine[] = [
  { text: "Initializing secure connection...", delay: 500 },
  { text: "Loading security protocols...", delay: 1000 },
  { text: "Authenticating digital identity...", delay: 1500 },
  { text: "Access granted. Welcome to the Digital Fortress.", delay: 2000, className: "text-primary" },
  { text: "// SYSTEM_STATUS: ONLINE", delay: 2500, className: "text-secondary" },
  { text: "// USER_PROFILE: Darp Lalani - Cybersecurity Specialist", delay: 3000, className: "text-secondary" },
  { text: "// CLEARANCE_LEVEL: Ethical Hacker", delay: 3500, className: "text-accent" },
];

export default function TerminalHero() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showMainContent, setShowMainContent] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [currentHeadline, setCurrentHeadline] = useState("");

  const headline = "Darp Lalani";
  const subtitle = "B.Tech CSE Student | Cybersecurity | Ethical Hacking";

  useEffect(() => {
    terminalLines.forEach((_, index) => {
      setTimeout(() => {
        setVisibleLines(index + 1);
        if (index === terminalLines.length - 1) {
          setTimeout(() => setShowMainContent(true), 1000);
        }
      }, terminalLines[index].delay);
    });
  }, []);

  useEffect(() => {
    if (!showMainContent) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= headline.length) {
        setCurrentHeadline(headline.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setTypingText(subtitle), 500);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [showMainContent]);

  const scrollToContent = () => {
    const element = document.getElementById('main-content');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary opacity-20 font-mono text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {Math.random().toString(36).substring(2, 15)}
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6">
        {/* Terminal Window */}
        <div className="terminal rounded-lg p-6 mb-8 border glow-matrix">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="ml-4 text-sm font-mono text-muted-foreground">darp@digitalfortress:~$</span>
          </div>

          {terminalLines.slice(0, visibleLines).map((line, index) => (
            <div key={index} className={`font-mono text-sm mb-2 ${line.className || ''}`}>
              {line.text}
            </div>
          ))}

          {visibleLines === terminalLines.length && (
            <div className="mt-4">
              <span className="terminal-cursor"></span>
            </div>
          )}
        </div>

        {/* Main Hero Content */}
        {showMainContent && (
          <div className="text-center space-y-6 animate-[fade-in_0.8s_ease-out]">
            <h1 className="text-5xl md:text-7xl font-bold font-mono">
              <span className="text-gradient-matrix">
                {currentHeadline}
              </span>
              {currentHeadline.length === headline.length && (
                <span className="terminal-cursor ml-2"></span>
              )}
            </h1>

            {typingText && (
              <p className="text-xl md:text-2xl font-mono text-secondary animate-[fade-in_0.5s_ease-out]">
                {typingText}
              </p>
            )}

            
          </div>
        )}
      </div>
    </div>
  );
}