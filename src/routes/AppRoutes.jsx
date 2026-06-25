import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import ActivityDetail from '../pages/ActivityDetail'
import Activities from '../pages/Activities'
import Booking from '../pages/Booking'
import Checkout from '../pages/Checkout'
import DestinationDetail from '../pages/DestinationDetail'
import Destinations from '../pages/Destinations'
import Transport from '../pages/Transport'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AboutUs from '../pages/AboutUs'
import ReservationPage from "../pages/ReservationPage";
import InquiryPage from "../pages/InquiryPage";
import VerifyEmailNotice from '../pages/VerifyEmailNotice'
import ProtectedRoute from '../components/auth/ProtectedRoute'
import MyInquiriesPage from '../pages/MyInquiriesPage'
import MyReservationsPage from '../pages/MyReservationsPage'
import BookingSuccess from '../pages/BookingSuccess'
import MyBookingsPage
from "../pages/MyBookingsPage";
import BookingDetailPage from '../pages/BookingDetailPage'
import FaqPage from "../pages/FaqPage";

function AppRoutes() {
  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/activity/:slug"
        element={<ActivityDetail />}
      />

      <Route
        path="/activities"
        element={<Activities />}
      />

      <Route
        path="/booking/:id"
        element={
          <ProtectedRoute>
            <Booking />
          </ProtectedRoute>
        }
      />

      <Route
        path="/checkout/:id"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />

      <Route
        path="/destination/:slug"
        element={<DestinationDetail />}
      />

      <Route
        path="/destinations"
        element={<Activities />}
      />

      <Route
        path="/transport"
        element={<Transport />}
      />

      <Route
        path="/faq"
        element={<FaqPage />}
      />

      <Route
        path="/about"
        element={<AboutUs />}
      />

      <Route
        path="/reservation"
        element={
          <ProtectedRoute>
            <ReservationPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/inquiry"
        element={
          <ProtectedRoute>
            <InquiryPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/account/inquiries"
        element={
          <ProtectedRoute>
            <MyInquiriesPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/account/reservations"
        element={
          <ProtectedRoute>
            <MyReservationsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/verify-email"
        element={<VerifyEmailNotice />}
      />

      <Route
        path="/booking-success/:id"
        element={
          <ProtectedRoute>
            <BookingSuccess />
          </ProtectedRoute>
        }
      />

      <Route
        path="/account/bookings"
        element={
          <ProtectedRoute>
            <MyBookingsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/account/bookings/:id"
        element={
          <ProtectedRoute>
            <BookingDetailPage />
          </ProtectedRoute>
        }
      />

    </Routes>

  )
}

export default AppRoutes