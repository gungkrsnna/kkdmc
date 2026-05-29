import MainLayout from '../layouts/MainLayout'

import activities from '../data/activities'

import ActivityCard from '../components/cards/ActivityCard'

import HeroPage from '../components/sections/HeroPage'

function Activities() {

  return (

    <MainLayout>

      {/* Hero */}
      <HeroPage
        badge="Explore Activities"
        title="Find Amazing Experiences In Bali"
        description="
          Explore premium tours, adventure activities,
          private trips, transport, and unforgettable
          Bali experiences.
        "
        image="https://images.unsplash.com/photo-1537996194471-e657df975ab4"
      >
      </HeroPage>

      {/* Content */}
      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* SIDEBAR */}
            <div>

              <div
                className="
                  sticky
                  top-28
                  border
                  rounded-3xl
                  p-7
                "
              >

                <h2 className="text-2xl font-bold mb-8">
                  Filters
                </h2>

                {/* Search */}
                <div className="mb-7">

                  <label className="font-semibold mb-3 block">
                    Search
                  </label>

                  <input
                    type="text"
                    placeholder="Search activity"
                    className="
                      w-full
                      border
                      rounded-2xl
                      h-12
                      px-4
                      outline-none
                    "
                  />

                </div>

                {/* Category */}
                <div className="mb-7">

                  <label className="font-semibold mb-4 block">
                    Category
                  </label>

                  <div className="space-y-3 text-gray-600">

                    <div>
                      Adventure
                    </div>

                    <div>
                      Nature
                    </div>

                    <div>
                      Watersport
                    </div>

                    <div>
                      Private Tour
                    </div>

                  </div>

                </div>

                {/* Price */}
                <div className="mb-7">

                  <label className="font-semibold mb-4 block">
                    Price Range
                  </label>

                  <input
                    type="range"
                    className="w-full"
                  />

                </div>

                {/* Rating */}
                <div>

                  <label className="font-semibold mb-4 block">
                    Rating
                  </label>

                  <div className="space-y-3 text-gray-600">

                    <div>⭐ 5 Stars</div>
                    <div>⭐ 4 Stars</div>
                    <div>⭐ 3 Stars</div>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-3">

              {/* Top Bar */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

                <p className="text-gray-500">

                  Showing {activities.length} activities

                </p>

                <select
                  className="
                    border
                    rounded-2xl
                    h-12
                    px-5
                    outline-none
                  "
                >

                  <option>
                    Sort by Popularity
                  </option>

                  <option>
                    Price Low to High
                  </option>

                  <option>
                    Price High to Low
                  </option>

                  <option>
                    Top Rated
                  </option>

                </select>

              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                {activities.map((item) => (

                  <ActivityCard
                    key={item.id}
                    item={item}
                  />

                ))}

              </div>

              {/* Load More */}
              <div className="text-center mt-16">

                <button
                  className="
                    border
                    border-gray-300
                    px-8
                    h-14
                    rounded-2xl
                    font-semibold
                    hover:bg-soft
                    transition
                  "
                >
                  Load More
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  )
}

export default Activities