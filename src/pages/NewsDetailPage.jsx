import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import {
  Calendar,
  User,
  ChevronRight,
} from "lucide-react";

import {
  getPublicNewsDetail,
} from "../services/newsService";

function NewsDetailPage() {

  const { slug } = useParams();

  const [article, setArticle] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    loadArticle();

  }, [slug]);

  const loadArticle = async () => {

    try {

      const data =
        await getPublicNewsDetail(slug);

      setArticle(data);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (

      <MainLayout>

        <div className="pt-40 pb-40 text-center">

          Loading...

        </div>

      </MainLayout>

    );

  }

  if (!article) {

    return (

      <MainLayout>

        <div className="pt-40 pb-40 text-center">

          Article not found.

        </div>

      </MainLayout>

    );

  }

  return (

    <MainLayout>

      {/* Hero */}

      <section
        className="
          pt-36
          pb-16
          bg-gradient-to-r
          from-slate-50
          via-blue-50
          to-indigo-100
        "
      >

        <div className="max-w-5xl mx-auto px-6">

          {/* Breadcrumb */}

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">

            <Link
              to="/"
              className="hover:text-primary"
            >
              Home
            </Link>

            <ChevronRight size={16} />

            <Link
              to="/news"
              className="hover:text-primary"
            >
              News
            </Link>

            <ChevronRight size={16} />

            <span>

              {article.news_categories?.name}

            </span>

          </div>

          <p className="uppercase tracking-widest text-primary font-semibold mb-4">

            KK DMC Travel Journal

          </p>

          <h1
            className="
              text-5xl
              lg:text-6xl
              font-black
              leading-tight
              max-w-4xl
            "
          >

            {article.title}

          </h1>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-6
              mt-8
              text-gray-500
            "
          >

            <span className="flex items-center gap-2">

              <Calendar size={18} />

              {new Date(article.published_at)
                .toLocaleDateString(
                  "en-GB",
                  {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  }
                )}

            </span>

            <span className="flex items-center gap-2">

              <User size={18} />

              {article.author}

            </span>

            <span
              className="
                px-4
                py-2
                rounded-full
                bg-white
                shadow-sm
                text-primary
                font-medium
              "
            >

              {article.news_categories?.name}

            </span>

          </div>

        </div>

      </section>

      {/* Image */}

      <section className="py-12">

        <div className="max-w-6xl mx-auto px-6">

          <img
            src={article.featured_image}
            alt={article.title}
            className="
              w-full
              rounded-[32px]
              object-cover
              max-h-[650px]
            "
          />

        </div>

      </section>

      {/* Content */}

      <section className="pb-24">

        <div className="max-w-4xl mx-auto px-6">

          {article.summary && (

            <div
              className="
                text-xl
                leading-relaxed
                text-gray-600
                mb-12
              "
            >

              {article.summary}

            </div>

          )}

          <div
            className="
              prose
              prose-lg
              max-w-none
            "
            dangerouslySetInnerHTML={{
              __html: article.content,
            }}
          />

        </div>

      </section>

    </MainLayout>

  );

}

export default NewsDetailPage;