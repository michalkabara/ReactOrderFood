import React, {useContext, useState} from 'react'
import {DUMMY_MEALS} from '../meals'

const Context = React.createContext()

const ContextProvider = ({children}) => {
  const [meals, setMeals] = useState(DUMMY_MEALS)
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const handleShowCart = () => {
    setShowCart(prevState => !prevState)
  }

  return (
    <Context.Provider value={{meals, cart, setCart, handleShowCart, showCart}}>{children}</Context.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(Context)
}

export {Context, ContextProvider}
