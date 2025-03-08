import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface LoginPayload {
    username: string;
    email: string;
    password: string;
}

interface SignupPayload {
    username: string;
    email: string;
    password1: string;
    password2: string;
    role?: string;
    id_card_number?: string;
}

interface UserResponse {
    last_name: string;
    first_name: string;
    token: string;
    username: string;
    key: string;
}

export const authApi = createAsyncThunk<UserResponse, void, { rejectValue: string }>(
    "users/fetch",
    async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem("authToken");
            if (!token) {
                return thunkAPI.rejectWithValue("User is not authenticated");
            }
            const response = await axios.get<UserResponse>(`${process.env.NEXT_PUBLIC_API_URL}/user/`, {
                headers: { Authorization: `Token ${token}` },
            });
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const logoutApi = createAsyncThunk<
    void,
    void,
    { rejectValue: string }
>("users/logout", async (_, thunkAPI) => {
    const token = localStorage.getItem("authToken");
    if (!token) {
        return thunkAPI.rejectWithValue("User is not authenticated");
    }
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/logout/`, {}, {
        headers: { Authorization: `Token ${token}` },
    });
});

export const loginApi = createAsyncThunk<UserResponse, LoginPayload, { rejectValue: string }>(
    "users/login",
    async ({ username, email, password }, thunkAPI) => {
        try {
            const response = await axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL })
                .post<UserResponse>(`/login/`, { username, email, password });
            localStorage.setItem("authToken", response.data.key);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data || "Error logging in");
        }
    }
);

export const signupApi = createAsyncThunk<void, SignupPayload>(
    "users/signup",
    async ({ username, email, password1, password2, role = "visitor", id_card_number }) => {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/registration/`, {
            username, email, password1, password2, role, id_card_number
        });
    }
);
