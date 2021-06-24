import { Button } from '@material-ui/core'
import React from 'react'
import './Product.css'
import { useStateValue } from '../../StateProvider'

function Product({ id, title, price, rating, image }) {
    const [{cart}, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="product__card">
            <div className="product__info">
                <h2>{ title }</h2>
                <p className="product__price">
                    $
                    <strong>{ price }</strong>
                </p>
                <div className="product__rating">
                    <p>{ rating }</p>
                </div>
            </div>

            <img 
                className="product__image"
                src={image} />

            <Button onClick={addToCart} className="product__addToCartBtn">Add to Cart</Button>
        </div>
    )
}

export default Product
