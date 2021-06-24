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
                <Product id="123" title="Ready Player One: A novel, Eric Cline"
                image="https://images-na.ssl-images-amazon.com/images/I/811W9hHXiwL.jpg"
                price="19.99"
                rating="10/10" />
                <Product 
                id="321"
                title="DualSense - PlayStation 5 controller"
                image="https://images-na.ssl-images-amazon.com/images/I/51yKDia7Q0L._AC_SX569_.jpg"
                price="159.59"
                rating="10/10" />
                <Product
                id="46469"
                title="Samsung Odyssey curved Gaming Monitor - Ultra Wide Screen"
                image="https://images.samsung.com/is/image/samsung/latin-en-c49j89-lc49j890dklxzp-frontblack-305230207?$720_576_PNG$"
                price="200.00"
                rating="10/10" />
            </div>
            <div className="home__row">
                <Product
                id="232434"
                title="Gamer Mecanic Keyboard - RGB"
                price="79.50"
                image="https://http2.mlstatic.com/D_NQ_NP_801046-MLB45729705963_042021-O.jpg"
                rating="9/10" />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default Home
