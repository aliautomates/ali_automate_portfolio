import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, ExternalLink, Calendar, Users, Zap, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tools: string[];
  impact: string;
  icon: string;
  featuredImage: string;
  images: string[];
  completedDate: string;
  clientType: string;
}

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allProjects: Project[] = [
    {
      id: "ai-voice-agent",
      title: "AI Voice Calling Agent",
      category: "AI/Automation",
      description: "Automated voice calling system with AI-powered conversations for lead qualification and customer support.",
      fullDescription: "Developed a sophisticated AI voice calling agent that revolutionized client communication processes. This system integrates advanced natural language processing with voice synthesis to conduct human-like conversations, qualify leads automatically, and provide 24/7 customer support. The solution reduced manual calling time by 60% while maintaining high-quality interactions.",
      tools: ["Make.com", "OpenAI", "Twilio", "Webhooks", "CRM Integration"],
      impact: "Reduced call handling time by 60%",
      icon: "🤖",
      featuredImage: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      completedDate: "December 2024",
      clientType: "SaaS Company"
    },
    {
      id: "lead-generation",
      title: "Lead Generation & Qualification System",
      category: "AI/Automation",
      description: "End-to-end automated lead generation system with AI-powered scoring and qualification.",
      fullDescription: "Built a comprehensive lead generation and qualification system that automatically identifies, scores, and nurtures potential customers. The system uses AI to analyze lead behavior, assign quality scores, and trigger personalized follow-up sequences. This automation increased qualified leads by 200% while reducing manual qualification time.",
      tools: ["Zapier", "HubSpot", "ChatGPT", "LinkedIn API", "Email Automation"],
      impact: "Increased qualified leads by 200%",
      icon: "🎯",
      featuredImage: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800"
      ],
      completedDate: "November 2024",
      clientType: "Marketing Agency"
    },
    {
      id: "crm-automation",
      title: "CRM Automation Suite",
      category: "Business Automation",
      description: "Complete CRM automation with intelligent data sync, follow-ups, and reporting.",
      fullDescription: "Designed and implemented a comprehensive CRM automation suite that streamlines customer relationship management processes. The system automatically syncs data across multiple platforms, triggers intelligent follow-up sequences, and generates detailed performance reports. This solution saved the client 25+ hours per week in manual data entry and follow-up tasks.",
      tools: ["Pipedrive", "Make.com", "ActiveCampaign", "Google Sheets", "Slack"],
      impact: "Saved 25+ hours/week",
      icon: "📊",
      featuredImage: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      completedDate: "October 2024",
      clientType: "Real Estate Company"
    },
    {
      id: "blog-generator",
      title: "AI Blog Generator with Images",
      category: "Content Automation",
      description: "Automated blog content creation with AI-generated images and SEO optimization.",
      fullDescription: "Created an intelligent blog generation system that produces high-quality, SEO-optimized content with accompanying AI-generated images. The system researches topics, writes engaging articles, generates relevant images, and publishes content automatically. This automation generated over 100 blog posts while maintaining consistent quality and SEO best practices.",
      tools: ["OpenAI", "DALL-E", "WordPress", "Yoast SEO", "Make.com"],
      impact: "Generated 100+ blog posts",
      icon: "✍️",
      featuredImage: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      completedDate: "September 2024",
      clientType: "Digital Marketing Blog"
    },
    {
      id: "telegram-bot",
      title: "Multi-functional Telegram Bot Suite",
      category: "Web Bots",
      description: "Advanced Telegram bots for customer service, notifications, and data collection.",
      fullDescription: "Developed a suite of Telegram bots that handle customer service inquiries, send automated notifications, and collect user data efficiently. The bots use natural language processing to understand user queries and provide relevant responses. This system handles over 1000 daily interactions while maintaining high user satisfaction rates.",
      tools: ["Python", "Telegram API", "PostgreSQL", "Natural Language Processing", "Webhooks"],
      impact: "Handled 1000+ daily interactions",
      icon: "📱",
      featuredImage: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      completedDate: "August 2024",
      clientType: "E-commerce Store"
    },
    {
      id: "linkedin-outreach",
      title: "LinkedIn Outreach Automation",
      category: "Web Bots",
      description: "Automated LinkedIn connection requests and personalized messaging for lead generation.",
      fullDescription: "Built an intelligent LinkedIn outreach automation system that identifies potential prospects, sends personalized connection requests, and follows up with targeted messages. The system uses AI to craft personalized messages based on prospect profiles and maintains natural interaction patterns to avoid detection. Generated over 500 new connections with high acceptance rates.",
      tools: ["Selenium", "Python", "CRM Integration", "AI Personalization", "Proxy Management"],
      impact: "Generated 500+ new connections",
      icon: "💼",
      featuredImage: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      completedDate: "July 2024",
      clientType: "B2B Sales Team"
    },
    {
      id: "ecommerce-scraper",
      title: "E-commerce Data Mining System",
      category: "Web Scraping",
      description: "Comprehensive product data extraction from eBay, Etsy, and other marketplaces.",
      fullDescription: "Developed a robust e-commerce data mining system that extracts product information, pricing data, and market trends from multiple online marketplaces. The system handles anti-bot measures, processes large datasets, and provides clean, structured data for analysis. Successfully extracted over 50,000 product listings while maintaining data accuracy and compliance.",
      tools: ["Python", "BeautifulSoup", "Scrapy", "Proxy Rotation", "Data Processing"],
      impact: "Extracted 50,000+ product listings",
      icon: "🛒",
      featuredImage: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800"
      ],
      completedDate: "June 2024",
      clientType: "Market Research Firm"
    },
    {
      id: "real-estate-analytics",
      title: "Real Estate Market Analytics",
      category: "Web Scraping",
      description: "Property data scraping from Zillow, Redfin for market analysis and investment decisions.",
      fullDescription: "Created a comprehensive real estate analytics system that scrapes property data from major real estate platforms, analyzes market trends, and provides investment insights. The system tracks price changes, market conditions, and property features to help investors make informed decisions. Analyzed over 10,000 properties across multiple markets.",
      tools: ["Python", "Selenium", "Pandas", "Data Visualization", "Market Analysis"],
      impact: "Analyzed 10,000+ properties",
      icon: "🏠",
      featuredImage: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      completedDate: "May 2024",
      clientType: "Real Estate Investment Firm"
    }
  ];

  const categories = ["All", "AI/Automation", "Business Automation", "Content Automation", "Web Bots", "Web Scraping"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-2xl font-bold">All Projects</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group hover:border-primary/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={project.featuredImage} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{project.icon}</span>
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>
                
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-primary">{project.impact}</span>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.completedDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {project.clientType}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{selectedProject.icon}</span>
                    <div>
                      <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                      <Badge variant="secondary" className="mt-1">
                        {selectedProject.category}
                      </Badge>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Featured Image */}
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img 
                      src={selectedProject.featuredImage} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Project Overview</h3>
                        <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Impact</h3>
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-primary">{selectedProject.impact}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Tools & Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tools.map((tool, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-semibold mb-1">Completed</h4>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {selectedProject.completedDate}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Client Type</h4>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Users className="w-3 h-3" />
                            {selectedProject.clientType}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Images */}
                  {selectedProject.images.length > 1 && (
                    <div>
                      <h3 className="font-semibold mb-4">Project Gallery</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {selectedProject.images.slice(1).map((image, index) => (
                          <div key={index} className="aspect-video overflow-hidden rounded-lg">
                            <img 
                              src={image} 
                              alt={`${selectedProject.title} - Image ${index + 2}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProjectsPage;