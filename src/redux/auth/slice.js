import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

// const handleRegisterFulfilled = (state, action) => {
//   state.user = action.payload.user;
//   state.token = action.payload.token;
//   state.isLoggedIn = true;
// };

// const handleLogInFulfilled = (state, action) => {
//   state.user = action.payload.user;
//   state.token = action.payload.token;
//   state.isLoggedIn = true;
// };

// const handleLogOutFulfilled = (state) => {
//   state.user = { name: null, email: null };
//   state.token = null;
//   state.isLoggedIn = false;
// };

// const handleRefreshUserPending = (state) => {
//   state.isRefreshing = true;
// };

// const handleRefreshUserRejected= (state) => {
//   state.isRefreshing = false;
// };

// const handleRefreshUserFulfilled = (state, action) => {
//   state.user = action.payload;
//   state.isLoggedIn = true;
//   state.isRefreshing = false;
// };

 const handleRegisterFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
  state.isLoading = false;
  state.isLoggedIn = true;
};

 const handleRegisterPending = (state, { payload }) => {
  state.isLoading = true;
  state.error = null;
  state.isLoggedIn=false;
};

 const handleRegisterRejected = (state, { error,payload }) => {
  state.error = error?error.message:payload;
  state.isLoading = false;
  state.isLoggedIn=false;
};

 const handleLoginFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
  state.isLoading = false;
  state.isLoggedIn = true;
};

 const handleLoginPending = (state, { payload }) => {
  state.isLoading = true;
  state.error = null;
  state.isLoggedIn=false;
};

 const handleLoginRejected = (state, { error,payload }) => {
  state.error = error?error.message:payload;
  state.isLoading = false;
  state.isLoggedIn=false;
};

 const handleLogOutFulfilled = (state, { payload }) => {
  state.token = '';
  state.isLoading = false;
  state.user = {};
  state.isLoggedIn = false;  
};

 const handleLogOutPending = (state, { payload }) => {
  state.isLoading = true;
  state.error = null;
  state.isLoggedIn=false;
  }

 const handleLogOutRejected = (state, { error,payload }) => {
  state.error = error?error.message:payload;
  state.isLoading = false;
  state.isLoggedIn=false; 
};

 const handleRefreshUserFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.currentUser = payload;
  state.isLoggedIn = true;
  state.isRefreshing=false; 
};

 const handleRefreshUserPending = (state, { payload }) => {
  state.isLoading = true;
  state.error = null;
  state.isLoggedIn=false;
  state.isRefreshing=true; 
};

 const handleRefreshUserRejected = (state, {error, payload }) => {
  state.error = error?error.message:payload;
  state.isLoading = false;
  state.isLoggedIn=false;
  state.isRefreshing=false; 
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, handleRegisterFulfilled)
    .addCase(register.pending, handleRegisterPending)
    .addCase(register.rejected, handleRegisterRejected)
    .addCase(logIn.fulfilled, handleLoginFulfilled)
    .addCase(logIn.pending, handleLoginPending)
    .addCase(logIn.rejected, handleLoginRejected)
    .addCase(logOut.fulfilled,handleLogOutFulfilled)
    .addCase(logOut.pending,handleLogOutPending)
    .addCase(logOut.rejected,handleLogOutRejected)
    .addCase(refreshUser.pending,handleRefreshUserPending)
    .addCase(refreshUser.fulfilled,handleRefreshUserFulfilled)
    .addCase(refreshUser.rejected,handleRefreshUserRejected)
  },
});

export const authReducer = authSlice.reducer;


