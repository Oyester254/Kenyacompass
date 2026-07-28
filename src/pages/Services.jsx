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
      icon: <Compass size={40} />,
      title: "Personalized Travel Planning",
      description:
        "We help you plan your Kenya journey with destination suggestions, activities, routes, and experiences that match your interests.",
    },

    {
      icon: <MapPin size={40} />,
      title: "Local Destination Guidance",
      description:
        "Get practical information about places to visit, transport options, local culture, food, and things to do.",
    },

    {
      icon: <Search size={40} />,
      title: "Kenya Information Research",
      description:
        "Need reliable information about Kenya? We provide local insights to help you make better decisions.",
    },

    {
      icon: <Plane size={40} />,
      title: "Trip Preparation Support",
      description:
        "Prepare for your visit with guidance on travel planning, expectations, and important local considerations.",
    },

    {
      icon: <HeartHandshake size={40} />,
      title: "Authentic Experiences",
      description:
        "Discover experiences that connect you with Kenya beyond typical tourist activities.",
    },

    {
      icon: <Briefcase size={40} />,
      title: "Business & Local Support",
      description:
        "Support for individuals and organizations seeking local knowledge about Kenya.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold">Our Services</h1>

          <p className="mt-6 text-gray-600 text-lg">
            From travel planning to local insights, Kenya Compass helps you
            navigate Kenya with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
