import styled from 'styled-components'
import { Link as LinkRouter } from "react-router-dom"

export const FooterContainer = styled.div`
  height: 300px;
  background: black;
  color: white;
  padding: 60px 0;
`

export const FooterWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
`

export const FooterHeader = styled.p`
  font-size: 28px;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const EmailInput = styled.div`
  width: 420px;
  color: white;
  border-bottom: 1px white solid;
  cursor: text;
`

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const SubmitBtn = styled.div`
  color: black;
  background-color: white;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
`

export const Copyright = styled.p`
  font-size: 14px;
  color: gray;
`