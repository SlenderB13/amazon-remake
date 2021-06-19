import React from 'react'
import './Header.css'
import logo from '../../amazon-logo.png'
import { Search, ShoppingCart } from '@material-ui/icons'

function Header() {
    return (
        <div className="header">
            <div className="header__input">
                <span>
                    <Search className="header__searchIcon" />
                </span>
                <input type="text" placeholder="Let's buy?"></input>
            </div>

            <div className="header__logoContainer">
                <img src={logo} className="header__amazonLogo" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionOne">Hello,</span>
                    <span className="header__optionTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__optionOne">Returns</span>
                    <span className="header__optionTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionOne">Your</span>
                    <span className="header__optionTwo">Prime</span>
                </div>

                <div className="header__shopping">
                    <ShoppingCart />
                    <span className="header__optionTwo header__shoppingCount" >0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
