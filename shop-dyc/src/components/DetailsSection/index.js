import React from 'react'
import Image1 from '../../images/service-1.png'
import Image2 from '../../images/service-2.png'
import Image3 from '../../images/service-3.png'
import Image4 from '../../images/service-4.png'
import { DetailsContainer, DetailsWrapper, DetailsCard, ImgWrapper, 
      DetailsImage, DetailsHeader , DetailsP } from './DetailsElements'

const PreviewSection = () => {
  return (
    <>
      <DetailsContainer id="preview">
        <DetailsWrapper>
          <DetailsCard>
            <ImgWrapper>
              <DetailsImage src={Image1}/>
            </ImgWrapper>
            <DetailsHeader>Same-Day Delivery</DetailsHeader>
            <DetailsP>DYC makes sure to deliver your items as quickly and efficiently as possible.</DetailsP>
          </DetailsCard>
          <DetailsCard>
            <ImgWrapper>
              <DetailsImage src={Image2}/>
            </ImgWrapper>
            <DetailsHeader>Order On The Go</DetailsHeader>
            <DetailsP>Place an order at any time from your computer or mobile device.</DetailsP>
          </DetailsCard>
          <DetailsCard>
            <ImgWrapper>
              <DetailsImage src={Image3}/>
            </ImgWrapper>
            <DetailsHeader>Dedicated Service</DetailsHeader>
            <DetailsP>Unlike our competitors, we offer 24 hour delivery services 7 days a week.</DetailsP>
          </DetailsCard>
          <DetailsCard>
            <ImgWrapper>
              <DetailsImage src={Image4}/>
            </ImgWrapper>
            <DetailsHeader>Doorstep Delivery</DetailsHeader>
            <DetailsP>We deliver items right to your doorstep so you barely even have to step outside.</DetailsP>
          </DetailsCard>
        </DetailsWrapper>
      </DetailsContainer>
    </>
  )
}

export default PreviewSection