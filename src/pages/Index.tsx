import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Building, DollarSign, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  // Popup state - check localStorage on initial load
  const [showPopup, setShowPopup] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Check if user has already agreed to terms
    const hasAgreed = localStorage.getItem('trucredit_terms_agreed');
    if (!hasAgreed) {
      setShowPopup(true);
    }

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

  const handleAgree = () => {
    // Store agreement in localStorage with a timestamp
    localStorage.setItem('trucredit_terms_agreed', 'true');
    localStorage.setItem('trucredit_terms_agreed_date', new Date().toISOString());
    setShowPopup(false);
  };

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
      {/* Terms & Conditions Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[85vh] flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-gray-200 rounded-t-2xl">
              <h2 className="text-2xl font-bold text-center text-navy-primary">
                Privacy / Terms & Conditions
              </h2>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 text-sm text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>Notice:</strong> This program is <em>not intended for illegal use</em>. It is provided
                strictly for educational purposes only. By using our services, you agree to comply with all state and
                federal laws.
              </p>

              <p>
                You are legally responsible for any debt you incur after obtaining credit. Employment, rental, and pay
                stubs are intended for <strong>novelty use only</strong>. This program is not a way to defraud banks,
                creditors, or any organization that requires your social security number for identification. If you
                created the debt, you are responsible for repaying it.
              </p>

              <p>
                We do not support, facilitate, or condone fraudulent activity. All information is provided for
                informational purposes only, and you use it at your own risk. We are not lawyers and do not provide
                legal services or advice.
              </p>

              <p>
                There is a <strong>no refund policy</strong> due to the nature of the work required to provide this
                information. We make it clear that "CPNs" (Credit Privacy Numbers) are defined as any 9-digit number
                that may be used for credit, such as SSNs, ITINs, TINs, or EINs. These numbers are found throughout the
                banking world and within banks' databases.
              </p>

              <h3 className="font-semibold text-navy-primary">Prohibited Misrepresentations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Representing that consumers can alter identifying information to conceal adverse credit information.
                </li>
                <li>
                  Suggesting that applying for credit with an EIN, TIN, or alternate SSN to build a new credit record is
                  legal.
                </li>
                <li>
                  Misrepresenting the ability of our services to improve credit reports, consolidate debt, or secure
                  loans.
                </li>
                <li>
                  Misleading consumers into believing our products guarantee financial outcomes.
                </li>
              </ul>

              <p>
                By purchasing or using our products, you agree to comply with all state and federal laws. Any document
                or services provided are intended for novelty use only and must only be used for legal and lawful
                purposes.
              </p>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 rounded-b-2xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="agree"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="h-5 w-5"
                />
                <label htmlFor="agree" className="text-sm text-gray-700">
                  I have read and agree to the Terms & Conditions
                </label>
              </div>

              <Button
                variant="default"
                onClick={handleAgree}
                disabled={!isChecked}
                className="w-full"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Website content - always visible but popup blocks it when needed */}
      <>
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
                <Button
                  variant="outline"
                  size="xl"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  asChild
                >
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section ref={featuresRef} className="py-20 bg-gray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-primary mb-6">
                Your Path to Financial Freedom
              </h2>
              <p className="text-xl text-gray-medium max-w-3xl mx-auto">
                Transform your financial future with our comprehensive credit restoration and business building
                services.
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

                    <h3 className="text-2xl font-bold text-navy-primary mb-4">{highlight.title}</h3>

                    <p className="text-gray-medium mb-6 leading-relaxed">{highlight.description}</p>

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
                Join thousands of clients who have successfully restored their credit and built their financial future
                with TruCredit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">Start Your Journey Today</Link>
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  asChild
                >
                  <Link to="/how-it-works">Learn How It Works</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Index;