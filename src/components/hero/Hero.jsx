import { useEffect, useState } from 'react'

import {
  FaMapMarkerAlt,
} from 'react-icons/fa'

import {
  MdOutlineDateRange,
} from 'react-icons/md'

import {
  IoPeopleOutline,
} from 'react-icons/io5'


function Hero() {

  const [hero, setHero] =
  useState(null);

  useEffect(() => {

    loadHero();

  }, []);

  const loadHero =
  async () => {

    const response =
      await fetch(
        "https://kkdmc.gladiatoraruna.com/api/cms/home_hero"
      );

    const data =
      await response.json();

    setHero(data);

  };

  if (!hero) return null;

  return (

    <section className="relative min-h-screen md:min-h-[760px] overflow-hidden">

      {/* Background */}
      <img
        src={hero.image_url}
        alt="Bali"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />

      {/* Content */}
      <div className="relative z-10 min-h-screen md:min-h-[760px] flex items-center py-24 md:py-0">

        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">

          <div className="w-full text-white">

            {/* TEXT CONTENT */}
            <div className="max-w-2xl">

              {/* Tag */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-white/10
                  border
                  border-white/20
                  backdrop-blur-sm
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  mb-6
                "
              >

                <span className="w-2 h-2 rounded-full bg-primary" />

                {hero.subtitle}

              </div>

              {/* Heading */}
              <h1
                className="
                  text-4xl
                  md:text-6xl
                  font-black
                  leading-tight
                  tracking-tight
                  mb-6
                "
              >

                {hero.title}

              </h1>

              {/* Description */}
              <p
                className="
                  text-white/85
                  text-base
                  md:text-lg
                  leading-relaxed
                  max-w-xl
                "
              >

                {hero.description}

              </p>

            </div>

            {/* SEARCH BOX */}
            <div
              className="
                mt-10
                bg-white
                rounded-[32px]
                shadow-2xl
                p-4
                md:p-5
                max-w-6xl
              "
            >

              <div
                className="
                  flex
                  flex-col
                  lg:flex-row
                  lg:items-center
                  gap-3
                "
              >

                {/* Destination */}
                <div
                  className="
                    flex
                    items-center
                    gap-4
                    px-5
                    h-[72px]
                    rounded-2xl
                    hover:bg-gray-50
                    transition-all
                    lg:flex-1
                  "
                >

                  <div className="text-primary text-2xl shrink-0">

                    <FaMapMarkerAlt />

                  </div>

                  <div className="flex-1 min-w-0">

                    <p className="text-sm text-gray-400 mb-1">
                      Destination
                    </p>

                    <input
                      type="text"
                      placeholder="Search places"
                      className="
                        w-full
                        outline-none
                        text-base
                        font-semibold
                        text-dark
                        placeholder:text-gray-300
                        bg-transparent
                      "
                    />

                  </div>

                </div>

                {/* Date */}
                <div
                  className="
                    flex
                    items-center
                    gap-4
                    px-5
                    h-[72px]
                    rounded-2xl
                    hover:bg-gray-50
                    transition-all
                    lg:flex-1
                  "
                >

                  <div className="text-primary text-2xl shrink-0">

                    <MdOutlineDateRange />

                  </div>

                  <div className="flex-1 min-w-0">

                    <p className="text-sm text-gray-400 mb-1">
                      Date
                    </p>

                    <input
                      type="date"
                      className="
                        w-full
                        min-w-0
                        outline-none
                        text-base
                        font-semibold
                        text-dark
                        bg-transparent
                      "
                    />

                  </div>

                </div>

                {/* Guests */}
                <div
                  className="
                    flex
                    items-center
                    gap-4
                    px-5
                    h-[72px]
                    rounded-2xl
                    hover:bg-gray-50
                    transition-all
                    lg:flex-1
                  "
                >

                  <div className="text-primary text-2xl shrink-0">

                    <IoPeopleOutline />

                  </div>

                  <div className="flex-1 min-w-0">

                    <p className="text-sm text-gray-400 mb-1">
                      Guests
                    </p>

                    <select
                      className="
                        w-full
                        min-w-0
                        outline-none
                        text-base
                        font-semibold
                        text-dark
                        bg-transparent
                      "
                    >

                      <option>
                        2 Guests
                      </option>

                      <option>
                        4 Guests
                      </option>

                      <option>
                        6 Guests
                      </option>

                    </select>

                  </div>

                </div>

                {/* Search Button */}
                <button
                  className="
                    h-[72px]
                    px-8
                    rounded-2xl
                    bg-primary
                    text-white
                    font-bold
                    text-lg
                    hover:opacity-90
                    transition-all
                    shadow-lg
                    w-full
                    lg:w-[150px]
                    shrink-0
                    flex
                    items-center
                    justify-center
                  "
                >

                  Search

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}

export default Hero