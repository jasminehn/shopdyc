import React from 'react'
import { ChatContainer, ChatBtnWrapper, ChatBtn, ChatIcon } from './ChatElements'

const ChatButton = () => {
  return (
    <>
      <ChatContainer>
        <ChatBtnWrapper>
          <ChatBtn>
            <ChatIcon></ChatIcon>
          </ChatBtn>
        </ChatBtnWrapper>
      </ChatContainer>
    </>
  )
}

export default ChatButton