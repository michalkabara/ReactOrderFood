import React, {useContext, useState, useReducer} from 'react'
import {DUMMY_MEALS} from '../meals'

const Context = React.createContext()

const defaultCartState = {
  items: [],
  totalPrice: 0,
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedCart = state.items.concat(action.item)
    const updatedTotalPrice = state.totalPrice + action.item.price * action.item.amount
    return {
      items: updatedCart,
      totalPrice: updatedTotalPrice,
    }
  }
}

const ContextProvider = ({children}) => {
  const [meals] = useState(DUMMY_MEALS)
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const cartUniqueItems = [...new Set(cart.map(item => item.id))]

  const handleShowCart = () => {
    setShowCart(prevState => !prevState)
  }

  //useReducer

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemToCart = item => {
    dispatchCartAction({type: 'ADD', payload: item})
  }

  const removeItemFromCart = id => {
    dispatchCartAction({type: 'REMOVE', payload: id})
  }

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  }

  return (
    <Context.Provider value={{meals, cart, setCart, handleShowCart, showCart, cartUniqueItems}}>
      {children}
    </Context.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(Context)
}

export {Context, ContextProvider}
