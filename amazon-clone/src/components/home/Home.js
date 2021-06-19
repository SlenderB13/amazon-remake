import React from 'react'
import Product from '../product/Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" 
                src="https://storage.googleapis.com/freesat-production-assets/styles/teaser_hero_image_1440x500_/cloud-storage/news/headliners/amazon-prime-video-banner.jpg?itok=zUbCf_wT" />
            </div>

            <div className="home__row">
                <Product />
                <Product />
            </div>
            <div className="home__row">
                <Product />
                <Product />
                <Product />
            </div>
            <div className="home__row">
                
            </div>
        </div>
    )
}

export default Home
