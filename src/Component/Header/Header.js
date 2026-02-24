import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = ({ cartCount }) => {
    return (
        <header className="navbar">
            <div className="navbar-inner">
                <a href="#home" className="nav-logo">
                    <span className="logo-emoji">🧸</span>
                    <span className="logo-text">ToyBox</span>
                </a>
                <nav className="nav-links">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#shop" className="nav-link">Shop</a>
                </nav>
                <a href="#shop" className="nav-cart-btn">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </a>
            </div>
        </header>
    );
};

export default Header;