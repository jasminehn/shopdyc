import styled from 'styled-components'
import { MdKeyboardArrowDown } from 'react-icons/md'

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding: 0 30px;
  height: 950px; /*orig 800*/
  /* position: relative; */
  z-index: 0; /*orig 1*/
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
`

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`

export const HeroContent = styled.div`
  z-index: 1;
  max-width: 1200px;
  position: relative; /*orig absolute */
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroH1 = styled.h1`
  color: #000;
  font-size: 200px;
  text-align: center;
  font-weight: bold;
  margin-top: 250px;

  @media screen and (max-wisth: 768px) {
    font-size: 160px;
  }

  @media screen and (max-wisth: 480px) {
    font-size: 140px;
  }
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #000;
  font-size: 35px;
  text-align: center;
  max-width: 600px;
  font-weight: bold;

  @media screen and (max-wisth: 768px) {
    font-size: 28px;
  }

  @media screen and (max-wisth: 480px) {
    font-size: 20px;
  }
`

export const HeroBtnWrapper = styled.div`
  /* margin-bottom: 32px; */
  /* display: flex;
  flex-direction: column; */
  /* align-items: center; */
  position: absolute;
  bottom: 0px;
`

export const ArrowDown = styled(MdKeyboardArrowDown)`
  font-size: 70px;
`