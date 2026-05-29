function PromoBanner() {
  return (

    <section className="py-20 bg-soft">

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            min-h-[500px]
          "
        >

          {/* Background */}
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Promo"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">

            <div className="max-w-2xl p-10 md:p-20 text-white">

              <span className="bg-primary px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
                LIMITED OFFER
              </span>

              <h2 className="text-5xl font-black leading-tight mb-6">

                Get Special Discount
                <br />
                Up To 50% Off

              </h2>

              <p className="text-lg text-gray-200 leading-relaxed mb-10">

                Explore Bali with unforgettable travel
                experiences, premium destinations,
                and exclusive seasonal promotions.

              </p>

              <div className="flex flex-wrap gap-4">

                <button
                  className="
                    bg-primary
                    px-7
                    py-4
                    rounded-2xl
                    font-bold
                    hover:opacity-90
                    transition
                  "
                >
                  Book Now
                </button>

                <button
                  className="
                    bg-white/20
                    backdrop-blur-md
                    px-7
                    py-4
                    rounded-2xl
                    font-bold
                    hover:bg-white/30
                    transition
                  "
                >
                  Learn More
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default PromoBanner