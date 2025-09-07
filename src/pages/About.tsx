import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, TrendingUp, Shield, Heart, Target, CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Fresh Start for Everyone",
      description: "We believe everyone deserves a second chance at financial success, regardless of their past credit history."
    },
    {
      icon: Shield,
      title: "Transparent & Honest",
      description: "No hidden fees, no false promises. We provide clear pricing and realistic expectations from day one."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Our proven methodologies have helped thousands of clients achieve their credit and financial goals."
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Every client receives customized solutions tailored to their unique financial situation and goals."
    }
  ];

  const reasons = [
    {
      icon: Award,
      title: "Years of Proven Experience",
      description: "Our team has extensive experience in credit restoration and business credit building, with a track record of successful outcomes."
    },
    {
      icon: TrendingUp,
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden fees. You know exactly what you're paying for and what to expect."
    },
    {
      icon: CheckCircle,
      title: "Real Results for Clients",
      description: "We've helped thousands of clients across industries remove negative items and build strong credit profiles."
    }
  ];

  const stats = [
    { number: "1000+", label: "Clients Served" },
    { number: "80%", label: "Negative Items Removed" },
    { number: "30-45", label: "Days to Results" },
    { number: "$300K", label: "Max Funding Access" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-navy-primary to-navy-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your Partner in Credit Success
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Empowering individuals and small businesses to achieve financial freedom through expert credit restoration and business credit building
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-primary mb-8">
              Our Mission
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl text-gray-dark leading-relaxed mb-8">
                At TruCredit, we believe everyone deserves a fresh start. Our mission is to empower individuals and small businesses to achieve financial freedom through credit restoration, business credit building, and funding solutions.
              </p>
              <div className="bg-gradient-to-r from-gold-accent to-yellow-400 rounded-2xl p-8 text-navy-primary">
                <p className="text-xl font-semibold">
                  "We don't just fix credit scores – we transform financial futures and open doors to opportunities that seemed impossible before."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-primary mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-medium max-w-3xl mx-auto">
              These principles guide everything we do and every client relationship we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="hover-lift bg-white shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gold-accent to-yellow-400 rounded-lg">
                        <value.icon className="h-6 w-6 text-navy-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-primary mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-medium leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-primary mb-6">
              Why Trust TruCredit?
            </h2>
            <p className="text-xl text-gray-medium max-w-3xl mx-auto">
              Our commitment to excellence and proven track record speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason) => (
              <Card key={reason.title} className="text-center hover-lift bg-gradient-to-br from-white to-gray-light shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gold-accent to-yellow-400 rounded-full mb-6">
                    <reason.icon className="h-8 w-8 text-navy-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-primary mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-medium leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-navy-primary rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Our Track Record
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gold-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-navy-primary mb-8">
            Expert Credit Specialists
          </h2>
          <p className="text-xl text-gray-medium max-w-3xl mx-auto mb-12">
            Our team of certified credit professionals brings years of experience and a passion for helping clients achieve their financial goals. We stay up-to-date with the latest credit laws and best practices to deliver the most effective solutions.
          </p>
          
          <Card className="bg-white shadow-xl border-0 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-gold-accent mb-2">5+</div>
                  <div className="text-gray-dark">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold-accent mb-2">100%</div>
                  <div className="text-gray-dark">Client Focused</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold-accent mb-2">24/7</div>
                  <div className="text-gray-dark">Support Available</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Credit Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have transformed their financial future with TruCredit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get Started Today
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;