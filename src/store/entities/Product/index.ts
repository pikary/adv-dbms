import { createSlice, PayloadAction, isPending, isFulfilled, isRejected } from "@reduxjs/toolkit";
import { Product } from "./types";
import { getCategoryProducts,getRecommenedProducts } from "./api";

interface ProductsState {
    products: Product[],
    recommended:Product[],
    isLoading: boolean,
    totalItems: number,
    currentPage: number,
    error: string | null | undefined
}


const initialState: ProductsState = {
    recommended:[],
    products: [],
    isLoading: false,
    error: null,
    totalItems: 0,
    currentPage: 1
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        
        builder.addCase(getCategoryProducts.fulfilled, (state, action) => {
            state.currentPage = action.payload.current_page;
            state.products = action.payload.products;
            state.totalItems = action.payload.total_products;
            state.isLoading = false; 
        });
    
        builder.addCase(getCategoryProducts.pending, (state,action)=>{
            state.isLoading = true
        })
        builder.addCase(getCategoryProducts.rejected, (state,action)=>{
            state.isLoading = false
            state.error = action.payload?.toString()
        })
        
        builder.addCase(getRecommenedProducts.pending, (state,action)=>{
            state.isLoading = true
        })
        builder.addCase(getRecommenedProducts.rejected, (state,action)=>{
            state.isLoading = false
            state.error = action.payload?.toString()
        })
        builder.addCase(getRecommenedProducts.fulfilled, (state, action) => {
            state.recommended = action.payload.products; 
            state.isLoading = false; 
        });


    
    },
})

// export const {setAuthToken} = suserSlice.actions

export default productsSlice.reducer