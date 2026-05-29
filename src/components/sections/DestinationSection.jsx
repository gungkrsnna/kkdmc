import { Swiper, SwiperSlide } from 'swiper/react'

import destinations from '../../data/destinations'
import DestinationCard from '../cards/DestinationCard'

function DestinationSection() {
  return (

    <section className="py-14 md:py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8 md:mb-12 mb-12">

          <div>

            <p className="text-primary font-semibold mb-2">
              Top Destination
            </p>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Discover Bali Destinations
            </h2>

          </div>

          <button className="w-full md:w-auto border border-gray-300 px-5 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition">
            Explore All
          </button>

        </div>

        {/* Swiper */}
        <Swiper
          spaceBetween={16}
          slidesPerView={1.08}

          breakpoints={{
  640: {
    slidesPerView: 1.5,
    spaceBetween: 18,
  },

  768: {
    slidesPerView: 2.2,
    spaceBetween: 20,
  },

  1024: {
    slidesPerView: 3.2,
    spaceBetween: 24,
  },
}}
        >

          {destinations.map((item) => (

            <SwiperSlide className="!h-auto" key={item.id}>

                 <div className="h-full">
                    
                      <DestinationCard item={item} />
                    
                 </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  )
}

export default DestinationSection