import React, { useState } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faMinus, faDice } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, totalItems, totalPrice, removeFromCart, updateQuantity, clearCart }) => {
    const [randomItem, setRandomItem] = useState('');
    const [isSpinning, setIsSpinning] = useState(false);

    const chooseRandom = () => {
        if (cart.length === 0) return;
        setIsSpinning(true);
        let count = 0;
        const interval = setInterval(() => {
            const idx = Math.floor(Math.random() * cart.length);
            setRandomItem(cart[idx].name);
            count++;
            if (count > 8) {
                clearInterval(interval);
                const finalIdx = Math.floor(Math.random() * cart.length);
                setRandomItem(cart[finalIdx].name);
                setIsSpinning(false);
            }
        }, 150);
    };

    return (
        <div className="cart">
            <div className="cart-header">
                <h3 className="cart-title">🛒 Your Cart</h3>
                {totalItems > 0 && (
                    <span className="items-count">{totalItems} item{totalItems > 1 ? 's' : ''}</span>
                )}
            </div>

            {cart.length === 0 ? (
                <div className="cart-empty">
                    <span className="empty-icon">🛒</span>
                    <p className="empty-text">Your cart is empty</p>
                    <span className="empty-hint">Add some toys to get started!</span>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-item-info">
                                    <p className="cart-item-name">{item.name}</p>
                                    <p className="cart-item-price">${item.price * item.quantity}</p>
                                </div>
                                <div className="cart-item-controls">
                                    <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <span className="qty-num">{item.quantity}</span>
                                    <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                    <button className="del-btn" onClick={() => removeFromCart(item.id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <div className="summary-line">
                            <span>Subtotal</span><span>${totalPrice}</span>
                        </div>
                        <div className="summary-line">
                            <span>Shipping</span><span className="free-tag">Free</span>
                        </div>
                        <div className="summary-line summary-total">
                            <span>Total</span><span>${totalPrice}</span>
                        </div>
                    </div>

                    <div className="cart-actions">
                        <button className="random-btn" onClick={chooseRandom} disabled={isSpinning}>
                            <FontAwesomeIcon icon={faDice} className={isSpinning ? 'spin-dice' : ''} />
                            {isSpinning ? 'Picking...' : 'Choose One for Me'}
                        </button>
                        {randomItem && (
                            <div className="random-result">
                                🎉 <strong>{randomItem}</strong>
                            </div>
                        )}
                        <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;