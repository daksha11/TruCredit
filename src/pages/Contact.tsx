import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Removed Input, Textarea, Label, toast as form is removed
import { Phone, Mail, Instagram, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  // Removed formData, handleSubmit, and handleInputChange states/functions

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
      value: "info@thetrucredit.com", // Updated from "Available via contact form"
      description: "Send us a detailed message",
      action: "mailto:info@thetrucredit.com"
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
      {/* Page Title */}
      <div className="text-center pt-20 bg-white-pure">
          <h1 className="text-4xl md:text-8xl font-bold text-#213966 mb-4">
              Get in Touch
          </h1>
      </div>

      {/* Info & Actions Section (Moved Up) */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Switched to single column, centered */}
          <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
            
            {/* Quick Actions Card (Modified) (Moved First) */}
            <Card className="bg-white-pure text-navy-primary shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Ready to Start?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-text-secondary">
                  Get started right away or give us a call for a free consultation.
                </p>
                
                <div className="space-y-3">
                  {/* "Get Started Now" Button */}
                  <Button
                    size="lg"
                    asChild
                    className="group bg-heading text-#333333 hover:bg-secondary w-full"
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

                  {/* "Call" Button */}
                  <Button variant="accent" size="lg" className="w-full" asChild>
                    <a href="tel:470-223-8668">
                      <Phone className="mr-2 h-5 w-5" />
                      Call for Free Consultation
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours card removed from this section */}
            
          </div>
        </div>
      </section>

      {/* Contact Methods (Moved Down) */}
      <section className="py-20 bg-white-pure">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  {method.action && method.action.startsWith('mailto:') && (
                    <Button variant="outline" size="sm" className="bg-white text-text-primary border-white hover:bg-white/90" asChild>
                      <a href={method.action}>Email Us</a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours Section (Moved to bottom) */}
      <section className="py-20 bg-navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
            {/* Business Hours (Elongated) */}
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-navy-primary flex items-center">
                  <Clock className="mr-3 h-5 w-5" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {businessHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center">
                      <span className="font-medium text-text-primary">{schedule.day}</span>
                      <span className="text-text-secondary">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-heading/20 rounded-lg space-y-2">
                  <p className="text-sm text-navy-primary font-medium">
                    Emergency consultations available by appointment.
                  </p>
                  <p className="text-sm text-navy-primary/80">
                    We strive to return all messages within one business day.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;

