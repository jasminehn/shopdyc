import styled from 'styled-components'
import Image from '../../images/parallax-1.jpg'

/*export const ParallaxContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  padding: 0 30px;
  height: 450px;
  z-index: 0;
`*/

export const ParallaxContainer = styled.div`
  background-image: url(${Image});
  min-height: 700px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const ParallaxBg = styled.div`
  position: absolute;
  
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`

export const ImageBg = styled.img`
  width: 100%;
  height: 650px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: #232a34;
`