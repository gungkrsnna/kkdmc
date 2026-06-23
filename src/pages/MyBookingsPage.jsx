import {
    useEffect,
    useState,
  } from "react";
  
  import MainLayout
  from "../layouts/MainLayout";
  
  import { supabase }
  from "../lib/supabase";
  
  import { Link }
  from "react-router-dom";

  const getStatusLabel = (
  status
) => {

  switch(status){

    case "draft":
      return "Draft";

    case "pending_payment":
      return "Pending Payment";

    case "review":
      return "Payment Review";

    case "confirmed":
      return "Confirmed";

    case "completed":
      return "Completed";

    case "cancelled":
      return "Cancelled";

    default:
      return status;
  }

};
  
  function MyBookingsPage() {
  
    const [bookings, setBookings] =
      useState([]);
  
    const [loading, setLoading] =
      useState(true);
  
    useEffect(() => {
  
      loadBookings();
  
    }, []);
  
    const loadBookings =
      async () => {
  
        try {
  
          const {
            data: { user },
          } =
            await supabase.auth.getUser();
  
          const response =
            await fetch(
              `http://localhost:3001/api/tour-bookings/my-bookings?user_id=${user.id}`
            );
  
          const data =
            await response.json();
  
          setBookings(data);
  
        } catch (error) {
  
          console.error(error);
  
        } finally {
  
          setLoading(false);
  
        }
  
      };
  
    const getStatusBadge =
      (status) => {
  
        switch(status){
  
          case "draft":
            return "bg-gray-100 text-gray-700";
  
          case "pending_payment":
            return "bg-yellow-100 text-yellow-700";
  
          case "review":
            return "bg-blue-100 text-blue-700";
  
          case "confirmed":
            return "bg-green-100 text-green-700";
  
          case "completed":
            return "bg-green-100 text-green-700";
  
          case "cancelled":
            return "bg-red-100 text-red-700";
  
          default:
            return "bg-gray-100";
        }
  
      };
  
    return (
  
      <MainLayout>
  
        <section className="py-20">
  
          <div className="max-w-7xl mx-auto px-6">
  
            <h1 className="text-5xl font-black mb-10">
              My Bookings
            </h1>
  
            {loading ? (
  
              <p>
                Loading...
              </p>
  
            ) : bookings.length === 0 ? (
  
              <div className="bg-white rounded-3xl p-10 text-center">
  
                No bookings found
  
              </div>
  
            ) : (
  
              <div className="space-y-6">
  
                {bookings.map(
                  (booking) => (
  
                    <div
                      key={booking.id}
                      className="
                        bg-white
                        rounded-3xl
                        p-6
                        shadow-card
                      "
                    >
  
                      <div className="flex flex-col lg:flex-row gap-6">
  
                        <img
                          src={
                            booking.tour_packages
                              ?.image_url
                          }
                          alt=""
                          className="
                            w-full
                            lg:w-48
                            h-36
                            object-cover
                            rounded-2xl
                          "
                        />
  
                        <div className="flex-1">
  
                          <div className="flex justify-between items-start">
  
                            <div>
  
                              <h2 className="text-2xl font-black">
  
                                {
                                  booking
                                    .tour_packages
                                    ?.title
                                }
  
                              </h2>
  
                              <p className="text-gray-500">
  
                                {
                                  booking
                                    .booking_number
                                }
  
                              </p>
  
                            </div>
  
                            <span
                              className={`
                                px-4
                                py-2
                                rounded-full
                                text-sm
                                font-semibold
                                ${getStatusBadge(
                                  booking.status
                                )}
                              `}
                            >

                              {getStatusLabel(
                                booking.status
                              )}

                            </span>
  
                          </div>
  
                          <div className="mt-4 space-y-2">
  
                            <p>
                              Package:
                              {" "}
                              {
                                booking
                                  .package_options
                                  ?.name
                              }
                            </p>
  
                            <p>
                              Travel Date:
                              {" "}
                              {
                                booking
                                  .travel_date
                              }
                            </p>
  
                            <p>
                              Guests:
                              {" "}
                              {
                                booking
                                  .guests
                              }
                            </p>
  
                            <p>
                              Total:
                              {" "}
                              Rp{" "}
                              {
                                Number(
                                  booking.total_price
                                ).toLocaleString(
                                  "id-ID"
                                )
                              }
                            </p>
  
                          </div>
  
                          <div className="mt-5 flex gap-3">

                            {booking.status ===
                              "pending_payment" && (

                              <Link
                                to={`/booking/${booking.id}`}
                                className="
                                  bg-primary
                                  text-white
                                  px-5
                                  py-3
                                  rounded-xl
                                "
                              >
                                Continue Payment
                              </Link>

                            )}

                            {booking.status ===
                              "review" && (

                              <Link
                                to={`/account/bookings/${booking.id}`}
                                className="
                                  bg-blue-600
                                  text-white
                                  px-5
                                  py-3
                                  rounded-xl
                                "
                              >
                                View Review Status
                              </Link>

                            )}

                            {booking.status ===
                              "confirmed" && (

                              <Link
                                to={`/account/bookings/${booking.id}`}
                                className="
                                  bg-green-600
                                  text-white
                                  px-5
                                  py-3
                                  rounded-xl
                                "
                              >
                                View Booking
                              </Link>

                            )}

                          </div>
  
                        </div>
  
                      </div>
  
                    </div>
  
                  )
                )}
  
              </div>
  
            )}
  
          </div>
  
        </section>
  
      </MainLayout>
  
    );
  
  }
  
  export default MyBookingsPage;