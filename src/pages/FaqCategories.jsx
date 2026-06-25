function FaqCategories({

  categories = [],

  selected,

  onSelect,

}) {

  return (

    <div
      className="
        flex
        flex-wrap
        justify-center
        gap-3
      "
    >

      {categories.map((category) => (

        <button
          key={category}
          onClick={() =>
            onSelect(category)
          }
          className={`
            px-5
            py-2
            rounded-full
            transition

            ${
              selected === category
                ? "bg-primary text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }
          `}
        >
          {category}
        </button>

      ))}

    </div>

  );

}

export default FaqCategories;