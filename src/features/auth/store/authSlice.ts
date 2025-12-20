import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../../features/auth/store/authInitialState";
import { loginThunk } from "./loginThunk";


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.accessToken = undefined;
            state.refreshToken = undefined;
            state.error = null;
            state.isLoggedIn = false;
            state.isAuthenticated = false;
            state.isActive = false;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loginThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.isActive = action.payload.user.isActive ?? true;
            state.isLoggedIn = !!state.accessToken && !!state.user;
            state.isAuthenticated = state.isLoggedIn && state.isActive;
        })
        .addCase(loginThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;