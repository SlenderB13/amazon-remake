import { Button } from '@material-ui/core'
import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className="product__card">
            <div className="product__info">
                <h3>Ready Player One: A novel</h3>
                <p className="product__price">
                    $
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>10/10</p>
                </div>
            </div>

            <img 
                className="product__image"
                src="https://images-na.ssl-images-amazon.com/images/I/811W9hHXiwL.jpg" />

            <Button className="product__addToCartBtn">Add to Cart</Button>
        </div>
    )
}

export default Product
