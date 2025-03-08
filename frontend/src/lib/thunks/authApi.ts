import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const authApi = createAsyncThunk("users/fetch", async (userId, thunkAPI) => {
    try {
        if (!localStorage.getItem("authToken")) {
            return thunkAPI.rejectWithValue("User is not authenticated");
        }
        // eslint-disable-next-line no-undef
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("authToken")}`
            }
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
});

const logoutApi = createAsyncThunk("users/logout", async (userId, thunkAPI) => {
    if (!localStorage.getItem("authToken")) {
        return thunkAPI.rejectWithValue("User is not authenticated");
    }
    // eslint-disable-next-line no-undef
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/logout/`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("authToken")}`
        }
    });
    return response.data;
});

const loginApi = createAsyncThunk("users/login", async ({ username, email, password }, thunkAPI) => {
        try {
            const response = await axios
                // eslint-disable-next-line no-undef
                .create({baseURL: process.env.NEXT_PUBLIC_API_URL})
                .post(`/login/`, {
                username,
                email,
                password
            });

            // 將 authToken 儲存到 localStorage 中
            localStorage.setItem("authToken", response.data.key);

            // 返回用戶資料，便於在 Redux 中更新
            return response.data;
        } catch (error) {
            // 這裡捕獲錯誤並返回錯誤訊息
            return thunkAPI.rejectWithValue(error.response?.data || "Error logging in");
        }
    });

const signupApi = createAsyncThunk("users/signup", async ({username, email, password1, password2, role="visitor", id_card_number}) => {
    // eslint-disable-next-line no-undef
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/registration/`, {
        username, email, password1, password2, role, id_card_number
    });
});

export {authApi, logoutApi, loginApi, signupApi};