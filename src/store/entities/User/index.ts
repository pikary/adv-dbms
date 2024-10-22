import { createSlice, PayloadAction, isPending, isFulfilled, isRejected } from "@reduxjs/toolkit";
import { User } from "./types";
import { googleAsync, loginAsync, registerAsync } from "./api";

interface UserState {
    currentUser: User | null,
    isLoading: boolean,
    error: string | null | undefined
}


const initialState: UserState = {
    currentUser: null,
    isLoading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthToken: (state, action: PayloadAction<string>) => {
            localStorage.setItem('access_token', action.payload)
        },   
    },
    extraReducers(builder) {
        builder.addMatcher(isPending(registerAsync, loginAsync, googleAsync), (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addMatcher(isFulfilled(registerAsync, loginAsync, googleAsync), (state, action) => {
            state.currentUser = action.payload.user;
            state.isLoading = false;
        });

        builder.addMatcher(isRejected(registerAsync, loginAsync, googleAsync), (state, action) => {
            state.error = action.payload as string; // Assuming error payload is a string
            state.isLoading = false;
        });
    },
})

export const {setAuthToken} = userSlice.actions

export default userSlice.reducer