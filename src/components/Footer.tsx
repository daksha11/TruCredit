import { Link } from "react-router-dom";
import { Phone, Instagram, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "FAQ", path: "/faq" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "General Consultation",
    "Auto & Home Purchasing Assistance",
    "Credit Intake / Restoration",
    "Credit Sweep",
    "Business Credit 7-Step Program",
  ];

  return (
    <footer className="bg-navy-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info + Contact */}
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-gold-accent to-yellow-400 text-navy-primary px-3 py-2 rounded-lg font-bold text-xl inline-block">
              TruCredit
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your partner in credit success. We empower individuals and small businesses to achieve financial freedom through credit restoration and business credit building.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Instagram size={16} className="text-gold-accent" />
              <a
                href="https://instagram.com/TheTruCredit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-accent transition-colors"
              >
                @TheTruCredit
              </a>
            </div>

            {/* Contact Info directly under Instagram */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone size={16} className="text-gold-accent" />
                <a
                  href="tel:470-223-8668"
                  className="hover:text-gold-accent transition-colors"
                >
                  470-223-8668
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail size={16} className="text-gold-accent" />
                <span className="text-gray-300">Available for consultation</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin size={16} className="text-gold-accent" />
                <span className="text-gray-300">Serving nationwide</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-accent">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-gold-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold-accent">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-gold-accent transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-300 text-sm">
            © 2025 TruCredit. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              to="/privacy"
              className="text-gray-300 hover:text-gold-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-300 hover:text-gold-accent transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
