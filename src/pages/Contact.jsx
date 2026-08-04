import { MapPin, MessageCircle, Phone, Mail } from "lucide-react";

//import Safari from "../assets/safari.jpg";
import Safari3 from "../assets/safari3.webp";
export default function Contact() {
  const fiverrLink = "https://www.fiverr.com/s/R71kG45";
  const whatsappLink = "https://wa.me/254703197935";

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#4a2e1e]">
            Let's plan your Kenya experience
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Have questions about Kenya? Need help planning your journey? Kenya
            Compass is ready to assist.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          <div
            className="
            p-8
            rounded-xl
            text-center
            shadow-[0_4px_20px_rgba(47,82,51,0.12)]
            hover:shadow-[0_8px_30px_rgba(47,82,51,0.18)]
            transition
            "
          >
            <MapPin className="mx-auto text-[#2f5233]" size={40} />

            <h3 className="font-bold text-xl mt-5 text-[#4a2e1e]">Location</h3>

            <p className="mt-3 text-gray-600">Kenya</p>
          </div>

          <div
            className="
            p-8
            rounded-xl
            text-center
            shadow-[0_4px_20px_rgba(47,82,51,0.12)]
            hover:shadow-[0_8px_30px_rgba(47,82,51,0.18)]
            transition
            "
          >
            <MessageCircle className="mx-auto text-[#2f5233]" size={40} />

            <h3 className="font-bold text-xl mt-5 text-[#4a2e1e]">Connect</h3>

            <a
              href={fiverrLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-block
              mt-3
              text-[#2f5233]
              font-semibold
              hover:text-[#4a2e1e]
              transition
              "
            >
              Available through Fiverr →
            </a>
          </div>

          <div
            className="
            p-8
            rounded-xl
            text-center
            shadow-[0_4px_20px_rgba(47,82,51,0.12)]
            hover:shadow-[0_8px_30px_rgba(47,82,51,0.18)]
            transition
            "
          >
            <Phone className="mx-auto text-[#2f5233]" size={40} />

            <h3 className="font-bold text-xl mt-5 text-[#4a2e1e]">WhatsApp</h3>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-block
              mt-3
              text-[#2f5233]
              font-semibold
              hover:text-[#4a2e1e]
              transition
              "
            >
              +254 703 197 935 →
            </a>
          </div>

          <div
            className="
            p-8
            rounded-xl
            text-center
            shadow-[0_4px_20px_rgba(47,82,51,0.12)]
            hover:shadow-[0_8px_30px_rgba(47,82,51,0.18)]
            transition
            "
          >
            <Mail className="mx-auto text-[#2f5233]" size={40} />

            <h3 className="font-bold text-xl mt-5 text-[#4a2e1e]">Email</h3>

            <a
              href="mailto:misheckmwas97@gmail.com"
              className="
              inline-block
              mt-3
              text-[#2f5233]
              font-semibold
              hover:text-[#4a2e1e]
              transition
              "
            >
              misheckmwas97@gmail.com →
            </a>
          </div>
        </div>

        <section className="mt-20">
          <div
            className="
            max-w-7xl
            mx-auto
            grid
            md:grid-cols-11
            items-center
            gap-10
            "
          >
            <div className="md:col-span-6 relative">
              <img
                src={Safari3}
                alt="Kenya safari experience"
                className="
                rounded-3xl
                shadow-xl
                w-full
                h-[360px]
                object-cover
                object-center
                "
              />

              <div
                className="
                absolute
                inset-0
                rounded-3xl
                bg-gradient-to-t
                from-black/20
                to-transparent
                "
              ></div>
            </div>

            <div className="md:col-span-5">
              <h2 className="text-4xl font-bold text-[#2f5233]">
                Your Kenya story starts here
              </h2>

              <p className="mt-5 text-lg text-[#4a2e1e] leading-relaxed">
                From unforgettable safaris to cultural discoveries and scenic
                landscapes, Kenya Compass helps you create a journey that
                matches your interests.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Share your travel ideas with us and discover experiences that
                make your Kenya adventure unique and memorable.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
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
                Start planning your journey
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
