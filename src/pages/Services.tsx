import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Star, ArrowRight, Phone } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "General Consultation",
      price: "Free",
      duration: "30 minutes",
      description: "Get expert advice and understand your options with a complimentary consultation session.",
      features: [
        "Credit report review",
        "Personalized strategy",
        "No obligation assessment",
        "Expert recommendations"
      ],
      badge: "Most Popular",
      badgeColor: "bg-card-3 text-white"
    },
    {
      title: "Auto & Home Purchasing Assistance",
      price: "Free",
      duration: "30 minutes",
      description: "Specialized guidance for auto loans and home purchases to help you secure the best rates.",
      features: [
        "Pre-purchase planning",
        "Rate optimization strategies",
        "Lender recommendations",
        "Documentation guidance"
      ],
      badge: "Limited Time",
      badgeColor: "bg-navbar text-white"
    },
    {
      title: "Credit Intake / Restoration",
      price: "$75",
      duration: "1.5 hours",
      description: "Comprehensive credit analysis and restoration planning session to map your credit journey.",
      features: [
        "Detailed credit analysis",
        "Restoration timeline",
        "Action plan development",
        "Progress tracking setup"
      ]
    },
    {
      title: "Credit Sweep",
      price: "$999",
      originalPrice: "$1199 with bankruptcy",
      duration: "30-45 days",
      description: "Our signature service that removes approximately 80% of negative items from your credit report.",
      features: [
        "Remove negative items",
        "80% success rate",
        "30-45 day process",
        "Proven methodology",
        "Bankruptcy included (+$200)"
      ],
      highlight: true
    },
    {
      title: "Business Credit 7-Step Program",
      price: "$850",
      duration: "3-6 months",
      description: "Complete business credit building program that establishes and builds real business credit in 7 steps.",
      features: [
        "Business formation",
        "D-U-N-S number setup",
        "Business credit reports",
        "Trade line accounts",
        "Business credit cards",
        "Vendor accounts",
        "Business funding access"
      ],
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-heading mb-6">
            Affordable, Transparent Services
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            No hidden fees. Clear pricing. Results you can trust.
          </p>
          <div className="flex items-center justify-center space-x-2 text-gold-star">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <span className="text-white ml-2">Trusted by 1000+ clients</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className={`relative flex flex-col hover-lift transition-all duration-300 ${
                  service.highlight 
                    ? 'ring-2 ring-card-1 shadow-xl scale-105 bg-card-3/20' 
                    : 'shadow-lg bg-white'
                } border-0`}
              >
                {service.badge && (
                  <Badge className={`absolute -top-3 left-6 ${service.badgeColor} px-3 py-1`}>
                    {service.badge}
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-heading mb-2">
                    {service.title}
                  </CardTitle>
                  
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-card-1">
                      {service.price}
                    </span>
                    {service.originalPrice && (
                      <span className="text-sm text-gray-600 line-through">
                        {service.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {service.duration}
                  </div>
                </CardHeader>
                
                <CardContent className="flex flex-col flex-grow space-y-6">
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 flex-grow">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-card-1 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 mt-auto">
                    <Button 
                      variant={service.highlight ? "hero" : "default"} 
                      className="w-full" 
                      asChild
                    >
                      <Link to="/contact">
                        {service.price === "Free" ? "Book Now" : "Get Started"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    
                    {/* Payment button commented out as requested */}
                    {/* {service.price !== "Free" && (
                      <Button variant="outline" className="w-full mt-3" asChild>
                        <Link to="/payment">Make Payment</Link>
                      </Button>
                    )} */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-card-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-heading mb-6">
            Have Questions About Our Services?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Speak with our credit experts to find the perfect solution for your financial goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Call 470-223-8668
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="bg-white text-text-primary border-white hover:bg-white/90" asChild>
              <Link to="/faq">View FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;