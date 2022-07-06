import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
    },
    setIsSignedIn(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setIsLoggedIn(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logOutState(state, _) {
      state.user = { name: null, email: null };
      state.token = null;
    },
  },
});

export const { setUser, setIsSignedIn, setIsLoggedIn, logOutState } =
  authSlice.actions;
