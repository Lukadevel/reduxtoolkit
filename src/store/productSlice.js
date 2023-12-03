import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'product',
    initialState: {
        allProducts: [],
        isLoading: false
    },
    reducers: {
        getAllProductsAction: (state, action) => { }
    }
})