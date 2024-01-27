import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginApi, SignUpApi, getCurrentUser } from "api/auth";

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

export const refreshThunk = createAsyncThunk('auth/refresh', async (_, { rejectWithValue, getState }) => {
    try {
        console.log('getState()', getState())
         return await getCurrentUser(getState().auth.token) 
       
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})