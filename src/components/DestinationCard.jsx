export default function DestinationCard({ image, title, description }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition">
      <img src={image} alt={title} className="w-full h-64 object-cover" />

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>

        <p className="mt-3 text-gray-600">{description}</p>
      </div>
    </div>
  );
}
