import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const handleViewAllProjects = () => {
    navigate("/projects");
  };

  const projects = [
    {
      category: "AI/Automation Projects",
      items: [
        {
          title: "AI Voice Calling Agent",
          description: "Automated voice calling system with AI-powered conversations for lead qualification and customer support.",
          tools: ["Make.com", "OpenAI", "Twilio"],
          impact: "Reduced call handling time by 60%",
          icon: "🤖"
        },
        {
          title: "Lead Generation & Qualification",
          description: "End-to-end automated lead generation system with AI-powered scoring and qualification.",
          tools: ["n8n", "Make.com", "GoHighLevel"],
          impact: "Increased qualified leads by 200%",
          icon: "🎯"
        },
        {
          title: "Blog Generator with AI Images",
          description: "Automated blog content creation with AI-generated images and SEO optimization.",
          tools: ["n8n", "OpenAI", "Make.com"],
          impact: "Generated 100+ blog posts",
          icon: "✍️"
        }
      ]
    },
    {
      category: "Web Bots",
      items: [
        {
          title: "Telegram Bot Suite",
          description: "Multi-functional Telegram bots for customer service, notifications, and data collection.",
          tools: ["n8n", "Telegram API", "Zapier"],
          impact: "Handled 1000+ daily interactions",
          icon: "📱"
        },
        {
          title: "LinkedIn Outreach Bot",
          description: "Automated LinkedIn connection requests and personalized messaging for lead generation.",
          tools: ["Make.com", "LinkedIn API", "GoHighLevel"],
          impact: "Generated 500+ new connections",
          icon: "💼"
        },
        {
          title: "Form Auto-filling Bot",
          description: "Intelligent form filling automation for repetitive data entry tasks.",
          tools: ["n8n", "Zapier", "Airtable"],
          impact: "Reduced data entry time by 90%",
          icon: "📝"
        }
      ]
    },
    {
      category: "Web Scraping",
      items: [
        {
          title: "E-commerce Data Mining",
          description: "Comprehensive product data extraction from eBay, Etsy, and other marketplaces.",
          tools: ["Apify", "n8n", "Make.com"],
          impact: "Extracted 50,000+ product listings",
          icon: "🛒"
        },
        {
          title: "Real Estate Analytics",
          description: "Property data scraping from Zillow, Redfin for market analysis and investment decisions.",
          tools: ["Apify", "Airtable", "Zapier"],
          impact: "Analyzed 10,000+ properties",
          icon: "🏠"
        },
        {
          title: "Social Media Intelligence",
          description: "Automated data collection from LinkedIn, Reddit for market research and sentiment analysis.",
          tools: ["n8n", "Make.com", "ChatGPT"],
          impact: "Processed 100,000+ posts",
          icon: "📈"
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Featured Work</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            MY <span className="text-primary">PROJECTS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of automation solutions that have transformed business operations 
            and delivered measurable results for my clients.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {category.items.map((project, projectIndex) => (
                  <Card key={projectIndex} className="group hover:border-primary/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{project.icon}</span>
                          <CardTitle className="text-lg">{project.title}</CardTitle>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => navigate("/projects")}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{project.description}</p>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, toolIndex) => (
                            <Badge key={toolIndex} variant="secondary" className="text-xs">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-primary">{project.impact}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold">500+</span>
              </div>
              <p className="text-muted-foreground">Hours Saved Weekly</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold">50+</span>
              </div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold">99%</span>
              </div>
              <p className="text-muted-foreground">Automation Success Rate</p>
            </div>
          </div>
          <Button size="lg">
            <Button size="lg" onClick={handleViewAllProjects}>
              View All Projects
            </Button>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;