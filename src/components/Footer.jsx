import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#2f5233] text-white">
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          py-8
          sm:py-10
        "
      >
        <div
          className="
            grid
            sm:grid-cols-2
            md:grid-cols-3
            gap-8
            sm:gap-10
          "
        >
          <div>
            <h2
              className="
                text-xl
                sm:text-2xl
                font-bold
              "
            >
              Kenya Compass
            </h2>

            <p
              className="
                mt-3
                sm:mt-4
                text-sm
                sm:text-base
                text-gray-200
                leading-6
              "
            >
              Helping travelers discover Kenya through practical information,
              destinations and local insights.
            </p>
          </div>

          <div>
            <h3
              className="
                font-semibold
                text-base
                sm:text-lg
              "
            >
              Explore
            </h3>

            <div
              className="
                mt-3
                sm:mt-4
                space-y-2
                sm:space-y-3
                text-sm
                sm:text-base
                text-gray-200
              "
            >
              <Link className="block hover:text-[#fef2cc] transition" to="/">
                Home
              </Link>

              <Link
                className="block hover:text-[#fef2cc] transition"
                to="/destinations"
              >
                Destinations
              </Link>

              <Link
                className="block hover:text-[#fef2cc] transition"
                to="/guides"
              >
                Travel Guides
              </Link>
            </div>
          </div>

          <div>
            <h3
              className="
                font-semibold
                text-base
                sm:text-lg
              "
            >
              Contact
            </h3>

            <p
              className="
                mt-3
                sm:mt-4
                text-sm
                sm:text-base
                text-gray-200
              "
            >
              Kenya
            </p>

            <Link
              to="/contact"
              className="
                inline-block
                mt-4
                bg-[#fef2cc]
                text-black
                px-5
                py-2
                rounded-lg
                text-sm
                sm:text-base
                font-semibold
                hover:bg-white
                transition
              "
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div
          className="
            border-t
            border-white/20
            mt-8
            pt-5
            text-center
            text-xs
            sm:text-sm
            text-gray-200
          "
        >
          © {new Date().getFullYear()} Kenya Compass. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
