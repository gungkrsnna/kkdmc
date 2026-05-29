import MainLayout from '../layouts/MainLayout'
import Hero from '../components/hero/Hero'
import CategorySection from '../components/category/CategorySection'
import PopularActivities from '../components/sections/PopularActivities'
import DestinationSection from '../components/sections/DestinationSection'
import PromoBanner from '../components/sections/PromoBanner'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import TestimonialSection from '../components/sections/TestimonialSection'
import NewsletterSection from '../components/sections/NewsletterSection'

function Home() {
  return (
    <MainLayout>

      <Hero />

      <CategorySection />

      <PopularActivities />

      <DestinationSection />

      <PromoBanner />

      <WhyChooseUs />

      <TestimonialSection />

      <NewsletterSection />

    </MainLayout>
  )
}

export default Home