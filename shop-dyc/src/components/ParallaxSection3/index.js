import React from 'react'
import Image from '../../images/hero-img-3.png'
import { Parallax3Container, Parallax3Content, Parallax3H1, Parallax3P } from './ParallaxElements3'

const HeroSection = () => {
  return (
    <Parallax3Container>
      <Parallax3Content>
        <Parallax3P>Delivered at Your</Parallax3P>
        <Parallax3H1>Convenience.</Parallax3H1>
      </Parallax3Content>
    </Parallax3Container>
  )
}

export default HeroSection