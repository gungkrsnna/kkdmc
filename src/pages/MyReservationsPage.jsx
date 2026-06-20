import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import toast from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import { getMyReservations } from "../services/reservationService";

function MyReservationsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    loadReservations();

    if (location.state?.success) {

      toast.success(
        location.state.success
      );

      navigate(
        location.pathname,
        {
          replace: true,
          state: {},
        }
      );
    }
  }, []);

  const loadReservations = async () => {
    try {
      const data = await getMyReservations();

      setReservations(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "quoted":
        return "bg-blue-100 text-blue-700";

      case "confirmed":
        return "bg-green-100 text-green-700";

      case "cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <MainLayout>

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl font-black mb-2">
            My Reservations
          </h1>

          <p className="text-gray-500 mb-10">
            Track your reservations here.
          </p>

          {loading ? (

            <div className="text-center py-20">
              Loading...
            </div>

          ) : reservations.length === 0 ? (

            <div className="bg-white border rounded-3xl p-10 text-center">
              No reservations found.
            </div>

          ) : (

            <div className="space-y-6">

              {reservations.map((item) => (

                <div
                  key={item.id}
                  className="
                    bg-white
                    border
                    rounded-3xl
                    p-6
                  "
                >

                  <div className="flex justify-between items-start mb-6">

                    <div>

                      <h3 className="font-bold text-xl">
                        {item.product_name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        Submitted on{" "}
                        {new Date(
                          item.created_at
                        ).toLocaleDateString()}
                      </p>

                    </div>

                    <span
                      className={`
                        px-4 py-2 rounded-full text-sm font-semibold
                        ${getStatusClass(item.status)}
                      `}
                    >
                      {item.status}
                    </span>

                  </div>

                  <div className="grid md:grid-cols-4 gap-4">

                    <div>
                      <p className="text-xs text-gray-500">
                        Arrival Date
                      </p>

                      <p className="font-medium">
                        {item.arrival_date || "-"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Departure Date
                      </p>

                      <p className="font-medium">
                        {item.departure_date || "-"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Guests
                      </p>

                      <p className="font-medium">
                        {item.adult || 0} Adult,
                        {" "}
                        {item.child || 0} Child,
                        {" "}
                        {item.infant || 0} Infant
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Nationality
                      </p>

                      <p className="font-medium">
                        {item.nationality || "-"}
                      </p>
                    </div>

                  </div>

                  {item.admin_notes && (

                    <div className="mt-6 bg-gray-50 rounded-2xl p-4">

                      <p className="text-sm font-semibold mb-2">
                        Admin Notes
                      </p>

                      <p className="text-gray-700">
                        {item.admin_notes}
                      </p>

                    </div>

                  )}

                </div>

              ))}

            </div>

          )}

        </div>

      </section>

    </MainLayout>
  );
}

export default MyReservationsPage;