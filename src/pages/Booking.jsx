import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import { useParams } from "react-router-dom";

function Booking() {

  const { id } = useParams();

  const [booking, setBooking] =
  useState(null);

  const [loading, setLoading] =
    useState(true);

    const [errors, setErrors] =
  useState({});

  const navigate =
    useNavigate();

  const validateForm = () => {

    const newErrors = {};
  
    if (!traveler.fullName.trim()) {
      newErrors.fullName =
        "Full name is required";
    }
  
    if (!traveler.email.trim()) {
      newErrors.email =
        "Email is required";
    }
  
    if (!traveler.phone.trim()) {
      newErrors.phone =
        "Phone number is required";
    }
  
    setErrors(newErrors);
  
    return (
      Object.keys(newErrors)
        .length === 0
    );
  
  };

  const [traveler, setTraveler] =
    useState({
      fullName: "",
      email: "",
      phone: "",
    });

  useEffect(() => {

    loadBooking();
  
  }, [id]);

  useEffect(() => {

    if (booking) {
  
      setTraveler({
        fullName:
          booking.customer_name || "",
  
        email:
          booking.customer_email || "",
  
        phone:
          booking.customer_whatsapp || "",
      });
  
    }
  
  }, [booking]);

  const handleContinueCheckout =
  async () => {

    if (!validateForm()) {
      return;
    }

    try {

      await fetch(
        `https://kkdmc.gladiatoraruna.com/api/tour-bookings/${booking.id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            customer_name:
              traveler.fullName,

            customer_email:
              traveler.email,

            customer_whatsapp:
              traveler.phone,
          }),
        }
      );

      navigate(
        `/checkout/${booking.id}`
      );

    } catch (error) {

      console.error(error);

    }

  };
  
  const loadBooking =
    async () => {
  
      try {
  
        const response =
          await fetch(
            `https://kkdmc.gladiatoraruna.com/api/tour-bookings/${id}`
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
                    src={booking.tour_packages.image_url}
                    alt={booking.tour_packages.title}
                    className="
                      w-full
                      md:w-[260px]
                      h-[180px]
                      object-cover
                      rounded-3xl
                    "
                  />

                  <div>

                    <h3 className="text-3xl font-black mb-4">
                      {booking.tour_packages.title}
                    </h3>

                    <p className="text-gray-500 leading-relaxed mb-4">
                      {booking.tour_packages.description}
                    </p>

                    <div className="flex flex-wrap gap-3">

                      <span className="bg-soft px-4 py-2 rounded-xl text-sm">
                        {booking.package_options.name}
                      </span>

                      <span className="bg-soft px-4 py-2 rounded-xl text-sm">
                        {booking.guests} Guests
                      </span>

                      <span className="bg-soft px-4 py-2 rounded-xl text-sm">
                        {booking.travel_date}
                      </span>

                    </div>

                  </div>

                </div>

              </div>

              {/* Traveler */}
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
                      value={
                        traveler.fullName
                      }
                      onChange={(e) =>
                        setTraveler({
                          ...traveler,
                          fullName:
                            e.target.value,
                        })
                      }
                      className={`
                        w-full
                        h-14
                        border
                        rounded-2xl
                        px-5
                        ${
                          errors.fullName
                            ? "border-red-500"
                            : "border-gray-300"
                        }
                      `}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.fullName}
                      </p>
                    )}

                  </div>

                  <div>

                    <label className="block font-semibold mb-3">
                      Email Address
                    </label>

                    <input
                      type="email"
                      value={
                        traveler.email
                      }
                      onChange={(e) =>
                        setTraveler({
                          ...traveler,
                          email:
                            e.target.value,
                        })
                      }
                      className={`
                        w-full
                        h-14
                        border
                        rounded-2xl
                        px-5
                        ${
                          errors.email
                            ? "border-red-500"
                            : "border-gray-300"
                        }
                      `}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.email}
                      </p>
                    )}

                  </div>

                  <div>

                    <label className="block font-semibold mb-3">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      value={
                        traveler.phone
                      }
                      onChange={(e) =>
                        setTraveler({
                          ...traveler,
                          phone:
                            e.target.value,
                        })
                      }
                      className={`
                        w-full
                        h-14
                        border
                        rounded-2xl
                        px-5
                        ${
                          errors.phone
                            ? "border-red-500"
                            : "border-gray-300"
                        }
                      `}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.phone}
                      </p>
                    )}

                  </div>

                  <div>

                    <label className="block font-semibold mb-3">
                      Travel Date
                    </label>

                    <input
                      type="text"
                      readOnly
                      value={
                        booking.travel_date
                      }
                      className="
                        w-full
                        h-14
                        border
                        rounded-2xl
                        px-5
                        bg-gray-50
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

                  <div className="flex justify-between">

                    <span className="text-gray-500">
                      Package
                    </span>

                    <span className="font-semibold">
                      {booking.package_options.name}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-gray-500">
                      Guests
                    </span>

                    <span className="font-semibold">
                      {booking.guests} Guests
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-gray-500">
                      Travel Date
                    </span>

                    <span className="font-semibold">
                      {booking.travel_date}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-gray-500">
                      Package Price
                    </span>

                    <span className="font-semibold">
                      Rp{" "}
                      {(
                        booking.unit_price || 0
                      ).toLocaleString(
                        "id-ID"
                      )}
                    </span>

                  </div>

                </div>

                <div className="border-t pt-6 mb-8">

                  <div className="flex justify-between items-center">

                    <span className="text-lg font-bold">
                      Total
                    </span>

                    <span className="text-3xl font-black text-primary">

                      Rp{" "}
                      {(
                        booking.total_price || 0
                      ).toLocaleString(
                        "id-ID"
                      )}

                    </span>

                  </div>

                </div>

                <button
                  onClick={handleContinueCheckout}
                  className="
                    w-full
                    h-14
                    bg-primary
                    text-white
                    rounded-2xl
                    font-bold
                    text-lg
                  "
                >
                  Continue Checkout
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </MainLayout>

  );

}

export default Booking;