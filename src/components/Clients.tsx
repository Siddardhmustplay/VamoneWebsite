import clientBpcl from "@/assets/client-bpcl.png";
import clientTata from "@/assets/client-tata.png";
import clientBosch from "@/assets/client-bosch.png";
import clientPike from "@/assets/client-pike.png";
import clientLarsen from "@/assets/client-larsen.png";
import clientFlipkart from "@/assets/client-flipkart.png";
import clientProlite from "@/assets/client-prolite.png";

const Clients = () => {
  const clients = [
    { name: "BPCL - Inspired by Science", logo: clientBpcl },
    { name: "Tata", logo: clientTata },
    { name: "Bosch", logo: clientBosch },
    { name: "Pike", logo: clientPike },
    { name: "Larsen & Toubro", logo: clientLarsen },
    { name: "Flipkart", logo: clientFlipkart },
    { name: "Prolite Autoglo", logo: clientProlite },
  ];

  // Duplicate clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal-slide-left">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Trusted By <span className="text-gradient">Industry Leaders</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Partnering with global enterprises to deliver cutting-edge XR training solutions
          </p>
        </div>

        {/* Auto-scrolling Logo Carousel */}
        <div className="relative">
          {/* Gradient overlays for smooth fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Scrolling container */}
          <div className="client-scroll-container">
            <div className="client-scroll-track">
              {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  className="client-logo-card flex-shrink-0 mx-8"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
