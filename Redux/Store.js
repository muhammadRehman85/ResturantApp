import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slice'; // Import the reducer, not the slice

export const store = configureStore({
  reducer: { 
    cart: cartReducer // Use the reducer here
  },
});

export default store;
