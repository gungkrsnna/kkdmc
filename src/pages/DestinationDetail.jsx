import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

import destinations from '../data/destinations'
import activities from '../data/activities'

import ActivityCard from '../components/cards/ActivityCard'

function DestinationDetail() {

  const { slug } = useParams()

  const destination = destinations.find(
    (item) => item.slug === slug
  )

  if (!destination) return null

  return (

    <MainLayout>

      {/* HERO */}
      <section className="relative h-[520px] overflow-hidden">

        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center">

          <div className="max-w-7xl mx-auto px-6 w-full text-white">

            <p className="text-lg mb-4">
              {destination.country}
            </p>

            <h1 className="text-7xl font-black mb-6">

              {destination.title}

            </h1>

            <p className="max-w-2xl text-lg text-gray-200 leading-relaxed">

              {destination.description}

            </p>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* INFO */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">

            <div className="bg-soft rounded-3xl p-8">

              <h3 className="text-4xl font-black mb-3">
                {destination.activities}
              </h3>

              <p className="text-gray-500">
                Activities Available
              </p>

            </div>

            <div className="bg-soft rounded-3xl p-8">

              <h3 className="text-4xl font-black mb-3">
                Tropical
              </h3>

              <p className="text-gray-500">
                Beautiful Nature Experience
              </p>

            </div>

            <div className="bg-soft rounded-3xl p-8">

              <h3 className="text-4xl font-black mb-3">
                4.9
              </h3>

              <p className="text-gray-500">
                Traveler Rating
              </p>

            </div>

          </div>

          <div
            className="
              bg-primary
              rounded-[32px]
              p-10
              mb-20
              text-white
              flex
              flex-col
              lg:flex-row
              items-center
              justify-between
              gap-6
            "
          >
            <div>
              <h3 className="text-3xl font-black mb-3">
                Ready to Explore {destination.title}?
              </h3>

              <p className="text-white/80 max-w-2xl">
                Reserve your experience now or send us an inquiry
                and our team will help plan your perfect trip.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to={`/reservation?destination=${destination.slug}`}
                className="
                  bg-white
                  text-primary
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                "
              >
                Reservation Form
              </Link>

              <Link
                to={`/inquiry?destination=${destination.slug}`}
                className="
                  bg-white/20
                  border
                  border-white/20
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                "
              >
                Inquiry Form
              </Link>
            </div>
          </div>

          {/* ACTIVITIES */}
          <div>

            <div className="flex items-center justify-between mb-12">

              <div>

                <p className="text-primary font-semibold mb-2">
                  Activities
                </p>

                <h2 className="text-5xl font-black">

                  Explore Activities
                </h2>

              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {activities.map((item) => (

                <ActivityCard
                  key={item.id}
                  item={item}
                />

              ))}

            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  )
}

export default DestinationDetail