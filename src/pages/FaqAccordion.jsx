import { useState } from "react";
import FaqItem from "./FaqItem";

function FaqAccordion({
  faqs = [],
}) {

  const [openId, setOpenId] =
    useState(null);

  return (

    <div className="space-y-4">

      {faqs.map((faq) => (

        <FaqItem
          key={faq.id}
          faq={faq}
          open={openId === faq.id}
          onToggle={() =>
            setOpenId(
              openId === faq.id
                ? null
                : faq.id
            )
          }
        />

      ))}

    </div>

  );

}

export default FaqAccordion;