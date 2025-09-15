import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Clock, Shield } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What are your financial goals?",
      answer:
        "We tailor solutions to your goals—whether that's home ownership, auto financing, or building business credit. During our consultation, we'll assess your specific situation and create a customized plan that aligns with your financial objectives. Our services can help you qualify for better interest rates, secure larger loan amounts, and improve your overall financial standing.",
    },
    {
      question: "How long does the process take?",
      answer:
        "Credit sweeps usually take 30–45 days to show significant results, with approximately 80% of negative items removed during this timeframe. Business credit building takes about 3–6 months to establish a solid foundation. The exact timeline depends on your starting point and the complexity of your credit situation.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "No refunds are available once the process begins, due to the nature of credit disputes and the work already performed on your behalf. However, we stand behind our results and will work diligently to achieve the best possible outcome for your credit situation. We encourage you to ask any questions during your free consultation before starting.",
    },
    {
      question: "What documents are required?",
      answer:
        "A valid government-issued ID and proof of address are required to begin the credit restoration process. We may also need access to your credit reports and any supporting documentation related to the negative items we'll be disputing. Additional documents may be requested based on your specific case.",
    },
    {
      question: "What's included in the Credit Sweep service?",
      answer:
        "Our Credit Sweep service includes a comprehensive analysis of all three credit reports, strategic dispute filing for negative items, ongoing monitoring of dispute progress, and follow-up actions as needed. We target collections, charge-offs, late payments, bankruptcies, and other negative items that may be affecting your score.",
    },
    {
      question: "How does the Business Credit 7-Step Program work?",
      answer:
        "Our program starts with business formation and registration, then moves through D-U-N-S number setup, establishing business credit files, opening trade line accounts, securing business credit cards, building vendor relationships, and finally accessing business funding opportunities. Each step builds upon the previous one to create a strong business credit profile.",
    },
    {
      question: "Can you guarantee specific credit score improvements?",
      answer:
        "While we cannot guarantee specific score increases due to the varying nature of credit situations, our clients typically see significant improvements. Our proven methodology has helped remove negative items for thousands of clients, leading to better credit scores and improved financial opportunities.",
    },
    {
      question: "What makes TruCredit different from other credit repair companies?",
      answer:
        "TruCredit offers transparent pricing with no hidden fees, proven results with an 80% success rate for negative item removal, personalized service tailored to your specific goals, and comprehensive business credit building services. We also provide ongoing support and education to help you maintain good credit long-term.",
    },
    {
      question: "Do you work with all three credit bureaus?",
      answer:
        "Yes, we work with Experian, Equifax, and TransUnion to ensure comprehensive credit restoration. Different negative items may appear on different bureaus, so it's important to address all three to maximize your credit improvement potential.",
    },
    {
      question: "What happens after my credit is restored?",
      answer:
        "After successful credit restoration, we provide guidance on maintaining your improved credit score, building positive credit history, and leveraging your better credit for loans, mortgages, and other financial opportunities. We also offer ongoing monitoring services to help you stay on track.",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Quick Results",
      description: "See improvements in 30-45 days",
    },
    {
      icon: Shield,
      title: "Proven Process",
      description: "80% success rate for removals",
    },
    {
      icon: Phone,
      title: "Expert Support",
      description: "Direct access to credit specialists",
    },
    {
      icon: MessageCircle,
      title: "Clear Communication",
      description: "Regular updates on progress",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-navy-primary to-navy-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get answers to common questions about our credit restoration and business credit services
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center bg-white shadow-lg border-0 hover-lift">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gold-accent to-yellow-400 rounded-lg mb-4">
                    <feature.icon className="h-6 w-6 text-navy-primary" />
                  </div>
                  <h3 className="font-semibold text-navy-primary mb-2">{feature.title}</h3>
                  <p className="text-gray-medium text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-primary mb-4">
              Common Questions
            </h2>
            <p className="text-gray-medium text-lg">
              Find answers to the most frequently asked questions about our services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-light rounded-lg border-0 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger
                  className="px-6 py-4 text-left text-navy-primary font-semibold hover:text-gold-accent no-underline hover:no-underline [&[data-state=open]]:text-gold-accent"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-dark leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Our credit experts are here to help. Get personalized answers during your free consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
