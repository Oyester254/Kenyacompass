export default function ServiceCard({ icon, title, description }) {
  return (
    <div
      className="
      h-full
      bg-white
      rounded-xl
      p-8
      border
      border-[#E6D8C3]
      flex
      flex-col
      transition
      duration-300
      hover:-translate-y-1
      "
    >
      <div className="text-[#2f5233]">{icon}</div>

      <h3 className="text-2xl font-bold mt-5 text-[#4a2e1e]">{title}</h3>

      <p className="mt-4 text-gray-600 leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
}
