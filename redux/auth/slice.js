import { createSlice } from '@reduxjs/toolkit';
// import { register, logIn, logOut, refreshUser } from './operations';
import { initialAuth } from '../../services/initial';
import { signup, signin, signout } from "./operations";
// const authSlice = createSlice({
//     name: 'auth',
//     initialState: initialAuth,
//     reducers: {
//         setUserProfile: (state, { payload }) => ({
//             userId: payload.userId,
//             nickName: payload.nickName,
//             email: payload.email,
//             photoURL: payload.photoURL,
//     }),
//     },
// });

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuth,
    extraReducers: builder => {
    builder
    .addCase(signup.fulfilled, (state, {payload}) => {
        const { uid, displayName, email, photoURL } = payload;
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
    .addCase(signout.fulfilled, (state) => state = initialAuth)

    }
});

export const authReducer = authSlice.reducer;
export const { setUserProfile } = authSlice.actions;

