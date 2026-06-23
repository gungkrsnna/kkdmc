import {
    useEffect,
    useState,
  } from "react";

import { useSearchParams }
from "react-router-dom";

import MainLayout from '../layouts/MainLayout'

import ActivityCard from '../components/cards/ActivityCard'

import HeroPage from '../components/sections/HeroPage'

function Activities() {

  const [searchParams] =
  useSearchParams();

  const [hero, setHero] =
  useState(null);

  const [activities, setActivities] =
    useState([]);

  const [filteredActivities, setFilteredActivities] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [sort, setSort] =
    useState("");

  const [selectedSubCategory,
    setSelectedSubCategory] =
    useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("");

  const [categories, setCategories] =
    useState([]);

  const [maxAvailablePrice, setMaxAvailablePrice] =
    useState(0);

  const [maxPrice, setMaxPrice] =
    useState(0);

const loadCategories =
  async () => {

    const response =
      await fetch(
        "https://kkdmc.gladiatoraruna.com/api/categories"
      );

    const data =
      await response.json();

    setCategories(data);

  };

const loadHero =
  async () => {

    try {

      const response =
        await fetch(
          "https://kkdmc.gladiatoraruna.com/api/home-sections/activities_hero"
        );

      const data =
        await response.json();

      setHero(data);

    } catch (error) {

      console.error(error);

    }

  };

useEffect(() => {

  loadActivities();
  loadCategories();
  loadHero();

}, []);

useEffect(() => {

  const categorySlug =
    searchParams.get("category");

  const subCategorySlug =
    searchParams.get("subcategory");

  if (
    categorySlug &&
    categories.length > 0
  ) {

    const category =
      categories.find(
        c =>
          c.slug === categorySlug
      );

    if (category) {

      setSelectedCategory(
        category.id
      );

    }

  }

  if (
    subCategorySlug &&
    categories.length > 0
  ) {

    const subCategory =
      categories
        .flatMap(
          c =>
            c.sub_categories || []
        )
        .find(
          s =>
            s.slug ===
            subCategorySlug
        );

    if (subCategory) {

      setSelectedSubCategory(
        subCategory.id
      );

    }

  }

}, [
  searchParams,
  categories
]);

const loadActivities =
  async () => {

    try {

      const response =
        await fetch(
          "https://kkdmc.gladiatoraruna.com/api/tour-packages"
        );

      const data =
        await response.json();

      setActivities(data);
      setFilteredActivities(data);

      const highestPrice =
        Math.max(
          ...data.map(
            item =>
              item.start_price || 0
          )
        );

      setMaxAvailablePrice(
        highestPrice
      );

      setMaxPrice(
        highestPrice
      );

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    let result =
      [...activities];

    if (search) {

      result =
        result.filter(
          (item) =>
            item.title
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              )
        );

    }

    if (selectedCategory) {

      result =
        result.filter(
          (item) =>
            item.category_id ===
            selectedCategory
        );

    }

    if (selectedSubCategory) {

      result =
        result.filter(
          item =>
            item.sub_category_id ===
            selectedSubCategory
        );

    }

    if (maxPrice) {

      result =
        result.filter(
          (item) =>
            item.start_price <=
            maxPrice
        );

    }

    if (
      sort ===
      "price_low"
    ) {

      result.sort(
        (a, b) =>
          a.start_price -
          b.start_price
      );

    }

    if (
      sort ===
      "price_high"
    ) {

      result.sort(
        (a, b) =>
          b.start_price -
          a.start_price
      );

    }

    if (
      sort ===
      "rating"
    ) {

      result.sort(
        (a, b) =>
          b.rating -
          a.rating
      );

    }

    setFilteredActivities(
      result
    );

  }, [
    activities,
    search,
    selectedCategory,
    sort,
    maxPrice
  ]);

  return (

    <MainLayout>

      {/* Hero */}
      <HeroPage
        badge={
          hero?.badge ||
          "Explore Activities"
        }
        title={
          hero?.title ||
          "Find Amazing Experiences In Bali"
        }
        description={
          hero?.description ||
          ""
        }
        image={
          hero?.image_url ||
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4"
        }
      />

      {/* Content */}
      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* SIDEBAR */}
            <div>

              <div
                className="
                  sticky
                  top-28
                  border
                  rounded-3xl
                  p-7
                "
              >

                <h2 className="text-2xl font-bold mb-8">
                  Filters
                </h2>

                {/* Search */}
                <div className="mb-7">

                  <label className="font-semibold mb-3 block">
                    Search
                  </label>

                  <input
                    type="text"
                    value={search}
                    onChange={(e) =>
                      setSearch(
                        e.target.value
                      )
                    }
                    placeholder="Search activity"
                    className="
                      w-full
                      border
                      rounded-2xl
                      h-12
                      px-4
                      outline-none
                    "
                  />

                </div>

                {/* Category */}
                <div className="mb-7">

                  <label className="font-semibold mb-4 block">
                    Category
                  </label>

                  <div className="space-y-3">

  <button
    onClick={() =>
      setSelectedCategory("")
    }
    className={`
      block
      text-left
      hover:text-primary
      ${
        selectedCategory === ""
          ? "font-bold text-primary"
          : ""
      }
    `}
  >
    All Categories
  </button>

  {categories.map(
    (category) => (

      <button
        key={category.id}
        onClick={() =>
          setSelectedCategory(
            category.id
          )
        }
        className={`
          block
          text-left
          hover:text-primary
          ${
            selectedCategory ===
            category.id
              ? "font-bold text-primary"
              : ""
          }
        `}
      >
        {category.title}
      </button>

    )
  )}

