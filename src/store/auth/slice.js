import { createSlice } from "@reduxjs/toolkit";
import { logOutThunk, loginThunk, refreshThunk, signUpThunk } from "./thunks";


const handlePending = (state) => {
    state.loading = true
    state.error = ''
}

const handleRejected = (state, { payload }) => {
    state.loading = false
    state.error = payload
}

const handleFulfilled = (state) => {
        state.loading = false
}


const handleSignUp = (state, { payload }) => {
    state.token = payload.token
    state.profile = payload.user
}

const handleLogin = (state, { payload }) => {
    state.token = payload.token
    state.profile = payload.user
}

const handleRefresh = (state, { payload }) => {
    state.profile = payload
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
    reducers: {
        logout: (state) => {
            state.token = ''
            state.profile = null
        }
    },
    extraReducers: builder => {
        builder.addCase(signUpThunk.fulfilled, handleSignUp)
            .addCase(loginThunk.fulfilled, handleLogin)
            .addCase(refreshThunk.fulfilled, handleRefresh)
            .addCase(refreshThunk.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
                state.profile = null
                localStorage.clear()
            })
              .addCase(logOutThunk.fulfilled, (state) => {
                  state.profile = null
                  state.token = ''
                localStorage.clear()
             })
            .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
            .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
            .addMatcher((action) => action.type.endsWith('/fulfilled'), handleFulfilled)
        
    }
})
export const authReducer = authSlice.reducer
export const {logout} = authSlice.actions