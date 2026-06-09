import MainLayout from "../layouts/MainLayout";
import HeroPage from "../components/sections/HeroPage";

function AboutUs() {
  return (
    <MainLayout>
      {/* HERO */}
      <HeroPage
        badge="About Us"
        title="Creating Unforgettable Bali Experiences"
        description="
          We help travelers discover the beauty of Bali through
          carefully curated destinations, activities, and personalized journeys.
        "
        image="https://images.unsplash.com/photo-1537996194471-e657df975ab4"
      />

      {/* OUR STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <img
                src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86"
                alt="About Us"
                className="rounded-[32px] w-full h-[500px] object-cover"
              />
            </div>

            <div>

              <p className="text-primary font-semibold mb-3">
                Our Story
              </p>

              <h2 className="text-5xl font-black mb-6">
                Passionate About
                Travel & Adventure
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                We are dedicated to helping travelers explore
                Bali's breathtaking landscapes, rich culture,
                and unforgettable adventures.
              </p>

              <p className="text-gray-600 leading-relaxed">
                From hidden beaches and mountain treks to
                cultural experiences and private tours,
                we create journeys tailored to every traveler.
              </p>

            </div>

          </div>

        </div>
      </section>

            <section className="py-20 bg-soft">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-black mb-2">500+</h3>
              <p className="text-gray-500">Happy Travelers</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-black mb-2">50+</h3>
              <p className="text-gray-500">Destinations</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-black mb-2">100+</h3>
              <p className="text-gray-500">Activities</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-black mb-2">4.9</h3>
              <p className="text-gray-500">Average Rating</p>
            </div>

          </div>

        </div>

      </section>

            <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-primary font-semibold mb-3">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-black">
              Travel With Confidence
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Local Experts",
              "Personalized Trips",
              "Trusted Partners",
              "Fast Support",
            ].map((item) => (
              <div
                key={item}
                className="bg-soft rounded-3xl p-8 text-center"
              >
                <h3 className="font-bold text-xl">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

            <section className="py-20 bg-soft">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-primary font-semibold mb-3">
              Contact Us
            </p>

            <h2 className="text-5xl font-black">
              Let's Plan Your Journey
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Info */}
            <div className="bg-white rounded-[32px] p-10">

              <div className="mb-8">
                <h4 className="font-bold text-xl mb-2">
                  Email
                </h4>
                <p className="text-gray-500">
                  hello@yourtravel.com
                </p>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-xl mb-2">
                  Phone
                </h4>
                <p className="text-gray-500">
                  +62 812 3456 7890
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-2">
                  Location
                </h4>
                <p className="text-gray-500">
                  Bali, Indonesia
                </p>
              </div>

            </div>

            {/* Form */}
            <div className="bg-white rounded-[32px] p-10">

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full h-14 px-5 rounded-2xl border"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-14 px-5 rounded-2xl border"
                />

                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full p-5 rounded-2xl border"
                />

                <button
                  className="
                    bg-primary
                    text-white
                    px-8
                    py-4
                    rounded-2xl
                    font-semibold
                  "
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>
    </MainLayout>
  );
}

export default AboutUs;