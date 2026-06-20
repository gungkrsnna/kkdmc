import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.png";

function VerifyEmailNotice() {
  return (
    <div
      className="
        min-h-screen
        bg-white
        flex
        items-center
        justify-center
        px-6
      "
    >
      <div
        className="
          max-w-md
          w-full
          bg-white
          rounded-[32px]
          p-10
          text-center
          border
          border-gray-100
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        "
      >
        <img
          src={Logo}
          alt="KK DMC"
          className="h-20 mx-auto mb-6"
        />

        <div
          className="
            w-20
            h-20
            mx-auto
            rounded-full
            bg-green-100
            flex
            items-center
            justify-center
            text-4xl
            mb-6
          "
        >
          ✉️
        </div>

        <h1 className="text-3xl font-black mb-4">
          Verify Your Email
        </h1>

        <p className="text-gray-500 leading-relaxed mb-8">
          We've sent a verification link to your email
          address. Please check your inbox and verify
          your account before logging in.
        </p>

        <Link
          to="/login"
          className="
            block
            w-full
            bg-primary
            text-white
            py-4
            rounded-2xl
            font-semibold
          "
        >
          Back to Login
        </Link>

      </div>
    </div>
  );
}

export default VerifyEmailNotice;