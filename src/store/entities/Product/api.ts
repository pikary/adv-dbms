import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetProductsResponse, GetRecommnendedResponse } from './types'
import baseRequest from "../../../utils/baseApi";
import { Product } from "./types";


export const getCategoryProducts = createAsyncThunk<
    GetProductsResponse,
    { categoryId: string, page: number, limit: number },
    { rejectValue: string }
>('products/get', async (reqBody, thunkAPI) => {
    try {
        const { categoryId, limit, page } = reqBody
        const result = await baseRequest<GetProductsResponse>(
            'GET',
            `api/categories/${categoryId}/products?page=${page}&limit=${limit}`
        );
        console.log(result);
        
        return result!.data
    } catch (e) {
        return thunkAPI.rejectWithValue((e as Error).message);
    }
});



export const likeProduct = createAsyncThunk<
    {product:Product},
    {product_id:string, likedProductTags: string[]},
    {rejectValue:string}
>(
    'products/like',
    async (reqBody, thunkAPI) => {
        try {
            const { product_id,likedProductTags } = reqBody
            const response = await baseRequest<{product:Product}>('POST', `api/categories/product/like`, {
                likedProductId: product_id, 
                likedProductTags:likedProductTags
            });
            return response!.data; // Assuming your API returns the liked product info
        } catch (error) {
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    }
);



export const getRecommenedProducts = createAsyncThunk<
    GetRecommnendedResponse,
    {a:string},
    { rejectValue: string }
>('products/recommendation', async (_, thunkAPI) => {
    try {
        const result = await baseRequest<GetRecommnendedResponse>(
            'GET',
            `api/categories/recommendations`
        );
        console.log(result);
        return result!.data
    } catch (e) {
        return thunkAPI.rejectWithValue((e as Error).message);
    }
});