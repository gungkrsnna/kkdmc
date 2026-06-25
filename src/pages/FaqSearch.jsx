import {
  Search,
} from "lucide-react";

function FaqSearch({
  value,
  onChange,
}) {

  return (

    <div
      className="
        relative
        max-w-2xl
        mx-auto
      "
    >

      <Search
        className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          text-gray-400
        "
        size={20}
      />

      <input
        type="text"
        value={value}
        onChange={(e)=>
          onChange(
            e.target.value
          )
        }
        placeholder="Search FAQ..."
        className="
          w-full
          h-16
          pl-14
          pr-6
          rounded-2xl
          border
          shadow-sm
          focus:outline-none
        "
      />

    </div>

  );

}

export default FaqSearch;