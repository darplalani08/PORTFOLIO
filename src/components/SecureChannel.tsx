import { useState } from 'react';
import { Send, Github, Linkedin, Mail, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function SecureChannel() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gradient-matrix mb-4">
            Contact Me
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get in touch for collaboration opportunities and project discussions
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto max-w-md"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg border">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="text-primary" size={20} />
                <span className="text-sm text-primary font-semibold">Contact Form</span>
              </div>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@domain.com"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Security Consultation / Collaboration Inquiry"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share details about your project, collaboration ideas, or security requirements..."
                    rows={5}
                    required
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full"></div>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send size={16} />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-primary mb-2">Message Sent Successfully!</h3>
                <p className="text-muted-foreground text-sm">
                  Your message has been received. Expect a response within 24-48 hours.
                </p>
              </div>
            )}
          </div>

          {/* Contact Information & Links */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-primary font-semibold mb-4 text-lg">
                Direct Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                  <Mail className="text-primary" size={20} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-muted-foreground">lalanidarp1@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-secondary font-semibold mb-4 text-lg">
                Social Networks
              </h3>
              <div className="space-y-3">
                <Button variant="outline" asChild className="w-full justify-start hover:border-primary transition-smooth">
                  <a href="https://github.com/darp99" target="_blank" rel="noopener noreferrer">
                    <Github size={20} className="mr-3" />
                    <div className="text-left">
                      <div className="font-semibold">GitHub</div>
                    </div>
                  </a>
                </Button>
                
                <Button variant="outline" asChild className="w-full justify-start hover:border-secondary transition-smooth">
                  <a href="https://www.linkedin.com/in/darplalani/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} className="mr-3" />
                    <div className="text-left">
                      <div className="font-semibold">LinkedIn</div>
                    </div>
                  </a>
                </Button>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-[1px] rounded-lg">
              <div className="bg-card p-4 rounded-lg bg-background">
                <div className="flex items-start gap-3">
                  <Shield className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="text-secondary font-semibold text-sm mb-2">
                      Privacy Notice
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      All communications are handled with strict confidentiality. 
                      Your information is secure and will not be shared with third parties.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-card p-4 rounded-lg border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Availability Status</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-primary text-sm font-semibold">Available</span>
                </div>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Open for collaborations, internships, and project consultations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}