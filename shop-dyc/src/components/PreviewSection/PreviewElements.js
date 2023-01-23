import styled from 'styled-components'

export const PreviewContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  /* background: white; */
  background: linear-gradient(#FFF 65%, #ff9a78 33%);

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const PreviewWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center; /*why does this work?????*/
  align-items: center;
  grid-gap: 60px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const PreviewCard = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 5px;
  max-height: 500px;
  /* padding: 30px; */
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    /* cursor: pointer; */
  }
`

export const PreviewImage = styled.img`
  height: 400px;
  width: 350px;
  /* margin-bottom: 10px; */
`

export const PreviewH1 = styled.h1`
  text-align: center;
  font-size: 35px;
  color: black;
  margin-bottom: 100px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const PreviewH2 = styled.h2`
  font-size: 28px;
  margin: 25px;
`

export const PreviewP = styled.p`
  font-size: 1rem;
  color: #4a4a4a;
`