import React from 'react'
import Image from '../../images/hero-img-3.png'
import { Button } from '../ButtonElements' 
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowDown } from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer>
      {/*<HeroBg>
        <ImageBg src={Image} type='image/jpg' />
  </HeroBg>*/}
      <HeroContent>
        <HeroH1>dyc.</HeroH1>
        <HeroP>We've Got You Covered</HeroP>
        <HeroBtnWrapper>
          {/*<Button> 
            <ArrowDown></ArrowDown>
          </Button>*/}
          <ArrowDown></ArrowDown> {/*scroll to bottom btn*/} {/* add to='next section' */}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection