import MainLayout from "../layouts/MainLayout";
import HeroPage from "../components/sections/HeroPage";

import {
  Link,
  useNavigate,
} from "react-router-dom";

const categories = [
  "All",
  "Travel Tips",
  "Destination",
  "Culture",
  "Adventure",
  "Promotion",
];

import {
  useEffect,
  useState,
} from "react";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  getPublicNews,
  getNewsCategories,
} from "../services/newsService";

function NewsPage() {
    const [articles, setArticles] =
    useState([]);

    const [categories, setCategories] =
    useState([]);

    const [selectedCategory,
    setSelectedCategory] =
    useState("all");

    const [loading,
    setLoading] =
    useState(true);

    const [pagination,
    setPagination] =
    useState({

        page:1,

        totalPages:1,

        total:0,

        limit:9,

    });

    useEffect(() => {

        loadNews();

        loadCategories();

    }, [
        pagination.page,
        selectedCategory
    ]);

    const loadCategories =
async ()=>{

    try{

        const data =
        await getNewsCategories();

        setCategories([

            {

                id:"all",

                name:"All"

            },

            ...data

        ]);

    }catch(err){

        console.error(err);

    }

};

const loadNews =
async ()=>{

    try{

        setLoading(true);

        const result =
        await getPublicNews({

            page:
            pagination.page,

            limit:9,

            category:
            selectedCategory==="all"
            ? null
            : selectedCategory,

        });

        setArticles(
            result.data
        );

        setPagination(

            result.pagination

        );

    }catch(err){

        console.error(err);

    }finally{

        setLoading(false);

    }

};

  return (
    <MainLayout>

      <section
  className="
    relative
    overflow-hidden
    pt-36
    pb-24
    bg-gradient-to-r
    from-slate-50
    via-blue-50
    to-indigo-100
  "
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="max-w-3xl">

      <p className="text-primary font-semibold mb-4 tracking-wide uppercase">
        KK DMC Travel Journal
      </p>

      <h1
        className="
          text-5xl
          lg:text-6xl
          font-black
          leading-tight
          text-dark
        "
      >
        Travel News &
        <br />
        Destination Stories
      </h1>

      <p
        className="
          mt-8
          text-lg
          leading-relaxed
          text-gray-600
          max-w-2xl
        "
      >
        Discover destination guides, travel inspiration,
        local culture, promotions, and the latest updates
        from KK DMC.
      </p>

    </div>

  </div>
</section>

      {/* Categories */}

      <section className="py-10 bg-soft">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-wrap gap-4 justify-center">

            {categories.map((item)=>(

<button

key={item.id}

onClick={()=>{

    setPagination(prev=>({

        ...prev,

        page:1,

    }));

    setSelectedCategory(
        item.id
    );

}}

className={`

px-6

h-12

rounded-full

font-medium

transition

${
selectedCategory===item.id

?

"bg-primary text-white"

:

"bg-white hover:bg-primary hover:text-white"

}

`}

>

{item.name}

</button>

))}

          </div>

        </div>

      </section>

      {/* Latest */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {articles.map((article) => (

              <article
                key={article.id}
                className="
                  bg-soft
                  rounded-[32px]
                  overflow-hidden
                  hover:-translate-y-2
                  transition
                  duration-300
                "
              >

                <img
  src={article.featured_image}
  alt={article.title}
  className="
    w-full
    h-64
    object-cover
  "
/>

                <div className="p-8">

                  <p className="text-primary font-semibold text-sm mb-3">
                    {article.category}
                  </p>

                  <h3 className="text-2xl font-bold mb-4 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {article.summary}
                  </p>

                  <div className="flex items-center justify-between">

                    <span className="text-sm text-gray-500">
                      {new Date(article.published_at).toLocaleDateString(
  "en-GB",
  {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }
)}
                    </span>

                    <Link
                    to={`/news/${article.slug}`}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        font-semibold
                        text-primary
                      "
                    >
                      Read More

                      <ArrowRight size={16} />

                    </Link>

                  </div>

                </div>

              </article>

            ))}

            

          </div>

          <div className="mt-16">

<div className="flex justify-between items-center">

<p className="text-gray-500">

Showing

{" "}

{articles.length}

{" "}

of

{" "}

{pagination.total}

articles

</p>

<div className="flex gap-2">

<button

disabled={
pagination.page===1
}

onClick={()=>

setPagination(prev=>({

...prev,

page:
prev.page-1

}))

}

className="

w-11

h-11

rounded-xl

border

flex

items-center

justify-center

disabled:opacity-40

"

>

<ChevronLeft size={18}/>

</button>

{

Array.from({

length:
pagination.totalPages

}).map((_,index)=>(

<button

key={index}

onClick={()=>

setPagination(prev=>({

...prev,

page:index+1

}))

}

className={`

w-11

h-11

rounded-xl

transition

${
pagination.page===index+1

?

"bg-primary text-white"

:

"border hover:bg-primary hover:text-white"

}

`}

>

{index+1}

</button>

))

}

<button

disabled={
pagination.page===pagination.totalPages
}

onClick={()=>

setPagination(prev=>({

...prev,

page:
prev.page+1

}))

}

className="

w-11

h-11

rounded-xl

border

flex

items-center

justify-center

disabled:opacity-40

"

>

<ChevronRight size={18}/>

</button>

</div>

</div>

</div>

        </div>

      </section>

    </MainLayout>
  );
}

export default NewsPage;