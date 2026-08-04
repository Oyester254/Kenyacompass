export default function DestinationCard({ image, title, description }) {
  return (
    <div
      className="
bg-white
rounded-xl
overflow-hidden
shadow-sm
border
border-gray-100
hover:shadow-lg
transition
"
    >
      <img
        src={image}
        alt={`${title} Kenya`}
        loading="lazy"
        className="
w-full
h-64
object-cover
"
      />

      <div className="p-6">
        <h3
          className="
text-2xl
font-bold
text-[#2f5233]
"
        >
          {title}
        </h3>

        <p
          className="
mt-3
text-[#4a2e1e]
leading-relaxed
"
        >
          {description}
        </p>
      </div>
    </div>
  );
}
