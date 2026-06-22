import { useNavigate } from 'react-router-dom'

import {
  FaGlobeAsia,
} from 'react-icons/fa'

import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from 'react-icons/hi'

import {
  Link,
  NavLink,
} from 'react-router-dom'

import Logo from '../../assets/logo/logo.png'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [open, setOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  useEffect(() => {

    const getUser = async () => {

      const {
        data: { user }
      } = await supabase.auth.getUser()

      setUser(user)

    }

    getUser()

  }, [])

  const handleLogout = async () => {

    await supabase.auth.signOut()

    setUser(null)

    navigate('/')

  }

  return (

    <>

      <nav className="w-full bg-white/80 backdrop-blur-md border-b border-black/[0.04] sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

          {/* Left */}
{/* Left */}
<Link
  to="/"
  className="flex items-center"
>

  <img
    src={Logo}
    alt="BaliTrip"
    className="h-20 w-auto object-contain"
  />

</Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">

  <NavLink
    to="/"
    className={({ isActive }) =>
      `
        transition
        relative
        pb-1

        ${isActive
          ? 'text-primary'
          : 'text-gray-700 hover:text-primary'
        }
      `
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/destinations"
    className={({ isActive }) =>
      `
        transition
        relative
        pb-1

        ${isActive
          ? 'text-primary'
          : 'text-gray-700 hover:text-primary'
        }
      `
    }
  >
    Products
  </NavLink>

  {/* <NavLink
    to="/activities"
    className={({ isActive }) =>
      `
        transition
        relative
        pb-1

        ${isActive
          ? 'text-primary'
          : 'text-gray-700 hover:text-primary'
        }
      `
    }
  >
    Activities
  </NavLink> */}

  {/* <NavLink
    to="/transport"
    className={({ isActive }) =>
      `
        transition
        relative
        pb-1

        ${isActive
          ? 'text-primary'
          : 'text-gray-700 hover:text-primary'
        }
      `
    }
  >
    Transport
  </NavLink> */}

  <NavLink
    to="/about"
    className={({ isActive }) =>
      `
        transition
        relative
        pb-1

        ${isActive
          ? 'text-primary'
          : 'text-gray-700 hover:text-primary'
        }
      `
    }
  >
    About Us
  </NavLink>

</div>

          {/* Right */}
          <div className="flex items-center gap-3">

            {/* Desktop Auth */}
            <div className="hidden lg:flex items-center gap-3">

              {!user ? (

                <>
                  <Link
                    to="/login"
                    className="
                      text-sm
                      font-medium
                      text-gray-700
                      hover:text-primary
                    "
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="
                      bg-primary
                      text-white
                      px-5
                      h-11
                      rounded-xl
                      text-sm
                      font-semibold
                      flex
                      items-center
                    "
                  >
                    Register
                  </Link>
                </>

              ) : (

                <div className="relative">

                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-gray-700
                      hover:text-primary
                      transition
                    "
                  >

                    <div
                      className="
                        w-9
                        h-9
                        rounded-full
                        bg-primary
                        text-white
                        flex
                        items-center
                        justify-center
                        text-sm
                        font-semibold
                      "
                    >
                      {user.user_metadata?.full_name?.charAt(0)}
                    </div>

                    <span>
                      {user.user_metadata?.full_name?.split(' ')[0]}
                    </span>

                  </button>

                  {profileOpen && (

                    <div
                      className="
                        absolute
                        top-full
                        right-0
                        mt-3
                        w-72
                        bg-white
                        rounded-2xl
                        shadow-xl
                        border
                        overflow-hidden
                        z-50
                      "
                    >

                      {/* User Info */}
                      <div className="p-5 border-b">

                        <p className="font-semibold">
                          {user.user_metadata?.full_name}
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                          {user.email}
                        </p>

                      </div>

                      {/* Menu */}
                      <div className="py-2">

                        <Link
                          to="/account/bookings"
                          className="
                            block
                            px-5
                            py-3
                            hover:bg-gray-50
                          "
                        >
                          My Bookings
                        </Link>

                        <Link
                          to="/account/reservations"
                          className="
                            block
                            px-5
                            py-3
                            hover:bg-gray-50
                          "
                        >
                          My Reservations
                        </Link>

                        <Link
                          to="/account/inquiries"
                          className="
                            block
                            px-5
                            py-3
                            hover:bg-gray-50
                          "
                        >
                          My Inquiries
                        </Link>

                      </div>

                      {/* Logout */}
                      <div className="border-t p-3">

                        <button
                          onClick={handleLogout}
                          className="
                            w-full
                            h-11
                            rounded-xl
                            text-red-600
                            hover:bg-red-50
                            font-medium
                          "
                        >
                          Logout
                        </button>

                      </div>

                    </div>

                  )}

                </div>

              )}

            </div>

            {/* Mobile Menu */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center"
            >

              <HiOutlineMenuAlt3 className="text-xl" />

            </button>

          </div>

        </div>

      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-all duration-300 ${
          open
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] transition-transform duration-300 shadow-2xl ${
          open
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
      >

        {/* Header */}
        <div className="h-16 px-5 border-b flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex items-center">

  <img
    src={Logo}
    alt="KK DMC"
    className="h-14 w-auto object-contain"
  />

</div>

          </div>

          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center"
          >

            <HiOutlineX className="text-xl" />

          </button>

        </div>

        {/* Menu */}
        <div className="p-5 flex flex-col">

        {user && (

  <div
    className="
      mb-5
      pb-5
      border-b
    "
  >

    <div className="flex items-center gap-3">

      <div
        className="
          w-12
          h-12
          rounded-full
          bg-primary
          text-white
          flex
          items-center
          justify-center
          font-semibold
        "
      >
        {user.user_metadata?.full_name
          ?.charAt(0)
          ?.toUpperCase()}
      </div>

      <div>

        <p className="font-semibold">
          {user.user_metadata?.full_name}
        </p>

        <p className="text-sm text-gray-500">
          {user.email}
        </p>

      </div>

    </div>

  </div>

)}

  <NavLink
    to="/"
    className={({ isActive }) =>
      `
        py-4
        border-b
        font-medium
        transition

        ${isActive
          ? 'text-primary'
          : 'text-gray-700'
        }
      `
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/destinations"
    className={({ isActive }) =>
      `
        py-4
        border-b
        font-medium
        transition

        ${isActive
          ? 'text-primary'
          : 'text-gray-700'
        }
      `
    }
  >
    Products
  </NavLink>

  {/* <NavLink
    to="/activities"
    className={({ isActive }) =>
      `
        py-4
        border-b
        font-medium
        transition

        ${isActive
          ? 'text-primary'
          : 'text-gray-700'
        }
      `
    }
  >
    Activities
  </NavLink> */}

  {/* <NavLink
    to="/transport"
    className={({ isActive }) =>
      `
        py-4
        border-b
        font-medium
        transition

        ${isActive
          ? 'text-primary'
          : 'text-gray-700'
        }
      `
    }
  >
    Transport
  </NavLink> */}

  <NavLink
    to="/about"
    className={({ isActive }) =>
      `
        py-4
        border-b
        font-medium
        transition

        ${isActive
          ? 'text-primary'
          : 'text-gray-700'
        }
      `
    }
  >
    About Us
  </NavLink>

  {user && (

  <>
    <div className="my-4 border-t" />

    <NavLink
      to="/profile"
      onClick={() => setOpen(false)}
      className="
        py-4
        border-b
        font-medium
      "
    >
      My Profile
    </NavLink>

    <NavLink
      to="/account/reservations"
      onClick={() => setOpen(false)}
      className="
        py-4
        border-b
        font-medium
      "
    >
      My Reservations
    </NavLink>

    <NavLink
       to="/account/inquiries"
      onClick={() => setOpen(false)}
      className="
        py-4
        border-b
        font-medium
      "
    >
      My Inquiries
    </NavLink>

  </>

)}

</div>

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 w-full p-5 border-t bg-white">

          {!user ? (

            <div className="grid grid-cols-2 gap-3">

              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="
                  h-12
                  rounded-xl
                  border
                  border-gray-300
                  font-semibold
                  flex
                  items-center
                  justify-center
                "
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="
                  h-12
                  rounded-xl
                  bg-primary
                  text-white
                  font-semibold
                  flex
                  items-center
                  justify-center
                "
              >
                Register
              </Link>

            </div>

          ) : (

            <div className="space-y-3">

              <div
                className="
                  text-center
                  font-semibold
                "
              >
                {user.user_metadata?.full_name ||
                  user.email}
              </div>

              <button
                onClick={handleLogout}
                className="
                  w-full
                  h-12
                  rounded-xl
                  border
                  font-semibold
                "
              >
                Logout
              </button>

            </div>

          )}

        </div>

      </div>

    </>

  )

}

export default Navbar