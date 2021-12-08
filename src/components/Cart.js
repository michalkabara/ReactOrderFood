import {useGlobalContext} from '../context'
import styled from 'styled-components'

const Cart = () => {
  const {cart} = useGlobalContext()

  const prices = cart.map(product => product.price)
  const sum = prices.reduce((a, b) => a + b, 0)

  return (
    <>
      <div>
        {cart.map(product => (
          <ProductContainer key={product.id}>
            <div>
              <p>{product.name}</p>
              <span>
                {product.price}$ Amount: {product.amount}
              </span>
            </div>
            <div>+ / -</div>
          </ProductContainer>
        ))}
      </div>

      <hr></hr>
      <p>{sum.toFixed(2)}$</p>
    </>
  )
}

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Cart
