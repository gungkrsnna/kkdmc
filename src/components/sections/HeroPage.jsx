function HeroPage({
  badge,
  title,
  description,
  image,
  children
}) {
  return (
    <section
      className="
        relative
        overflow-hidden
        min-h-[420px]
        md:min-h-[520px]
        flex
        items-center
      "
    >

      {/* Background */}
      <img
        src={image}
        alt={title}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/50
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          w-full
          py-16
          md:py-24
        "
      >

        <p className="text-white/80 font-semibold mb-3">
          {badge}
        </p>

        <h1
          className="
            text-white
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-black
            leading-tight
            mb-6
            max-w-4xl
          "
        >
          {title}
        </h1>

        <p
          className="
            text-white/80
            text-base
            md:text-lg
            leading-relaxed
            max-w-2xl
            mb-10
          "
        >
          {description}
        </p>

        {children}

      </div>

    </section>
  )
}

export default HeroPage