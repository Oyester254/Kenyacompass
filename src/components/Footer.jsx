import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

export default function Footer() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Destinations", path: "/destinations" },
    { name: "Guides", path: "/guides" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-green-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-12">
          {/* BRAND SECTION */}

          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Kenya Compass logo"
                className="h-14 w-14 object-contain"
              />

              <div>
                <h2 className="text-2xl font-bold">Kenya Compass</h2>

                <p className="text-sm text-gray-300">
                  Navigate Kenya With Confidence
                </p>
              </div>
            </Link>

            <p className="mt-6 text-gray-300 leading-relaxed">
              Discover Kenya through local knowledge, authentic experiences, and
              trusted guidance.
            </p>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h3 className="text-lg font-semibold mb-5">Explore</h3>

            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-yellow-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}

          <div>
            <h3 className="text-lg font-semibold mb-5">Contact</h3>

            <p className="text-gray-300 mb-3"> Kenya</p>

            {/* <p className="text-gray-300 mb-3">✉ hello@kenyacompass.com</p> */}

            <p className="text-red-500">
              <a href="https://www.fiverr.com/s/1qr2WGk">
                Available through Fiverr
              </a>
            </p>

            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}

        <div className="border-t border-green-800 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Kenya Compass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
