import { createSlice } from "@reduxjs/toolkit";
import { User } from "./types";

interface UserState{
    currentUser:User|null,
    isLoading:boolean,    
    error:string|null
}


const initialState:UserState = {
    currentUser:null,
    isLoading:false,
    error:null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

    }
})

export default userSlice.reducer