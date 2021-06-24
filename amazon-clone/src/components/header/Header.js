import React from 'react'
import './Header.css'
import logo from '../../amazon-logo.png'
import { Search, ShoppingCart } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import { auth } from '../../firebase/firebase'

function Header() {
    const [{ cart, user, email }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header__input">
                <span>
                    <Search className="header__searchIcon" />
                </span>
                <input type="text" placeholder="Let's buy"></input>
            </div>

            <div className="header__logoContainer">
                <Link to="/">
                    <img src={logo} className="header__amazonLogo" />
                </Link>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionOne">{user ? `Hi, ${user.email.substring(0, 5)}` : 'Hello,'}</span>
                    <Link to={!user && '/login'} onClick={handleAuthentication}>
                        <span className="header__optionTwo">{user ? `Sign Out` : `Sign In`}</span>
                    </Link>
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
                    <Link to="/checkout">
                        <ShoppingCart className="header__cartLink" />
                    </Link>
                    <span className="header__optionTwo header__shoppingCount" >{ cart.length }</span>
                </div>
            </div>
        </div>
    )
}

export default Header
