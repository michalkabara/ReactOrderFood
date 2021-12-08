import React, {useContext, useState} from 'react'
import {DUMMY_MEALS} from './meals'

const Context = React.createContext()

const ContextProvider = ({children}) => {
  const [meals, setMeals] = useState(DUMMY_MEALS)
  const [cart, setCart] = useState([])
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(prevState => !prevState)
  }

  return (
    <Context.Provider value={{meals, cart, setCart, handleShowModal, showModal}}>{children}</Context.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(Context)
}

export {Context, ContextProvider}
