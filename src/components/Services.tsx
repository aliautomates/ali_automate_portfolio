import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Zap, 
  Mail, 
  Database, 
  Workflow, 
  Brain,
  ShoppingCart,
  MessageSquare
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Business Process Automation",
      description: "Streamline workflows with intelligent automation using Zapier, Make.com, and n8n",
      tools: ["Zapier", "Make.com", "n8n", "AI Agents"],
      features: ["Workflow Automation", "CRM Integration", "Data Synchronization"]
    },
    {
      icon: Mail,
      title: "Marketing Automation",
      description: "Optimize lead generation and nurturing with advanced marketing automation systems",
      tools: ["GoHighLevel", "ActiveCampaign", "Mailchimp"],
      features: ["Lead Nurturing", "AI Segmentation", "Analytics Dashboards"]
    },
    {
      icon: Workflow,
      title: "Custom Low-Code Solutions",
      description: "Build powerful applications and integrations without traditional coding",
      tools: ["Make", "AI Integrations", "Custom APIs"],
      features: ["App Building", "Legacy Modernization", "System Integration"]
    },
    {
      icon: Database,
      title: "Seamless Integrations",
      description: "Connect all your business tools for unified data flow and operations",
      tools: ["HubSpot", "Zoho", "Pipedrive", "Shopify"],
      features: ["CRM Sync", "E-commerce Integration", "AI Tools Integration"]
    }
  ];

  const integrations = [
    { name: "HubSpot", category: "CRM" },
    { name: "Zoho", category: "CRM" },
    { name: "Pipedrive", category: "CRM" },
    { name: "Meta Ads", category: "Marketing" },
    { name: "Mailchimp", category: "Marketing" },
    { name: "Shopify", category: "E-commerce" },
    { name: "WooCommerce", category: "E-commerce" },
    { name: "ChatGPT", category: "AI" },
    { name: "Claude", category: "AI" }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Services & Expertise</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            WHAT I <span className="text-primary">OFFER</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive automation solutions designed to optimize your business processes 
            and maximize efficiency across all operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-2">Tools & Platforms:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <Zap className="w-3 h-3 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Trusted Integrations</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {integrations.map((integration, index) => (
              <Card key={index} className="text-center hover:border-primary/50 transition-colors">
                <CardContent className="p-4 space-y-2">
                  <div className="font-semibold">{integration.name}</div>
                  <Badge variant="outline" className="text-xs">
                    {integration.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;