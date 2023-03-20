import React, { useState } from 'react'
import ChatButton from '../components/ChatButton'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import PreviewSection from '../components/PreviewSection'
import ParallaxSection from '../components/ParallaxSection'
import InfoSection from '../components/InfoSection'
import ParallaxSection2 from '../components/ParallaxSection2'
import DetailsSection from '../components/DetailsSection'
import ParallaxSection3 from '../components/ParallaxSection3'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <PreviewSection />
      <ParallaxSection />
      {/*<PreviewSection /> {/* temporary  */}
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <ParallaxSection2 />
      <DetailsSection />
      <ParallaxSection3 />
      <Footer />
      <ChatButton />
    </>
  )
}

export default Home