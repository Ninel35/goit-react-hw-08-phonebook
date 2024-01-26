import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginApi, SignUpApi } from "api/auth";

export const signUpThunk = createAsyncThunk('auth/signUp', async (body, { rejectWithValue }) => {
    try {
         return await SignUpApi(body) 
       
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const loginThunk = createAsyncThunk('auth/login', async (body, { rejectWithValue }) => {
    try {
         return await LoginApi(body) 
       
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})