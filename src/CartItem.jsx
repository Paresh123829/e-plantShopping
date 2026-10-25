import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
    const cart = useSelector(
        (state) => state.cart.items ?? []
    );

    const dispatch = useDispatch();

  // Calculate the total cost of all items in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(String(item.cost).replace('$', ''));
      return total + price * item.quantity;
    }, 0).toFixed(2);
  };

  // Return to the plant listing page
  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping(e);
  };

  // Increase the quantity of an item
  const handleIncrement = (item) => {
    dispatch(
        updateQuantity({
            name: item.name,
            quantity: item.quantity + 1,
        })
    );
};

  // Decrease the quantity or remove the item when it reaches zero
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
        dispatch(
            updateQuantity({
                name: item.name,
                quantity: item.quantity - 1,
            })
        );
    } else {
        dispatch(removeItem(item.name));
    }
};

  // Remove an item from the cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
};

  // Calculate the subtotal for an individual item
  const calculateTotalCost = (item) => {
    const price = parseFloat(String(item.cost).replace('$', ''));
    return (price * item.quantity).toFixed(2);
  };

  // Placeholder for checkout functionality
  const handleCheckoutShopping = (e) => {
    e.preventDefault();
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>

      {cart.length === 0 ? (
        <p style={{ color: 'black' }}>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div className="cart-item" key={item.name}>
              <img
                className="cart-item-image"
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>

                <div className="cart-item-cost">
                  Unit Price: $
                  {parseFloat(
                    String(item.cost).replace('$', '')
                  ).toFixed(2)}
                </div>

                <div className="cart-item-quantity">
                  <button
                    className="cart-item-button cart-item-button-dec"
                    onClick={() => handleDecrement(item)}
                    aria-label={`Decrease ${item.name} quantity`}
                  >
                    -
                  </button>

                  <span className="cart-item-quantity-value">
                    {item.quantity}
                  </span>

                  <button
                    className="cart-item-button cart-item-button-inc"
                    onClick={() => handleIncrement(item)}
                    aria-label={`Increase ${item.name} quantity`}
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-total">
                  Subtotal: ${calculateTotalCost(item)}
                </div>

                <button
                  className="cart-item-delete"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* <div
        style={{ marginTop: '20px', color: 'black' }}
        className="total_cart_amount"
      /> */}

      <div className="continue_shopping_btn">
        <button
          className="get-started-button"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>

        <br />

        <button
          className="get-started-button1"
          onClick={handleCheckoutShopping}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
