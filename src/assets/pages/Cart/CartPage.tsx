import React from 'react'
import { useSelector } from 'react-redux'
import { CartCard } from './components/CartCard'


  export const CartPage = () => {
 
  const cartList = useSelector(state => state.cartState.cartList)

  return (
    <>
      <div>
        {cartList.map((product:any) => (
            <CartCard key={cartList.id} product={product} />
        ))}
      </div>
    </>
  )
}
