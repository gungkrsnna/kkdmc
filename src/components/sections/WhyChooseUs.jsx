import {
  useEffect,
  useState,
} from "react";

import {
  FaShieldAlt,
  FaWallet,
  FaHeadset,
} from "react-icons/fa";

import {
  MdEventAvailable,
} from "react-icons/md";

function WhyChooseUs() {
  const [benefits, setBenefits] =
  useState([]);

  const [section, setSection] =
    useState(null);

  const iconMap = {

  shield:
    FaShieldAlt,

  wallet:
    FaWallet,

  headset:
    FaHeadset,

  calendar:
    MdEventAvailable,

};


  useEffect(() => {

    loadSection();
    loadBenefits();

  }, []);

  const loadSection =
    async () => {

      const response =
        await fetch(
          "http://localhost:3001/api/home-sections/why_choose_us"
        );

      const data =
        await response.json();

      setSection(data);

    };

  const loadBenefits =
    async () => {

      const response =
        await fetch(
          "http://localhost:3001/api/home-sections/benefits"
        );

      const data =
        await response.json();

      setBenefits(data);

    };

  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <p className="text-primary font-semibold mb-3">
            {section?.badge}
          </p>

          <h2 className="text-5xl font-black mb-5">
            {section?.title}
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {section?.description}
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {Array.isArray(benefits) &&
  benefits.map((item) => {

            const Icon =
  iconMap[item.icon];

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
                  {Icon && <Icon />}
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