import { createSlice } from '@reduxjs/toolkit';
import { initialAuth } from '../../services/initial';
import { signup, signin, signout, refresh } from "./operations";

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuth,
    extraReducers: builder => {
    builder
    .addCase(signup.fulfilled, (state, {payload: { uid, displayName, email, photoURL }}) => {
        state.userId = uid;
        state.nickName = displayName;
        state.email = email;
        state.photoURL = photoURL;
    })
    .addCase(signin.fulfilled, (state, {payload: { uid, displayName, email, photoURL }}) => {
        state.userId = uid;
        state.nickName = displayName;
        state.email = email;
        state.photoURL = photoURL;
    })
    .addCase(refresh.fulfilled, (state, {payload: { uid, displayName, email, photoURL }}) => {
        state.userId = uid;
        state.nickName = displayName;
        state.email = email;
        state.photoURL = photoURL;
    })
    .addCase(signout.fulfilled, state => state = initialAuth)
    .addCase(refresh.rejected, state => state = initialAuth)
    }
});

const authReducer = authSlice.reducer;

export default authReducer;