import {
  ChevronDown,
} from "lucide-react";

function FaqItem({
  faq,
  open,
  onToggle,
}) {
  return (

    <div
      className="
        bg-white
        rounded-2xl
        border
        overflow-hidden
      "
    >

      <button
        onClick={onToggle}
        className="
          w-full
          flex
          items-center
          justify-between
          px-6
          py-5
          text-left
        "
      >

        <h3
          className="
            font-semibold
            text-lg
          "
        >
          {faq.question}
        </h3>

        <ChevronDown
          className={`
            transition-transform
            duration-300

            ${
              open
                ? "rotate-180"
                : ""
            }
          `}
        />

      </button>

      <div
        className={`
          overflow-hidden
          transition-all
          duration-300

          ${
            open
              ? "max-h-96"
              : "max-h-0"
          }
        `}
      >

        <div
          className="
            px-6
            pb-6
            text-gray-600
            leading-8
          "
          dangerouslySetInnerHTML={{
            __html:
              faq.answer,
          }}
        />

      </div>

    </div>

  );
}

export default FaqItem;