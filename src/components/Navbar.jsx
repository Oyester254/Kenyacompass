import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const whatsappLink = "https://wa.me/254703197935";
  const emailLink =
    "mailto:misheckmwas97@gmail.com?subject=Planning%20My%20Kenya%20Experience";

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Destinations", path: "/destinations" },
    { name: "Services", path: "/services" },
    { name: "Guides", path: "/guides" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#2f5233] sticky top-0 z-50 shadow-md">
      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        py-3
        sm:py-4
        flex
        items-center
        justify-between
        "
      >
        {/* BRAND */}

        <Link to="/" className="leading-tight flex-shrink-0">
          <h1
            className="
            text-xl
            sm:text-2xl
            md:text-3xl
            font-bold
            text-white
            tracking-tight
            "
          >
            Kenya Compass
          </h1>

          <p
            className="
            text-[10px]
            sm:text-xs
            md:text-sm
            text-[#fef2cc]
            mt-0.5
            "
          >
            Authentic Kenyan Travel Experiences
          </p>
        </Link>

        {/* DESKTOP NAV */}

        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="
              text-white/90
              font-medium
              text-sm
              tracking-wide
              hover:text-[#fef2cc]
              transition
              "
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center gap-3 ml-1">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              className="
              bg-[#fef2cc]
              text-[#2f5233]
              p-2
              rounded-full
              hover:bg-white
              hover:scale-110
              transition
              "
            >
              <FaWhatsapp size={20} />
            </a>

            <a
              href={emailLink}
              title="Email"
              className="
              border
              border-[#fef2cc]
              text-[#fef2cc]
              p-2
              rounded-full
              hover:bg-[#fef2cc]
              hover:text-[#2f5233]
              hover:scale-110
              transition
              "
            >
              <MdEmail size={21} />
            </a>
          </div>
        </div>

        {/* MOBILE BUTTON */}

        <button
          className="
          md:hidden
          text-white
          hover:text-[#fef2cc]
          transition
          "
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      {/* MOBILE MENU */}

      {open && (
        <div
          className="
          md:hidden
          bg-[#2f5233]
          px-4
          sm:px-6
          py-5
          border-t
          border-white/20
          "
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="
                text-white
                text-sm
                sm:text-base
                font-medium
                hover:text-[#fef2cc]
                transition
                "
              >
                {link.name}
              </Link>
            ))}

            <div className="flex gap-3 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="
                bg-[#fef2cc]
                text-[#2f5233]
                p-2.5
                rounded-full
                hover:scale-110
                transition
                "
              >
                <FaWhatsapp size={22} />
              </a>

              <a
                href={emailLink}
                title="Email"
                className="
                border
                border-[#fef2cc]
                text-[#fef2cc]
                p-2.5
                rounded-full
                hover:bg-[#fef2cc]
                hover:text-[#2f5233]
                transition
                "
              >
                <MdEmail size={23} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
