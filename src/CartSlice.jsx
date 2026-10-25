
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [],
  },

  reducers: {
    // Add a plant to the cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;

      // Check whether the plant already exists in the cart
      const existingItem = state.items.find(
        (item) => item.name === name
      );

      if (existingItem) {
        // Increase quantity if the plant already exists
        existingItem.quantity++;
      } else {
        // Add a new plant with quantity 1
        state.items.push({
          name,
          image,
          cost: parseFloat(String(cost).replace('$', '')),
          quantity: 1,
        });
      }
    },

    // Remove a plant from the cart by name
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload
      );
    },

    // Update the quantity of a plant
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const itemToUpdate = state.items.find(
        (item) => item.name === name
      );

      if (itemToUpdate) {
        if (quantity <= 0) {
          state.items = state.items.filter(
            (item) => item.name !== name
          );
        } else {
          itemToUpdate.quantity = quantity;
        }
      }
    },
  },
});

// Export action creators
export const {
  addItem,
  removeItem,
  updateQuantity,
} = CartSlice.actions;

// Export reducer for the Redux store
export default CartSlice.reducer;
