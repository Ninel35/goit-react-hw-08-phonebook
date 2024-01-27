import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, refreshThunk, signUpThunk } from "./thunks";


const handlePending = (state) => {
    state.loading = true
            state.error = ''
}

const handleRejected = (state, {payload}) => {
         state.loading = false
    state.error = payload
    
}

const handleFulfilled = (state) => {
        state.loading = false
}


const handleSignUp = (state, { payload })=> {
    state.token = payload.token
    state.profile = payload.user
}

const handleLogin = (state, { payload }) => {
    state.token = payload.token
    state.profile = payload.user
}


const initialState = {
    loading: false,
    error: '',
    token: '',
    profile: null,

}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder.addCase(signUpThunk.fulfilled, handleSignUp)
            .addCase(loginThunk.fulfilled, handleLogin)
            .addCase(refreshThunk.fulfilled, handleSignUp)
            .addCase(refreshThunk.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.profile = null
                localStorage.clear()
             })
            .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
            .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
            .addMatcher((action) => action.type.endsWith('/fulfilled'), handleFulfilled)
        
    }
})
export const authReducer = authSlice.reducer