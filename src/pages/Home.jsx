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
      icon: <Compass size={32} />,
      title: "Personalized travel planning",
      description:
        "We create tailored Kenya travel plans based on your interests, time, budget, and preferred experiences.",
    },
    {
      icon: <MapPin size={32} />,
      title: "Local Kenya guidance",
      description:
        "Get reliable local insights about destinations, transport, culture, activities, and hidden gems across Kenya.",
    },
    {
      icon: <ShieldCheck size={32} />,
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
      {/* HERO */}
      <section
        className="
        relative
        h-[78vh]
        sm:h-[85vh]
        md:h-[90vh]
        flex
        items-center
        overflow-hidden
        "
      >
        <img
          src={Safari2}
          alt="Kenya safari landscape"
          className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          object-center
          "
        />

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/80
          via-black/55
          to-black/30
          "
        />

        <div
          className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          w-full
          text-white
          "
        >
          <div className="max-w-3xl">
            <p
              className="
              uppercase
              tracking-[0.18em]
              sm:tracking-[0.3em]
              text-[#fef2cc]
              font-semibold
              text-[11px]
              sm:text-sm
              "
            >
              Your Kenya travel partner
            </p>

            <h1
              className="
              text-3xl
              sm:text-4xl
              md:text-6xl
              lg:text-7xl
              font-bold
              mt-4
              leading-[1.1]
              "
            >
              Discover Kenya
              <br />
              Beyond the ordinary
            </h1>

            <p
              className="
              mt-4
              sm:mt-6
              text-sm
              sm:text-base
              md:text-xl
              text-gray-100
              max-w-xl
              leading-6
              sm:leading-8
              "
            >
              Kenya Compass helps travelers explore Kenya with trusted local
              knowledge, personalized recommendations, and authentic
              experiences.
            </p>

            <div
              className="
              mt-6
              sm:mt-8
              flex
              flex-col
              sm:flex-row
              gap-3
              "
            >
              <Link
                to="/contact"
                className="
                bg-[#fef2cc]
                text-[#2f5233]
                px-6
                py-3
                rounded-lg
                text-sm
                font-semibold
                text-center
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
                px-6
                py-3
                rounded-lg
                text-sm
                text-center
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

      {/* FEATURES */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6">
        <div
          className="
          max-w-6xl
          mx-auto
          grid
          md:grid-cols-3
          gap-10
          "
        >
          {[
            {
              icon: <Globe size={34} />,
              title: "Local expertise",
              text: "Authentic insights from people who understand Kenya.",
            },
            {
              icon: <Star size={34} />,
              title: "Authentic experiences",
              text: "Discover Kenya beyond typical tourist routes.",
            },
            {
              icon: <ShieldCheck size={34} />,
              title: "Reliable support",
              text: "Guidance to help you travel with confidence.",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center text-[#4a2e1e]">
                {item.icon}
              </div>

              <h3 className="mt-4 text-lg sm:text-xl font-bold text-[#2f5233]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm sm:text-base text-[#2f5233] leading-6">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f8f7f2] py-12 sm:py-16 md:py-20 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#2f5233]">
            How we help
          </h2>

          <p className="mt-4 text-center text-sm sm:text-base text-[#4a2e1e] max-w-2xl mx-auto">
            From planning your first visit to discovering hidden experiences,
            Kenya Compass makes exploring Kenya simple.
          </p>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-10">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#2f5233]">
            Explore Kenya
          </h2>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-10">
            {destinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#fef2cc] py-12 sm:py-16 px-5 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#2f5233]">
            Ready to experience Kenya?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#4a2e1e]">
            Start planning your journey with Kenya Compass today.
          </p>

          <Link
            to="/contact"
            className="
            inline-block
            mt-6
            bg-[#2f5233]
            text-white
            px-7
            py-3
            rounded-lg
            text-sm
            sm:text-base
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
