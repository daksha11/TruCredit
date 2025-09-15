import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Building, DollarSign, Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
        }
      });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll(".animate-on-scroll");
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: CheckCircle,
      title: "Credit Restoration",
      description: "Fix your personal credit fast and effectively with our proven credit sweep process.",
      features: ["Remove 80% of negative items", "30-45 day timeline", "Proven results"],
    },
    {
      icon: Building,
      title: "Business Credit",
      description: "7-step program to build your company's financial power and establish strong business credit.",
      features: ["Complete business setup", "D-U-N-S number", "Trade line accounts"],
    },
    {
      icon: DollarSign,
      title: "Funding",
      description: "Get access to $5k–$300k in personal and business funding for the life you deserve.",
      features: ["Personal funding", "Business loans", "Up to $300k available"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 42, 56, 0.8), rgba(30, 42, 56, 0.8)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-primary/90 via-navy-primary/70 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Restore Your Credit.
              <span className="block bg-gradient-to-r from-gold-accent to-yellow-400 bg-clip-text text-transparent">
                Build Your Future.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              We help you remove negative items, build business credit, and secure funding for the life you deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" asChild className="group">
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/services">
                  View Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gold-accent/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gold-accent/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Highlights Section */}
      <section ref={featuresRef} className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-primary mb-6">
              Your Path to Financial Freedom
            </h2>
            <p className="text-xl text-gray-medium max-w-3xl mx-auto">
              Transform your financial future with our comprehensive credit restoration and business building services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title} 
                className={`hover-lift animate-on-scroll bg-white shadow-lg border-0`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gold-accent to-yellow-400 rounded-full mb-6">
                    <highlight.icon className="h-8 w-8 text-navy-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy-primary mb-4">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-gray-medium mb-6 leading-relaxed">
                    {highlight.description}
                  </p>
                  
                  <ul className="space-y-2 text-sm">
                    {highlight.features.map((feature) => (
                      <li key={feature} className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-gold-accent mr-2" />
                        <span className="text-gray-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-on-scroll">
            <Button variant="navy" size="lg" asChild>
              <Link to="/services">
                View All Services & Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Credit?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of clients who have successfully restored their credit and built their financial future with TruCredit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Start Your Journey Today</Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
