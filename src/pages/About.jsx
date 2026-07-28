export default function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold">About Kenya Compass</h1>

        <p className="mt-8 text-lg text-gray-600 leading-relaxed">
          Kenya Compass is a Kenya-based travel guidance brand created to help
          visitors experience Kenya with confidence. We believe the best
          journeys come from understanding the destination, its people, culture,
          and hidden stories.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <div className="bg-green-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold">Our Mission</h2>

            <p className="mt-4">
              To make exploring Kenya simple, authentic, and memorable through
              trusted local knowledge.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold">Our Vision</h2>

            <p className="mt-4">
              To become a trusted connection between travelers and Kenya.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold">Meet The Founder</h2>

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
