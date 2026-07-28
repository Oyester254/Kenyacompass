import DestinationCard from "../components/DestinationCard";

import Nairobi from "../assets/nairobi.jpg";
import Safari from "../assets/safari.jpg";
import Coast from "../assets/coast.jpg";
import MtKenya from "../assets/mtkenya.jpg";
export default function Destinations() {
  const destinations = [
    {
      image: Nairobi,
      title: "Nairobi",
      description:
        "Kenya's vibrant capital offering culture, restaurants, business opportunities, wildlife experiences, and modern city life.",
    },

    {
      image: Safari,
      title: "Maasai Mara",
      description:
        "One of the world's most famous wildlife destinations, known for incredible landscapes and safari experiences.",
    },

    {
      image: Coast,
      title: "Mombasa Coast",
      description:
        "A beautiful coastal destination combining beaches, history, Swahili culture, and ocean experiences.",
    },

    {
      image: MtKenya,
      title: "Mount Kenya",
      description:
        "A destination for adventure lovers featuring nature, hiking, and breathtaking scenery.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Explore Kenya</h1>

          <p className="mt-5 text-gray-600 text-lg">
            Discover some of Kenya's most remarkable destinations and
            experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-14">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
