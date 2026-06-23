import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import {
  getTourPackages,
} from "../../services/tourPackageService";

import ActivityCard from "../cards/ActivityCard";

function PopularActivities() {

  const [section, setSection] =
  useState(null);

  const [activities,
    setActivities] =
    useState([]);

  const [loading,
    setLoading] =
    useState(true);

  useEffect(() => {

    loadActivities();

  }, []);

  useEffect(() => {

    loadSection();
    loadActivities();

  }, []);

  const loadSection =
  async () => {

    const response =
      await fetch(
        "https://kkdmc.gladiatoraruna.com/api/home-sections/popular_activities"
      );

    const data =
      await response.json();

    setSection(data);

  };

  const loadActivities =
    async () => {

      try {

        const data =
          await getTourPackages();   

        setActivities(
          data
            .filter(
              item =>
                item.is_active
            )
            .slice(0, 4)
        );

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

  if (
    !loading &&
    activities.length === 0
  ) {
    return null;
  }

  return (

    <section className="py-20 bg-soft">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between mb-12">

          <div>

            <p className="text-primary font-semibold mb-2">
              {section?.badge}
            </p>

            <h2 className="text-4xl font-black">
              {section?.title}
            </h2>

          </div>

          <Link
            to="/tour-packages"
            className="
              hidden
              md:block
              border
              border-gray-300
              px-5
              py-3
              rounded-2xl
              font-semibold
              hover:bg-white
              transition
            "
          >
            Explore More
          </Link>

        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >

          {activities.map(
            (item) => (

              <ActivityCard
                key={item.id}
                item={item}
              />

            )
          )}

        </div>

      </div>

    </section>

  );
}

export default PopularActivities;