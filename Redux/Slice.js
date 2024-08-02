import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    favorites: [],
    theme: 'light', // Default theme
  },
  reducers: {
    addtoCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
    addtoFav: (state, action) => {
      if (!state.favorites.some(item => item.id === action.payload.id)) {
        state.favorites.push(action.payload);
      }
    },
    removeFav: (state, action) => {
      state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { addtoCart, removeCart, addtoFav, removeFav, toggleTheme } = cartSlice.actions;
export default cartSlice.reducer;
