import { createAsyncThunk } from "@reduxjs/toolkit";
import {LoginRequestBody, RegistrationRequestBody, ResponseUserBody} from './types'
import baseRequest from "../../../utils/baseApi";
import { setAuthToken } from ".";

export const registerAsync = createAsyncThunk<
    ResponseUserBody,
    RegistrationRequestBody,
    { rejectValue: string }
>('user/register', async (reqBody, thunkAPI) => {
    try {
        const result = await baseRequest<ResponseUserBody>(
            'POST',
            'api/auth/register',
            reqBody
        );

        
        thunkAPI.dispatch(setAuthToken(result?.data.access_token || ''))
        return result!.data
    } catch (e) {
        return thunkAPI.rejectWithValue((e as Error).message);
    }
});

export const loginAsync = createAsyncThunk<
    ResponseUserBody,
    LoginRequestBody,
    { rejectValue: string }
>('user/login', async (reqBody, thunkAPI) => {
    try {
        const result = await baseRequest<ResponseUserBody>(
            'POST',
            'api/auth/login',
            reqBody
        );
        thunkAPI.dispatch(setAuthToken(result?.data.access_token || ''))
        return result!.data
    } catch (e) {
        return thunkAPI.rejectWithValue((e as Error).message);
    }
});

export const googleAsync = createAsyncThunk<
    ResponseUserBody,
    {token:string},
    { rejectValue: string }
>('user/googleAuth', async (reqBody, thunkAPI) => {
    try {
        const result = await baseRequest<ResponseUserBody>(
            'POST',
            'api/auth/google',
            reqBody
        );      
        thunkAPI.dispatch(setAuthToken(result?.data.access_token || ''))

        return result!.data
    } catch (e) {
        return thunkAPI.rejectWithValue((e as Error).message);
    }
});