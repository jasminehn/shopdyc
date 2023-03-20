import styled from 'styled-components'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Image from '../../images/parallax-3.jpeg'

export const Parallax3Container = styled.div`
  //background: #0c0c0c;
  //background: #3cb315;
  background-image: url(${Image});
  min-height: 700px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding: 0 30px;
  
  //height: 800px; /*orig 950*/
  height: 100vh;
  //margin-bottom: 200px;
  /* position: relative; */
  z-index: 1; /*orig 1*/
  
`

export const Parallax3Content = styled.div`
  z-index: 1;
  max-width: 1200px;
  position: relative; /*orig absolute */
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Parallax3H1 = styled.h1`
  color: #000;
  font-size: 180px;
  text-align: center;
  font-weight: 900;
  margin-top: 10px;

  @media screen and (max-wisth: 768px) {
    font-size: 160px;
  }

  @media screen and (max-wisth: 480px) {
    font-size: 140px;
  }
`

export const Parallax3P = styled.p`
  margin-top: 320px;
  color: #000;
  font-size: 40px;
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