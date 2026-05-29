import activities from '../../data/activities'
import ActivityCard from '../cards/ActivityCard'

function PopularActivities() {
  return (

    <section className="py-20 bg-soft">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">

          <div>

            <p className="text-primary font-semibold mb-2">
              Popular Tours
            </p>

            <h2 className="text-4xl font-black">
              Best Activities In Bali
            </h2>

          </div>

          <button className="hidden md:block border border-gray-300 px-5 py-3 rounded-2xl font-semibold hover:bg-white transition">
            Explore More
          </button>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {activities.map((item) => (
            <ActivityCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default PopularActivities