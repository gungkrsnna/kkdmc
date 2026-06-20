import MainLayout from "../layouts/MainLayout";

function BookingSuccess() {

  return (

    <MainLayout>

      <div className="py-40 text-center">

        <h1 className="text-5xl font-black mb-6">

          Booking Submitted

        </h1>

        <p className="text-gray-500 text-lg">

          Your payment proof has been received.

        </p>

        <p className="text-gray-500">

          Our team will review your payment within 1–3 business days.

        </p>

      </div>

    </MainLayout>

  );

}

export default BookingSuccess;