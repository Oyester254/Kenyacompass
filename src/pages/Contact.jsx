import { MapPin, MessageCircle, Phone, Mail } from "lucide-react";

import Safari3 from "../assets/safari3.webp";

export default function Contact() {
  const fiverrLink = "https://www.fiverr.com/s/R71kG45";
  const whatsappLink = "https://wa.me/254703197935";

  const contactCards = [
    {
      icon: <MapPin />,
      title: "Location",
      content: <p className="mt-2 text-sm sm:text-base text-gray-600">Kenya</p>,
    },
    {
      icon: <MessageCircle />,
      title: "Connect",
      content: (
        <a
          href={fiverrLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm sm:text-base text-[#2f5233] font-semibold hover:text-[#4a2e1e]"
        >
          Available through Fiverr →
        </a>
      ),
    },
    {
      icon: <Phone />,
      title: "WhatsApp",
      content: (
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm sm:text-base text-[#2f5233] font-semibold hover:text-[#4a2e1e]"
        >
          +254 703 197 935 →
        </a>
      ),
    },
    {
      icon: <Mail />,
      title: "Email",
      content: (
        <a
          href="mailto:misheckmwas97@gmail.com"
          className="mt-2 inline-block break-all text-sm sm:text-base text-[#2f5233] font-semibold hover:text-[#4a2e1e]"
        >
          misheckmwas97@gmail.com →
        </a>
      ),
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
            text-[#4a2e1e]
            leading-tight
          "
          >
            Let's plan your Kenya experience
          </h1>

          <p
            className="
            mt-4
            sm:mt-6
            text-sm
            sm:text-base
            md:text-lg
            text-gray-600
            leading-6
          "
          >
            Have questions about Kenya? Need help planning your journey? Kenya
            Compass is ready to assist.
          </p>
        </div>

        <div
          className="
          grid
          sm:grid-cols-2
          gap-5
          sm:gap-7
          mt-8
          sm:mt-12
        "
        >
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="
              p-5
              sm:p-6
              rounded-xl
              text-center
              shadow-[0_4px_20px_rgba(47,82,51,0.10)]
              hover:shadow-[0_8px_30px_rgba(47,82,51,0.18)]
              transition
              "
            >
              <div className="flex justify-center text-[#2f5233]">
                {card.icon}
              </div>

              <h3
                className="
                font-bold
                text-lg
                sm:text-xl
                mt-4
                text-[#4a2e1e]
              "
              >
                {card.title}
              </h3>

              {card.content}
            </div>
          ))}
        </div>

        <section className="mt-12 sm:mt-16 md:mt-20">
          <div
            className="
            grid
            md:grid-cols-11
            items-center
            gap-8
            sm:gap-10
          "
          >
            <div className="md:col-span-6 relative">
              <img
                src={Safari3}
                alt="Kenya safari experience"
                className="
                  rounded-2xl
                  sm:rounded-3xl
                  shadow-xl
                  w-full
                  h-[260px]
                  sm:h-[320px]
                  md:h-[360px]
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  rounded-2xl
                  sm:rounded-3xl
                  bg-gradient-to-t
                  from-black/20
                  to-transparent
                "
              />
            </div>

            <div className="md:col-span-5">
              <h2
                className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-bold
                text-[#2f5233]
                leading-tight
              "
              >
                Your Kenya story starts here
              </h2>

              <p
                className="
                mt-4
                text-sm
                sm:text-base
                md:text-lg
                text-[#4a2e1e]
                leading-7
              "
              >
                From unforgettable safaris to cultural discoveries and scenic
                landscapes, Kenya Compass helps you create a journey that
                matches your interests.
              </p>

              <p
                className="
                mt-3
                text-sm
                sm:text-base
                text-gray-600
                leading-6
              "
              >
                Share your travel ideas with us and discover experiences that
                make your Kenya adventure unique and memorable.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  mt-6
                  bg-[#2f5233]
                  text-white
                  px-6
                  py-2.5
                  rounded-lg
                  text-sm
                  sm:text-base
                  font-semibold
                  hover:bg-[#4a2e1e]
                  transition
                "
              >
                Start planning your journey
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
