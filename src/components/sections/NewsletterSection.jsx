import { useState } from "react";
import axios from "axios";

function NewsletterSection() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] =
    useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

  const handleSubscribe = async () => {
    try {
      setMessage("");

      if (!email.trim()) {
        setMessage("Please enter your email address.");
        setMessageType("error");
        return;
      }

      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/newsletter/subscribe`,
        {
          email,
          website: "",
        }
      );

      if (response.data.success) {
        setMessage(
          "Thank you for subscribing to our newsletter!"
        );

        setMessageType("success");

        setEmail("");
      }
    } catch (error) {
      console.error(error);

      const msg =
        error?.response?.data?.message ||
        "Subscription failed.";

      setMessage(msg);
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-primary
            p-10
            md:p-20
          "
        >

          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10">

            <div className="max-w-3xl">

              <p className="text-white/80 font-semibold mb-4">
                NEWSLETTER
              </p>

              <h2 className="text-5xl font-black text-white leading-tight mb-6">

                Get Travel Deals
                <br />
                & Special Offers

              </h2>

              <p className="text-white/80 leading-relaxed mb-10 max-w-2xl">

                Subscribe to receive exclusive promotions,
                travel inspiration, and premium Bali experiences.

              </p>

              {/* Form */}
              <div className="flex flex-col md:flex-row gap-4 max-w-2xl">

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your email"
                  className="
                    flex-1
                    h-[58px]
                    md:h-16
                    w-full
                    px-6
                    rounded-xl
                    bg-white
                    border-2
                    border-white/20
                    text-gray-900
                    placeholder:text-gray-400
                    text-base
                    font-medium
                    shadow-lg
                    focus:outline-none
                    focus:ring-4
                    focus:ring-white/20
                    focus:border-white
                    transition-all
                  "
                />

                <input
                  type="text"
                  name="website"
                  autoComplete="off"
                  style={{
                    display: "none",
                  }}
                />

                <button
                  onClick={handleSubscribe}
                  disabled={loading}
                  className="
                    h-[58px]
                    md:h-16
                    px-8
                    rounded-xl
                    bg-black
                    text-white
                    font-bold
                    text-base
                    shadow-lg
                    hover:bg-gray-900
                    transition-all
                    whitespace-nowrap
                  "
                >
                  {loading
                    ? "Subscribing..."
                    : "Subscribe"}
                </button>

              </div>

              {message && (
                <div
                  className={`
                    mt-4
                    text-sm
                    font-medium
                    ${
                      messageType === "success"
                        ? "text-green-200"
                        : "text-red-200"
                    }
                  `}
                >
                  {message}
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default NewsletterSection