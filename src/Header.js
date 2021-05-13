import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket,user},dispatch] = useStateValue();
     const handleUserAuth = () =>{
         if(user){
             auth.signOut()
         }
     }
    return (
        <div className="header">
            <div className="logoDiv">
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" />
            </Link>
            </div>

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />

            </div>
            <div className="header-nav">
                <Link to={ !user &&"/login"}>
                <div className="header_option" onClick={handleUserAuth}>
                    <span className="header__optionOne"> {user ?user.email:"guest"}</span>
                    <span className="header__optionTwo">{user ? 'Sign Out':"Sign In"}</span>
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
