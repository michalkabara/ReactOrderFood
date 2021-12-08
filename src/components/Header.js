import React from 'react'
import styled from 'styled-components'
import {ShoppingCart} from 'iconsax-react'
import Button from '../UI/Button'
import {useGlobalContext} from '../context'

const Header = () => {
  const {handleShowModal, cart} = useGlobalContext()
  return (
    <StyledHeader>
      <StyledHeaderInner>
        <LogoContainer>ReactMeals</LogoContainer>
        <nav>
          <Button buttonText='Your Cart' backgroundColor='#FF8A65' onClick={() => handleShowModal()}>
            <ShoppingCart size='32' color='white' />
            Your Cart {cart.length > 0 && <ItemCounter> {cart.length}</ItemCounter>}
          </Button>
        </nav>
      </StyledHeaderInner>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 20px 0px;
`

const StyledHeaderInner = styled.div`
  display: flex;
  max-width: 1300px;
  width: 80%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
`

const LogoContainer = styled.div`
  font-size: 2em;
  font-weight: bold;
  color: #ff8a65;
`

const ItemCounter = styled.span`
  color: #ff8a65;
  background-color: white;
  border-radius: 50px;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Header
