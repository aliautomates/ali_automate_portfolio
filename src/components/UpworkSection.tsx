import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Trophy, Clock, DollarSign, ExternalLink } from "lucide-react";

const UpworkSection = () => {
  const upworkStats = [
    { icon: Star, label: "Job Success Score", value: "100%", color: "text-green-500" },
    { icon: Trophy, label: "Top Rated Plus", value: "Badge", color: "text-primary" },
    { icon: Clock, label: "Total Hours", value: "2,000+", color: "text-blue-500" },
    { icon: DollarSign, label: "Total Earned", value: "$50K+", color: "text-green-500" },
  ];

  const handleUpworkClick = () => {
    window.open("https://www.upwork.com/freelancers/~011127d70a1a5805d1", "_blank");
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Upwork Excellence</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            PROVEN <span className="text-primary">TRACK RECORD</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With a 100% Job Success Score and Top Rated Plus status on Upwork, 
            I've consistently delivered exceptional results for clients worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {upworkStats.map((stat, index) => (
            <Card key={index} className="text-center hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-1">{stat.value}</h3>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Why Clients Choose Me</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">100% Job Success Rate</h4>
                  <p className="text-muted-foreground">Perfect track record with all completed projects</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">Top Rated Plus Badge</h4>
                  <p className="text-muted-foreground">Highest tier of recognition on Upwork</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">2,000+ Hours Worked</h4>
                  <p className="text-muted-foreground">Extensive experience across diverse projects</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">$50K+ Total Earned</h4>
                  <p className="text-muted-foreground">Proven value delivery to clients</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-primary" />
                  Upwork Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Visit my Upwork profile to see detailed client reviews, 
                  portfolio samples, and my complete work history.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">5.0 (50+ reviews)</span>
                </div>
                <Button onClick={handleUpworkClick} className="w-full" size="lg">
                  View Upwork Profile
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpworkSection;