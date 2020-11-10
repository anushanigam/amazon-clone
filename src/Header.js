import React from 'react';

import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";


function Header() {
    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className='Header'>
            <Link to="/">
            <img 
                className="header_logo"
                src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' 
                />
                </Link>

            <div 
            className='header_search'>
                <input
                className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon"/>
                 
            </div>
            <div 
                className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionline1'>Hello user</span>
                    <span className='header_optionline2'>Sign In</span>
                </div>
                <div className='header_option'>
                    <span className='header_optionline1'>Returns</span>
                    <span className='header_optionline2'>& Orders</span>
                </div>
                <div className='header_option'>
                    <span className='header_optionline1'>Your</span>
                    <span className='header_optionline2'>Prime</span>
                    
                </div>
                <Link to="/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                        <span className="header_optionline2 header_basketcount">{basket?.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
