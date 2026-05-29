import {
  createContext,
  useContext,
  useState,
} from 'react'

const BookingContext = createContext()

export function BookingProvider({ children }) {

  const [bookingData, setBookingData] = useState({

    activity: null,

    selectedPackage: null,

    travelDate: '',

    guests: 2,

    traveler: {
      fullName: '',
      email: '',
      phone: '',
    },

    totalPrice: 0,

  })

  return (

    <BookingContext.Provider
      value={{
        bookingData,
        setBookingData,
      }}
    >

      {children}

    </BookingContext.Provider>

  )
}

export function useBooking() {
  return useContext(BookingContext)
}