import React from 'react'
import Image from '../../images/parallax-1.jpg'
import { ParallaxContainer, ParallaxBg, ImageBg } from './ParallaxElements'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const ParallaxSection = () => {
  return (
    //<div>ParallaxSection</div>
    /*<ParallaxContainer>
      <ParallaxBg>
        <ImageBg src={Image} type='image/jpg' />
      </ParallaxBg>
    </ParallaxContainer>*/

    <ParallaxContainer>
    </ParallaxContainer>
    
    /*<div>
      <Parallax pages={2}>
        <ParallaxLayer speed={2.5} style={{
            //backgroundImage: Image,
            backgroundImage: `url(${Image})`,
            backgroundSize: 'cover',
          }} />
          <ParallaxLayer offset={1} speed={2.5}>
            <h1>yo</h1>
          </ParallaxLayer>
        </Parallax>
    </div>*/
  )
}

export default ParallaxSection