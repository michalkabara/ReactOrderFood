import React from 'react'
import Product from './Product'
import {useGlobalContext} from '../context'

const ProductList = () => {
  const {meals} = useGlobalContext()

  return (
    <>
      {meals.map(meal => {
        return (
          <Product
            key={meal.id}
            id={meal.id}
            dishName={meal.name}
            ingridients={meal.description}
            price={meal.price}
          />
        )
      })}
    </>
  )
}

export default ProductList
