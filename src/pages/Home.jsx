import { Link } from "react-router-dom";
import { Compass, MapPin, ShieldCheck, Globe, Star } from "lucide-react";

import ServiceCard from "../components/ServiceCard";
import DestinationCard from "../components/DestinationCard";

import Nairobi from "../assets/nairobi.jpg";
import Safari from "../assets/safari.jpg";
import Coast from "../assets/coast.jpg";
import Safari2 from "../assets/safari2.jpg";

export default function Home() {
  const services = [
    {
      icon: <Compass />,
      title: "Personalized travel planning",
      description:
        "We create tailored Kenya travel plans based on your interests, time, budget, and preferred experiences.",
    },

    {
      icon: <MapPin />,
      title: "Local Kenya guidance",
      description:
        "Get reliable local insights about destinations, transport, culture, activities, and hidden gems across Kenya.",
    },

    {
      icon: <ShieldCheck />,
      title: "Trusted travel support",
      description:
        "Make confident decisions with practical information and guidance before and during your Kenya journey.",
    },
  ];

  const destinations = [
    {
      image: Nairobi,
      title: "Nairobi",
      description:
        "Experience Kenya's capital through wildlife, culture, restaurants, business, and modern city life.",
    },

    {
      image: Safari,
      title: "Maasai Mara",
      description:
        "Explore one of Africa's greatest safari destinations with breathtaking wildlife experiences.",
    },

    {
      image: Coast,
      title: "Kenya Coast",
      description:
        "Discover beautiful beaches, Swahili heritage, history, and unforgettable coastal adventures.",
    },
  ];

  return (
    <>
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <img
          src={Safari2}
          alt="Kenya safari landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-[#fef2cc] font-semibold text-sm md:text-base">
              Your Kenya travel partner
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-5 leading-tight text-white">
              Discover Kenya
              <br />
              Beyond the ordinary
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed">
              Kenya Compass helps travelers explore Kenya with trusted local
              knowledge, personalized recommendations, and authentic
              experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="
                bg-[#fef2cc]
                text-[#2f5233]
                px-8
                py-3
                rounded-lg
                font-semibold
                hover:bg-white
                transition
                "
              >
                Plan your journey
              </Link>

              <Link
                to="/destinations"
                className="
                border
                border-[#fef2cc]
                text-[#fef2cc]
                px-8
                py-3
                rounded-lg
                hover:bg-[#fef2cc]
                hover:text-[#2f5233]
                transition
                "
              >
                Explore Kenya
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Globe className="mx-auto text-[#4a2e1e]" size={40} />

            <h3 className="font-bold text-xl mt-4 text-[#2f5233]">
              Local expertise
            </h3>

            <p className="mt-3 text-[#2f5233]">
              Authentic insights from people who understand Kenya.
            </p>
          </div>

          <div className="text-center">
            <Star className="mx-auto text-[#4a2e1e]" size={40} />

            <h3 className="font-bold text-xl mt-4 text-[#2f5233]">
              Authentic experiences
            </h3>

            <p className="mt-3 text-[#2f5233]">
              Discover Kenya beyond typical tourist routes.
            </p>
          </div>

          <div className="text-center">
            <ShieldCheck className="mx-auto text-[#4a2e1e]" size={40} />

            <h3 className="font-bold text-xl mt-4 text-[#2f5233]">
              Reliable support
            </h3>

            <p className="mt-3 text-[#2f5233]">
              Guidance to help you travel with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f7f2] py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-[#2f5233]">
          How we help
        </h2>

        <p className="text-center text-[#4a2e1e] mt-4 max-w-2xl mx-auto">
          From planning your first visit to discovering hidden experiences,
          Kenya Compass makes exploring Kenya simple.
        </p>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-[#2f5233]">
          Explore Kenya
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-12">
          {destinations.map((item, index) => (
            <DestinationCard key={index} {...item} />
          ))}
        </div>
      </section>

      <section className="bg-[#fef2cc] py-20 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2f5233]">
            Ready to experience Kenya?
          </h2>

          <p className="mt-5 text-[#4a2e1e] text-lg max-w-2xl mx-auto">
            Start planning your journey with Kenya Compass today.
          </p>

          <Link
            to="/contact"
            className="
            inline-block
            mt-8
            bg-[#2f5233]
            text-white
            px-8
            py-3
            rounded-lg
            font-semibold
            hover:bg-[#4a2e1e]
            transition
            "
          >
            Get started
          </Link>
        </div>
      </section>
    </>
  );
}
