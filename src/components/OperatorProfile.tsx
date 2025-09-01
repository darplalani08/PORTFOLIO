export default function OperatorProfile() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gradient-matrix mb-4">
            About Me
          </h2>
          <div className="h-px bg-gradient-to-r from-primary via-secondary to-transparent"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Content */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-lg leading-relaxed">
                My objective is to <span className="text-primary font-semibold">build and defend digital infrastructures</span> against evolving cyber threats. 
                As a B.Tech CSE student with a passion for ethical hacking, I bridge the gap between 
                <span className="text-secondary font-semibold"> innovative development</span> and 
                <span className="text-accent font-semibold"> robust security</span>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg border border-border hover:border-primary transition-smooth">
                <div className="text-primary font-semibold">Specialization</div>
                <div className="text-sm text-muted-foreground mt-2">Cybersecurity & Ethical Hacking</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border hover:border-secondary transition-smooth">
                <div className="text-secondary font-semibold">Status</div>
                <div className="text-sm text-muted-foreground mt-2">Open for Collaborations</div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="space-y-4">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold text-primary mb-4">
                Personal Details
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Education:</span>
                  <span>B.Tech CSE @ SIT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Previous:</span>
                  <span>Diploma CE (8.82 CGPA)</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-[1px] rounded-lg">
              <div className="bg-background p-4 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Mission</div>
                  <div className="text-lg mt-2">Protecting the Digital World</div>
                  <div className="text-sm text-muted-foreground mt-1">Through Ethical Hacking & Secure Development</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}