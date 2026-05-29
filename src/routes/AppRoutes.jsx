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
        path="/activity/:id"
        element={<ActivityDetail />}
      />

      <Route
  path="/activities"
  element={<Activities />}
/>

<Route
  path="/booking/:id"
  element={<Booking />}
/>

<Route
  path="/checkout/:id"
  element={<Checkout />}
/>

<Route
  path="/destination/:slug"
  element={<DestinationDetail />}
/>

<Route
  path="/destinations"
  element={<Destinations />}
/>

<Route
  path="/transport"
  element={<Transport />}
/>

    </Routes>

  )
}

export default AppRoutes