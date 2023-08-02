import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, setCartItems, clearCart }) => {
  const handleRemoveFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
    removeFromCart(productId);
  };
  const handleClearCart = () => {
    setCartItems([]);
    clearCart();
  };
  const handleQuantityChange = (productId, quantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: quantity,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };
  const getTotalQuantity = () => {
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    return totalQuantity;
  };
  const getTotalAmount = () => {
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return totalAmount;
  };

  const handleDelivery = () => {
    if (cartItems.length > 0) {
      const selectedIds = cartItems.map((item) => item.id);
      window.location.href = `/rider?ids=${selectedIds.join(',')}`;
    }
  };

  return (
    <div id="cart-wrapper">
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-12">
            <h1 id="cart-heading" className="name">
              Shopping Cart
            </h1>
            <div id="cart-table-container">
              <table id="cart-table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems && cartItems.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center">
                        No items in the cart
                      </td>
                    </tr>
                  ) : (
                    cartItems &&
                    cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>
                          <img src={item.image} alt={item.title} />
                        </td>
                        <td>${item.price}</td>
                        <td>
                          <button
                            className="quantity-btn"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            disabled={item.quantity === 1}
                          >
                            -
                          </button>
                          {item.quantity}
                          <button
                            className="quantity-btn"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </td>
                        <td>${item.price * item.quantity}</td>
                        <td>
                          <button
                            className="remove-btn"
                            onClick={() => handleRemoveFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            {cartItems && cartItems.length > 0 && (
              <div className="text-center">
                <button id="clear-cart" className="clear-cart-btn" onClick={handleClearCart}>
                  Clear Cart
                </button>
<<<<<<< HEAD
                <button className="btn btn-outline-dark">Checkout</button>
                <button className="btn btn-outline-dark" onClick={handleDelivery}>
=======
                <button id="checkout" className="checkout-btn">
                  Checkout
                </button>
                <button id="deliver" className="deliver-btn" onClick={handleDelivery}>
>>>>>>> RyanBiy
                  Deliver
                </button>
                <hr />
                <p id="total-quantity">Total Quantity: {getTotalQuantity()}</p>
                <p id="total-amount">Total Amount: ${getTotalAmount()}.00</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;