import React from 'react';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
        <Link to='/' style={{textDecoration: "none"}}>
          <div className="header_logo">
              <StorefrontIcon className='header_logoImg' fontSize='large'/>
              <h2 className='header_logoTitle'>eShop</h2>
          </div>
        </Link>
        <div className="header_search">
            <input type="text" className="header_searchBar"/>
            <SearchIcon className="header_searchBarIcon"/>
        </div>
        <div className="header_nav">
            <div className="headerNav_item">
            <span className="headerNav_LOne">Hello Guest</span>
            <span className="headerNav_LTwo">Sign In</span>
            </div>
            <div className="headerNav_item">
            <span className="headerNav_LOne">Your</span>
            <span className="headerNav_LTwo">Shop</span>
            </div>
            <Link to='/checkout' style={{textDecoration: "none"}}>
              <div className="headerNav_Basket">
              <ShoppingBasketIcon/>
              <span className="headerNav_LTwo nav_basketCount">0</span>
              </div>
            </Link>

        </div>
    </div>
  )
}

export default Header