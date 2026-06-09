import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import FloatingWhatsApp from '../components/common/FloatingWhatsApp'

function MainLayout({ children }) {
  return (
    <div className="bg-white min-h-screen">

      <Navbar />

      {children}

      <Footer />

      <FloatingWhatsApp />

    </div>
  )
}

export default MainLayout