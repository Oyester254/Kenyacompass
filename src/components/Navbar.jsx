import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "../assets/logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Destinations", path: "/destinations" },
    { name: "Guides", path: "/guides" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* BRAND LOGO */}

        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Kenya Compass logo"
            className="h-12 w-12 object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-xl md:text-2xl font-bold text-green-800">
              Kenya Compass
            </h1>

            <p className="hidden sm:block text-xs text-gray-500">
              Navigate Kenya With Confidence
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-green-700 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}

        <button
          className="md:hidden text-green-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}

      {open && (
        <div className="md:hidden bg-white border-t px-6 py-6">
          <div className="flex flex-col gap-5 text-gray-700 font-medium">
            {links.map((link) => (
              <Link
                key={link.name}
                onClick={() => setOpen(false)}
                to={link.path}
                className="hover:text-green-700"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
