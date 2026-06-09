import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-3
        bg-green-500
        text-white
        px-5
        py-4
        rounded-full
        shadow-xl
        hover:scale-105
        transition
      "
    >
      <FaWhatsapp size={28} />

      <span className="hidden md:block font-semibold">
        Chat With Us
      </span>
    </a>
  );
}

export default FloatingWhatsApp;