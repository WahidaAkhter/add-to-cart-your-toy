import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, handleAddToCart }) => {
    const { name, price, img, rating, category } = product;

    const renderStars = (r) => {
        const stars = [];
        const val = r || 4;
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={`star ${i <= Math.round(val) ? 'star-filled' : 'star-empty'}`}
                />
            );
        }
        return stars;
    };

    return (
        <div className="product-card">
            <div className="product-img-wrap">
                {category && <span className="product-badge">{category}</span>}
                <img src={img} alt={name} className="product-img" loading="lazy" />
                <div className="product-overlay">
                    <button onClick={() => handleAddToCart(product)} className="overlay-btn">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
            <div className="product-body">
                <h3 className="product-name">{name}</h3>
                <div className="product-stars">
                    {renderStars(rating)}
                    <span className="rating-num">{rating || '4.0'}</span>
                </div>
                <div className="product-bottom">
                    <span className="product-price">${price}</span>
                    <button onClick={() => handleAddToCart(product)} className="add-btn">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;