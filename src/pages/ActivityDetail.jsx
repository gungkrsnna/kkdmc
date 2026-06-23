import { useParams } from 'react-router-dom'

import {
  FaStar,
  FaClock,
  FaUsers,
} from 'react-icons/fa'

import {
  useEffect,
  useState,
  useRef
} from "react";

import { FaLocationDot } from 'react-icons/fa6'

import { Link, useNavigate } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

import {
  supabase,
} from "../lib/supabase";

import { toast }
from "react-hot-toast";


function ActivityDetail() {

  const { slug } = useParams()

  const navigate =
  useNavigate();

  const [dateError, setDateError] =
    useState(false);

  const [activity, setActivity] =
  useState(null);


  const [selectedPackage,
    setSelectedPackage] =
    useState(null);
  
  const [travelDate,
    setTravelDate] =
    useState("");
  
  const [guests,
    setGuests] =
    useState(2);
  
  const [bookingLoading,
    setBookingLoading] =
    useState(false);


  const [packageError, setPackageError] =
    useState(false);

  const dateInputRef = useRef(null);

  const [loading, setLoading] =
    useState(true);

    useEffect(() => {

      loadActivity();
    
    }, [slug]);
    
    const loadActivity =
      async () => {
    
        try {
    
          const response =
  await fetch(
    `https://kkdmc.gladiatoraruna.com/api/tour-packages/slug/${slug}`
  );
    
          const data =
            await response.json();
    
          setActivity(data);

          if (data.package_options?.length) {

            const defaultPackage =
              data.package_options.find(
                p => p.is_default
              ) ||
              data.package_options[0];
          
            setSelectedPackage(
              defaultPackage
            );
          
          }
    
        } catch (error) {
    
          console.error(error);
    
        } finally {
    
          setLoading(false);
    
        }
    
      };

      useEffect(() => {

        if (
          activity?.package_options?.length
        ) {
      
          setSelectedPackage(
            activity.package_options[0]
          );
      
        }
      
      }, [activity]);

      useEffect(() => {

        if (activity) {
      
          setGuests(
            activity.minimum_pax || 1
          );
      
        }
      
      }, [activity]);

      if (loading) {

        return (
          <MainLayout>
      
            <div className="py-40 text-center">
      
              Loading...
      
            </div>
      
          </MainLayout>
        );
      
      }

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

  const guestOptions = [];

  for (
    let i =
      Number(activity.minimum_pax || 1);
    i <=
      Number(
        activity.maximum_pax || 1
      );
    i++
  ) {
    guestOptions.push(i);
  }

  const totalPrice =
  (selectedPackage?.price ||
    activity.start_price) *
  guests;


  const handleBookNow =
  async () => {

    try {

      if (!selectedPackage) {

        setPackageError(true);

        return;

      }

      if (!travelDate) {

        setDateError(true);

        return;

      }

      setBookingLoading(true);

      const {
        data: { user },
      } =
        await supabase.auth.getUser();

      if (!user) {

        navigate("/login");

        return;

      }

      const response =
        await fetch(
          "https://kkdmc.gladiatoraruna.com/api/tour-bookings",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({

              user_id:
                user.id,

              tour_package_id:
                activity.id,

              package_option_id:
                selectedPackage.id,

              travel_date:
                travelDate,

              guests,

            }),

          }
        );

      const booking =
        await response.json();

      if (!response.ok) {

        throw new Error(
          booking.message
        );

      }

      navigate(
        `/booking/${booking.id}`
      );

    } catch (error) {

      console.error(error);

      toast.error(
        "Unable to create booking. Please try again."
      );

    } finally {

      setBookingLoading(false);

    }

  };

  return (

    <MainLayout>

      {/* Hero Image */}
      <section className="relative h-[520px] overflow-hidden">

        <img
          src={activity.image_url}
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
                {activity.featured_badge}
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
                    ({activity.total_reviews} reviews)
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
                    {activity.minimum_pax} - {activity.maximum_pax} People
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

  {packageError && (
    <p className="text-red-500 mb-5">
      Please select a package
    </p>
  )}

  <div className="space-y-6">

    {activity.package_options?.map((pkg) => (

      <div
      key={pkg.id}
      onClick={() => {

        setSelectedPackage(pkg);

        setPackageError(false);

      }}
      className={`
        border
        rounded-3xl
        p-7
        transition
        cursor-pointer

        ${
          selectedPackage?.id === pkg.id
            ? "border-primary bg-blue-50"
            : packageError
            ? "border-red-500"
            : "hover:border-primary"
        }
      `}
      >

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          {/* Left */}
          <div>

            <h3 className="text-2xl font-bold mb-4">
              {pkg.name}
            </h3>

            <div className="space-y-3">

                {pkg.features?.map(
                  (feature) => (

                    <div
                      key={feature.id}
                      className="
                        flex
                        items-center
                        gap-3
                        text-gray-600
                      "
                    >

                      <div className="w-2 h-2 rounded-full bg-primary" />

                      <span>
                        {feature.feature}
                      </span>

                    </div>

                  )
                )}

              </div>

          </div>

          {/* Right */}
          <div className="text-right">

            <p className="text-sm text-gray-400 mb-2">
              Start from
            </p>

            {selectedPackage?.id === pkg.id && (
              <span
                className="
                  inline-block
                  bg-green-100
                  text-green-700
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold
                  mb-3
                "
              >
                Selected
              </span>
            )}

            <h3 className="text-3xl font-black text-primary mb-5">

              Rp {pkg.price.toLocaleString('id-ID')}

            </h3>

            {selectedPackage?.id === pkg.id ? (
  <button
    className="
      bg-green-600
      text-white
      px-6
      h-12
      rounded-2xl
      font-semibold
    "
  >
    Selected
  </button>
) : (
  <button
    className="
      bg-primary
      text-white
      px-6
      h-12
      rounded-2xl
      font-semibold
    "
  >
    Select Package
  </button>
)}

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

  {activity.highlights?.map(
    (item) => (

      <div
        key={item.id}
        className="
          bg-soft
          rounded-3xl
          p-6
        "
      >
        {item.title}
      </div>

    )
  )}

</div>

              </div>

              {/* Includes */}
<div className="mt-16">

  <h2 className="text-3xl font-black mb-8">
    What's Included
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

  {activity.inclusions?.map(
    (item) => (

      <div
        key={item.id}
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
          {item.title}
        </span>

      </div>

    )
  )}

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
                  Start From
                </p>

                <h2 className="text-4xl font-black text-primary mb-6">

                  Rp {
                    (
                      selectedPackage?.price ||
                      activity.start_price
                    ).toLocaleString("id-ID")
                  }

                </h2>

                {/* Selected Package */}
                <div className="bg-soft rounded-2xl p-4 mb-4">

                  <p className="text-xs text-gray-500 mb-1">
                    Selected Package
                  </p>

                  <p className="font-semibold text-lg">

                    {selectedPackage?.name ||
                      "Please select package"}

                  </p>

                </div>

                {/* Travel Date */}
                <div className="mb-4">

                  <label className="block text-sm font-semibold mb-2">
                    Travel Date
                  </label>

                  <input
                    ref={dateInputRef}
                    type="date"
                    value={travelDate}
                    min={
                      new Date()
                        .toISOString()
                        .split("T")[0]
                    }
                    onChange={(e) => {

                      setTravelDate(
                        e.target.value
                      );

                      setDateError(false);

                    }}
                    className={`
                      w-full
                      h-14
                      px-5
                      rounded-2xl
                      outline-none
                      border
                      ${
                        dateError
                          ? "border-red-500"
                          : "border-gray-300"
                      }
                    `}
                  />

                  {dateError && (

                    <p className="text-red-500 text-sm mt-2">

                      Please select a travel date

                    </p>

                  )}

                </div>

                {/* Guests */}
                <div className="mb-6">

                  <label className="block text-sm font-semibold mb-2">
                    Guests
                  </label>

                  <select
                    value={guests}
                    onChange={(e) =>
                      setGuests(
                        Number(
                          e.target.value
                        )
                      )
                    }
                    className="
                      w-full
                      h-14
                      px-5
                      rounded-2xl
                      border
                      outline-none
                    "
                  >

                    {guestOptions.map(
                      (qty) => (

                        <option
                          key={qty}
                          value={qty}
                        >
                          {qty} Guests
                        </option>

                      )
                    )}

                  </select>

                </div>

                {/* Summary */}
                <div className="border rounded-2xl p-4 mb-6">

                  <div className="flex justify-between mb-3">

                    <span className="text-gray-500">
                      Price / Person
                    </span>

                    <span>

                      Rp {
                        (
                          selectedPackage?.price ||
                          activity.start_price
                        ).toLocaleString("id-ID")
                      }

                    </span>

                  </div>

                  <div className="flex justify-between mb-3">

                    <span className="text-gray-500">
                      Guests
                    </span>

                    <span>
                      {guests}
                    </span>

                  </div>

                  <div className="border-t pt-3 flex justify-between">

                    <span className="font-bold">
                      Total
                    </span>

                    <span className="font-bold text-primary text-lg">

                      Rp {
                        totalPrice.toLocaleString(
                          "id-ID"
                        )
                      }

                    </span>

                  </div>

                </div>

                {/* Book Button */}
                <button
                  onClick={handleBookNow}
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
                  "
                >
                  {
                    bookingLoading
                      ? "Creating Booking..."
                      : "Book Now"
                  }
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  )
}

export default ActivityDetail