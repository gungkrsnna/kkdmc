import { FaStar } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function ActivityCard({ item }) {
  return (

    <Link
      to={`/activity/${item.slug}`}
      className="
        group
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-card
        hover:shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-2
        cursor-pointer
      "
    >

      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={item.image_url}
          alt={item.title}
          className="
            w-full
            h-[260px]
            object-cover
            group-hover:scale-110
            transition
            duration-500
          "
        />

        {/* Badge */}
        <div className="absolute top-4 left-4">

          <span className="bg-primary text-white text-xs font-semibold px-3 py-2 rounded-full">
            {item.featured_badge || "Popular"}
          </span>

        </div>

      </div>

      {/* Content */}
      <div className="p-6">

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">

          <FaLocationDot className="text-primary" />

          <span>
            {item.location}
          </span>

        </div>

        {/* Title */}
        <h3 className="text-xl font-bold leading-snug mb-4 line-clamp-2">

          {item.title}

        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-5">

          <div className="flex items-center gap-1 text-yellow-500">

            <FaStar />

            <span className="font-bold text-dark">
            {item.rating || 0}
            </span>

          </div>

          <span className="text-gray-500 text-sm">
          ({item.total_reviews || 0} reviews)
          </span>

        </div>

        {/* Price */}
        <div className="flex items-end justify-between pt-2">

        <div>

            <p className="text-gray-400 text-xs mb-1">
            Start from
            </p>

            <h4 className="text-xl font-semibold text-primary">
            Rp {Number(
              item.start_price || 0
            ).toLocaleString("id-ID")}
            </h4>

        </div>

        <button
            className="
            bg-primary
            text-white
            px-5
            h-12
            rounded-2xl
            text-sm
            font-semibold
            hover:opacity-90
            transition
            "
        >
            Book Now
        </button>

        </div>

      </div>

    </Link>
  )
}

export default ActivityCard