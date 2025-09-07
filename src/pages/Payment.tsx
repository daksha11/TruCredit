import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, CreditCard, Smartphone, Zap, ExternalLink, Check } from "lucide-react";

const Payment = () => {
  const paymentMethods = [
    {
      name: "Stripe",
      description: "Secure online credit card payments",
      icon: CreditCard,
      features: ["Credit & Debit Cards", "Instant Processing", "Bank-Level Security", "Payment Protection"],
      action: "https://stripe.com",
      buttonText: "Pay with Stripe",
      badge: "Most Secure",
      badgeColor: "bg-green-500 text-white"
    },
    {
      name: "PayPal",
      description: "Quick and safe payments worldwide",
      icon: Shield,
      features: ["PayPal Balance", "Linked Bank Account", "Buyer Protection", "International Support"],
      action: "https://paypal.com",
      buttonText: "Pay with PayPal",
      badge: "Popular",
      badgeColor: "bg-blue-500 text-white"
    },
    {
      name: "Zelle",
      description: "Direct bank-to-bank transfer",
      icon: Zap,
      features: ["Instant Transfer", "No Processing Fees", "Bank-Level Security", "US Banks Only"],
      contactInfo: "Send to: 404-207-2847",
      buttonText: "Open Zelle App",
      badge: "Instant",
      badgeColor: "bg-purple-500 text-white"
    },
    {
      name: "Cash App",
      description: "Mobile payment platform",
      icon: Smartphone,
      features: ["Mobile Payments", "Instant Processing", "Digital Receipts", "Easy to Use"],
      contactInfo: "Send to: $HouseofDiorr",
      buttonText: "Open Cash App",
      badge: "Mobile",
      badgeColor: "bg-green-600 text-white"
    },
    {
      name: "Apple Pay",
      description: "Secure payments with Touch ID",
      icon: Smartphone,
      features: ["Touch/Face ID", "Device Security", "No Card Numbers Shared", "Quick Checkout"],
      contactInfo: "Available on request - Call 404-207-2847",
      buttonText: "Request Apple Pay",
      badge: "Secure",
      badgeColor: "bg-gray-700 text-white"
    }
  ];

  const handlePaymentClick = (method: typeof paymentMethods[0]) => {
    if (method.action) {
      window.open(method.action, '_blank');
    } else if (method.name === "Zelle") {
      // For Zelle, you might want to show instructions or copy to clipboard
      navigator.clipboard.writeText("404-207-2847");
      alert("Phone number copied to clipboard! Open your Zelle app and send payment to 404-207-2847");
    } else if (method.name === "Cash App") {
      navigator.clipboard.writeText("$HouseofDiorr");
      alert("Cash tag copied to clipboard! Open Cash App and send payment to $HouseofDiorr");
    } else if (method.name === "Apple Pay") {
      window.location.href = "tel:404-207-2847";
    }
  };

  const securityFeatures = [
    "256-bit SSL encryption",
    "PCI DSS compliant processors",
    "Fraud protection monitoring",
    "Secure payment confirmation",
    "No stored payment data"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-navy-primary to-navy-primary/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Secure Your Spot Today
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Choose your preferred payment method below. Once payment is confirmed, we'll begin working on your credit journey immediately.
          </p>
          <div className="flex items-center justify-center space-x-2 text-gold-accent">
            <Shield className="h-6 w-6" />
            <span className="text-lg font-semibold">All payments are 100% secure and encrypted</span>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-primary mb-4">
              Choose Your Payment Method
            </h2>
            <p className="text-xl text-gray-medium">
              Multiple secure options to make payment convenient for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {paymentMethods.map((method) => (
              <Card key={method.name} className="relative hover-lift bg-white shadow-lg border-0 transition-all duration-300">
                {method.badge && (
                  <Badge className={`absolute -top-3 left-6 ${method.badgeColor} px-3 py-1`}>
                    {method.badge}
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gold-accent to-yellow-400 rounded-full mb-4">
                    <method.icon className="h-8 w-8 text-navy-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-navy-primary">
                    {method.name}
                  </CardTitle>
                  <p className="text-gray-medium">{method.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-2">
                    {method.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-gold-accent mr-2 flex-shrink-0" />
                        <span className="text-gray-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {method.contactInfo && (
                    <div className="bg-gray-light rounded-lg p-3">
                      <p className="text-sm font-medium text-navy-primary text-center">
                        {method.contactInfo}
                      </p>
                    </div>
                  )}
                  
                  <Button 
                    variant="navy" 
                    className="w-full" 
                    onClick={() => handlePaymentClick(method)}
                  >
                    {method.buttonText}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Service Selection Reminder */}
          <Card className="bg-navy-primary text-white shadow-xl border-0 max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Need to Review Our Services?
              </h3>
              <p className="text-gray-200 mb-6">
                Make sure you've selected the right service package before making your payment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold text-gold-accent mb-2">Credit Sweep</h4>
                  <p className="text-gray-200">$800+ (Bankruptcy: $999+)</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold text-gold-accent mb-2">Business Credit Program</h4>
                  <p className="text-gray-200">$850 for 7-step program</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold text-gold-accent mb-2">Credit Intake</h4>
                  <p className="text-gray-200">$75 for 1.5 hour session</p>
                </div>
              </div>
              <Button variant="hero" size="lg" className="mt-6" asChild>
                <a href="/services">View All Services & Pricing</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gold-accent to-yellow-400 rounded-full mb-6">
              <Shield className="h-8 w-8 text-navy-primary" />
            </div>
            <h2 className="text-4xl font-bold text-navy-primary mb-4">
              Your Payment Security
            </h2>
            <p className="text-xl text-gray-medium max-w-3xl mx-auto">
              We use industry-leading security measures to protect your payment information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {securityFeatures.map((feature) => (
              <Card key={feature} className="text-center bg-gray-light border-0 shadow-md">
                <CardContent className="p-6">
                  <Check className="h-8 w-8 text-gold-accent mx-auto mb-3" />
                  <p className="text-sm font-medium text-navy-primary">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-navy-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Questions About Payment?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Our team is here to help you with any payment questions or concerns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:404-207-2847">
                Call 404-207-2847
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;