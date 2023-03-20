import styled from 'styled-components'

export const DetailsContainer = styled.div`
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  background: #fafafa;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const DetailsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center; /*why does this work?????*/
  align-items: center;
  grid-gap: 160px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  justify-content: center;
  max-height: 500px;
  text-align: center;
`

export const ImgWrapper = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const DetailsImage = styled.img`
  //height: 200px;
  width: 200px;
  /* margin-bottom: 10px; */
`

export const DetailsHeader = styled.p`
  font-size: 22px;
  margin-bottom: 70px;
  color: black;
  text-align: center;
  //margin: 25px;
`

export const DetailsP = styled.p`
  font-size: 1rem;
  color: #8d8c8c;
`