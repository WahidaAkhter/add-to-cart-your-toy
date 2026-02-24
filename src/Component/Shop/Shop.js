import React, { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Shop = ({ products, handleAddToCart }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="shop">
            <div className="shop-header">
                <div>
                    <h2 className="shop-title">
                        Our <span className="gradient-text">Collection</span>
                    </h2>
                    <p className="shop-subtitle">
                        Browse through our carefully curated selection of premium toys
                    </p>
                </div>
                <div className="search-box">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search toys..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
            </div>

            <div className="products-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        />
                    ))
                ) : (
                    <div className="no-results">
                        <span className="no-results-emoji">🔍</span>
                        <p>No toys found matching "<strong>{searchTerm}</strong>"</p>
                        <button className="clear-search-btn" onClick={() => setSearchTerm('')}>
                            Clear Search
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shop;