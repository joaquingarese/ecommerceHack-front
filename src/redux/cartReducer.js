// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productInCart = state.cartItems.some(
        (item) => item.id === action.payload.product.id
      );
      if (productInCart) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === action.payload.product.id
            ? {
                ...item,
                quantity:
                  Number(item.quantity) + Number(action.payload.quantity),
              }
            : item
        );
      } else {
        state.cartItems.push({
          ...action.payload.product,
          quantity: Number(action.payload.quantity),
        });
      }
    },
    updateCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const productIndex = state.cartItems.findIndex(
        (item) => item.id === productId
      );
      if (productIndex >= 0) {
        state.cartItems[productIndex].quantity = quantity;
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateCart } =
  cartSlice.actions;

export default cartSlice.reducer;
