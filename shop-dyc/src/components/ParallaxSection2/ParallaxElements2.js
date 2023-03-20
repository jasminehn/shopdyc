import styled from 'styled-components'
import Image from '../../images/pexels-julia-m-cameron-8769000.mp4'

export const ParallaxContainer = styled.div`
  /*background-image: url(${Image});
  height: 700px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  */
  height: 700px;
  padding-bottom: 50px;
  padding-top: 50px;
`

export const VideoBg = styled.video`
  /*width: 100%;
  min-height: 700px;
  -o-object-fit: cover;
  object-fit: cover;
  */
  -o-object-fit: cover;
  object-fit: cover;
  height: 1100px;
  overflow: hidden;
  min-width: 100%;
  position: fixed;
  top:0;
  z-index: -999;
`