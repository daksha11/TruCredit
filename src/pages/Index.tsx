import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Building, DollarSign, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

// Embedded SplitText Component
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textAlign?: React.CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  tag = 'p',
  textAlign = 'center',
  onLetterAnimationComplete
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const animationCompletedRef = useRef(false);
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      const el = ref.current as HTMLElement & {
        _rbsplitInstance?: GSAPSplitText;
      };

      if (el._rbsplitInstance) {
        try {
          el._rbsplitInstance.revert();
        } catch (_) {}
        el._rbsplitInstance = undefined;
      }

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      const sign =
        marginValue === 0
          ? ''
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;
      let targets: Element[] = [];
      const assignTargets = (self: GSAPSplitText) => {
        if (splitType.includes('chars') && (self as GSAPSplitText).chars?.length)
          targets = (self as GSAPSplitText).chars;
        if (!targets.length && splitType.includes('words') && self.words.length) targets = self.words;
        if (!targets.length && splitType.includes('lines') && self.lines.length) targets = self.lines;
        if (!targets.length) targets = self.chars || self.words || self.lines;
      };
      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        autoSplit: splitType === 'lines',
        linesClass: 'split-line',
        wordsClass: 'split-word',
        charsClass: 'split-char',
        reduceWhiteSpace: false,
        onSplit: (self: GSAPSplitText) => {
          assignTargets(self);
          return gsap.fromTo(
            targets,
            { ...from },
            {
              ...to,
              duration,
              ease,
              stagger: delay / 1000,
              scrollTrigger: {
                trigger: el,
                start,
                once: true,
                fastScrollEnd: true,
                anticipatePin: 0.4
              },
              onComplete: () => {
                animationCompletedRef.current = true;
                onLetterAnimationComplete?.();
              },
              willChange: 'transform, opacity',
              force3D: true
            }
          );
        }
      });
      el._rbsplitInstance = splitInstance;
      return () => {
        ScrollTrigger.getAll().forEach(st => {
          if (st.trigger === el) st.kill();
        });
        try {
          splitInstance.revert();
        } catch (_) {}
        el._rbsplitInstance = undefined;
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
        onLetterAnimationComplete
      ],
      scope: ref
    }
  );

  const renderTag = () => {
    const style: React.CSSProperties = {
      textAlign,
      wordWrap: 'break-word',
      willChange: 'transform, opacity'
    };
    const classes = `split-parent overflow-hidden inline-block whitespace-normal ${className}`;
    switch (tag) {
      case 'h1':
        return (
          <h1 ref={ref} style={style} className={classes}>
            {text}
          </h1>
        );
      case 'h2':
        return (
          <h2 ref={ref} style={style} className={classes}>
            {text}
          </h2>
        );
      case 'h3':
        return (
          <h3 ref={ref} style={style} className={classes}>
            {text}
          </h3>
        );
      case 'h4':
        return (
          <h4 ref={ref} style={style} className={classes}>
            {text}
          </h4>
        );
      case 'h5':
        return (
          <h5 ref={ref} style={style} className={classes}>
            {text}
          </h5>
        );
      case 'h6':
        return (
          <h6 ref={ref} style={style} className={classes}>
            {text}
          </h6>
        );
      default:
        return (
          <p ref={ref} style={style} className={classes}>
            {text}
          </p>
        );
    }
  };

  return renderTag();
};

// Main Index Component
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

  const handleHeroAnimationComplete = () => {
    console.log('Hero heading animation completed!');
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
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(33, 57, 102, 0.9), rgba(33, 57, 102, 0.8)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navbar/90 via-navbar/70 to-transparent"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <div className="mb-6">
                <SplitText
                  text="Restore Your Credit."
                  className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight block"
                  delay={50}
                  duration={0.8}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 60, rotationX: 90 }}
                  to={{ opacity: 1, y: 0, rotationX: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  tag="h1"
                  textAlign="center"
                  onLetterAnimationComplete={handleHeroAnimationComplete}
                />
                <SplitText
                  text="Build Your Future."
                  className="text-5xl md:text-7xl font-bold text-heading leading-tight block"
                  delay={30}
                  duration={0.8}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 60, rotationX: 90 }}
                  to={{ opacity: 1, y: 0, rotationX: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  tag="h1"
                  textAlign="center"
                />
              </div>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-up">
                We help you remove negative items, build business credit, and secure funding for the life you deserve.
              </p>
              
              {/* Parent container for all buttons, now handles animation */}
              <div className="flex flex-col gap-4 justify-center items-center animate-fade-up">
                
                {/* New wrapper to control button widths */}
                <div className="flex flex-col gap-4 w-full sm:w-fit">

                  {/* Existing row of two buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="xl" asChild className="group bg-heading text-#333333 hover:bg-secondary w-full sm:w-auto">
                      <Link to="/contact">
                        Book Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="xl"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20 w-full sm:w-auto"
                      asChild
                    >
                      <Link to="/services">View Services</Link>
                    </Button>
                  </div>

                  {/* New "Get started now" button */}
                  <Button
                    size="xl"
                    asChild
                    className="group bg-heading text-#333333 hover:bg-secondary w-full" // w-full to match wrapper
                  >
                    <a
                      href="https://docs.google.com/forms/d/1CtQMcJPvYzzjmLAF5kF2usywsmfMj2AM1NHR2F0Cuno/edit?pli=1&edit_requested=true&edit_requested=true&edit_requested=true&edit_requested=true&edit_requested=true&edit_requested=true&edit_requested=true&edit_requested=true&edit_requested=true&edit_requested=true&edit_requested=true&edit_requested=true&edit_requested=true&edit_requested=true&edit_requested=true&edit_requested=true&edit_requested=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center" // Center text and icon
                    >
                      Get started now
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>

                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section ref={featuresRef} className="py-20 bg-white-pure">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-#213966 mb-6">
                Your Path to Financial Freedom
              </h2>
              <p className="text-xl text-black max-w-3xl mx-auto">
                Transform your financial future with our comprehensive credit restoration and business building
                services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <Card
                  key={highlight.title}
                  className={`hover-lift animate-on-scroll bg-card-3 border-card-2/20 shadow-xl`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-card-3 rounded-full mb-6">
                      <highlight.icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-#333333 mb-4">{highlight.title}</h3>

                    <p className="text-text-secondary mb-6 leading-relaxed">{highlight.description}</p>

                    <ul className="space-y-2 text-sm">
                      {highlight.features.map((feature) => (
                        <li key={feature} className="flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-card-3 mr-2" />
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 animate-on-scroll">
              <Button variant="accent" size="lg" asChild>
                <Link to="/services">
                  View All Services & Pricing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navbar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">
                Ready to Transform Your Credit?
              </h2>
              <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
                Join thousands of clients who have successfully restored their credit and built their financial future
                with TruCredit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="xl" asChild>
                  <Link to="/contact">Start Your Journey Today</Link>
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="bg-white text-text-primary border-white hover:bg-white/90"
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

