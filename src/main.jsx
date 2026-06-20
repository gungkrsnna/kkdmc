import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from "react-hot-toast";

import App from './App'
import { BookingProvider } from './context/BookingContext'

import 'swiper/css'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>

    <BookingProvider>

      <Toaster position="top-right" />

      <App />

    </BookingProvider>

  </BrowserRouter>

)