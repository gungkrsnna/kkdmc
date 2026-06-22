import { Link } from 'react-router-dom'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

import Logo from '../assets/logo/logo.png'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const {
        data,
        error
      } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      if (!data?.user) {
        setError("Unable to login.");
        return;
      }

      if (error) throw error;

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      navigate("/");

    } catch (error) {

      setError(
        error.message ||
        "Login failed"
      );

    } finally {

      setLoading(false);

    }
  };

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
            Welcome Back
          </h1>

          <p className="text-gray-500 leading-relaxed">
            Sign in to continue your Bali journey.
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-end">

            <Link
              to="/forgot-password"
              className="
                text-sm
                text-primary
                font-medium
                hover:underline
              "
            >
              Forgot Password?
            </Link>

          </div>

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
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

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

        {/* Register */}
        <p
          className="
            text-center
            mt-7
            text-gray-500
          "
        >

          Don't have an account?

          <Link
            to="/register"
            className="
              ml-2
              text-primary
              font-semibold
              hover:underline
            "
          >
            Create Account
          </Link>

        </p>

      </div>

    </div>
  )
}

export default Login