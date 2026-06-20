import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import HeroPage from "../components/sections/HeroPage";

import { getProfile } from "../services/profileService";
import { createReservation } from "../services/reservationService";

import toast from "react-hot-toast";

function ReservationPage() {
  const navigate = useNavigate();

  const location = useLocation();
  
  const params = new URLSearchParams(location.search);
  
  const destination =
    params.get("destination") || "";

  const [userProfile, setUserProfile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    whatsapp: "",
    productName: destination,

    adult: 1,
    child: 0,
    infant: 0,

    nationality: "",

    arrivalDate: "",
    departureDate: "",

    hotelName: "",

    specialRequest: "",
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const profile = await getProfile();

      setUserProfile(profile);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createReservation(formData);

      navigate("/account/reservations", {
        state: {
          success:
            "Reservation submitted successfully",
        },
      });

    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message ||
        "Failed to submit reservation"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>

      <HeroPage
        badge="Reservation"
        title="Reservation Form"
        description="
          Complete the form below and our team
          will process your reservation request.
        "
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
      />

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <form onSubmit={handleSubmit} className="bg-soft rounded-[32px] p-8 md:p-12">

            <div className="mb-10">

              <h2 className="text-4xl font-black mb-3">
                Reservation Details
              </h2>

              <p className="text-gray-500">
                Please fill in all required information.
              </p>

            </div>

            {/* Full Name + WhatsApp */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">

              <div>
                <label className="block mb-2 font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  value={userProfile?.full_name || ""}
                  readOnly
                  className="w-full h-14 px-5 rounded-2xl border"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Contact Number (WhatsApp)
                </label>

                <input
                  type="text"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full h-14 px-5 rounded-2xl border"
                />
              </div>

            </div>

            {/* Email + Product */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">

              <div>
                <label className="block mb-2 font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  value={userProfile?.email || ""}
                  readOnly
                  className="w-full h-14 px-5 rounded-2xl border"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Products Booked
                </label>

                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  className="w-full h-14 px-5 rounded-2xl border"
                />
              </div>

            </div>

            {/* Guest */}
            <div className="mb-6">

              <h3 className="font-bold text-xl mb-4">
                Number of Guests
              </h3>

              <div className="grid md:grid-cols-3 gap-6">

                <div>
                  <label className="block mb-2 font-semibold">
                    Adult
                  </label>

                  <input
                    type="number"
                    min="0"
                    name="adult"
                    value={formData.adult}
                    onChange={handleChange}
                    className="w-full h-14 px-5 rounded-2xl border"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">
                    Child (6-11)
                  </label>

                  <input
                    type="number"
                    min="0"
                    name="child"
                    value={formData.child}
                    onChange={handleChange}
                    className="w-full h-14 px-5 rounded-2xl border"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">
                    Child Below 6
                  </label>

                  <input
                    type="number"
                    min="0"
                    name="infant"
                    value={formData.infant}
                    onChange={handleChange}
                    className="w-full h-14 px-5 rounded-2xl border"
                  />
                </div>

              </div>

            </div>

            {/* Nationality */}
            <div className="mb-6">

              <label className="block mb-2 font-semibold">
                Nationality
              </label>

              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="w-full h-14 px-5 rounded-2xl border"
              />

            </div>

            {/* Dates */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">

              <div>
                <label className="block mb-2 font-semibold">
                  Arrival Date
                </label>

                <input
                  type="date"
                  name="arrivalDate"
                  value={formData.arrivalDate}
                  onChange={handleChange}
                  className="w-full h-14 px-5 rounded-2xl border"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  Departure Date
                </label>

                <input
                  type="date"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                  className="w-full h-14 px-5 rounded-2xl border"
                />
              </div>

            </div>

            {/* Hotel */}
            <div className="mb-6">

              <label className="block mb-2 font-semibold">
                Hotel Name (if any)
              </label>

              <input
                type="text"
                name="hotelName"
                value={formData.hotelName}
                onChange={handleChange}
                className="w-full h-14 px-5 rounded-2xl border"
              />

            </div>

            {/* Request */}
            <div className="mb-8">

              <label className="block mb-2 font-semibold">
                Special Request
              </label>

              <textarea
                rows="5"
                name="specialRequest"
                value={formData.specialRequest}
                onChange={handleChange}
                className="w-full p-5 rounded-2xl border"
              />

            </div>

            {/* Note */}
            <div
              className="
                bg-yellow-50
                border
                border-yellow-200
                rounded-2xl
                p-5
                mb-8
              "
            >
              <p className="text-sm text-gray-700">
                Payment will be collected separately.
                Invoice will be sent within 1x24 hours
                after reservation confirmation.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
                bg-primary
                text-white
                px-10
                py-4
                rounded-2xl
                font-semibold
                hover:opacity-90
                transition
                disabled:opacity-50
              "
            >
              {loading
                ? "Submitting..."
                : "Submit Reservation"}
            </button>

          </form>

        </div>

      </section>

    </MainLayout>
  );
}

export default ReservationPage;