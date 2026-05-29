import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from 'react-icons/fa'

import Logo from '../../assets/logo/logo.png'

function Footer() {
  return (

    <footer className="bg-dark text-white pt-24 pb-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">

          {/* Brand */}
          {/* Brand */}
<div className="lg:col-span-2">

  {/* Logo */}
  <img
    src={Logo}
    alt="KK DMC"
    className="h-20 w-auto object-contain mb-6"
  />

  {/* Company Name */}
  <h2 className="text-3xl font-black mb-4">
    KK DMC
  </h2>

  {/* Description */}
  <p className="text-gray-400 leading-relaxed mb-8 max-w-md">

    Premium Bali destination management company
    providing unforgettable travel experiences,
    curated tours, transportation, and luxury
    island adventures.

  </p>

  {/* Social */}
  <div className="flex items-center gap-4">

    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-primary transition cursor-pointer">
      <FaInstagram />
    </div>

    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-primary transition cursor-pointer">
      <FaFacebookF />
    </div>

    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-primary transition cursor-pointer">
      <FaTwitter />
    </div>

  </div>

</div>

          {/* Company */}
          <div>

            <h3 className="font-bold text-lg mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>

            </ul>

          </div>

          {/* Support */}
          <div>

            <h3 className="font-bold text-lg mb-6">
              Support
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>FAQs</li>

            </ul>

          </div>

          {/* Destination */}
          <div>

            <h3 className="font-bold text-lg mb-6">
              Destination
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>Ubud</li>
              <li>Uluwatu</li>
              <li>Canggu</li>
              <li>Nusa Penida</li>

            </ul>

          </div>

        </div>

        {/* Bottom */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-sm">
            © 2026 KK DMC. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed with premium travel experience.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer