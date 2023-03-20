import React from 'react'
import { FooterContainer, FooterWrapper, FooterHeader, InputWrapper, 
  EmailInput, BtnWrapper, SubmitBtn, Copyright} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterHeader>Subscribe for updates!</FooterHeader>
        <InputWrapper>
        {/*<form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>*/}
          <EmailInput>Email</EmailInput>
          <BtnWrapper>
            <SubmitBtn>Submit</SubmitBtn>
          </BtnWrapper>
        </InputWrapper>
        <Copyright>©2023 by DYC. Created by Jasmine Nelson</Copyright>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer