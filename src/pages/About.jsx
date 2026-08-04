export default function About() {
  return (
    <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#2f5233] leading-tight">
          About Kenya Compass
        </h1>

        <p className="mt-5 sm:mt-7 text-sm sm:text-base md:text-lg text-gray-600 leading-6 sm:leading-7 md:leading-8 max-w-3xl">
          Kenya Compass is a Kenya-based travel guidance brand created to help
          visitors experience Kenya with confidence. We believe the best
          journeys come from understanding the destination, its people, culture,
          and hidden stories.
        </p>

        <div className="grid md:grid-cols-2 gap-7 sm:gap-10 mt-10 sm:mt-14">
          <div className="border-l-4 border-[#2f5233] pl-4 sm:pl-5">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#4a2e1e]">
              Our Mission
            </h2>

            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 leading-6">
              To make exploring Kenya simple, authentic, and memorable through
              trusted local knowledge.
            </p>
          </div>

          <div className="border-l-4 border-[#fef22c] pl-4 sm:pl-5">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#4a2e1e]">
              Our Vision
            </h2>

            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 leading-6">
              To become a trusted connection between travelers and Kenya.
            </p>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 border-t border-gray-200 pt-7 sm:pt-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2f5233]">
            Meet the Founder
          </h2>

          <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg text-gray-600 leading-6 sm:leading-7">
            Kenya Compass was founded by Misheck Riba, a Kenya-based technology
            professional passionate about connecting people with reliable
            information and meaningful experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
