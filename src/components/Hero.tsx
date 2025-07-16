
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-max text-center animate-fade-in">
        <div className="mb-8 animate-scale-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-3xl font-semibold">
              MP
            </div>
          </div>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          <h1 className="text-lg md:text-xl text-gray-600 mb-2">
            Hi, I'm Manikanta Swamy Pamarthi
          </h1>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Aspiring Full Stack Developer
            <br />
            <span className="text-primary">& Tech Enthusiast</span>
          </h2>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Passionate about building digital solutions with Java, Python & Web Technologies
          </p>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: "0.8s", animationFillMode: "both" }}>
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 group"
          >
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
