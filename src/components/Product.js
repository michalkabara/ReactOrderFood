import React, {useRef} from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'
import {useGlobalContext} from '../store/context'
import {useState} from 'react/cjs/react.development'

const Product = ({dishName, ingridients, price, id}) => {
  const {cart, setCart} = useGlobalContext()

  const amount = useRef()

  const addToCart = id => {
    const product = {
      id: id,
      name: dishName,
      price: price * amount.current.value,
      amount: amount.current.value,
    }
    // if cart contains item with same id
    // update cart state and add 1 to amount of this item

    const cartContent = [...cart, product]
    setCart(cartContent)
    const sameId = cartContent.filter(item => item.id != id)

    console.log(sameId, 'same id')
    console.log(cart, 'cart')
  }

  return (
    <ProductContainer id={id}>
      <div>
        <h3>{dishName}</h3>
        <p>{ingridients}</p>
        <p style={{color: '#FF8A65', fontSize: '1.3rem', fontWeight: 'bold'}}>{price} $</p>
      </div>
      <AddToCartContainer>
        <InputContainer>
          <label htmlFor='amount'>Amount</label>
          <StyledInput
            id='amount '
            type='number'
            min='1'
            max='10'
            placeholder='1'
            ref={amount}
            defaultValue='1'
          />
        </InputContainer>
        <Button onClick={() => addToCart(id)}>Add to Cart</Button>
      </AddToCartContainer>
    </ProductContainer>
  )
}

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const InputContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

const StyledInput = styled.input`
  border: 0;
  background-color: #f1f1f1;
  border-radius: 30px;
  padding: 10px;
  text-align: right;
  font-family: inherit;
  font-size: 1rem;
`

const AddToCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`
export default Product
