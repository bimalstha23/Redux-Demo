
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    error: ''
}
export const getProducts = createAsyncThunk(
    'Products/getProducts',
    async () => {
        const res = await axios({
            method: "GET",
            url: 'https://fakestoreapi.com/products'
        })

        return res.data;
        
        // .then((res) => {
        //     console.log(res.data);
        //     return res.data;
        // }).catch((e) => {
        //     console.log(e);
        // })
        // return res;
    }
)

const slice = createSlice({
    name: 'Products',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload);
                state.data = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }

})


export default slice;