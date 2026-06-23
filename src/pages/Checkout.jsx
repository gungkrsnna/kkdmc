import { useParams } from 'react-router-dom'

import {
  useState,
  useEffect
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import MainLayout from '../layouts/MainLayout'
import { useBooking } from '../context/BookingContext'

function Checkout() {

  const { id } = useParams();

  const navigate =
  useNavigate();

  const [booking, setBooking] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const serviceFee = 25000;

  const grandTotal =
    (booking?.total_price || 0) +
    serviceFee;

  useEffect(() => {

    loadBooking();
  
  }, [id]);

  const [paymentProof, setPaymentProof] =
  useState(null);

  const handleFileChange = (
    e
  ) => {

    setPaymentProof(
      e.target.files[0]
    );

  };
  
  const loadBooking =
    async () => {
  
      try {
  
        const response =
          await fetch(
            `http://localhost:3001/api/tour-bookings/${id}`
          );
  
        const data =
          await response.json();
  
        setBooking(data);
  
      } catch (error) {
  
        console.error(error);
  
      } finally {
  
        setLoading(false);
  
      }
  
    };

    const handleSubmit =
  async () => {

    try {

      if (!paymentProof) {

        alert(
          "Please upload payment proof"
        );

        return;

      }

      const formData =
        new FormData();

      formData.append(
        "payment_proof",
        paymentProof
      );

      const response =
        await fetch(
          `http://localhost:3001/api/tour-bookings/${booking.id}/upload-proof`,
          {
            method: "PUT",
            body: formData,
          }
        );

      if (!response.ok) {

        throw new Error(
          "Upload failed"
        );

      }

      navigate(
        `/booking-success/${booking.id}`
      );

    } catch (error) {

      console.error(error);

      alert(
        "Failed to submit payment"
      );

    }

  };

    if (loading) {

      return (
        <MainLayout>
          <div className="py-40 text-center">
            Loading...
          </div>
        </MainLayout>
      );
    
    }

    if (!booking) {

      return (
        <MainLayout>
          <div className="py-40 text-center">
            Booking Not Found
          </div>
        </MainLayout>
      );
    
    }

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
              {/* <div className="bg-white rounded-3xl p-8 shadow-card">

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

                </div>

              </div> */}

              <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6">

                <h3 className="font-bold text-lg mb-4">
                  Bank Transfer Information
                </h3>

                <div className="space-y-4">

                  <div>
                    <p className="text-sm text-gray-500">
                      Bank BCA
                    </p>

                    <p className="font-bold">
                      1234567890
                    </p>

                    <p>
                      PT KK DMC Bali
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Bank Mandiri
                    </p>

                    <p className="font-bold">
                      9876543210
                    </p>

                    <p>
                      PT KK DMC Bali
                    </p>
                  </div>

                </div>

              </div>

              <div className="bg-white rounded-3xl p-8 shadow-card">

                <h2 className="text-2xl font-black mb-6">
                  Upload Payment Proof
                </h2>

                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="w-full"
                />

                <p className="text-sm text-gray-500 mt-3">
                  Upload transfer receipt or payment confirmation.
                </p>

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
                      {booking.customer_name}
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-gray-500">
                      Email
                    </span>

                    <span className="font-semibold">
                      {booking.customer_email}
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-gray-500">
                      Travel Date
                    </span>

                    <span className="font-semibold">
                      {booking.travel_date}
                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-gray-500">
                      Guests
                    </span>

                    <span className="font-semibold">
                      {booking.guests} Guests
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
                    src={booking.tour_packages.image_url}
                    alt={booking.tour_packages.title}
                    className="
                      w-24
                      h-24
                      object-cover
                      rounded-2xl
                    "
                  />

                  <div>

                    <h3 className="font-bold leading-snug mb-2">

                      {booking.tour_packages.title}

                    </h3>

                    <p className="text-sm text-gray-500">
                      {booking.package_options.name}
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
                      Rp {booking.total_price.toLocaleString('id-ID')}
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
                  onClick={handleSubmit}
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
                  Submit Payment
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