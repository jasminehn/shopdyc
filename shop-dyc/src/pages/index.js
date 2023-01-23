import React, { useState } from 'react'
import ChatButton from '../components/ChatButton'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import PreviewSection from '../components/PreviewSection'
import Sidebar from '../components/Sidebar'

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
      <ChatButton />
    </>
  )
}

export default Home