import MainLayout from '../layouts/MainLayout'

import destinations from '../data/destinations'

import DestinationCard from '../components/cards/DestinationCard'

import HeroPage from '../components/sections/HeroPage'

function Destinations() {

  return (

    <MainLayout>

      {/* HERO */}
      <HeroPage
        badge="Destinations"
        title="Explore Beautiful Bali Destinations"
        description="
          Discover tropical beaches, jungle adventures,
          cultural experiences, and unforgettable
          destinations across Bali.
        "
        image="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1"
      >

        <div
          className="
            bg-white
            rounded-3xl
            p-4
            flex
            flex-col
            md:flex-row
            gap-4
            shadow-card
            max-w-3xl
          "
        >

          <input
            type="text"
            placeholder="Search destination..."
            className="
              flex-1
              h-14
              px-5
              rounded-2xl
              border
              outline-none
            "
          />

          <button
            className="
              bg-primary
              text-white
              h-14
              px-8
              rounded-2xl
              font-semibold
            "
          >
            Search
          </button>

        </div>

      </HeroPage>

      {/* DESTINATION GRID */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* Top */}
          <div className="flex items-center justify-between mb-12">

            <div>

              <p className="text-primary font-semibold mb-2">
                Top Destination
              </p>

              <h2 className="text-5xl font-black">
                Popular Places
              </h2>

            </div>

          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {destinations.map((item) => (

              <DestinationCard
                key={item.id}
                item={item}
              />

            ))}

          </div>

        </div>

      </section>

    </MainLayout>
  )
}

export default Destinations