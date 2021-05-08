import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" />
            </Link>

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />

            </div>
            <div className="header-nav">
                <Link to="/login">
                <div className="header_option">
                    <span className="header__optionOne"> hello Guest</span>
                    <span className="header__optionTwo">Sign In</span>
                </div>
                </Link>

                <div className="header_option">
                    <span className="header__optionOne"> Returns </span>
                    <span className="header__optionTwo"> & Orders</span>
                </div>

                <div className="header_option">
                    <span className="header__optionOne"> Your</span>
                    <span className="header__optionTwo">Prime</span>
                </div>

            </div>

            <Link to="/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className=" header__optionTwo header_basketCount">{basket?.length}</span>
                </div>
            </Link>






        </div>
    )
}

export default Header
