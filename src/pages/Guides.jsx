import { BookOpen, Map, Camera, Compass } from "lucide-react";

export default function Guides() {
  const guides = [
    {
      icon: <BookOpen size={35} />,
      title: "First Time Visitor Guide",
      description:
        "Essential information about Kenya including culture, transport, currency, weather, and what to expect.",
    },

    {
      icon: <Map size={35} />,
      title: "Nairobi City Guide",
      description:
        "Discover places to visit, food experiences, attractions, and practical city information.",
    },

    {
      icon: <Camera size={35} />,
      title: "Safari Planning Guide",
      description:
        "Learn about safari destinations, best seasons, activities, and preparation tips.",
    },

    {
      icon: <Compass size={35} />,
      title: "Kenya Experience Guide",
      description:
        "Explore unique experiences, local culture, and hidden opportunities across Kenya.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Kenya Travel Guides</h1>

          <p className="mt-6 text-gray-600 text-lg">
            Helpful resources created to make your Kenya experience easier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl shadow-md bg-white hover:shadow-xl transition"
            >
              <div className="text-green-800">{guide.icon}</div>

              <h2 className="text-2xl font-bold mt-5">{guide.title}</h2>

              <p className="mt-4 text-gray-600">{guide.description}</p>

              <button className="mt-6 text-green-800 font-semibold">
                Read Guide →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
