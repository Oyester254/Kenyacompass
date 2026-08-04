import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#2f5233] text-white">
      <div
        className="
max-w-7xl
mx-auto
px-6
py-10
"
      >
        <div
          className="
grid
md:grid-cols-3
gap-10
"
        >
          <div>
            <h2 className="text-2xl font-bold">Kenya Compass</h2>

            <p
              className="
mt-4
text-gray-200
leading-relaxed
"
            >
              Helping travelers discover Kenya through practical information,
              destinations and local insights.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Explore</h3>

            <div
              className="
mt-4
space-y-3
text-gray-200
"
            >
              <Link className="block" to="/">
                Home
              </Link>

              <Link className="block" to="/destinations">
                Destinations
              </Link>

              <Link className="block" to="/guides">
                Travel Guides
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Contact</h3>

            <p className="mt-4 text-gray-200">Kenya</p>

            <Link
              to="/contact"
              className="
inline-block
mt-5
bg-[#fef2cc]
text-black
px-5
py-2
rounded-lg
font-semibold
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
text-sm
text-gray-200
"
        >
          © {new Date().getFullYear()} Kenya Compass. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
