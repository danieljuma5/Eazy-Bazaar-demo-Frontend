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
import User from '../LandingPage/User.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice.js';





function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null)
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [orders, setOrders] = useState(cartItems);
  

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }



  // const handleAddToCart = (product) => {
  //   const existingItem = cartItems.find((item) => item.id === product.id);

  //   if (existingItem) {
  //     // If the product already exists in the cart, increment the quantity
  //     setCartItems(
  //       cartItems.map((item) =>
  //         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  //       )
  //     );
  //   } else {
  //     // If the product doesn't exist in the cart, add it with quantity = 1
  //     setCartItems([...cartItems, { ...product, quantity: 1 }]);
  //   }
  // };

  const handleSearch = (searchQuery) => {
    setSearchTerm(searchQuery);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar onSearch={handleSearch} user={user} setUser={setUser}/>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home addToCart={handleAddToCart}/>} />
            <Route
              path="/cart"
              element={
                <Cart/>
              }
            />
            <Route
              path="/products/*"
              element={<Products addToCart={handleAddToCart} searchTerm={searchTerm} />}
            />
            <Route
              path="/products/:id"
              element={<Product addToCart={handleAddToCart} />}
            />
            {/* Pass the 'user' object as a prop to the 'User' component */}
            <Route path="/profile" element={<User setUser={setUser}/>} />
            <Route path="/login" element={<LogIn onAddUser = {setUser}/>} />
            <Route path="/signup" element={<SignUp onAddUser = {setUser}/>} />
          
            <Route
  path="/rider"
  element={
    <Rider
      orders={orders} // Make sure this prop is passed
      setOrders={setOrders} // Make sure this prop is passed
      cartItems={cartItems}
    />
  }
/>
          </Routes>
        </div>
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
