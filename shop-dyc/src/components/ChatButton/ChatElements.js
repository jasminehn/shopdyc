import styled from 'styled-components'
import { MdChat } from 'react-icons/md'

export const ChatContainer = styled.div`
  z-index: 2;
  padding: 0 20px;
  display: flex;
  justify-content: right;
`

export const ChatBtnWrapper = styled.div`
  margin-bottom: 22px;
  align-items: center;
  bottom: 0px;
  position: fixed;
`

export const ChatBtn = styled.div`
border: 1px #8d8c8c solid;
  height: 70px;
  width: 70px;
  align-items: center;
  text-align: center;
  background: #000;
  border-radius: 10px;
`

export const ChatIcon = styled(MdChat)`
  margin: 15px 0;
  color: white;
  font-size: 40px;
`