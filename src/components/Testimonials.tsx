import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kim Isaac",
      review: "I highly recommend Ali. His communication is excellent, he is very skilled, and the quality of work he delivered was exactly what I was looking for. I believe he is a great partner to collaborate with and incredibly talented."
    },
    {
      name: "Russell Morgan", 
      review: "People like Ali are why I love UpWork vs Fivverr or any other platform. Smart, responsive, and follows through on what he commits to. Can't recommend him highly enough."
    },
    {
      name: "Rich Ayala",
      review: "Ali was awesome! He was able to help me do exactly what I was asking for. I was able to successfully add the extractor I needed. I highly recommend his services"
    },
    {
      name: "Rick Miller",
      review: "Ali did a great job on the project.... created a user interface was nice and really good with Python. Actually turned out better than we expected for an amazing price."
    },
    {
      name: "Avish Malhotra",
      review: "Ali is a great freelancer to work with. He is talented and cost efficient. He performed his task exceptionally. Trusted Developer.."
    },
    {
      name: "Timur Usmanov",
      review: "Ali did a fast, quality job. Met all the deadlines. I enjoyed working with him."
    },
    {
      name: "Eric Kim",
      review: "great to work with ali"
    },
    {
      name: "Hira Khyzer",
      review: "Working with Ali was a fantastic experience. He's professional, reliable, and always delivers on time. His communication is clear, and he goes the extra mile to ensure everything runs smoothly. I highly recommend him to anyone looking for a trustworthy freelancer!"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [totalPages]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * testimonialsPerPage;
    return testimonials.slice(startIndex, startIndex + testimonialsPerPage);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Client Testimonials</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            WHAT CLIENTS <span className="text-primary">SAY</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from satisfied clients who have experienced the power 
            of automation in their businesses.
          </p>
        </div>

        <div className="relative mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCurrentTestimonials().map((testimonial, index) => (
            <Card key={index} className="hover:border-primary/50 transition-all duration-300 h-full">
              <CardContent className="p-6 space-y-4 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <Quote className="w-5 h-5 text-primary" />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground italic flex-1">
                  "{testimonial.review}"
                </blockquote>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold">5.0</span>
              </div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Quote className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold">50+</span>
              </div>
              <p className="text-muted-foreground">Client Reviews</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold">100%</span>
              </div>
              <p className="text-muted-foreground">Job Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;