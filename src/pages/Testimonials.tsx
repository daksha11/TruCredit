import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote, ArrowRight, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Rodriguez",
      location: "Atlanta, GA",
      rating: 5,
      title: "Credit Score Improved by 180 Points!",
      content: "TruCredit completely transformed my financial life. I went from a 520 credit score to 700 in just 45 days. Their credit sweep service removed all my collections and late payments. Now I've been approved for my first home mortgage!",
      beforeScore: 520,
      afterScore: 700,
      service: "Credit Sweep"
    },
    {
      name: "Sarah Johnson",
      location: "Dallas, TX",
      rating: 5,
      title: "Business Credit Built from Scratch",
      content: "The 7-Step Business Credit program was worth every penny. Within 4 months, my business had established credit lines totaling $50,000. The step-by-step guidance made everything clear and easy to follow.",
      beforeScore: "No Business Credit",
      afterScore: "$50K Credit Lines",
      service: "Business Credit Program"
    },
    {
      name: "James Wilson",
      location: "Miami, FL",
      rating: 5,
      title: "Auto Loan Approved with Previous Bankruptcy",
      content: "Even with a recent bankruptcy, TruCredit helped me get approved for a car loan at a reasonable rate. Their expertise in handling complex credit situations is unmatched. I'm now driving my dream car!",
      beforeScore: "Bankruptcy",
      afterScore: "Auto Loan Approved",
      service: "Credit Restoration"
    },
    {
      name: "Emily Chen",
      location: "Los Angeles, CA",
      rating: 5,
      title: "Collections Removed, Credit Rebuilt",
      content: "I had multiple collections accounts dragging my score down. TruCredit removed all of them and helped me establish positive payment history. My credit score improved by 150 points in just 30 days.",
      beforeScore: 580,
      afterScore: 730,
      service: "Credit Sweep"
    },
    {
      name: "David Thompson",
      location: "Chicago, IL",
      rating: 5,
      title: "From Denied to Approved for Mortgage",
      content: "After being denied for a mortgage, I turned to TruCredit. They cleaned up my credit report and guided me through the entire process. Six months later, I closed on my first home. Life-changing service!",
      beforeScore: "Mortgage Denied",
      afterScore: "Homeowner",
      service: "Complete Credit Restoration"
    },
    {
      name: "Maria Garcia",
      location: "Phoenix, AZ",
      rating: 5,
      title: "Business Funding Secured",
      content: "Thanks to TruCredit's business credit program, I secured $75,000 in business funding to expand my catering business. Their expertise in business credit building is exceptional.",
      beforeScore: "No Funding",
      afterScore: "$75K Secured",
      service: "Business Credit Program"
    },
    {
      name: "Robert Kim",
      location: "Seattle, WA",
      rating: 5,
      title: "Quick Turnaround on Credit Issues",
      content: "I needed to improve my credit quickly for a job opportunity. TruCredit delivered amazing results in just 3 weeks. They removed 5 negative items and my score jumped 120 points!",
      beforeScore: 610,
      afterScore: 730,
      service: "Express Credit Repair"
    },
    {
      name: "Jennifer Lewis",
      location: "Denver, CO",
      rating: 5,
      title: "Excellent Guidance Throughout the Process",
      content: "The team at TruCredit was always available to answer my questions and kept me updated throughout the entire process. Their personalized approach made all the difference.",
      beforeScore: 590,
      afterScore: 740,
      service: "Credit Restoration"
    }
  ];

  const stats = [
    { number: "1,000+", label: "Clients Served" },
    { number: "180+", label: "Average Score Improvement" },
    { number: "80%", label: "Success Rate" },
    { number: "45", label: "Days Average Timeline" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Number of testimonials to show at once based on screen size
  const getTestimonialsPerView = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [testimonialsPerView, setTestimonialsPerView] = useState(getTestimonialsPerView());

  useEffect(() => {
    const handleResize = () => {
      setTestimonialsPerView(getTestimonialsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + testimonialsPerView >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - testimonialsPerView : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerView);

  // If we're at the end and don't have enough testimonials to fill the view, get some from the beginning
  if (visibleTestimonials.length < testimonialsPerView) {
    const remaining = testimonialsPerView - visibleTestimonials.length;
    visibleTestimonials.push(...testimonials.slice(0, remaining));
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-navy-primary to-navy-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Client Success Stories
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Real results from real clients who transformed their financial lives with TruCredit
          </p>
          <div className="flex items-center justify-center space-x-2 text-gold-star">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <span className="text-white ml-2">4.9/5 from 200+ reviews</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-blue-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-primary mb-4">
              Real Stories, Real Results
            </h2>
            <p className="text-gray-dark text-lg max-w-2xl mx-auto">
              Read how our clients achieved their financial goals and transformed their credit profiles
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-6 w-6 text-navy-primary" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-6 w-6 text-navy-primary" />
            </button>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleTestimonials.map((testimonial, index) => (
                <Card 
                  key={`${testimonial.name}-${index}`}
                  className="relative bg-white border-0 shadow-lg hover-lift transition-all duration-300"
                >
                  <CardContent className="p-6">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-gold-accent/20">
                      <Quote className="h-12 w-12" />
                    </div>

                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current text-gold-star" />
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-navy-primary mb-4">
                      {testimonial.title}
                    </h3>

                    {/* Content */}
                    <p className="text-gray-dark leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>

                    {/* Results */}
                    <div className="bg-navy-primary/5 rounded-lg p-4 mb-6">
                      <div className="flex justify-between items-center">
                        <div className="text-center">
                          <div className="text-sm text-gray-medium">Before</div>
                          <div className="text-lg font-bold text-navy-primary">
                            {testimonial.beforeScore}
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-blue-accent" />
                        <div className="text-center">
                          <div className="text-sm text-gray-medium">After</div>
                          <div className="text-lg font-bold text-blue-accent">
                            {testimonial.afterScore}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t pt-4">
                      <div className="font-semibold text-navy-primary">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-medium">
                        {testimonial.location} • {testimonial.service}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerView) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index * testimonialsPerView)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex >= index * testimonialsPerView && 
                    currentIndex < (index + 1) * testimonialsPerView
                      ? 'bg-blue-accent'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial group ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-navy-dark mb-8 max-w-2xl mx-auto">
            Join thousands of clients who have transformed their financial lives with TruCredit
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="navy" size="lg" asChild>
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Start Your Journey
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="bg-white text-navy-primary border-white hover:bg-white/90" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>

          <div className="mt-8 text-navy-dark">
            <p className="text-lg">
              <Phone className="inline h-5 w-5 mr-2" />
              Call us directly: <span className="text-white font-semibold">470-223-8668</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;