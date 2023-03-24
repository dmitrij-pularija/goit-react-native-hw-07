import { createSlice } from '@reduxjs/toolkit';
import { initialPrestate } from '../../services/initial';
import { sendPhoto, delPhoto } from "./operations";
import { signup } from "../auth/operations";
import { createPost } from "../data/operations";

const prestateSlice = createSlice({
    name: 'prestate',
    initialState: initialPrestate,
    extraReducers: builder => {
    builder
    .addCase(sendPhoto.fulfilled, (state, {payload}) => {state.uri = payload;})
    .addCase(delPhoto.fulfilled, state => {state.uri = null})
    .addCase(signup.fulfilled, state => {state.uri = null})
    .addCase(createPost.fulfilled, state => {state.uri = null;})
    },
    // reducers: {
    //     setTimeStamp(state, { payload }) {
    //         state.path = payload;
    //       },    
    // },
});

export const prestateReducer = prestateSlice.reducer;
// export const { setTimeStamp } = prestateSlice.actions;
// export default prestateReducer;