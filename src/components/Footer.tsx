import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Mail, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div>
            <h3 className="text-3xl font-bold mb-4">
              AUTOMATE — OPTIMIZE — <span className="text-primary">ACCELERATE</span>
            </h3>
            <p className="text-muted-foreground">
              Transforming businesses worldwide with intelligent AI automation solutions
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Trusted Partners</h4>
            <div className="flex justify-center items-center gap-8 opacity-50">
              <Badge variant="outline">Zapier</Badge>
              <Badge variant="outline">Make.com</Badge>
              <Badge variant="outline">n8n</Badge>
              <Badge variant="outline">GoHighLevel</Badge>
              <Badge variant="outline">HubSpot</Badge>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="mailto:ali.ahsen1223@gmail.com" 
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/923019188484" 
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aliautomates" 
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/aliautomates" 
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Ali Ahsen. All rights reserved. | Business Automation Expert
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;