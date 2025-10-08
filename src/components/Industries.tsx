import petrochemicalImg from "@/assets/industry-petrochemical.jpg";
import steelImg from "@/assets/industry-steel.jpg";
import energyImg from "@/assets/industry-energy.jpg";
import pharmaImg from "@/assets/industry-pharma.jpg";
import oilGasImg from "@/assets/industry-oil-gas.jpg";
import constructionImg from "@/assets/industry-construction.jpg";
import miningImg from "@/assets/industry-mining.jpg";
import logisticsImg from "@/assets/industry-logistics.jpg";
import engineeringImg from "@/assets/industry-engineering.jpg";

const Industries = () => {
  const industries = [
    {
      name: "Petrochemicals",
      image: petrochemicalImg,
      description: "Process safety training and plant operations simulation",
    },
    {
      name: "Steel",
      image: steelImg,
      description: "Heavy machinery operation and production line safety",
    },
    {
      name: "Energy",
      image: energyImg,
      description: "Renewable energy systems and power plant training",
    },
    {
      name: "Pharmaceutical",
      image: pharmaImg,
      description: "GMP compliance, cleanroom protocols, and quality control",
    },
    {
      name: "Oil & Gas",
      image: oilGasImg,
      description: "Offshore platform safety and drilling operations",
    },
    {
      name: "Construction",
      image: constructionImg,
      description: "Site safety, equipment operation, and project management",
    },
    {
      name: "Mining",
      image: miningImg,
      description: "Underground safety, heavy equipment, and excavation training",
    },
    {
      name: "Logistics",
      image: logisticsImg,
      description: "Warehouse operations, supply chain, and transport safety",
    },
    {
      name: "Engineering",
      image: engineeringImg,
      description: "Technical design, precision manufacturing, and quality assurance",
    },
  ];

  return (
    <section id="industries" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal-slide-left">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Industries We <span className="text-gradient">Transform</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Delivering specialized VR training solutions across 11+ global industries,
            each with unique safety and operational requirements.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group reveal-3d-card stagger-${
                (index % 8) + 1
              } perspective-1000 relative overflow-hidden rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500`}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={industry.image}
                  alt={`${industry.name} industry training solutions`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 transform transition-transform group-hover:translate-y-[-4px]">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal-slide-left">
          <p className="text-lg text-muted-foreground mb-6">
            Don't see your industry? We create custom solutions for unique requirements.
          </p>
          <a href="#contact" className="btn-primary">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Industries;
