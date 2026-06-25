import {
  useEffect,
  useState,
} from "react";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import Logo from "../../assets/logo/logo-footer.png";

function Footer() {
  const [socials, setSocials] =
  useState([]);

  useEffect(() => {

  loadSocials();

}, []);

const loadSocials =
  async () => {

    try {

      const response =
        await fetch(
          "https://kkdmc.gladiatoraruna.com/api/social-media"
        );

      const data =
        await response.json();

      setSocials(data);

    } catch (error) {

      console.error(error);

    }

  };

  const getValue =
  (platform) => {

    return socials.find(
      item =>
        item.platform ===
        platform
    )?.value || "";

  };

  const getSocial =
  (platform) => {

    return socials.find(
      item =>
        item.platform ===
          platform &&
        item.is_active
    );

  };

  const instagram =
  getSocial(
    "instagram"
  );

const facebook =
  getSocial(
    "facebook"
  );

const twitter =
  getSocial(
    "x"
  );

  return (
    <footer className="bg-dark text-white pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <img
              src={Logo}
              alt="KK DMC"
              className="h-20 w-auto object-contain mb-6"
            />

            {/* <h2 className="text-3xl font-black mb-4">
              KK DMC
            </h2> */}

            <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
              Premium Bali destination management company
              providing unforgettable travel experiences,
              curated tours, transportation, and luxury
              island adventures.
            </p>

            <div className="flex items-center gap-4">

  {instagram && (

    <a
      href={
        instagram.value
      }
      target="_blank"
      rel="noreferrer"
      className="
        w-12 h-12
        rounded-2xl
        bg-white/10
        flex
        items-center
        justify-center
        hover:bg-primary
        transition
      "
    >
      <FaInstagram />
    </a>

  )}

  {facebook && (

    <a
      href={
        facebook.value
      }
      target="_blank"
      rel="noreferrer"
      className="
        w-12 h-12
        rounded-2xl
        bg-white/10
        flex
        items-center
        justify-center
        hover:bg-primary
        transition
      "
    >
      <FaFacebookF />
    </a>

  )}

  {twitter && (

    <a
      href={
        twitter.value
      }
      target="_blank"
      rel="noreferrer"
      className="
        w-12 h-12
        rounded-2xl
        bg-white/10
        flex
        items-center
        justify-center
        hover:bg-primary
        transition
      "
    >
      <FaTwitter />
    </a>

  )}

</div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="font-bold text-lg mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="hover:text-white transition"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  to="/reservation"
                  className="hover:text-white transition"
                >
                  Reservation
                </Link>
              </li>

              <li>
                <Link
                  to="/inquiry"
                  className="hover:text-white transition"
                >
                  Inquiry
                </Link>
              </li>

            </ul>

          </div>

          {/* TOP DESTINATIONS */}
          <div>

            <h3 className="font-bold text-lg mb-6">
              Top Destinations
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>Bali</li>
              <li>Labuan Bajo</li>
              <li>Japan</li>
              <li>Thailand</li>
              <li>Singapore</li>
              <li>Vietnam</li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="font-bold text-lg mb-6">
              Contact Us
            </h3>

            <ul className="space-y-4 text-gray-400 text-sm mb-6">

              <li>
                {getValue("email")}
              </li>

              <li>
                {getValue("phone")}
              </li>

              <li>
                {getValue("location")}
              </li>
              <li>Mon - Fri, 08:00 - 18:00</li>

            </ul>

            {/* Reservation */}
            <Link
              to="/reservation"
              className="
                block
                text-center
                bg-primary
                py-3
                rounded-xl
                font-semibold
                mb-3
                hover:opacity-90
                transition
              "
            >
              Reservation
            </Link>

            {/* Inquiry */}
            <Link
              to="/inquiry"
              className="
                block
                text-center
                border
                border-white/20
                py-3
                rounded-xl
                font-semibold
                hover:bg-white/10
                transition
              "
            >
              Inquiry
            </Link>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-sm">
            © 2026 KK DMC. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed for premium Bali travel experiences.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;