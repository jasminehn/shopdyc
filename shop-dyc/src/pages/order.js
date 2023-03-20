import React, { useState } from 'react'
import ChatButton from '../components/ChatButton'
import Navbar from '../components/Navbar'
import ParallaxSection from '../components/ParallaxSection'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const OrderPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <ParallaxSection />
      <Footer />
      <ChatButton />
    </>
  )
}

export default OrderPage