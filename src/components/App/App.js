import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from '../LogIn/LogIn.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import Cart from '../Cart/Cart.jsx';
import Navbar from '../Home/Navbar.jsx';
import Home from '../LandingPage/Home.jsx';
import Products from '../LandingPage/Products.jsx';
import Product from '../LandingPage/Product.jsx';
import Footer from '../Home/Footer.jsx';
import Rider from '../LandingPage/Rider.jsx';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [orders, setOrders] = useState([
    { id: 1, orderName: 'Order 1', totalAmount: 50.0 },
    { id: 2, orderName: 'Order 2', totalAmount: 75.0 },
    // Add more orders as needed
  ]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleSearch = (searchQuery) => {
    setSearchTerm(searchQuery);
  };

  // Rest of your existing code...

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar onSearch={handleSearch} />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                />
              }
            />
            <Route
              path="/products/*"
              element={<Products addToCart={addToCart} searchTerm={searchTerm} />}
            />
            <Route
              path="/products/:id"
              element={<Product addToCart={addToCart} />}
            />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/rider"
              element={<Rider orders={orders} setOrders={setOrders} />} // Pass setOrders as a prop
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
