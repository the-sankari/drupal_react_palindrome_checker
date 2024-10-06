import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk for API call using POST request
export const checkPalindrome = createAsyncThunk(
  "palindrome/checkPalindrome",
  async (input, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://my-first-drupal11-app.lndo.site/api/palindrome-check`,
        { input }, // Send input as request body
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : "Error occurred");
    }
  }
);

const palindromeSlice = createSlice({
  name: "palindrome",
  initialState: {
    input: "",
    result: null,
    loading: false,
    error: "",
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkPalindrome.pending, (state) => {
        state.loading = true;
        state.result = null;
        state.error = "";
      })
      .addCase(checkPalindrome.fulfilled, (state, action) => {
        state.loading = false;
        console.log('API response: ', action.payload);
        
        state.result = action.payload;
      })
      .addCase(checkPalindrome.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred.";
      });
  },
});

export const { setInput } = palindromeSlice.actions;
export default palindromeSlice.reducer;
