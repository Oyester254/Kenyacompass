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
      title: "Personalized Travel Planning",
      description:
        "We create tailored Kenya travel plans based on your interests, time, budget, and preferred experiences.",
    },

    {
      icon: <MapPin />,
      title: "Local Kenya Guidance",
      description:
        "Get reliable local insights about destinations, transport, culture, activities, and hidden gems across Kenya.",
    },

    {
      icon: <ShieldCheck />,
      title: "Trusted Travel Support",
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
      {/* ================= HERO ================= */}

      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <img
          src={Safari2}
          alt="Kenya safari landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-yellow-400 font-semibold text-sm md:text-base">
              Your Kenya Travel Partner
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-5 leading-tight text-white">
              Discover Kenya
              <br />
              Beyond The Ordinary
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed">
              Kenya Compass helps travelers explore Kenya with trusted local
              knowledge, personalized recommendations, and authentic
              experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
              >
                Plan Your Journey
              </Link>

              <Link
                to="/destinations"
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition"
              >
                Explore Kenya
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Globe className="mx-auto text-green-800" size={40} />

            <h3 className="font-bold text-xl mt-4">Local Expertise</h3>

            <p className="text-gray-600 mt-3">
              Authentic insights from people who understand Kenya.
            </p>
          </div>

          <div className="text-center">
            <Star className="mx-auto text-green-800" size={40} />

            <h3 className="font-bold text-xl mt-4">Authentic Experiences</h3>

            <p className="text-gray-600 mt-3">
              Discover Kenya beyond typical tourist routes.
            </p>
          </div>

          <div className="text-center">
            <ShieldCheck className="mx-auto text-green-800" size={40} />

            <h3 className="font-bold text-xl mt-4">Reliable Support</h3>

            <p className="text-gray-600 mt-3">
              Guidance to help you travel with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-4xl font-bold text-center">How We Help</h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          From planning your first visit to discovering hidden experiences,
          Kenya Compass makes exploring Kenya simple.
        </p>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* ================= DESTINATIONS ================= */}

      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center">Explore Kenya</h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-12">
          {destinations.map((item, index) => (
            <DestinationCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="bg-green-900 text-white py-20 text-center px-6">
        <h2 className="text-4xl font-bold">Ready To Experience Kenya?</h2>

        <p className="mt-5 text-gray-300">
          Start planning your journey with Kenya Compass today.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-8 bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Get Started
        </Link>
      </section>
    </>
  );
}
