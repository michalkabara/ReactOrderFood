import styled from 'styled-components'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Modal from './components/Modal'
import {useGlobalContext} from './context'

function App() {
  const {showModal} = useGlobalContext()
  return (
    <>
      {showModal && <Modal />}
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
