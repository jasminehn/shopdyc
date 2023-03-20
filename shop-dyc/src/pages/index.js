import React, { useState } from 'react'
import ChatButton from '../components/ChatButton'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import PreviewSection from '../components/PreviewSection'
import ParallaxSection from '../components/ParallaxSection'
import InfoSection from '../components/InfoSection'
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
      <ChatButton />
    </>
  )
}

export default Home