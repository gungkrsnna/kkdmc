import benefits from '../../data/benefits'

function WhyChooseUs() {
  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <p className="text-primary font-semibold mb-3">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-black mb-5">
            Travel With Confidence
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We provide unforgettable travel experiences
            with trusted services, premium destinations,
            and exceptional customer support.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {benefits.map((item) => {

            const Icon = item.icon

            return (

              <div
                key={item.id}
                className="
                  group
                  bg-soft
                  rounded-3xl
                  p-8
                  hover:bg-primary
                  transition-all
                  duration-300
                  hover:-translate-y-2
                "
              >

                {/* Icon */}
                <div
                  className="
                    w-20
                    h-20
                    rounded-3xl
                    bg-white
                    flex
                    items-center
                    justify-center
                    text-primary
                    text-3xl
                    shadow-lg
                    mb-7
                    group-hover:scale-110
                    transition
                  "
                >
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition">

                  {item.title}

                </h3>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-200 transition">

                  {item.description}

                </p>

              </div>

            )
          })}

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs