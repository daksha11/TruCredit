import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "FAQ", path: "/faq" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    // { name: "Payments", path: "/payment" }, // Commented out as requested
  ];

  // Function to handle navigation and scroll to top
  const handleNavigation = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navbar shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo & Company Name */}
          <Link to="/" className="flex items-center space-x-3" onClick={handleNavigation}>
            {/* Logo */}
            <div className="flex-shrink-0">
              <picture>
                <source srcSet="/logo.png" type="image/png" />
                <img 
                  src="/logo.png" 
                  alt="TruCredit Logo" 
                  className="h-12 w-12 object-contain"
                />
              </picture>
            </div>
            
            {/* Company Name */}
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl leading-tight">
                TruCredit
              </span>
              <span className="text-secondary text-xs font-medium tracking-wide">
                Credit Repair Experts
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-heading ${
                  location.pathname === item.path
                    ? "text-heading"
                    : "text-white"
                }`}
                onClick={handleNavigation}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-white">
              <Phone size={16} />
              <span>470-223-8668</span>
            </div>
            <Button size="sm" asChild className="bg-heading text-#333333 hover:bg-secondary">
              <Link to="/contact" onClick={handleNavigation}>
                Book Free Consultation
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white rounded-lg mt-2 p-4 shadow-xl">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-text-primary font-medium transition-colors duration-300 hover:text-card-1 ${
                    location.pathname === item.path ? "text-card-1" : ""
                  }`}
                  onClick={handleNavigation}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-2 text-sm text-text-primary pt-2 border-t">
                <Phone size={16} />
                <span>470-223-8668</span>
              </div>
              <Button size="sm" asChild className="bg-heading text-#333333 hover:bg-secondary">
                <Link to="/contact" onClick={handleNavigation}>
                  Book Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;