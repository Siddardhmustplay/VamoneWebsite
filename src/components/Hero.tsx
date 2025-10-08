import { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Parallax Background Pattern */}
      <div
        className="absolute inset-0 parallax-bg opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "var(--gradient-hero)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className={`space-y-8 ${mounted ? "hero-text-reveal" : "opacity-0"}`}>
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary leading-tight">
              Virtual, Augmented
              <br />
              <span className="text-gradient">& Mixed Reality</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/80">
              Enterprise Solutions
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Delivering cutting-edge HSE training and development support to Global
            Industries through immersive XR experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a href="#contact" className="btn-primary flex items-center gap-2">
              Start Your Project
              <ArrowRight size={20} />
            </a>
            <button className="btn-outline flex items-center gap-2">
              <Play size={20} />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent">500+</div>
              <div className="text-sm md:text-base text-muted-foreground">
                Projects Delivered
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent">50+</div>
              <div className="text-sm md:text-base text-muted-foreground">
                Global Clients
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent">11</div>
              <div className="text-sm md:text-base text-muted-foreground">
                Industries Served
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
};

export default Hero;