</div>

                </div>

                {/* Sub Category */}
{selectedCategory && (

  <div className="mb-7">

    <label className="font-semibold mb-4 block">
      Sub Category
    </label>

    <div className="space-y-3">

      <button
        onClick={() =>
          setSelectedSubCategory("")
        }
        className={`
          block
          text-left
          hover:text-primary

          ${
            selectedSubCategory === ""
              ? "font-bold text-primary"
              : ""
          }
        `}
      >
        All Sub Categories
      </button>

      {categories
        .find(
          c =>
            c.id ===
            selectedCategory
        )
        ?.sub_categories
        ?.map(
          sub => (

            <button
              key={sub.id}
              onClick={() =>
                setSelectedSubCategory(
                  sub.id
                )
              }
              className={`
                block
                text-left
                hover:text-primary

                ${
                  selectedSubCategory ===
                  sub.id
                    ? "font-bold text-primary"
                    : ""
                }
              `}
            >
              {sub.title}
            </button>

          )
        )}

    </div>

  </div>

)}

                {/* Price */}
                <div className="mb-7">

                  <label className="font-semibold mb-4 block">
                    Price Range
                  </label>

                  <input
                    type="range"
                    min="0"
                    max={maxAvailablePrice}
                    step="50000"
                    value={maxPrice}
                    onChange={(e) =>
                      setMaxPrice(
                        Number(e.target.value)
                      )
                    }
                    className="w-full"
                  />

                  <p className="mt-2 text-sm text-gray-600">
                    Up to Rp{" "}
                    {maxPrice.toLocaleString(
                      "id-ID"
                    )}
                  </p>

                </div>

                {/* Rating */}
                {/* <div>

                  <label className="font-semibold mb-4 block">
                    Rating
                  </label>

                  <div className="space-y-3 text-gray-600">

                    <div>⭐ 5 Stars</div>
                    <div>⭐ 4 Stars</div>
                    <div>⭐ 3 Stars</div>

                  </div>

                </div> */}

              </div>

            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-3">

              {/* Top Bar */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

                <p className="text-gray-500">

                  Showing {filteredActivities.length} activities

                </p>

                <select
                  value={sort}
                  onChange={(e) =>
                    setSort(
                      e.target.value
                    )
                  }
                  className="
                    border
                    rounded-2xl
                    h-12
                    px-5
                    outline-none
                  "
                >
                  <option value="">
                    Sort by
                  </option>

                  <option value="price_low">
                    Price Low to High
                  </option>

                  <option value="price_high">
                    Price High to Low
                  </option>

                  <option value="rating">
                    Top Rated
                  </option>

                </select>

              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                {filteredActivities.map(
                  (item) => (

                    <ActivityCard
                      key={item.id}
                      item={item}
                    />

                  )
                )}

              </div>

              {/* Load More */}
              {/* <div className="text-center mt-16">

                <button
                  className="
                    border
                    border-gray-300
                    px-8
                    h-14
                    rounded-2xl
                    font-semibold
                    hover:bg-soft
                    transition
                  "
                >
                  Load More
                </button>

              </div> */}

            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  )
}

export default Activities