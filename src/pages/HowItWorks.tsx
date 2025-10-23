import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Database, 
  CreditCard, 
  Building, 
  Users, 
  ShoppingCart, 
  DollarSign,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const HowItWorks = () => {
  const creditSweepSteps = [
    {
      icon: FileText,
      title: "Credit Analysis",
      description: "We thoroughly analyze your credit reports from all three bureaus to identify negative items."
    },
    {
      icon: Shield,
      title: "Dispute Process",
      description: "Our experts file strategic disputes to challenge inaccurate and questionable items."
    },
    {
      icon: TrendingUp,
      title: "Score Improvement",
      description: "Watch your credit score improve as negative items are removed from your reports."
    }
  ];

  const businessCreditSteps = [
    {
      number: 1,
      icon: Building,
      title: "Business Formation",
      description: "Establish your business entity with proper documentation and registration."
    },
    {
      number: 2,
      icon: Database,
      title: "D-U-N-S Number Setup",
      description: "Obtain your unique D-U-N-S number to establish your business credit identity."
    },
    {
      number: 3,
      icon: FileText,
      title: "Business Credit Reports",
      description: "Set up monitoring and establish credit files with major business bureaus."
    },
    {
      number: 4,
      icon: Users,
      title: "Trade Line Accounts",
      description: "Open strategic trade accounts that report to business credit bureaus."
    },
    {
      number: 5,
      icon: CreditCard,
      title: "Business Credit Cards",
      description: "Secure business credit cards to build your credit profile and history."
    },
    {
      number: 6,
      icon: ShoppingCart,
      title: "Vendor Accounts",
      description: "Establish vendor relationships that contribute to your business credit."
    },
    {
      number: 7,
      icon: DollarSign,
      title: "Business Funding Access",
      description: "Unlock access to substantial business funding and investment opportunities."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-navy-primary to-navy-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Our proven processes for credit restoration and business credit building
          </p>
        </div>
      </section>

      {/* Credit Sweep Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-primary mb-6">
              Erase Negatives. Rebuild Fast.
            </h2>
            <p className="text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed">
              Our credit sweep process removes about 80% of negative items within 30–45 days, 
              helping you rebuild a healthy credit profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {creditSweepSteps.map((step, index) => (
              <Card key={step.title} className="hover-lift bg-gradient-to-br from-white to-gray-light border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gold-accent to-yellow-400 rounded-full mb-6">
                    <step.icon className="h-8 w-8 text-navy-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-medium leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-navy-primary rounded-2xl p-8 md:p-12 text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Clock className="h-6 w-6 text-gold-accent" />
              <span className="text-gold-accent font-semibold text-lg">Typical Timeline</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              See Results in 30-45 Days
            </h3>
            <p className="text-gray-200 text-lg mb-6 max-w-2xl mx-auto">
              Most clients see significant improvements to their credit score within the first month of our credit sweep process.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">Start Your Credit Sweep</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Business Credit Section */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-primary mb-6">
              7 Steps to Business Credit Success
            </h2>
            <p className="text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed">
              Our comprehensive program builds real business credit in 7 strategic steps, 
              giving your company the financial power it needs to grow.
            </p>
          </div>

          <div className="space-y-8">
            {businessCreditSteps.map((step, index) => (
              <div 
                key={step.title}
                className={`timeline-step ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex items-center gap-8`}
              >
                <div className="timeline-number">
                  {step.number}
                </div>
                
                <Card className="flex-1 hover-lift bg-white shadow-lg border-0">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gold-accent to-yellow-400 rounded-lg">
                          <step.icon className="h-6 w-6 text-navy-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-navy-primary mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-medium leading-relaxed text-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-gold-accent to-yellow-400 border-0 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-navy-primary mb-4">
                  Ready to Build Business Credit?
                </h3>
                <p className="text-navy-primary/80 text-lg mb-6 max-w-2xl mx-auto">
                  Our 7-step program typically takes 3-6 months and gives you access to substantial business funding.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="default" size="lg" asChild>
                    <Link to="/services">
                      View Program Details
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-navy-primary text-navy-primary hover:bg-navy-primary hover:text-white" asChild>
                    <Link to="/contact">Schedule Consultation</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-navy-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Proven Results
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-gold-accent mb-2">80%</div>
              <div className="text-white text-lg">Negative Items Removed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold-accent mb-2">30-45</div>
              <div className="text-white text-lg">Days to See Results</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold-accent mb-2">$300K</div>
              <div className="text-white text-lg">Max Funding Access</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;