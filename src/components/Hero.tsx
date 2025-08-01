import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import aliProfile from "@/assets/ali-profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-primary text-lg font-medium">HELLO</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              I'M A <span className="text-primary">BUSINESS</span>
              <br />
              <span className="text-primary">AUTOMATION</span>
              <br />
              EXPERT
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Saving businesses 20+ hours/week through intelligent automation and no-code solutions
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <Button size="lg" className="group">
                Let's Automate Your Workflow
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </a>
            <a href="#projects">
              <Button variant="outline" size="lg">
                View My Work
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-muted-foreground">100% Job Success</span>
            </div>
            <div className="text-muted-foreground">
              <span className="text-primary font-semibold">70+</span> Projects Completed
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
            <img
              src={aliProfile}
              alt="Ali Ahsen - Business Automation Expert"
              className="relative w-80 h-80 object-cover object-top rounded-full border-4 border-primary/20 animate-float"
              style={{ objectPosition: '50% 20%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;