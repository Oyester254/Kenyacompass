import { MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const fiverrLink = "https://www.fiverr.com/s/7Y4wKVe";

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Let's Plan Your Kenya Experience
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Have questions about Kenya? Need help planning your journey? Kenya
            Compass is ready to assist.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          <div className="p-8 shadow rounded-xl text-center">
            <MapPin className="mx-auto text-green-800" size={40} />

            <h3 className="font-bold text-xl mt-5">Location</h3>

            <p className="mt-3 text-gray-600">Kenya</p>
          </div>

          <div className="p-8 shadow rounded-xl text-center">
            <MessageCircle className="mx-auto text-green-800" size={40} />

            <h3 className="font-bold text-xl mt-5">Connect</h3>

            <a
              href={fiverrLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-green-700 font-semibold hover:text-green-900"
            >
              Available through Fiverr →
            </a>
          </div>
        </div>

        <div className="mt-16 bg-green-900 text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold">Start Your Kenya Journey</h2>

          <p className="mt-4 text-gray-300">
            Tell us what you need and we will help you discover Kenya.
          </p>

          <a
            href={fiverrLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400"
          >
            Contact Kenya Compass
          </a>
        </div>
      </div>
    </section>
  );
}
