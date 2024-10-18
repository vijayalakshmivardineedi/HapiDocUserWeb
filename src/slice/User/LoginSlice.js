import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserLogin = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      // Make the API call to authenticate the user
      const response = await fetch('http://localhost:2000/api/UserSignin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      // If login is successful, return the user data
      if (response.ok) {
        const data = await response.json();
        return data; // assuming the token is returned along with user data
      } else {
        // If login fails, throw an error with the response status text
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      // Catch any network or parsing errors and throw them
      throw error;
    }
  }
);


const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
  isLoading: false,
  token: "",
};

const userLoginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    // Other reducers as before
  },
  extraReducers: (builder) => {
    builder
      // Handle the pending state (while the login request is ongoing)
      .addCase(fetchUserLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      // Handle the fulfilled state (login request is successful)
      .addCase(fetchUserLogin.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
        // Dispatch the setToken action to save the token in the state
        state.token = action.payload.token; // assuming token is returned along with user data
      })
      // Handle the rejected state (login request failed)
      .addCase(fetchUserLogin.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setToken } = userLoginSlice.actions;

export default userLoginSlice.reducer;
