
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="section-padding py-4">
        <div className="container-max flex items-center justify-between">
          <div className="text-xl font-semibold text-primary">
            Manikanta
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Skills", "Projects", "Services", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm text-gray-600 hover:text-primary transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            )}
          </div>

          <div className="md:hidden">
            <button className="p-2">
              <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
