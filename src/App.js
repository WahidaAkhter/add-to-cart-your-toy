import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import Cart from './Component/Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 2500);
  };

  const handleAddToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    showToast(`${product.name} added to cart!`);
  };

  const handleRemoveFromCart = (productId) => {
    const item = cart.find(i => i.id === productId);
    if (item) {
      setCart(cart.filter(i => i.id !== productId));
      showToast(`${item.name} removed`, 'info');
    }
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCart(prev =>
      prev.map(item => {
        if (item.id === productId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  };

  const clearCart = () => {
    if (cart.length === 0) return;
    setCart([]);
    showToast('Cart cleared!', 'info');
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const scrollToShop = () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Header cartCount={totalItems} />

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <div className="hero-orb orb-1"></div>
          <div className="hero-orb orb-2"></div>
          <div className="hero-orb orb-3"></div>
        </div>
        <div className="hero-content">
          <span className="hero-badge">✨ Premium Toy Collection</span>
          <h1 className="hero-title">
            Find the <span className="gradient-text">Perfect Toy</span>
            <br />for Every Child
          </h1>
          <p className="hero-subtitle">
            Discover our handpicked collection of high-quality toys that inspire
            creativity, learning, and endless fun for kids of all ages.
          </p>
          <button className="hero-cta" onClick={scrollToShop}>
            Explore Collection
            <FontAwesomeIcon icon={faArrowRight} className="cta-arrow" />
          </button>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">9+</span>
              <span className="stat-label">Unique Toys</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">4.8</span>
              <span className="stat-label">Avg Rating</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">Free</span>
              <span className="stat-label">Shipping</span>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <main className="main-section" id="shop">
        <div className="shop-wrapper">
          <Shop products={products} handleAddToCart={handleAddToCart} />
          <aside className="cart-aside">
            <Cart
              cart={cart}
              totalItems={totalItems}
              totalPrice={totalPrice}
              removeFromCart={handleRemoveFromCart}
              updateQuantity={handleUpdateQuantity}
              clearCart={clearCart}
            />
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <h3 className="footer-logo">🧸 ToyBox</h3>
            <p className="footer-desc">Bringing joy to every child, one toy at a time.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#shop">FAQ</a>
            <a href="#shop">Contact Us</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 ToyBox. All rights reserved. Made with 💜</p>
        </div>
      </footer>

      {/* Toast */}
      <div className={`toast ${toast.show ? 'toast-visible' : ''} toast-${toast.type}`}>
        <FontAwesomeIcon icon={toast.type === 'info' ? faInfoCircle : faCheck} className="toast-icon" />
        <span>{toast.message}</span>
      </div>
    </div>
  );
}

export default App;
