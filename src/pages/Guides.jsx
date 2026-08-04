import { useState } from "react";
import { BookOpen, Map, Camera, Compass, X } from "lucide-react";

export default function Guides() {
  const [selectedGuide, setSelectedGuide] = useState(null);

  const guides = [
    {
      icon: <BookOpen size={35} />,
      title: "First time visitor guide",
      description:
        "Everything you need to know before visiting Kenya, including local culture, transport, currency, weather, safety tips, and practical travel advice to help you enjoy a smooth and memorable journey.",

      content: (
        <>
          <h3>Your Kenyan adventure begins</h3>

          <p>
            Welcome to Kenya, a country celebrated for its breathtaking
            landscapes, extraordinary wildlife, vibrant cultures, and genuine
            hospitality. Whether you are planning your first safari, a relaxing
            coastal holiday, or a cultural adventure, Kenya offers experiences
            that create memories that last a lifetime.
          </p>

          <p>
            Many visitors arrive in Kenya expecting to see the famous Big Five,
            but they often leave with something even more meaningful. They
            remember the warm smiles of local people, unforgettable sunsets
            across the savannah, delicious traditional meals, and authentic
            encounters that reveal the true spirit of Kenya.
          </p>

          <h3>What makes Kenya special</h3>

          <p>
            Kenya is one of Africa's most diverse travel destinations. Within a
            single journey, visitors can explore vibrant cities, experience
            incredible wildlife in its natural habitat, hike scenic mountains,
            relax on white sandy beaches, and discover cultural traditions that
            have been preserved for generations.
          </p>

          <p>
            Every region offers a unique experience. Nairobi combines modern
            city life with nature, history, and creativity. The Maasai Mara is
            famous for its exceptional wildlife and the spectacular Great
            Migration. Kenya's coastline offers beautiful beaches, historic
            towns, and the rich heritage of Swahili culture, while the central
            highlands provide breathtaking scenery, coffee farms, and peaceful
            countryside escapes.
          </p>

          <h3>Before you travel</h3>

          <p>
            Preparing before your journey allows you to explore Kenya with
            confidence and peace of mind. A little planning helps you make the
            most of your experience.
          </p>

          <ul>
            <li>
              Ensure your passport is valid and check Kenya's entry requirements
              before your travel date.
            </li>

            <li>
              Research the best time to visit depending on your interests,
              whether you want to experience wildlife viewing, hiking, cultural
              events, or relaxing on the coast.
            </li>

            <li>
              Pack lightweight clothing suitable for warm days, together with a
              light jacket for cooler evenings and higher-altitude destinations.
            </li>

            <li>
              Bring comfortable walking shoes, sunglasses, sunscreen, and a hat
              for outdoor activities and sightseeing.
            </li>

            <li>
              Carry a camera or smartphone with enough storage because Kenya
              offers countless opportunities for unforgettable photographs.
            </li>

            <li>
              Keep some Kenyan Shillings available for small purchases, local
              markets, and places where card payments may not be available.
            </li>

            <li>
              Consider travel insurance and keep important documents stored
              safely during your trip.
            </li>
          </ul>

          <h3>Understanding Kenyan culture</h3>

          <p>
            Kenya is home to more than forty communities, each contributing
            unique traditions, languages, music, art, and cuisine. This cultural
            diversity is one of the country's greatest strengths and adds depth
            to every visitor's experience.
          </p>

          <p>
            Respect and curiosity go a long way when travelling. Learning simple
            Swahili greetings such as <em>Jambo</em>, <em>Habari</em>, or{" "}
            <em>Asante</em> can help create genuine connections with local
            people. Showing appreciation for local customs and asking respectful
            questions often leads to meaningful conversations and memorable
            experiences.
          </p>

          <h3>Food you should try</h3>

          <p>
            Kenyan cuisine reflects the country's diverse communities and
            regions. Every meal carries a story, from family gatherings and
            traditional celebrations to everyday life.
          </p>

          <p>
            During your visit, consider trying popular local dishes such as
            nyama choma, ugali, sukuma wiki, pilau, chapati, fresh seafood along
            the coast, tropical fruits, and Kenya's world-famous tea and coffee.
          </p>

          <p>
            Food in Kenya is more than nourishment. It brings people together,
            celebrates traditions, and gives visitors an authentic taste of the
            country's heritage.
          </p>

          <h3>Getting around Kenya</h3>

          <p>
            Kenya offers several convenient transport options for visitors.
            Domestic flights make it easy to reach national parks and coastal
            destinations, while the Standard Gauge Railway provides a
            comfortable connection between Nairobi and Mombasa. Long-distance
            buses, taxis, ride-hailing services, and private transfers are also
            widely available.
          </p>

          <p>
            First-time visitors often benefit from working with knowledgeable
            local guides or trusted travel planners. They can help you save
            time, discover hidden gems, understand local customs, and enjoy a
            more relaxed journey.
          </p>

          <h3>Safety and travel tips</h3>

          <p>
            Kenya welcomes millions of visitors every year, and taking simple
            precautions can help ensure a safe and enjoyable experience. Keep
            your valuables secure, follow guidance from local guides, respect
            wildlife regulations, stay hydrated, and remain aware of your
            surroundings in busy public areas.
          </p>

          <p>
            The most rewarding journeys often come from travelling with an open
            mind. The friendships you create, the stories you discover, and the
            experiences you share can become some of the most valuable memories
            of your trip.
          </p>

          <h3>A local travel tip</h3>

          <p>
            Do more than simply visit Kenya. Take time to interact with local
            communities, explore neighbourhoods, taste regional dishes, and
            experience places beyond the most popular attractions. Some of the
            most unforgettable moments are often the ones you never planned.
          </p>
        </>
      ),
    },

    {
      icon: <Map size={35} />,
      title: "Nairobi city guide",
      description:
        "Discover Nairobi's attractions, food experiences, cultural highlights, hidden gems, and practical information to help you explore Kenya's capital with confidence.",

      content: (
        <>
          <h3>Discover Nairobi</h3>

          <p>
            Nairobi is a city of contrasts, creativity, and endless
            possibilities. It is one of the few places in the world where a
            modern capital city exists alongside a national park filled with
            wildlife.
          </p>

          <p>
            For many travellers, Nairobi is the starting point of their Kenyan
            adventure. However, the city deserves much more than a short
            stopover. It offers a fascinating mix of history, culture, art,
            food, nature, and modern city experiences.
          </p>

          <h3>First impressions of Nairobi</h3>

          <p>
            Nairobi is energetic, diverse, and constantly evolving. The city
            brings together entrepreneurs, artists, businesses, students,
            travellers, and communities from across Kenya and beyond.
          </p>

          <p>
            Although Nairobi is known for its busy streets and fast-paced
            lifestyle, visitors can also discover peaceful gardens, creative
            spaces, cultural attractions, excellent restaurants, and welcoming
            neighbourhoods that reveal a different side of the city.
          </p>

          <h3>Places worth exploring</h3>

          <ul>
            <li>
              <strong>Nairobi National Park:</strong> Experience wildlife just a
              short distance from the city centre, where you can see animals
              with the Nairobi skyline in the background.
            </li>

            <li>
              <strong>Karen:</strong> Explore a peaceful area known for
              beautiful gardens, history, nature experiences, and attractions
              connected to Kenya's heritage.
            </li>

            <li>
              <strong>Local markets:</strong> Discover handmade crafts, artwork,
              souvenirs, and the creativity of Kenyan artisans.
            </li>

            <li>
              <strong>Museums and cultural spaces:</strong> Learn about Kenya's
              history, communities, traditions, and the events that shaped the
              country.
            </li>

            <li>
              <strong>City viewpoints and green spaces:</strong> Enjoy relaxing
              locations where you can escape the busy city atmosphere and take
              in Nairobi's unique character.
            </li>
          </ul>

          <h3>Food experiences</h3>

          <p>
            Nairobi has one of East Africa's most exciting food scenes. Visitors
            can enjoy traditional Kenyan meals, international cuisine, modern
            restaurants, coffee experiences, and vibrant local food markets.
          </p>

          <p>
            Trying local food is one of the best ways to understand a
            destination. Every dish carries a story about Kenya's communities,
            traditions, and way of life.
          </p>

          <p>
            Some popular experiences include tasting nyama choma, exploring
            local cafés, enjoying fresh Kenyan coffee, sampling street food, and
            discovering restaurants that combine traditional flavours with
            modern creativity.
          </p>

          <h3>The hidden side of Nairobi</h3>

          <p>
            Nairobi is more than its famous attractions. Behind the busy roads
            and tall buildings is a city full of talented artists, innovative
            entrepreneurs, small businesses, and creative communities.
          </p>

          <p>
            Visitors can discover art studios, local fashion, music scenes,
            community projects, and neighbourhood experiences that showcase the
            modern Kenyan spirit.
          </p>

          <h3>Getting around Nairobi</h3>

          <p>
            Nairobi offers different transport options depending on your comfort
            and travel style. Ride-hailing services, taxis, public transport,
            and private transfers make it possible to explore different parts of
            the city.
          </p>

          <p>
            Planning your journeys around traffic patterns can help you save
            time, especially during busy morning and evening hours. Local guides
            can also provide valuable insights into places that may not appear
            in typical travel guides.
          </p>

          <h3>Travel advice</h3>

          <p>
            Give yourself enough time to experience Nairobi. Many visitors make
            the mistake of treating it only as a gateway to safari destinations,
            but the city has its own stories, flavours, and experiences waiting
            to be discovered.
          </p>

          <p>
            Take time to explore, meet local people, try new foods, and
            experience the rhythm of Kenya's capital. Nairobi is not just a
            place you pass through; it is a destination with its own identity.
          </p>
        </>
      ),
    },

    {
      icon: <Camera size={35} />,
      title: "Safari planning guide",
      description:
        "Learn about Kenya's safari destinations, the best seasons to visit, wildlife experiences, activities, and essential preparation tips for an unforgettable adventure.",

      content: (
        <>
          <h3>Your Kenyan safari adventure</h3>

          <p>
            A safari in Kenya is more than simply watching wildlife. It is an
            experience that connects you with nature, breathtaking landscapes,
            and the incredible balance of life in the wild. The quiet moments
            spent observing animals in their natural environment are often the
            memories travellers carry home forever.
          </p>

          <p>
            From the golden grasslands of the Maasai Mara to the dramatic views
            of Amboseli with Mount Kilimanjaro in the background, Kenya offers
            some of the most unforgettable safari experiences in the world.
          </p>

          <p>
            Each safari destination has its own character. Some offer famous
            wildlife encounters, while others provide peaceful landscapes,
            unique ecosystems, and opportunities to experience nature away from
            busy tourist routes.
          </p>

          <h3>Choosing the right safari destination</h3>

          <p>
            Kenya has many wildlife destinations, and each one offers a
            different experience depending on what you want to see and explore.
          </p>

          <ul>
            <li>
              <strong>Maasai Mara:</strong> Famous for lions, elephants,
              cheetahs, and the Great Migration. It is one of Africa's most
              iconic safari destinations and offers some of the best wildlife
              viewing opportunities.
            </li>

            <li>
              <strong>Amboseli National Park:</strong> Known for large elephant
              herds, open landscapes, and stunning views of Mount Kilimanjaro,
              the highest mountain in Africa.
            </li>

            <li>
              <strong>Tsavo National Parks:</strong> One of Kenya's largest
              wilderness areas, offering vast landscapes, diverse wildlife, and
              a more remote safari experience.
            </li>

            <li>
              <strong>Samburu:</strong> A unique northern destination known for
              beautiful scenery, special wildlife species, and the rich culture
              of communities living in the region.
            </li>
          </ul>

          <h3>When is the best time to visit?</h3>

          <p>
            Kenya can be visited throughout the year, but the best time depends
            on the type of experience you want.
          </p>

          <p>
            Many travellers prefer the dry seasons because animals often gather
            around water sources, making wildlife easier to spot. The dry
            weather also creates excellent conditions for photography and
            outdoor activities.
          </p>

          <p>
            Other visitors enjoy the green seasons when landscapes become more
            colourful, newborn animals can be seen, and there are fewer crowds
            in some destinations.
          </p>

          <h3>What to expect during safari</h3>

          <p>
            Safari days usually begin early because mornings are among the best
            times to observe wildlife. The cool air, peaceful surroundings, and
            sounds of nature create a unique atmosphere before the day becomes
            warmer.
          </p>

          <p>
            During your adventure, you may encounter elephants moving across the
            plains, giraffes feeding among trees, zebras travelling in groups,
            or predators following their natural instincts.
          </p>

          <p>
            Experienced guides help visitors understand animal behaviour,
            identify different species, and appreciate the importance of
            protecting Kenya's natural environment.
          </p>

          <h3>Safari preparation tips</h3>

          <ul>
            <li>
              Bring comfortable clothing suitable for outdoor activities and
              changing temperatures.
            </li>

            <li>
              Carry sunglasses, sunscreen, a hat, and a reusable water bottle
              for protection during long days outdoors.
            </li>

            <li>
              Bring a camera or smartphone with enough storage to capture
              unforgettable wildlife moments.
            </li>

            <li>
              Respect wildlife by following park rules and listening carefully
              to your guide's instructions.
            </li>

            <li>
              Be patient because nature does not follow a schedule. Some of the
              best experiences happen while simply observing and waiting.
            </li>

            <li>
              Carry binoculars if possible because they can improve your
              wildlife viewing experience.
            </li>
          </ul>

          <h3>The safari memory</h3>

          <p>
            Many visitors remember their safari not only because of the animals
            they saw, but because of how the experience made them feel. Watching
            the sunrise over the African landscape, hearing birds in the
            morning, and experiencing nature without distractions creates
            moments that remain unforgettable.
          </p>

          <p>
            A safari offers a rare opportunity to slow down, appreciate the
            natural world, and witness the beauty of Kenya's wildlife heritage.
          </p>

          <h3>A Kenya Compass tip</h3>

          <p>
            The best safari is not always the most expensive one. A meaningful
            experience comes from choosing the right destination, timing,
            activities, and travel style that match your interests.
          </p>

          <p>
            Whether you are visiting Kenya for the first time or returning for
            another adventure, thoughtful planning can help you create a safari
            experience that feels personal, authentic, and unforgettable.
          </p>
        </>
      ),
    },
    {
      icon: <Compass size={35} />,
      title: "Kenya experience guide",
      description:
        "Explore unique experiences, local culture, coastal adventures, hidden gems, and meaningful encounters that reveal the true spirit of Kenya.",

      content: (
        <>
          <h3>Discover the heart of Kenya</h3>

          <p>
            Kenya is a destination full of stories, traditions, and
            unforgettable experiences. While wildlife and landscapes attract
            visitors from around the world, the true beauty of Kenya is found in
            its people, creativity, culture, and everyday moments.
          </p>

          <p>
            A journey through Kenya is not only about visiting places. It is
            about creating connections, understanding different ways of life,
            and discovering the stories behind the destinations you explore.
          </p>

          <p>
            From the welcoming communities in rural areas to the creativity
            found in modern cities, Kenya offers experiences that allow
            travellers to see the country beyond the usual tourist attractions.
          </p>

          <h3>Experience Kenyan culture</h3>

          <p>
            Kenya's culture has been shaped by more than forty communities, each
            contributing unique traditions, music, food, art, languages, and
            ways of life.
          </p>

          <p>
            Visitors can discover traditional crafts, local celebrations,
            cultural performances, community stories, and the values of
            hospitality that make Kenya a special destination.
          </p>

          <p>
            Taking time to learn about local traditions creates a deeper
            connection with the country. Simple experiences such as sharing a
            meal, visiting a local market, or listening to community stories can
            become some of the most meaningful parts of a journey.
          </p>

          <h3>Explore the coast</h3>

          <p>
            The Kenyan coast offers a completely different experience from the
            safari regions. Visitors can enjoy beautiful beaches, historic
            towns, ocean adventures, and the rich Swahili heritage that has
            shaped the region for centuries.
          </p>

          <p>
            Places such as Mombasa, Diani, and Lamu combine relaxation, history,
            culture, and adventure. Travellers can explore ancient architecture,
            enjoy fresh seafood, discover marine life, or simply relax beside
            the Indian Ocean.
          </p>

          <h3>Try local experiences</h3>

          <ul>
            <li>
              Taste authentic Kenyan food prepared with fresh local ingredients
              and traditional cooking methods.
            </li>

            <li>
              Visit local markets and discover handmade crafts, artwork,
              fashion, and products created by Kenyan artisans.
            </li>

            <li>
              Learn about traditional lifestyles and the diverse communities
              that contribute to Kenya's identity.
            </li>

            <li>
              Explore nature away from crowded tourist routes and discover
              quieter destinations with unique landscapes.
            </li>

            <li>
              Meet local people, listen to their stories, and experience the
              warmth and hospitality Kenya is known for.
            </li>

            <li>
              Participate in cultural activities that allow you to understand
              Kenya through authentic experiences rather than simply observing
              from a distance.
            </li>
          </ul>

          <h3>Beyond the famous places</h3>

          <p>
            Some of Kenya's most memorable moments happen unexpectedly. It may
            be a conversation with a local person, a beautiful sunset, a
            traditional meal, a scenic road journey, or discovering a place that
            was never part of your original plan.
          </p>

          <p>
            Exploring beyond the famous attractions allows visitors to
            experience a more personal side of Kenya and discover the hidden
            stories that make the country unique.
          </p>

          <h3>Create your own Kenya story</h3>

          <p>
            Every traveller experiences Kenya differently. Some visitors come
            for adventure, some for relaxation, and others for culture,
            photography, food, or personal discovery.
          </p>

          <p>
            Kenya Compass helps you discover experiences that match your
            interests, making your journey more personal, meaningful, and
            memorable.
          </p>

          <h3>Start exploring Kenya</h3>

          <p>
            Kenya is waiting with incredible landscapes, welcoming communities,
            rich traditions, and experiences that stay with you long after you
            leave.
          </p>

          <p>
            Whether you are searching for adventure, cultural discovery,
            wildlife, relaxation, or something completely different, Kenya
            offers countless opportunities to create a journey that is truly
            your own.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4a2e1e] leading-tight">
            Kenya Travel Guides
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 leading-6">
            Helpful resources created to make your Kenya experience easier.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-7 md:gap-8 mt-8 sm:mt-12">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="
            p-5
            sm:p-6
            md:p-8
            rounded-xl
            bg-[#F6F1E7]
            border
            border-[#E6D8C3]
            shadow-sm
            hover:shadow-md
            transition
            "
            >
              <div className="text-[#2f5233]">{guide.icon}</div>

              <h2
                className="
              text-lg
              sm:text-xl
              md:text-2xl
              font-bold
              mt-4
              sm:mt-5
              text-[#4a2e1e]
              leading-tight
            "
              >
                {guide.title}
              </h2>

              <p
                className="
              mt-3
              sm:mt-4
              text-sm
              sm:text-base
              text-gray-600
              leading-6
            "
              >
                {guide.description}
              </p>

              <button
                onClick={() => setSelectedGuide(guide)}
                className="
              mt-5
              text-sm
              sm:text-base
              text-[#2f5233]
              font-semibold
              hover:text-[#4a2e1e]
              transition
              "
              >
                Read Guide →
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedGuide && (
        <div
          className="
        fixed
        inset-0
        bg-black/50
        flex
        items-center
        justify-center
        p-3
        sm:p-6
        z-50
        "
        >
          <div
            className="
          bg-white
          w-full
          max-w-3xl
          max-h-[92vh]
          overflow-y-auto
          rounded-xl
          sm:rounded-2xl
          p-5
          sm:p-8
          relative
          "
          >
            <button
              onClick={() => setSelectedGuide(null)}
              className="
            absolute
            top-4
            right-4
            text-[#2f5233]
            "
            >
              <X size={22} />
            </button>

            <h2
              className="
            text-xl
            sm:text-2xl
            md:text-3xl
            font-bold
            text-[#4a2e1e]
            mb-5
            sm:mb-6
            pr-8
            "
            >
              {selectedGuide.title}
            </h2>

            <div
              className="
            space-y-4
            sm:space-y-5
            text-sm
            sm:text-base
            text-gray-700
            leading-6
            sm:leading-7

            [&_h3]:text-lg
            sm:[&_h3]:text-xl

            [&_h3]:font-bold
            [&_h3]:text-[#2f5233]

            [&_ul]:list-disc
            [&_ul]:ml-5
            "
            >
              {selectedGuide.content}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
