import styled from 'styled-components'
import {CloseCircle} from 'iconsax-react'
import {useGlobalContext} from '../context'
import Cart from './Cart'

const Modal = () => {
  const {handleShowModal} = useGlobalContext()
  return (
    <Overlay onClick={() => handleShowModal()}>
      <StyledModal>
        <ModalHeader>
          <h3>Your Cart</h3>
          <CloseCircle size='32' color='#FF8A65' onClick={() => handleShowModal()} />
        </ModalHeader>
        <Cart />
      </StyledModal>
    </Overlay>
  )
}

const Overlay = styled.div`
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
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Modal
