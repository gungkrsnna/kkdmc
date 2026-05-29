import MainLayout from '../layouts/MainLayout'

import transports from '../data/transports'

import TransportCard from '../components/cards/TransportCard'

import HeroPage from '../components/sections/HeroPage'

function Transport() {

  return (

    <MainLayout>

      {/* HERO */}
      <HeroPage
        badge="Bali Transport"
        title="Comfortable Bali Transportation"
        description="
          Book airport transfer, private drivers,
          fast boats, and transportation services
          across Bali.
        "
        image="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
      >

        <div
          className="
            bg-white
            rounded-3xl
            p-4
            shadow-card
            max-w-4xl
          "
        >

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

            <input
              type="text"
              placeholder="Pickup location"
              className="
                h-14
                px-5
                rounded-2xl
                border
                outline-none
              "
            />

            <input
              type="text"
              placeholder="Destination"
              className="
                h-14
                px-5
                rounded-2xl
                border
                outline-none
              "
            />

            <input
              type="date"
              className="
                h-14
                px-5
                rounded-2xl
                border
                outline-none
              "
            />

            <button
              className="
                h-14
                rounded-2xl
                bg-primary
                text-white
                font-semibold
              "
            >
              Search
            </button>

          </div>

        </div>

      </HeroPage>

      {/* TRANSPORT GRID */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between mb-12">

            <div>

              <p className="text-primary font-semibold mb-2">
                Popular Transport
              </p>

              <h2 className="text-5xl font-black">
                Explore Transport Services
              </h2>

            </div>

          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {transports.map((item) => (

              <TransportCard
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

export default Transport