import {
  Headset,
  Layers,
  Blend,
  Database,
  GraduationCap,
  ShieldCheck,
  Building,
  Box,
} from "lucide-react";
import virtualReality from "@/assets/service-virtual-reality.jpg";
import augmentedReality from "@/assets/service-augmented-reality.jpg";
import mixedReality from "@/assets/service-mixed-reality.jpg";
import digitalTwin from "@/assets/service-digital-twin.jpg";
import industrialTraining from "@/assets/service-industrial-training.jpg";
import safetyTraining from "@/assets/service-safety-training.jpg";
import realEstate from "@/assets/service-real-estate.jpg";
import assetCreation from "@/assets/service-3d-asset-creation.jpg";

const Services = () => {
  const services = [
    {
      icon: Headset,
      title: "Virtual Reality",
      description:
        "Immersive VR training solutions that transport your workforce into realistic, risk-free environments for hands-on learning and skill development.",
      image: virtualReality,
    },
    {
      icon: Layers,
      title: "Augmented Reality",
      description:
        "AR applications that overlay digital information onto the real world, enhancing on-site training, maintenance procedures, and operational efficiency.",
      image: augmentedReality,
    },
    {
      icon: Blend,
      title: "Mixed Reality",
      description:
        "Cutting-edge MR experiences that blend physical and digital worlds, enabling interactive collaboration and advanced training scenarios.",
      image: mixedReality,
    },
    {
      icon: Database,
      title: "Digital Twins",
      description:
        "Virtual replicas of physical assets and processes, enabling real-time monitoring, predictive maintenance, and scenario simulation.",
      image: digitalTwin,
    },
    {
      icon: GraduationCap,
      title: "Industrial Training",
      description:
        "Comprehensive training programs for complex industrial operations, machinery, and processes using immersive XR technologies.",
      image: industrialTraining,
    },
    {
      icon: ShieldCheck,
      title: "Safety Training",
      description:
        "HSE-focused training modules covering office safety, height safety, fire safety, pharma protocols, and forklift operations.",
      image: safetyTraining,
    },
    {
      icon: Building,
      title: "Real Estate Visualization",
      description:
        "Stunning 3D visualizations and virtual property tours that bring architectural projects to life before construction begins.",
      image: realEstate,
    },
    {
      icon: Box,
      title: "3D Asset Creation",
      description:
        "High-quality 3D modeling, texturing, and animation services for training, marketing, and visualization purposes.",
      image: assetCreation,
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal-slide-left">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive XR solutions tailored to transform your business operations
            and training programs.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden card-elevated reveal-3d-card stagger-${
                (index % 5) + 1
              } perspective-1000`}
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90" />
                
                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-accent/90 backdrop-blur-sm flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal-slide-left">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your operations with XR technology?
          </p>
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
