
import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {

    const { product, handleAddToCart } = props;

    const { name, price, img } = product;

    return (
        <div className='product'>

            <img src={img} alt="" />

            <div className='product-info'>

                <p className='product-name'>{name}</p>
                <p>Price:${price}</p>

            </div>

            <button onClick={() => handleAddToCart(product)} className='btn-cart'>

                <p>Add To Cart</p>
                <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon>

            </button>

        </div>
    );
};

export default Product;