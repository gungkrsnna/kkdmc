import { Link } from 'react-router-dom'

function DestinationCard({ item }) {

  return (

    <Link
      to={`/destination/${item.slug}`}
      className="
        group
        block
        overflow-hidden
        rounded-2xl
        bg-white
        transition-all
        duration-300
      "
    >

      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl h-[280px] md:h-[360px]">

        <img
          src={item.image}
          alt={item.title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.03]
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
          "
        />

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-5 md:p-6 text-white">

          <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-1">

            {item.title}

          </h3>

          <p className="text-sm text-white/85">

            {item.activities} activities

          </p>

        </div>

      </div>

    </Link>

  )

}

export default DestinationCard