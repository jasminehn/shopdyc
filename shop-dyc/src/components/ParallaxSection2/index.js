import React from 'react'
import { ParallaxContainer, VideoBg } from './ParallaxElements2'
import Video from '../../images/pexels-julia-m-cameron-8769000.mp4'

const ParallaxSection = () => {
  return (
    <ParallaxContainer>
      <VideoBg autoPlay muted loop src={Video} type="video/mp4">
      {/*<video >
        Your browser does not support HTML5 video.
        </video>*/}
      </VideoBg>
      
    </ParallaxContainer>
    
  )
}

export default ParallaxSection