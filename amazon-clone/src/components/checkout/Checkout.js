import React from 'react'
import { useStateValue } from '../../StateProvider'
import CartItem from './cartItem/CartItem'
import './Checkout.css'
import Subtotal from './subtotal/Subtotal'

function Checkout() {

    const [{ cart }, dispatch] = useStateValue();


    return (
        <div className="checkout">
            <div className="checkout__left">
                <h1>Your <strong>awesome</strong> choices:</h1>
                {cart.map(item => (
                    <CartItem 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                     />
                ))}              
            </div>
            <div className="checkout__right">
                <h1>Your <strong>total:</strong></h1>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
