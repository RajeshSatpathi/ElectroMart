import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // array of cart items
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      // action.payload should be a product { id, name, price, quantity }
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      state.totalQuantity++;
      state.totalPrice += newItem.price * (newItem.quantity || 1);

      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: newItem.quantity || 1,
        });
      } else {
        existingItem.quantity += newItem.quantity || 1;
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;
      state.totalPrice -= existingItem.price * existingItem.quantity;

      state.items = state.items.filter(item => item.id !== id);
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },

    // You can add more actions: increaseQuantity, decreaseQuantity, etc.
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
