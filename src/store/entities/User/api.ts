import { createAsyncThunk } from "@reduxjs/toolkit";
import {LoginRequestBody, RegistrationRequestBody, User} from './types'
import baseRequest from "../../../utils/baseApi";


export const registerAsync = createAsyncThunk<
    User,
    RegistrationRequestBody,
    { rejectValue: string }
>('user/register', async (reqBody, thunkAPI) => {
    try {
        const result = await baseRequest<User>(
            'POST',
            'api/register',
            reqBody
        );

        return result!.data
    } catch (e) {
        return thunkAPI.rejectWithValue((e as Error).message);
    }
});

export const loginAsync = createAsyncThunk<
    User,
    LoginRequestBody,
    { rejectValue: string }
>('user/login', async (reqBody, thunkAPI) => {
    try {
        const result = await baseRequest<User>(
            'POST',
            'api/login',
            reqBody
        );
        return result!.data
    } catch (e) {
        return thunkAPI.rejectWithValue((e as Error).message);
    }
});