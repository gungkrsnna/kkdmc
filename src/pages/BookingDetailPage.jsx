import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  Link,
} from "react-router-dom";

import MainLayout
from "../layouts/MainLayout";

function BookingDetailPage() {

  const { id } = useParams();

  const [booking, setBooking] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    loadBooking();

  }, [id]);

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

      <section className="py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-5xl font-black mb-10">
            Booking Detail
          </h1>

          <div className="bg-white rounded-3xl p-8 shadow-card">

            <div className="flex gap-6 mb-8">

              <img
                src={
                  booking.tour_packages
                    ?.image_url
                }
                alt=""
                className="
                  w-40
                  h-32
                  object-cover
                  rounded-2xl
                "
              />

              <div>

                <h2 className="text-3xl font-black">

                  {
                    booking
                      .tour_packages
                      ?.title
                  }

                </h2>

                <p className="text-gray-500">

                  Booking No:

                  {" "}

                  {
                    booking
                      .booking_number
                  }

                </p>

              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <p className="text-gray-500">
                  Package
                </p>

                <p className="font-bold">

                  {
                    booking
                      .package_options
                      ?.name
                  }

                </p>

              </div>

              <div>

                <p className="text-gray-500">
                  Travel Date
                </p>

                <p className="font-bold">

                  {
                    booking
                      .travel_date
                  }

                </p>

              </div>

              <div>

                <p className="text-gray-500">
                  Guests
                </p>

                <p className="font-bold">

                  {
                    booking
                      .guests
                  }

                </p>

              </div>

              <div>

                <p className="text-gray-500">
                  Total
                </p>

                <p className="font-bold">

                  Rp{" "}

                  {Number(
                    booking.total_price
                  ).toLocaleString(
                    "id-ID"
                  )}

                </p>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-card mt-6">

            <h2 className="text-2xl font-black mb-6">
              Payment Status
            </h2>

            <p className="mb-4">

              Status:

              {" "}

              <strong>

                {
                  booking.payment_status
                }

              </strong>

            </p>

            {booking.payment_proof_url && (

              <div>

                <p className="mb-3">
                  Payment Proof
                </p>

                <a
                  href={
                    booking.payment_proof_url
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-primary
                    underline
                  "
                >
                  View Payment Proof
                </a>

              </div>

            )}

          </div>

          {booking.admin_notes && (

            <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-8 mt-6">

              <h2 className="text-2xl font-black mb-4">
                Admin Notes
              </h2>

              <p>

                {
                  booking.admin_notes
                }

              </p>

            </div>

          )}

          {booking.status ===
            "pending_payment" && (

            <div className="mt-6">

              <Link
                to={`/checkout/${booking.id}`}
                className="
                  bg-primary
                  text-white
                  px-6
                  py-3
                  rounded-xl
                "
              >
                Continue Payment
              </Link>

            </div>

          )}

        </div>

      </section>

    </MainLayout>

  );

}

export default BookingDetailPage;