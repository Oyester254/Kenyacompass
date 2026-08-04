import {
  Compass,
  MapPin,
  Search,
  Plane,
  HeartHandshake,
  Briefcase,
} from "lucide-react";

import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const services = [
    {
      icon: <Compass size={32} />,
      title: "Personalized travel planning",
      description:
        "We help you plan your Kenya journey with destination suggestions, activities, routes, and experiences that match your interests.",
    },

    {
      icon: <MapPin size={32} />,
      title: "Local destination guidance",
      description:
        "Get practical information about places to visit, transport options, local culture, food, and things to do.",
    },

    {
      icon: <Search size={32} />,
      title: "Kenya information research",
      description:
        "Need reliable information about Kenya? We provide local insights to help you make better decisions.",
    },

    {
      icon: <Plane size={32} />,
      title: "Trip preparation support",
      description:
        "Prepare for your visit with guidance on travel planning, expectations, and important local considerations.",
    },

    {
      icon: <HeartHandshake size={32} />,
      title: "Authentic experiences",
      description:
        "Discover experiences that connect you with Kenya beyond typical tourist activities.",
    },

    {
      icon: <Briefcase size={32} />,
      title: "Business and local support",
      description:
        "Support for individuals and organizations seeking local knowledge about Kenya.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2f5233] leading-tight">
            Our services
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#4a2e1e] leading-6 sm:leading-7">
            From travel planning to local insights, Kenya Compass helps you
            navigate Kenya with confidence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-7 md:gap-8 mt-8 sm:mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="
              rounded-xl
              shadow-[0_0_18px_rgba(74,46,30,0.10)]
              hover:shadow-[0_0_28px_rgba(47,82,51,0.20)]
              transition-shadow
              duration-300
              "
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
