import TerminalHero from '@/components/TerminalHero';
import OperatorProfile from '@/components/OperatorProfile';
import CyberArsenal from '@/components/CyberArsenal';
import CaseFiles from '@/components/CaseFiles';
import Experience from '@/components/Experience';
import Volunteering from '@/components/Volunteering';
import Education from '@/components/Education';
import SecureChannel from '@/components/SecureChannel';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Terminal Hero Section */}
      <TerminalHero />
      
      {/* Main Content */}
      <div id="main-content" className="relative">
        {/* About / Operator Profile */}
        <OperatorProfile />
        
        {/* Skills / Cyber Arsenal */}
        <CyberArsenal />
        
        {/* Projects / Case Files */}
        <CaseFiles />
        
        {/* Experience */}
        <Experience />
        
        {/* Volunteering */}
        <Volunteering />
        
        {/* Education */}
        <Education />
        
        {/* Contact / Secure Channel */}
        <SecureChannel />
        
        {/* Footer */}
        <footer className="py-8 px-6 border-t border-border bg-card/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="font-mono text-sm text-muted-foreground">
                <span className="text-primary">$</span> echo "Digital Fortress © 2025 Darp Lalani"
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span>STATUS:</span>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-mono">SECURED</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Index;