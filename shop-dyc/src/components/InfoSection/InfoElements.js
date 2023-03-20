import styled from 'styled-components'
import { Link as LinkRouter } from "react-router-dom"

export const InfoContainer = styled.div`
  color: black;
  background: white;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 720px;
  width: 100%;
  max-width: 2800px; //orig 1100px
  margin-right: auto;
  margin-left: auto;
  //padding: 0 24px;
  justify-content: center;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`

export const Column1 = styled.div`
  //margin-bottom: 15px;
  //padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  //margin-bottom: 15px;
  //padding: 0 15px;
  grid-area: col2;
  top: 0;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  //padding-bottom: 60px;
  //float: right;
  margin: auto;
`

export const Heading = styled.h1`
  margin-bottom: 45px;
  font-size: 42px;
  line-height: 1.1;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  max-width: 420px;
  margin-bottom: 45px;
  font-size: 16px;
  line-height: 24px;
  text-align: justify;
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const Button = styled(LinkRouter)`
  color: white;
  background-color: black;
  padding: 15px 35px;
  cursor: pointer;
  text-decoration: none;
`

export const ImgWrap = styled.div`
  //max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  //margin: 0 0 10px 0;
  //padding-right: 0;

  width: 100%;
  
  height: 720px;
  object-fit: cover;
  
`