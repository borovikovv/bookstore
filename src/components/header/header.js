import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({numItems, total}) => {
    return (
        <header className='header row'>
            <Link to='/' className='header-main'>Bookstore</Link>
            <Link to='/cart' className='price-info'>
                <i className='cart-icon fa fa-shopping-cart'></i>
                    {numItems} item (${total})
            </Link>
        </header>
    )
}

export default Header;