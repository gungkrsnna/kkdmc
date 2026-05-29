import { FaStar } from 'react-icons/fa'

function TransportCard({ item }) {

  return (

    <div
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-card
        hover:-translate-y-1
        transition-all
        duration-500
      "
    >

      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={item.image}
          alt={item.title}
          className="
            w-full
            h-[260px]
            object-cover
            hover:scale-[1.02]
            transition
            duration-700
          "
        />

      </div>

      {/* Content */}
      <div className="p-6">

        <span
          className="
            inline-block
            bg-primary/10
            text-primary
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
            mb-5
          "
        >

          {item.type}

        </span>

        <h3 className="text-2xl font-black mb-4 leading-snug">

          {item.title}

        </h3>

        <p className="text-gray-500 leading-relaxed mb-5">

          {item.description}

        </p>

        {/* Features */}
        <div className="space-y-3 mb-6">

          {item.features.map((feature, index) => (

            <div
              key={index}
              className="flex items-center gap-3 text-sm text-gray-600"
            >

              <div className="w-2 h-2 rounded-full bg-primary" />

              <span>
                {feature}
              </span>

            </div>

          ))}

        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between">

          <div>

            <div className="flex items-center gap-2 mb-2">

              <FaStar className="text-yellow-500" />

              <span className="font-bold">
                {item.rating}
              </span>

            </div>

            <h4 className="text-2xl font-black text-primary">

              Rp {item.price.toLocaleString('id-ID')}

            </h4>

          </div>

          <button
            className="
              bg-primary
              text-white
              px-5
              h-12
              rounded-2xl
              font-semibold
              hover:opacity-90
              transition
            "
          >

            Book Now

          </button>

        </div>

      </div>

    </div>
  )
}

export default TransportCard