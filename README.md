<p align="center">
  <img src="https://img.shields.io/badge/React-17.0.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/CSS3-Responsive-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" />
</p>

# 🧸 Add-to-Cart Toy Store

> A fun, responsive toy store web app where you can browse adorable toys, toss them into your cart, and even let the app surprise you by picking one randomly. Built with love using React.

---

## 🌐 Live Demo

👉 **Check it out here:** [toys-store.netlify.app](https://toys-store.netlify.app/)

---

## ✨ What This Project Is About

Ever wanted to build a clean, interactive shopping cart experience from scratch? That's exactly what this project is. It's a **single-page toy store application** that lets users:

- 🛍️ **Browse** a curated collection of 9 beautifully displayed toys
- 🛒 **Add items to the cart** with a single click
- 💰 **See the total cost** update in real time
- 🎲 **"Choose One for Me"** — a fun random picker that selects a toy from your cart
- 🔄 **Clear the cart** and start fresh whenever you want
- ⚠️ **Smart alerts** — the app gently nudges you if you go overboard (more than 4 items!)

No backend needed. No database. Just pure frontend magic. ✨

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **React.js** `v17.0.2` | The backbone of the app — component-based UI rendering |
| **React Hooks** (`useState`, `useEffect`) | Managing cart state and fetching product data without class components |
| **JavaScript (ES6+)** | Core logic — arrow functions, destructuring, spread operators, and more |
| **HTML5** | Semantic structure for accessibility and SEO |
| **CSS3** (Custom) | Hand-crafted responsive styling with CSS Grid, media queries, and hover effects |
| **Font Awesome** (via `@fortawesome/react-fontawesome`) | Beautiful shopping cart icons that bring the UI to life |
| **JSON (Fake Data)** | A local JSON file simulating a product API — no external dependencies needed |
| **Create React App** `v5.0.0` | Zero-config project scaffolding with Webpack, Babel, and ESLint baked in |
| **React Testing Library** + **Jest** | Unit testing setup for component-level reliability |
| **Web Vitals** `v2.1.4` | Performance monitoring to keep the app snappy |
| **Netlify** | Seamless deployment and hosting with instant builds |

---

## 🧠 How It Works — Under the Hood

Here's the story of what happens when a user lands on the app:

### 1. 📦 Data Loading
When the app mounts, the `Shop` component uses `useEffect` to **fetch product data** from a local `fakeData.json` file. This simulates a real API call and populates the product grid dynamically — no hardcoded products in the JSX.

### 2. 🧩 Component Architecture
The app follows a **clean, modular component structure**:

```
App
├── Header        →  Displays the store title & instruction
└── Shop          →  The main layout (products + cart)
    ├── Product   →  Individual product card with image, name, price & add-to-cart button
    └── Cart      →  Sidebar showing selected items, total, random picker & clear button
```

Each component is self-contained with its own `.js` and `.css` file — making the codebase easy to navigate and maintain.

### 3. 🛒 Cart Management
- **Adding items:** When you click "Add to Cart," the `handleAddToCart` function uses the **spread operator** to create a new cart array (immutably!) and updates state via `useState`.
- **Total calculation:** The `Cart` component loops through the cart array and sums up prices on every render — simple and effective.
- **Random pick:** The "Choose One for Me" button generates a random index from the cart array and displays the lucky toy's name.
- **Clear cart:** Resets the cart state back to an empty array.

### 4. 📱 Responsive Design
The layout uses **CSS Grid** to create a `4fr 1fr` split between the product grid and the cart sidebar. On screens smaller than `688px`, the grid collapses to a single column — so it looks great on phones too.

### 5. 🎨 UI & Interactions
- Product cards have **hover effects** on the "Add to Cart" button (soft peach → vibrant orange-red)
- The header title changes color on hover for a playful touch
- The cart sidebar has a warm, semi-transparent orange background
- Font Awesome icons add a polished, professional feel to buttons

---

## 📂 Project Structure

```
add-to-cart-your-toy/
├── public/
│   ├── fakeData.json           # Product data (name, price, image URLs)
│   ├── index.html              # Main HTML template
│   └── ...
├── src/
│   ├── App.js                  # Root component — assembles Header + Shop
│   ├── App.css                 # Global styles
│   ├── index.js                # React DOM entry point
│   ├── Component/
│   │   ├── Header/
│   │   │   ├── Header.js       # Store title & subtitle
│   │   │   └── Header.css
│   │   ├── Shop/
│   │   │   ├── Shop.js         # Product grid + cart layout + state logic
│   │   │   └── Shop.css
│   │   ├── Product/
│   │   │   ├── Product.js      # Individual product card
│   │   │   └── Product.css
│   │   └── Cart/
│   │       ├── Cart.js         # Cart sidebar with total, random picker, clear
│   │       └── Cart.css
│   └── fakeData/
│       └── fakeData.json       # Alternate data source
├── package.json
└── README.md
```

---

## 🚀 Getting Started

Want to run this locally? It's super easy:

```bash
# 1. Clone the repository
git clone https://github.com/WahidaAkhter/add-to-cart-your-toy.git

# 2. Navigate into the project
cd add-to-cart-your-toy

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will open at `http://localhost:3000` — and you're good to go! 🎉

---

## 📸 Key Features at a Glance

| Feature | Description |
|---|---|
| 🧸 Product Grid | 3-column responsive grid showcasing 9 toys with images from Unsplash |
| 🛒 Add to Cart | One-click add with real-time cart updates |
| 💵 Live Total | Cart total recalculates instantly as items are added |
| 🎲 Random Picker | Can't decide? Let the app pick a toy for you! |
| 🔄 Clear Cart | Start over with a clean slate |
| ⚠️ Over-shopping Alert | Friendly reminder when you add more than 4 items |
| 📱 Mobile Responsive | Looks great on all screen sizes |

---

<p align="center">
  Made with 💛 and React
</p>
