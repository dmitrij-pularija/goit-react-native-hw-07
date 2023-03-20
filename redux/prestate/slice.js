import { createSlice } from '@reduxjs/toolkit';
import { initialPrestate } from '../../services/initial';
import { sendPhoto, delPhoto } from "./operations";
import { createPost } from "../data/operations";

const prestateSlice = createSlice({
    name: 'prestate',
    initialState: initialPrestate,
    extraReducers: builder => {
    builder
    .addCase(sendPhoto.fulfilled, (state, {payload: { url }}) => {
        state.uri = url;
    })
    .addCase(delPhoto.fulfilled, state => {state.uri = null; state.timeStamp = null;})
    .addCase(createPost.fulfilled, state => {state.uri = null})
    },
    reducers: {
        setTimeStamp(state, { payload }) {
            state.timeStamp = payload;
          },    
    },
});

export const prestateReducer = prestateSlice.reducer;
export const { setTimeStamp } = prestateSlice.actions;
// export default prestateReducer;