import { useParams } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import activities from '../data/activities'
import { useBooking } from '../context/BookingContext'

function Checkout() {

  const { id } = useParams()
  const { bookingData } = useBooking()
  const serviceFee = 25000
  const grandTotal =
  bookingData.totalPrice + serviceFee

  const activity = activities.find(
    (item) => item.id === Number(id)
  )

  if (!activity) return null

  return (

    <MainLayout>

      <section className="py-20 bg-soft min-h-screen">

        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="mb-14">

            <p className="text-primary font-semibold mb-3">
              Checkout
            </p>

            <h1 className="text-5xl font-black">
              Complete Payment
            </h1>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-8">

              {/* Payment Method */}
              <div className="bg-white rounded-3xl p-8 shadow-card">

                <h2 className="text-2xl font-black mb-8">
                  Payment Method
                </h2>

                <div className="space-y-5">

                  <div className="border rounded-2xl p-5 flex items-center justify-between cursor-pointer hover:border-primary transition">

                    <div>

                      <h3 className="font-bold mb-1">
                        Credit Card
                      </h3>

                      <p className="text-gray-500 text-sm">
                        Visa, Mastercard, American Express
                      </p>

                    </div>

                    <div className="w-5 h-5 rounded-full border-2 border-primary" />

                  </div>

                  <div className="border rounded-2xl p-5 flex items-center justify-between cursor-pointer hover:border-primary transition">

                    <div>

                      <h3 className="font-bold mb-1">
                        Bank Transfer
                      </h3>

                      <p className="text-gray-500 text-sm">
                        BCA, Mandiri, BNI, BRI
                      </p>

                    </div>

                    <div className="w-5 h-5 rounded-full border-2 border-gray-300" />

                  </div>

                  <div className="border rounded-2xl p-5 flex items-center justify-between cursor-pointer hover:border-primary transition">

                    <div>

                      <h3 className="font-bold mb-1">
                        E-Wallet
                      </h3>

                      <p className="text-gray-500 text-sm">
                        GoPay, OVO, DANA, ShopeePay
                      </p>

                    </div>

                    <div className="w-5 h-5 rounded-full border-2 border-gray-300" />

                  </div>

                </div>

              </div>

              {/* Traveler Summary */}
              <div className="bg-white rounded-3xl p-8 shadow-card">

                <h2 className="text-2xl font-black mb-8">
                  Traveler Information
                </h2>

                <div className="space-y-6">

                  <div className="flex items-center justify-between">

                    <span className="text-gray-500">
                      Full Name
                    </span>

                    <span className="font-semibold">
                      {bookingData.traveler.fullName}
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-gray-500">
                      Email
                    </span>

                    <span className="font-semibold">
                      {bookingData.traveler.email}
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-gray-500">
                      Travel Date
                    </span>

                    <span className="font-semibold">
                      {bookingData.travelDate || '-'}
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

  <span className="text-gray-500">
    Guests
  </span>

  <span className="font-semibold">
    {bookingData.guests} Guests
  </span>

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
                  Payment Summary
                </h2>

                {/* Activity */}
                <div className="flex gap-4 mb-8">

                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="
                      w-24
                      h-24
                      object-cover
                      rounded-2xl
                    "
                  />

                  <div>

                    <h3 className="font-bold leading-snug mb-2">

                      {activity.title}

                    </h3>

                    <p className="text-sm text-gray-500">
                      {bookingData.selectedPackage?.name}
                    </p>

                  </div>

                </div>

                {/* Summary */}
                <div className="space-y-5 mb-8">

                  <div className="flex items-center justify-between">

                    <span className="text-gray-500">
                      Subtotal
                    </span>

                    <span className="font-semibold">
                      Rp {bookingData.totalPrice.toLocaleString('id-ID')}
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-gray-500">
                      Service Fee
                    </span>

                    <span className="font-semibold">
                      Rp 25.000
                    </span>

                  </div>

                </div>

                {/* Total */}
                <div className="border-t pt-6 mb-8">

                  <div className="flex items-center justify-between">

                    <span className="text-lg font-bold">
                      Total Payment
                    </span>

                    <span className="text-3xl font-black text-primary">

                      Rp {grandTotal.toLocaleString('id-ID')}

                    </span>

                  </div>

                </div>

                {/* Pay Button */}
                <button
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
                  "
                >
                  Pay Now
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  )
}

export default Checkout