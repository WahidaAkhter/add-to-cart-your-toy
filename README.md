<p align="center">
  <img src="https://img.shields.io/badge/React-17.0.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/CSS3-Custom_Design-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" />
</p>

# 🧸 ToyBox — Premium Toy Store

> A beautifully designed, fully responsive single-page toy store built with React. Browse toys, filter by category, manage your cart with quantity controls, and let the app surprise you with a random pick — all wrapped in a stunning dark-themed UI with smooth animations.

---

## 🌐 Live Demo

👉 **Check it out here:** [toys-store.netlify.app](https://toys-store.netlify.app/)

---

## ✨ Features at a Glance

| Feature | Description |
|---|---|
| 🧸 **Product Grid** | Responsive grid of 9 curated toys with hover overlays and image zoom |
| 🏷️ **Category Filters** | Filter by Vehicles, Musical, Puzzles, Educational, and more |
| 🔍 **Live Search** | Instantly search toys by name — works alongside category filters |
| 🛒 **Smart Cart** | Add items, adjust quantities (+/-), remove individually, see live total |
| 🎲 **Random Picker** | "Choose One for Me" with a spinning dice animation |
| ⭐ **Star Ratings** | Each product displays a visual star rating |
| 🔔 **Toast Notifications** | Slide-in toast instead of browser alerts |
| 📱 **Fully Responsive** | Looks great on desktop, tablet, and mobile |
| 🌙 **Dark Theme** | Premium dark UI with glassmorphism and gradient accents |
| 🎭 **Floating Animations** | Toy emojis gently float across the hero section |
| 🔐 **Login / Sign Up** | Auth buttons in the navbar (UI-ready) |

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **React.js** `v17.0.2` | Component-based UI rendering with functional components |
| **React Hooks** (`useState`, `useEffect`) | State management for cart, search, filters, FAQ, and toast |
| **JavaScript (ES6+)** | Arrow functions, destructuring, spread operators, array methods |
| **CSS3** (Custom) | CSS Grid, Flexbox, CSS variables, keyframe animations, media queries, glassmorphism |
| **Font Awesome** (`@fortawesome/react-fontawesome`) | Icons for cart, search, ratings, FAQ chevrons, dice, and feature icons |
| **Google Fonts** (Poppins + Inter) | Modern typography for headings and body text |
| **JSON (Local Data)** | Product data fetched from a local JSON file simulating an API |
| **Create React App** `v5.0.0` | Zero-config project scaffolding with Webpack, Babel, and ESLint |
| **React Testing Library** + **Jest** | Unit testing setup for component-level testing |
| **Web Vitals** `v2.1.4` | Performance monitoring |
| **Netlify** | Deployment and hosting |

---

## 🧠 How It Works

### 1. 📦 Data Flow
The `App` component fetches product data from `fakeData.json` on mount using `useEffect`. All cart state (add, remove, update quantity, clear) is managed at the App level and passed down to child components as props.

### 2. 🧩 Component Architecture

```
App (state: cart, toast, FAQ)
├── Header          →  Glassmorphism navbar with logo, nav links, Login/Sign Up, cart badge
├── Hero Section    →  Animated gradient orbs + floating toy emojis
├── Features Strip  →  4 "Why Choose Us" cards (Free Shipping, Secure Payment, etc.)
├── Shop            →  Search bar + category filter tabs + product grid
│   └── Product     →  Card with image zoom, hover overlay, star rating, add-to-cart
├── Cart (sidebar)  →  Items with qty controls, price summary, random picker, clear
├── Testimonials    →  3 customer review cards with star ratings and avatars
├── FAQ Accordion   →  5 expandable Q&A items with smooth transitions
└── Footer          →  Brand info, quick links, and copyright
```

### 3. 🛒 Cart Management
- **Quantity tracking** — duplicate items increment quantity instead of adding new entries
- **Immutable state updates** — uses spread operator and array methods
- **Live total** — recalculates price × quantity on every render

### 4. 🎨 Design Highlights
- **Dark theme** with CSS custom properties design system
- **Glassmorphism navbar** with backdrop blur
- **Floating toy emojis** with multi-axis drift animations
- **Product card hover** — image zooms, overlay fades in, button slides up
- **FAQ accordion** — smooth max-height transition with rotating chevron
- **Toast notifications** — slide-in from right with auto-dismiss

---

## 📂 Project Structure

```
add-to-cart-your-toy/
├── public/
│   ├── fakeData.json           # Product data (name, price, rating, category, image)
│   └── index.html              # HTML template with Google Fonts
├── src/
│   ├── App.js                  # Root — state management, hero, features, testimonials, FAQ, footer
│   ├── App.css                 # Hero, features, testimonials, FAQ, footer, toast, animations
│   ├── index.js                # React DOM entry point
│   ├── index.css               # Global reset, CSS variables, design tokens
│   └── Component/
│       ├── Header/             # Navbar with logo, nav links, Login/Sign Up, cart badge
│       ├── Shop/               # Search + category filter tabs + product grid
│       ├── Product/            # Product card with hover overlay, ratings, add-to-cart
│       └── Cart/               # Cart sidebar with qty controls, summary, random picker
├── package.json
└── README.md
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/WahidaAkhter/add-to-cart-your-toy.git

# Navigate into the project
cd add-to-cart-your-toy

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000` 🎉

---

## 📸 Page Sections

| Section | What It Showcases |
|---|---|
| 🎯 **Hero** | Gradient text, floating toy emojis, animated orbs, CTA button |
| 📊 **Features Strip** | 4-column icon cards — Free Shipping, Secure Payment, 24/7 Support, Easy Returns |
| 🏷️ **Shop + Filters** | Category pill tabs + search bar with combined filtering logic |
| 🛒 **Smart Cart** | Quantity management, price summary, random picker with dice animation |
| ⭐ **Testimonials** | 3 customer review cards with star ratings and gradient avatars |
| ❓ **FAQ Accordion** | 5 expandable questions with smooth CSS transitions |
| 🔗 **Footer** | Brand, quick links, support links, copyright |

---

<p align="center">
  Made with 💜 and React
</p>
