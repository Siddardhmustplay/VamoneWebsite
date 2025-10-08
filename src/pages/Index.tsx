import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";

const Index = () => {
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    // Parallax effect for hero
    const handleScroll = () => {
      const offset = window.pageYOffset;
      setParallaxOffset(offset * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
      ".reveal-slide-left, .reveal-slide-right, .reveal-3d-card"
    );
    
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div style={{ "--parallax-offset": `${parallaxOffset}px` } as React.CSSProperties}>
        <Hero />
      </div>

      <About />
      <Industries />
      <Services />
      <Products />
      <Clients />
      <Contact />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm opacity-90">
            © 2024 VAM.one - VR Division of MustPlay Games. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
