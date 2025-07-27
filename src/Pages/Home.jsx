import React from 'react'
import HeroSection from '../Components/HeroSection'
import WhyChooseUs from '../Components/WhyChooseUs'
import WebsiteStats from '../Components/WebsiteStats'
import CollectionAbout from '../Components/CollectionAbout'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs/>
      <WebsiteStats/>
      <CollectionAbout/>
    </div>
  )
}

export default Home
