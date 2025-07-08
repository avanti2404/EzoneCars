import React from 'react'
import Hero from '../components/Homepage/Hero'
import AboutUs from '../components/Homepage/AboutUs'
import CarRentalSearch from '../components/Homepage/CarRentalSearch'
import HowItWorks from '../components/Homepage/HowItWorks'
import PopularDestinations1 from '../components/Homepage/PopularDestinations1'
import AchievementsSection from '../components/Homepage/AchievementsSection'

const Home = () => {
  return (
    <div className='w-full'>
      <Hero />

      <div className="max-w-7xl mx-auto px-4 py-10 md:py-5 bg-white shadow-lg relative md:-mt-20 lg:-mt-24">
        <CarRentalSearch />
      </div>

      <AboutUs />
      <PopularDestinations1/>
      <AchievementsSection/>
      <HowItWorks />
    </div>
  )
}
export default Home
