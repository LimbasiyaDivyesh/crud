import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter 1/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});