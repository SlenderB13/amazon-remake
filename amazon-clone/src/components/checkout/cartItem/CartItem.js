import { Button } from '@material-ui/core'
import React from 'react'
import { useStateValue } from '../../../StateProvider';
import './CartItem.css'

function CartItem({ id, title, price, rating, image }) {

    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        });
    }

    return (
        <div className="cartItem">
            <img src={image} />
            <div className="cartItem__info">
                <h2>{title}</h2>
                <p>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p>{rating}</p>
            </div>
            <Button onClick={removeFromCart} className="cartItem__removeBtn">Remove</Button>
        </div>
    )
}

export default CartItem
