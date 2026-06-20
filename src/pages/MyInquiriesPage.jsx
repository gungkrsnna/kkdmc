import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { getMyInquiries } from "../services/inquiryService";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";

function MyInquiriesPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [inquiries, setInquiries] = useState([]);

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

  useEffect(() => {
    loadInquiries();

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

  useEffect(() => {
    loadInquiries();
  }, []);

  const loadInquiries = async () => {
    try {
      const data = await getMyInquiries();

      setInquiries(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl font-black mb-2">
            My Inquiries
          </h1>

          <p className="text-gray-500 mb-10">
            Track your travel inquiries.
          </p>

           {loading ? (
            <div>Loading...</div>
            ) : inquiries.length === 0 ? (
            <div
                className="
                bg-white
                rounded-3xl
                p-10
                text-center
                border
                "
            >
                No inquiries found.
            </div>
            ) : (
            <div className="space-y-6">

                {inquiries.map((item) => (

                <div
                    key={item.id}
                    className="
                    bg-white
                    rounded-3xl
                    border
                    p-6
                    "
                >
                    <div className="flex justify-between items-start">

                    <div>

                        <h3 className="font-bold text-xl mb-2">
                        {item.destination}
                        </h3>

                        <p className="text-gray-500">
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

                </div>

                ))}

            </div>
            )}

        </div>

      </section>

    </MainLayout>
  );
}

export default MyInquiriesPage;