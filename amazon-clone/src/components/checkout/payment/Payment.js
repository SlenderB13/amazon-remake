import React from 'react'
import './Payment.css'
import { useStateValue } from '../../../StateProvider'
import CartItem  from '../cartItem/CartItem'

function Payment() {

    const [{cart}, dispatch] = useStateValue();

    return (
        <div className="payment">
            <h1>Check<strong>out:</strong></h1>
            <div className="payment__section">
                <h2>Your <strong>adress:</strong></h2>
                <p>QNP 32, Conj. Q, N: 08</p>
                <p>Ceilândia Sul</p>
                <p>Brasília, DF</p>
            </div>
            <div className="payment__section">
                <h2>Your <strong>items:</strong></h2>
                {cart.map(item => (
                    <CartItem className="payment__cartItem"
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image} />
                ))}
            </div>
            <div className="payment__section">
                <h2>Payment <strong>method:</strong></h2>
            </div>
        </div>
    )
}

export default Payment
