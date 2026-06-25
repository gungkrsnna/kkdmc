import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../layouts/MainLayout";
import HeroPage from "../components/sections/HeroPage";

import {
  getPublicFaqs,
} from "../services/faqService";
import FaqSearch from "./FaqSearch";
import FaqCategories from "./FaqCategories";
import FaqAccordion from "./FaqAccordion";
import NewsletterSection from "../components/sections/NewsletterSection";

function FaqPage() {

  const [faqs, setFaqs] =
    useState([]);

  const [filteredFaqs,
    setFilteredFaqs] =
    useState([]);

  const [categories,
    setCategories] =
    useState([]);

  const [selectedCategory,
    setSelectedCategory] =
    useState("all");

  const [search,
    setSearch] =
    useState("");

  const [openFaq,
    setOpenFaq] =
    useState(null);

  useEffect(() => {

    loadFaqs();

  }, []);

  const loadFaqs =
    async () => {

      try {

        const data =
          await getPublicFaqs();

        setFaqs(data);

        setFilteredFaqs(data);

        const unique =
          [
            "all",
            ...new Set(
              data.map(
                faq =>
                  faq.faq_categories
                    ?.name
              )
            ),
          ];

        setCategories(unique);

      } catch (error) {

        console.error(error);

      }

    };

  useEffect(() => {

    let result =
      [...faqs];

    if (
      selectedCategory !==
      "all"
    ) {

      result =
        result.filter(
          faq =>
            faq.faq_categories
              ?.name ===
            selectedCategory
        );

    }

    if (search) {

      result =
        result.filter(
          faq =>
            faq.question
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||

            faq.answer
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )
        );

    }

    setFilteredFaqs(
      result
    );

  }, [
    search,
    selectedCategory,
    faqs,
  ]);

  return (

    <MainLayout>

  <section
  className="
    relative
    overflow-hidden
    bg-gradient-to-br
    from-[#14213D]
    via-[#1E3A5F]
    to-[#284D73]
    py-28
  "
>
  <div className="max-w-6xl mx-auto px-6 text-center">

    <span
      className="
        inline-flex
        px-4
        py-2
        rounded-full
        bg-white/10
        text-white
        text-sm
        font-semibold
        mb-6
      "
    >
      SUPPORT CENTER
    </span>

    <h1
      className="
        text-5xl
        md:text-6xl
        font-black
        text-white
        mb-6
      "
    >
      Frequently Asked Questions
    </h1>

    <p
      className="
        max-w-3xl
        mx-auto
        text-lg
        text-white/80
      "
    >
      Find answers to the most common questions about
      booking, accommodation, transportation, payment,
      and our travel services.
    </p>

  </div>

  <div
    className="
      absolute
      -top-20
      -right-20
      w-72
      h-72
      rounded-full
      bg-white/10
      blur-3xl
    "
  />

  <div
    className="
      absolute
      -bottom-24
      -left-20
      w-72
      h-72
      rounded-full
      bg-white/5
      blur-3xl
    "
  />

</section>

  <section className="py-20 bg-gray-50">

    <div className="max-w-6xl mx-auto px-6 space-y-10">

      <FaqSearch
        value={search}
        onChange={setSearch}
      />

      <FaqCategories
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <FaqAccordion
        faqs={filteredFaqs}
      />

    </div>

  </section>

  <NewsletterSection />

</MainLayout>

  );

}

export default FaqPage;