import { useState, useEffect } from "react";
import { getProfile } from "../services/profileService";
import { createInquiry } from "../services/inquiryService";
import { useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HeroPage from "../components/sections/HeroPage";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function InquiryPage() {
  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState(null);

  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const destination =
    params.get("destination") || "";

  const [loading, setLoading] = useState(false);

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

  const [formData, setFormData] = useState({
    whatsapp: "",
    pax: "",
    nationality: "",
    travelDate: "",
    destination: destination,
    inquiry: "",
  });

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

      await createInquiry(formData);

      navigate("/account/inquiries", {
        state: {
          success: "Inquiry submitted successfully",
        },
      });

      setFormData({
        whatsapp: "",
        pax: "",
        nationality: "",
        travelDate: "",
        destination: destination,
        inquiry: "",
      });

    } catch (error) {
      console.error(error);

      toast.error("Failed to submit inquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>

      <HeroPage
        badge="Inquiry"
        title="Inquiry Form"
        description="
          Looking for a custom itinerary,
          quotation, or travel information?
          Our team is here to help.
        "
        image="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86"
      />

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <form onSubmit={handleSubmit} className="bg-soft rounded-[32px] p-8 md:p-12">

            <div className="mb-10">

              <h2 className="text-4xl font-black mb-3">
                Inquiry Details
              </h2>

              <p className="text-gray-500">
                Tell us about your travel plans and
                we will prepare the best recommendation.
              </p>

            </div>

            {/* Name + WhatsApp */}
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

            {/* Email + Pax */}
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
                  Number of Pax
                </label>

                <input
                  type="number"
                  min="1"
                  name="pax"
                  value={formData.pax}
                  onChange={handleChange}
                  className="w-full h-14 px-5 rounded-2xl border"
                />
              </div>

            </div>

            {/* Nationality + Date */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">

              <div>
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

              <div>
                <label className="block mb-2 font-semibold">
                  Estimated Travel Date
                </label>

                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  className="w-full h-14 px-5 rounded-2xl border"
                />
              </div>

            </div>

            {/* Destination */}
            <div className="mb-6">

              <label className="block mb-2 font-semibold">
                Interested Destination
              </label>

              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="w-full h-14 px-5 rounded-2xl border"
              />

            </div>

            {/* Inquiry */}
            <div className="mb-8">

              <label className="block mb-2 font-semibold">
                Inquiry
              </label>

              <textarea
                rows="6"
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                placeholder="Tell us about your travel plans, itinerary request, quotation request, transportation needs, accommodation preferences, etc."
                className="w-full p-5 rounded-2xl border"
              />

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
              "
            >
              {loading
                ? "Submitting..."
                : "Send Inquiry"}
            </button>

          </form>

        </div>

      </section>

    </MainLayout>
  );
}

export default InquiryPage;