import { useParams } from 'react-router-dom'
import { useBooking } from '../context/BookingContext'
import { useEffect } from 'react'

import MainLayout from '../layouts/MainLayout'
import activities from '../data/activities'
import { Link } from 'react-router-dom'

function Booking() {

  const { id } = useParams()

  const { bookingData, setBookingData } = useBooking()

  const activity = activities.find(
    (item) => item.id === Number(id)
  )

  useEffect(() => {

  if (!bookingData.selectedPackage) {

    setBookingData({
      ...bookingData,

      activity,

      selectedPackage: activity.packages[0],

      totalPrice: activity.packages[0].price * bookingData.guests,
    })
  }

}, [])

  if (!activity) {
    return null
  }

  return (

    <MainLayout>

      <section className="py-20 bg-soft min-h-screen">

        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="mb-14">

            <p className="text-primary font-semibold mb-3">
              Booking
            </p>

            <h1 className="text-5xl font-black">
              Complete Your Booking
            </h1>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-8">

              {/* Activity */}
              <div className="bg-white rounded-3xl p-8 shadow-card">

                <h2 className="text-2xl font-black mb-6">
                  Activity Information
                </h2>

                <div className="flex flex-col md:flex-row gap-6">

                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="
                      w-full
                      md:w-[260px]
                      h-[180px]
                      object-cover
                      rounded-3xl
                    "
                  />

                  <div>

                    <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                      {activity.badge}
                    </span>

                    <h3 className="text-3xl font-black mb-4">

                      {activity.title}

                    </h3>

                    <p className="text-gray-500 leading-relaxed">

                      {activity.description}

                    </p>

                  </div>

                </div>

              </div>

              {/* Package Selection */}
<div className="bg-white rounded-3xl p-8 shadow-card">

  <h2 className="text-2xl font-black mb-8">
    Select Package
  </h2>

  <div className="space-y-5">

    {activity.packages.map((pkg) => {

      const isSelected =
        bookingData.selectedPackage?.id === pkg.id

      return (

        <div
          key={pkg.id}

          onClick={() =>
            setBookingData({
              ...bookingData,

              selectedPackage: pkg,

              totalPrice:
                pkg.price * bookingData.guests,
            })
          }

          className={`
            border
            rounded-3xl
            p-6
            cursor-pointer
            transition

            ${isSelected
              ? 'border-primary bg-orange-50'
              : 'hover:border-primary'
            }
          `}
        >

          <div className="flex items-center justify-between mb-5">

            <div>

              <h3 className="text-xl font-bold mb-2">
                {pkg.name}
              </h3>

              <p className="text-gray-500 text-sm">
                Premium Bali experience package
              </p>

            </div>

            <div className="text-right">

              <p className="text-sm text-gray-400 mb-1">
                Price
              </p>

              <h3 className="text-2xl font-black text-primary">

                Rp {pkg.price.toLocaleString('id-ID')}

              </h3>

            </div>

          </div>

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

      )
    })}

  </div>

</div>

{/* Guest Selection */}
<div className="bg-white rounded-3xl p-8 shadow-card">

  <h2 className="text-2xl font-black mb-8">
    Guests
  </h2>

  <div className="max-w-xs">

    <label className="block font-semibold mb-3">
      Number of Guests
    </label>

    <select

      value={bookingData.guests}

      onChange={(e) => {

        const guests = Number(e.target.value)

        setBookingData({
          ...bookingData,

          guests,

          totalPrice:
            bookingData.selectedPackage.price * guests,
        })
      }}

      className="
        w-full
        h-14
        border
        rounded-2xl
        px-5
        outline-none
      "
    >

      <option value={1}>
        1 Guest
      </option>

      <option value={2}>
        2 Guests
      </option>

      <option value={3}>
        3 Guests
      </option>

      <option value={4}>
        4 Guests
      </option>

      <option value={5}>
        5 Guests
      </option>

      <option value={6}>
        6 Guests
      </option>

    </select>

  </div>

</div>

              {/* Traveler Form */}
              <div className="bg-white rounded-3xl p-8 shadow-card">

                <h2 className="text-2xl font-black mb-8">
                  Traveler Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div>

                    <label className="block font-semibold mb-3">
                      Full Name
                    </label>

                    <input
  type="text"

  value={bookingData.traveler.fullName}

  onChange={(e) =>
    setBookingData({
      ...bookingData,

      traveler: {
        ...bookingData.traveler,
        fullName: e.target.value,
      },
    })
  }

  className="
    w-full
    h-14
    border
    rounded-2xl
    px-5
    outline-none
  "
/>

                  </div>

                  <div>

                    <label className="block font-semibold mb-3">
                      Email Address
                    </label>

                    <input
  type="email"

  value={bookingData.traveler.email}

  onChange={(e) =>
    setBookingData({
      ...bookingData,

      traveler: {
        ...bookingData.traveler,
        email: e.target.value,
      },
    })
  }

  className="
    w-full
    h-14
    border
    rounded-2xl
    px-5
    outline-none
  "
/>

                  </div>

                  <div>

                    <label className="block font-semibold mb-3">
                      Phone Number
                    </label>

                    <input
  type="text"

  value={bookingData.traveler.phone}

  onChange={(e) =>
    setBookingData({
      ...bookingData,

      traveler: {
        ...bookingData.traveler,
        phone: e.target.value,
      },
    })
  }

  className="
    w-full
    h-14
    border
    rounded-2xl
    px-5
    outline-none
  "
/>

                  </div>

                  <div>

                    <label className="block font-semibold mb-3">
                      Travel Date
                    </label>

                    <input
  type="date"

  value={bookingData.travelDate}

  onChange={(e) =>
    setBookingData({
      ...bookingData,

      travelDate: e.target.value,
    })
  }

  className="
    w-full
    h-14
    border
    rounded-2xl
    px-5
    outline-none
  "
/>

                  </div>

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
                  p-8
                  shadow-card
                "
              >

                <h2 className="text-2xl font-black mb-8">
                  Order Summary
                </h2>

                <div className="space-y-5 mb-8">

                  <div className="flex items-center justify-between">

                    <span className="text-gray-500">
                      Package
                    </span>

                    <span className="font-semibold">
                      Standard Package
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-gray-500">
                      Guests
                    </span>

                    <span className="font-semibold">
                      2 Guests
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-gray-500">
                      Subtotal
                    </span>

                    <span className="font-semibold">
                      Rp {activity.price.toLocaleString('id-ID')}
                    </span>

                  </div>

                </div>

                <div className="border-t pt-6 mb-8">

                  <div className="flex items-center justify-between">

                    <span className="text-lg font-bold">
                      Total
                    </span>

                    <span className="text-3xl font-black text-primary">

                      Rp {bookingData.totalPrice.toLocaleString('id-ID')}

                    </span>

                  </div>

                </div>

                <Link
  to={`/checkout/${activity.id}`}
  className="
    w-full
    h-14
    bg-primary
    text-white
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
  Continue Checkout
</Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  )
}

export default Booking