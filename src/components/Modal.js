import styled from 'styled-components'
import {createPortal} from 'react-dom'

import {CloseCircle} from 'iconsax-react'
import {useGlobalContext} from '../store/context'

const Modal = ({title, children}) => {
  const {handleShowCart} = useGlobalContext()
  return createPortal(
    <ModalContainer>
      <Overlay onClick={() => handleShowCart()}></Overlay>
      <StyledModal>
        <ModalHeader>
          <h3>{title}</h3>
          <CloseCircle className='closeButton' size='32' color='#FF8A65' onClick={() => handleShowCart()} />
        </ModalHeader>
        {children}
      </StyledModal>
    </ModalContainer>,
    document.querySelector('#modal')
  )
}

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
`

const Overlay = styled.div`
  z-index: -1;
  position: absolute;
  background-color: #00000018;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledModal = styled.div`
  background-color: white;
  border-radius: 20px;
  max-width: 1300px;
  width: 80%;
  padding: 20px;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .closeButton {
    cursor: pointer;
  }
`

export default Modal
