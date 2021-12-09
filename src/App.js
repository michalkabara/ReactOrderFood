import styled from 'styled-components'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Modal from './components/Modal'
import {useGlobalContext} from './store/context'
import Cart from './components/Cart'

function App() {
  const {showCart} = useGlobalContext()
  return (
    <>
      {showCart && (
        <Modal title='Your Cart'>
          <Cart />
        </Modal>
      )}
      <Header />
      <BodyContainer>
        <ProductList />
      </BodyContainer>
    </>
  )
}

const BodyContainer = styled.div`
  max-width: 1300px;
  margin: auto;
  width: 80%;
  padding: 100px 0px;
`

export default App
