// src/store/auth/loginThunk.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { type LoginResponse, type LoginPayload } from "../types";
import { authService } from "../services/auth.service";

export const loginThunk = createAsyncThunk<LoginResponse, LoginPayload, {rejectValue: string}>(
  "auth/login",
  async (payload, {rejectWithValue}) => {
    try {
      const response = await authService.login(payload);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Unexpected login error");
    }
  }
)