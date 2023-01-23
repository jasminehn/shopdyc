import React from 'react'
import Image1 from '../../images/preview-img-1.webp'
import Image2 from '../../images/preview-img-2.webp'
import Image3 from '../../images/preview-img-3.webp'
import { PreviewContainer, PreviewH1, PreviewWrapper, PreviewCard, PreviewImage, PreviewH2, PreviewP } from './PreviewElements'

const PreviewSection = () => {
  return (
    <>
      <PreviewContainer id="preview">
        <PreviewH1>Straight From the Store to Your Doorstep</PreviewH1>
        <PreviewWrapper>
          <PreviewCard>
            <PreviewImage src={Image1}/>
            <PreviewH2>Walgreens</PreviewH2>
            {/* <PreviewP>Delivery time estimate: 17 min.</PreviewP> */}
          </PreviewCard>
          <PreviewCard>
            <PreviewImage src={Image2}/>
            <PreviewH2>CVS</PreviewH2>
            {/* <PreviewP>Delivery time estimate: 10 min.</PreviewP> */}
          </PreviewCard>
          <PreviewCard>
            <PreviewImage src={Image3}/>
            <PreviewH2>Sheetz</PreviewH2>
            {/* <PreviewP>Delivery time estimate: 22 min.</PreviewP> */}
          </PreviewCard>
        </PreviewWrapper>
      </PreviewContainer>
    </>
  )
}

export default PreviewSection