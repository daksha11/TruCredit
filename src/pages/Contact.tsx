import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Phone, Mail, Instagram, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    toast.success("Thank you for your message! We'll get back to you within 24 hours.");
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: "470-223-8668",
      description: "Call us for immediate assistance",
      action: "tel:470-223-8668"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@TheTruCredit",
      description: "Follow us for credit tips",
      action: "https://instagram.com/TheTruCredit"
    },
    {
      icon: Mail,
      title: "Email",
      value: "Available via contact form",
      description: "Send us a detailed message",
      action: "#contact-form"
    },
    {
      icon: MapPin,
      title: "Service Area",
      value: "Nationwide",
      description: "We serve clients across the US",
      action: null
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
    { day: "Sunday", hours: "By appointment only" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method) => (
              <Card key={method.title} className="text-center hover-lift bg-navbar shadow-lg border-0">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-card-2 to-card-3 rounded-lg mb-4">
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-heading mb-2">{method.title}</h3>
                  <p className="text-secondary font-semibold mb-1">{method.value}</p>
                  <p className="text-secondary text-sm mb-3">{method.description}</p>
                  {method.action && method.action.startsWith('http') && (
                    <Button variant="outline" size="sm" className="bg-white border-white hover:bg-white/90" asChild>
                      <a href={method.action} target="_blank" rel="noopener noreferrer">
                        Visit
                      </a>
                    </Button>
                  )}
                  {method.action && method.action.startsWith('tel:') && (
                    <Button variant="outline" size="sm" className="bg-white text-text-primary border-white hover:bg-white/90" asChild>
                      <a href={method.action}>Call Now</a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl border-0 bg-navbar">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-heading flex items-center">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Send Us a Message
                </CardTitle>
                <p className="text-secondary">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 text-secondary">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2 text-secondary">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 text-secondary">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="space-y-2 text-secondary">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your credit goals and how we can help..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" variant="accent" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Business Hours & Additional Info */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card className="shadow-lg border-0 bg-navbar">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-heading flex items-center">
                    <Clock className="mr-3 h-5 w-5" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessHours.map((schedule) => (
                      <div key={schedule.day} className="flex justify-between items-center">
                        <span className="font-medium text-secondary">{schedule.day}</span>
                        <span className="text-secondary">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-heading rounded-lg">
                    <p className="text-sm text-#333333 font-medium">
                      Emergency consultations available by appointment
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-navbar text-heading shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Need Immediate Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-secondary">
                    Get started right away with our most popular services
                  </p>
                  
                  <div className="space-y-3">
                    <Button variant="accent" size="lg" className="w-full" asChild>
                      <a href="tel:470-223-8668">
                        <Phone className="mr-2 h-5 w-5" />
                        Call for Free Consultation
                      </a>
                    </Button>
                    
                    <Button variant="outline" size="lg" className="bg-white text-text-primary border-white hover:bg-white/90" asChild>
                      <a href="/services" className="flex items-center justify-center w-full">
                        View Services & Pricing
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Options (Commented Out) */}
              {/*
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-navy-primary">
                    Payment Options
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Zelle:</span>
                      <span className="text-gold-accent">470-223-8668</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Cash App:</span>
                      <span className="text-gold-accent">$HouseofDiorr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Apple Pay:</span>
                      <span className="text-gray-medium">Available on request</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Online:</span>
                      <span className="text-gray-medium">Stripe & PayPal</span>
                    </div>
                  </div>
                  <Button variant="gold" size="sm" className="w-full mt-4" asChild>
                    <a href="/payment">Make Payment</a>
                  </Button>
                </CardContent>
              </Card>
              */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
