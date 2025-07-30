import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy, Users, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Trophy, label: "100% Success Rate", value: "Upwork" },
    { icon: Users, label: "70+ Projects", value: "Completed" },
    { icon: Clock, label: "Since 2020", value: "Freelancing" },
    { icon: GraduationCap, label: "CS Graduate", value: "2019-2023" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            I'M <span className="text-primary">ALI AHSEN</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate Computer Science graduate with expertise in business process automation, 
            marketing automation, and no-code solutions. I help businesses streamline their operations 
            and save valuable time through intelligent automation systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Started my freelancing journey in 2020 during my Computer Science studies, 
                beginning with Python web scraping projects and gradually expanding into 
                comprehensive automation solutions.
              </p>
              <p>
                Today, I specialize in building efficient, scalable automation systems 
                using cutting-edge no-code tools like Zapier, Make.com, and AI integrations 
                that help businesses operate more efficiently.
              </p>
              <p>
                When I'm not automating workflows, you'll find me playing football, 
                volleyball, or catching up on the latest anime series.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Education & Background</h3>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold">BS Computer Science</h4>
                    <p className="text-muted-foreground">2019 - 2023</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Specialized in software development, data structures, and algorithms. 
                  Discovered my passion for automation and efficiency optimization during my studies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;