import { Link } from "react-router-dom";
import { Compass, MapPin, ShieldCheck, Globe, Star } from "lucide-react";

import ServiceCard from "../components/ServiceCard";
import DestinationCard from "../components/DestinationCard";

import Nairobi from "../assets/nairobi.jpg";
import Safari from "../assets/safari.jpg";
import Coast from "../assets/coast.jpg";

export default function Home() {
  const services = [
    {
      icon: <Compass />,
      title: "Travel Planning",
      description:
        "Personalized Kenya travel plans designed around your interests, budget, and schedule.",
    },

    {
      icon: <MapPin />,
      title: "Local Guidance",
      description:
        "Practical local advice about destinations, transport, culture, food, and experiences.",
    },

    {
      icon: <ShieldCheck />,
      title: "Trusted Information",
      description:
        "Reliable Kenya insights to help you make confident travel decisions.",
    },
  ];

  const destinations = [
    {
      image: Nairobi,
      title: "Nairobi",
      description:
        "Discover Kenya's capital through culture, food, wildlife, and city experiences.",
    },

    {
      image: Safari,
      title: "Maasai Mara",
      description:
        "Experience one of Africa's most iconic wildlife destinations.",
    },

    {
      image: Coast,
      title: "Kenya Coast",
      description: "Explore beaches, history, and the unique Swahili culture.",
    },
  ];

  return (
    <>
      {/* HERO */}

      <section className="bg-green-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-widest text-yellow-400">
              Your Kenya Travel Partner
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
              Navigate Kenya
              <br />
              With Confidence
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              Kenya Compass connects travelers with local knowledge,
              personalized recommendations, and authentic Kenyan experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold"
              >
                Plan Your Journey
              </Link>

              <Link
                to="/destinations"
                className="border border-white px-8 py-3 rounded-lg"
              >
                Explore Kenya
              </Link>
            </div>
          </div>

          <div>
            <img
              src={Safari}
              alt="Kenya safari"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* TRUST */}

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Globe className="mx-auto text-green-800" size={40} />
            <h3 className="font-bold text-xl mt-4">Local Knowledge</h3>
            <p className="text-gray-600 mt-3">Real insights from Kenya.</p>
          </div>

          <div className="text-center">
            <Star className="mx-auto text-green-800" size={40} />
            <h3 className="font-bold text-xl mt-4">Authentic Experiences</h3>
            <p className="text-gray-600 mt-3">
              Discover beyond ordinary tourism.
            </p>
          </div>

          <div className="text-center">
            <ShieldCheck className="mx-auto text-green-800" size={40} />
            <h3 className="font-bold text-xl mt-4">Reliable Support</h3>
            <p className="text-gray-600 mt-3">
              Guidance before and during your trip.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-4xl font-bold text-center">What We Offer</h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}

      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center">Popular Destinations</h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-12">
          {destinations.map((item, index) => (
            <DestinationCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="bg-green-900 text-white py-20 text-center px-6">
        <h2 className="text-4xl font-bold">Ready To Discover Kenya?</h2>

        <p className="mt-5">
          Let Kenya Compass help you create your experience.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-8 bg-yellow-500 text-black px-8 py-3 rounded-lg"
        >
          Get Started
        </Link>
      </section>
    </>
  );
}
