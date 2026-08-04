export default function About() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-[#2f5233]">
          About Kenya Compass
        </h1>

        <p className="mt-8 text-lg text-gray-600 leading-relaxed">
          Kenya Compass is a Kenya-based travel guidance brand created to help
          visitors experience Kenya with confidence. We believe the best
          journeys come from understanding the destination, its people, culture,
          and hidden stories.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <div className="border-l-4 border-[#2f5233] pl-6">
            <h2 className="text-2xl font-bold text-[#4a2e1e]">Our Mission</h2>

            <p className="mt-4 text-gray-600">
              To make exploring Kenya simple, authentic, and memorable through
              trusted local knowledge.
            </p>
          </div>

          <div className="border-l-4 border-[#fef22c] pl-6">
            <h2 className="text-2xl font-bold text-[#4a2e1e]">Our Vision</h2>

            <p className="mt-4 text-gray-600">
              To become a trusted connection between travelers and Kenya.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-10">
          <h2 className="text-3xl font-bold text-[#2f5233]">
            Meet The Founder
          </h2>

          <p className="mt-5 text-gray-600">
            Kenya Compass was founded by Misheck Riba, a Kenya-based technology
            professional passionate about connecting people with reliable
            information and meaningful experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
