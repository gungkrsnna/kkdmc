import { useParams } from 'react-router-dom'

import {
  FaStar,
  FaClock,
  FaUsers,
} from 'react-icons/fa'

import { FaLocationDot } from 'react-icons/fa6'

import { Link } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import activities from '../data/activities'

function ActivityDetail() {

  const { id } = useParams()

  const activity = activities.find(
    (item) => item.id === Number(id)
  )

  if (!activity) {
    return (
      <MainLayout>

        <div className="max-w-7xl mx-auto px-6 py-40">

          <h1 className="text-5xl font-black">
            Activity Not Found
          </h1>

        </div>

      </MainLayout>
    )
  }

  return (

    <MainLayout>

      {/* Hero Image */}
      <section className="relative h-[520px] overflow-hidden">

        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

      </section>

      {/* Content */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* LEFT */}
            <div className="lg:col-span-2">

              {/* Badge */}
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
                {activity.badge}
              </span>

              {/* Title */}
              <h1 className="text-5xl font-black leading-tight mb-6">

                {activity.title}

              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 mb-10">

                {/* Rating */}
                <div className="flex items-center gap-2">

                  <FaStar className="text-yellow-500" />

                  <span className="font-bold">
                    {activity.rating}
                  </span>

                  <span className="text-gray-500">
                    ({activity.reviews} reviews)
                  </span>

                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-600">

                  <FaLocationDot className="text-primary" />

                  <span>
                    {activity.location}
                  </span>

                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-gray-600">

                  <FaClock className="text-primary" />

                  <span>
                    {activity.duration}
                  </span>

                </div>

                {/* Group */}
                <div className="flex items-center gap-2 text-gray-600">

                  <FaUsers className="text-primary" />

                  <span>
                    {activity.groupSize}
                  </span>

                </div>

              </div>

              {/* Description */}
              <div className="mb-14">

                <h2 className="text-3xl font-black mb-5">
                  About This Activity
                </h2>

                <p className="text-gray-600 leading-relaxed text-lg">

                  {activity.description}

                </p>

              </div>

              {/* Packages */}
<div className="mb-16">

  <h2 className="text-3xl font-black mb-8">
    Select Package
  </h2>

  <div className="space-y-6">

    {activity.packages.map((pkg) => (

      <div
        key={pkg.id}
        className="
          border
          rounded-3xl
          p-7
          hover:border-primary
          transition
          cursor-pointer
        "
      >

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          {/* Left */}
          <div>

            <h3 className="text-2xl font-bold mb-4">
              {pkg.name}
            </h3>

            <div className="space-y-3">

              {pkg.benefits.map((benefit, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-600"
                >

                  <div className="w-2 h-2 rounded-full bg-primary" />

                  <span>
                    {benefit}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Right */}
          <div className="text-right">

            <p className="text-sm text-gray-400 mb-2">
              Start from
            </p>

            <h3 className="text-3xl font-black text-primary mb-5">

              Rp {pkg.price.toLocaleString('id-ID')}

            </h3>

            <button
              className="
                bg-primary
                text-white
                px-6
                h-12
                rounded-2xl
                font-semibold
                hover:opacity-90
                transition
              "
            >
              Choose Package
            </button>

          </div>

        </div>

      </div>

    ))}

  </div>

</div>

              {/* Highlights */}
              <div>

                <h2 className="text-3xl font-black mb-6">
                  Highlights
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div className="bg-soft rounded-3xl p-6">
                    Professional Tour Guide
                  </div>

                  <div className="bg-soft rounded-3xl p-6">
                    Premium Safety Equipment
                  </div>

                  <div className="bg-soft rounded-3xl p-6">
                    Beautiful Nature Experience
                  </div>

                  <div className="bg-soft rounded-3xl p-6">
                    Hotel Pickup Available
                  </div>

                </div>

              </div>

              {/* Includes */}
<div className="mt-16">

  <h2 className="text-3xl font-black mb-8">
    What's Included
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

    {activity.includes.map((item, index) => (

      <div
        key={index}
        className="
          bg-soft
          rounded-2xl
          p-5
          flex
          items-center
          gap-4
        "
      >

        <div className="w-3 h-3 rounded-full bg-primary" />

        <span className="font-medium">
          {item}
        </span>

      </div>

    ))}

  </div>

</div>

            </div>

            {/* RIGHT */}
            <div>

              <div
                className="
                  sticky
                  top-28
                  bg-white
                  rounded-3xl
                  shadow-card
                  p-8
                  border
                "
              >

                <p className="text-gray-400 text-sm mb-2">
                  Start from
                </p>

                <h2 className="text-4xl font-black text-primary mb-8">

                  Rp {activity.price.toLocaleString('id-ID')}

                </h2>

                <div className="space-y-5 mb-8">

                  <input
                    type="date"
                    className="
                      w-full
                      border
                      rounded-2xl
                      h-14
                      px-5
                      outline-none
                    "
                  />

                  <select
                    className="
                      w-full
                      border
                      rounded-2xl
                      h-14
                      px-5
                      outline-none
                    "
                  >

                    <option>
                      2 Guests
                    </option>

                    <option>
                      4 Guests
                    </option>

                    <option>
                      6 Guests
                    </option>

                  </select>

                </div>

                <Link
  to={`/booking/${activity.id}`}
  className="
    w-full
    bg-primary
    text-white
    h-14
    rounded-2xl
    font-bold
    text-lg
    hover:opacity-90
    transition
    flex
    items-center
    justify-center
  "
>
  Book Now
</Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  )
}

export default ActivityDetail