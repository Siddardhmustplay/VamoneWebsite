import { Target, Award, Users, Zap } from "lucide-react";
import aboutUsHero from "@/assets/about-us-hero.jpg";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To help increase productivity through engaging virtual reality experiences and immersive visual storytelling.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Delivering cutting-edge HSE training solutions to global industries with unmatched quality.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "A dedicated team of VR specialists, 3D artists, and training professionals.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Leveraging the latest XR technologies to create transformative learning experiences.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal-slide-left">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            About <span className="text-gradient">VAM.one</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
        </div>

        {/* Main Content with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Hero Image */}
          <div className="reveal-slide-left">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={aboutUsHero}
                alt="Person using VR headset interacting with holographic interface showcasing VAM.one's immersive XR technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 reveal-slide-right">
            <h3 className="text-3xl font-bold text-primary">
              Leading XR Enterprise Solutions
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              VAM.one is a leading end-to-end Virtual, Augmented & Mixed Reality
              enterprise solution studio committed to delivering the best cutting-edge
              HSE training development support and solutions to Global Industries.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We truly believe in the transformative power of illustration and immersive
              technology to revolutionize workplace safety and training methodologies.
            </p>
            <div className="pt-4">
              <p className="text-xl font-semibold text-accent mb-2">
                VR Division of MustPlay Games
              </p>
              <p className="text-muted-foreground">
                Backed by years of gaming and interactive experience development
                expertise.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`card-elevated reveal-3d-card stagger-${index + 1} perspective-1000`}
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
