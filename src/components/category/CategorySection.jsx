import categories from '../../data/categories'

import { Link } from 'react-router-dom'

function CategorySection() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">

          <div>

            <p className="text-primary font-semibold mb-2">
              Categories
            </p>

            <h2 className="text-4xl font-black">
              Explore By Category
            </h2>

          </div>

          <Link
            to="/activities"
            className="
              hidden
              md:block
              border
              border-gray-300
              px-5
              py-3
              rounded-2xl
              font-semibold
              hover:bg-gray-100
              transition
            "
          >
            View All
          </Link>

        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5">

          {categories.map((item) => {

            const Icon = item.icon

            return (
              <Link
                key={item.id}
                to={item.page}
                className="
                  group
                  bg-soft
                  rounded-3xl
                  p-5
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  cursor-pointer
                  hover:bg-primary
                  transition-all
                  duration-300
                  hover:-translate-y-2
                "
              >

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-white
                    flex
                    items-center
                    justify-center
                    text-primary
                    text-2xl
                    shadow-md
                    mb-4
                    group-hover:scale-110
                    transition
                  "
                >
                  <Icon />
                </div>

                <h3 className="font-semibold text-sm group-hover:text-white transition">
                  {item.title}
                </h3>

              </Link>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default CategorySection