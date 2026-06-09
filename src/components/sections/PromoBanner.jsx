function PromoBanner() {
  const promos = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      title: "Summer Escape",
      subtitle: "Up To 50% Off",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Luxury Bali Tour",
      subtitle: "Special Package",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1468413253725-0d5181091126",
      title: "Weekend Getaway",
      subtitle: "Limited Offer",
    },
  ];

  return (
    <section className="py-20 bg-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black mb-4">
            Special Promotions
          </h2>
          <p className="text-gray-500">
            Don't miss our latest travel deals and exclusive offers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="
                relative
                overflow-hidden
                rounded-3xl
                h-[420px]
                group
                cursor-pointer
              "
            >
              <img
                src={promo.image}
                alt={promo.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                <span className="bg-primary px-3 py-1 rounded-full text-xs font-semibold w-fit mb-3">
                  PROMO
                </span>

                <h3 className="text-2xl font-bold mb-2">
                  {promo.title}
                </h3>

                <p className="text-white/90 mb-4">
                  {promo.subtitle}
                </p>

                <button
                  className="
                    bg-white
                    text-black
                    py-3
                    rounded-xl
                    font-semibold
                    hover:opacity-90
                    transition
                  "
                >
                  View Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PromoBanner;