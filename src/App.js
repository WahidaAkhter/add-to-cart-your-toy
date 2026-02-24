import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import Cart from './Component/Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck, faInfoCircle, faTruck, faShieldAlt, faHeadset, faUndo, faChevronDown, faStar } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [activeFaq, setActiveFaq] = useState(null);

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

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const features = [
    { icon: faTruck, title: 'Free Shipping', desc: 'Free delivery on all orders over $500. Fast & reliable worldwide shipping.' },
    { icon: faShieldAlt, title: 'Secure Payment', desc: '100% secure checkout with SSL encryption. Your data is always protected.' },
    { icon: faHeadset, title: '24/7 Support', desc: 'Round-the-clock customer support. We\'re always here to help you.' },
    { icon: faUndo, title: 'Easy Returns', desc: '30-day hassle-free return policy. No questions asked, full refund.' },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', role: 'Happy Parent', rating: 5, text: 'My kids absolutely love the toys from ToyBox! The quality is outstanding and the delivery was super fast. Will definitely order again!' },
    { name: 'Michael Chen', role: 'Gift Buyer', rating: 5, text: 'Found the perfect birthday gift for my nephew. The Rainbow Xylophone is beautifully crafted, and the price was very reasonable.' },
    { name: 'Emily Davis', role: 'Teacher', rating: 4, text: 'I ordered several educational toys for my classroom. The Abacus Counting toy is a hit with my students. Great selection!' },
  ];

  const faqs = [
    { q: 'How long does shipping take?', a: 'Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery at checkout.' },
    { q: 'What is your return policy?', a: 'We offer a 30-day hassle-free return policy. If you\'re not satisfied, simply return the product in its original packaging for a full refund.' },
    { q: 'Are these toys safe for young children?', a: 'Absolutely! All our toys meet international safety standards (ASTM, EN71, CPSIA). Each product is tested for small parts and non-toxic materials.' },
    { q: 'Do you offer gift wrapping?', a: 'Yes! We offer complimentary gift wrapping on all orders. Simply select the gift wrap option during checkout.' },
    { q: 'Can I track my order?', a: 'Yes, once your order ships, you\'ll receive a tracking number via email. You can track your package in real-time through our website.' },
  ];

  return (
    <div className="app">
      <Header cartCount={totalItems} />

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <div className="hero-orb orb-1"></div>
          <div className="hero-orb orb-2"></div>
          <div className="hero-orb orb-3"></div>
          {/* Floating Toy Emojis */}
          <span className="floating-toy ft-1">🧸</span>
          <span className="floating-toy ft-2">🎮</span>
          <span className="floating-toy ft-3">🎲</span>
          <span className="floating-toy ft-4">🪀</span>
          <span className="floating-toy ft-5">🚂</span>
          <span className="floating-toy ft-6">🎨</span>
          <span className="floating-toy ft-7">🪁</span>
          <span className="floating-toy ft-8">🎯</span>
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

      {/* Why Choose Us - Features Strip */}
      <section className="features-section">
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon-wrap">
                <FontAwesomeIcon icon={f.icon} className="feature-icon" />
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
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

      {/* Customer Testimonials */}
      <section className="testimonials-section">
        <div className="section-center">
          <h2 className="section-heading">What Our <span className="gradient-text">Customers</span> Say</h2>
          <p className="section-sub">Real stories from real happy parents and gift buyers</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-stars">
                {Array.from({ length: 5 }, (_, si) => (
                  <FontAwesomeIcon key={si} icon={faStar} className={si < t.rating ? 'star-gold' : 'star-dim'} />
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.name.charAt(0)}</div>
                <div>
                  <p className="author-name">{t.name}</p>
                  <p className="author-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="faq-section">
        <div className="section-center">
          <h2 className="section-heading">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="section-sub">Everything you need to know before you shop</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className={`faq-item ${activeFaq === i ? 'faq-open' : ''}`} key={i}>
              <button className="faq-question" onClick={() => toggleFaq(i)}>
                <span>{faq.q}</span>
                <FontAwesomeIcon icon={faChevronDown} className="faq-chevron" />
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

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
