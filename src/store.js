import { configureStore } from "@reduxjs/toolkit";
import palindromeReducer from "./features/palindromeSlice";
export const store = configureStore({
  reducer: {
    palindrome: palindromeReducer,
  },
});
