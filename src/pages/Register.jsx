import Logo from '../assets/logo/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { supabase }
from '../lib/supabase'
import axios from 'axios'

function Register() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleGoogleLogin =
  async () => {

    const { error } =
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo:
            window.location.origin,
        },
      });

    if (error) {
      setError(error.message);
    }

  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError(
        'Password confirmation does not match'
      )
      return
    }

    try {
      setLoading(true)

      const { error } =
        await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name:
                formData.name,
            },
          },
        })

      if (error) throw error

      navigate('/verify-email')
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="
        min-h-screen
        bg-white
        flex
        items-center
        justify-center
        px-6
        py-12
      "
    >

      <div
        className="
          w-full
          max-w-md
          bg-white
          rounded-[32px]
          p-8
          md:p-10
          border
          border-gray-100
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        "
      >

        {/* Logo */}
        <div className="text-center mb-8">

          <img
            src={Logo}
            alt="KK DMC"
            className="h-20 mx-auto mb-6"
          />

          <p
            className="
              text-primary
              text-sm
              font-semibold
              tracking-widest
              uppercase
              mb-3
            "
          >
            KK DMC Account
          </p>

          <h1 className="text-4xl font-black mb-3">
            Create Account
          </h1>

          <p className="text-gray-500 leading-relaxed">
            Join KK DMC and start exploring Bali.
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="
              w-full
              h-14
              px-5
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              focus:bg-white
              focus:border-primary
              outline-none
              transition
            "
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="
              w-full
              h-14
              px-5
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              focus:bg-white
              focus:border-primary
              outline-none
              transition
            "
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="
              w-full
              h-14
              px-5
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              focus:bg-white
              focus:border-primary
              outline-none
              transition
            "
          />

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="
              w-full
              h-14
              px-5
              rounded-2xl
              border
              border-gray-200
              bg-gray-50
              focus:bg-white
              focus:border-primary
              outline-none
              transition
            "
          />

          {error && (
            <div
              className="
                bg-red-50
                border
                border-red-200
                text-red-600
                p-4
                rounded-2xl
                text-sm
              "
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              h-14
              rounded-2xl
              bg-primary
              text-white
              font-semibold
              shadow-lg
              hover:opacity-90
              transition
            "
          >
            {loading
              ? 'Creating Account...'
              : 'Create Account'}
          </button>

        </form>

        {/* Terms */}
        <p
          className="
            text-center
            text-sm
            text-gray-500
            mt-5
            leading-relaxed
          "
        >
          By creating an account, you agree to our
          <span className="text-primary font-medium">
            {' '}Terms of Service{' '}
          </span>
          and
          <span className="text-primary font-medium">
            {' '}Privacy Policy
          </span>
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 my-7">

          <div className="flex-1 h-px bg-gray-200" />

          <span className="text-sm text-gray-400">
            OR
          </span>

          <div className="flex-1 h-px bg-gray-200" />

        </div>

        {/* Google */}
        <button
        type="button"
        onClick={handleGoogleLogin}
          className="
            w-full
            h-14
            rounded-2xl
            border
            border-gray-200
            bg-white
            font-semibold
            hover:bg-gray-50
            transition
          "
        >
          Continue with Google
        </button>

        {/* Login */}
        <p
          className="
            text-center
            mt-7
            text-gray-500
          "
        >
          Already have an account?
          <Link
            to="/login"
            className="
              ml-2
              text-primary
              font-semibold
              hover:underline
            "
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  )
}

export default Register