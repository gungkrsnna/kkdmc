import { FaStar } from 'react-icons/fa'
import testimonials from '../../data/testimonials'

function TestimonialSection() {
  return (

    <section className="py-24 bg-soft">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <p className="text-primary font-semibold mb-3">
            Testimonials
          </p>

          <h2 className="text-5xl font-black mb-5">
            What Travelers Say
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Thousands of travelers trust our platform
            to create unforgettable experiences in Bali.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.id}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-card
                hover:shadow-2xl
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >

              {/* Top */}
              <div className="flex items-center gap-4 mb-6">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>

                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {item.country}
                  </p>

                </div>

              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-500 mb-5">

                {[...Array(item.rating)].map((_, index) => (

                  <FaStar key={index} />

                ))}

              </div>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed">

                “{item.review}”

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default TestimonialSection