export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
      <div className="text-green-700 text-4xl mb-5">{icon}</div>

      <h3 className="text-xl font-bold text-gray-900">{title}</h3>

      <p className="mt-4 text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
