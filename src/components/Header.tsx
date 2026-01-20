import { useState, useRef, useEffect } from "react";
import { Menu, X, Phone, Mail, Ship } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If click is outside menu and menu is open, close it
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Add listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-sm">
      {/* Top bar */}


      {/* Main nav */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg">
              <Ship className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <span className="text-xl md:text-2xl font-bold text-foreground font-serif">Pioneer Associates</span>
              <p className="text-xs text-muted-foreground  sm:block">Logistics Services</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div
            ref={menuRef}   // <-- add this
            className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-in slide-in-from-top-2"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold w-full mt-2">
                Get Quote
              </Button>
            </div>
          </div>
        )}

      </nav>
    </header>
  );
};

export default Header;
