import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const authApi = createAsyncThunk("users/fetch", async (userId, thunkAPI) => {
    if (!localStorage.getItem("authToken")) {
        return thunkAPI.rejectWithValue("User is not authenticated");
    }
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/`,{
        headers: {
            Authorization: `Token ${localStorage.getItem("authToken")}`
        }
    });
    console.log(response.data);
    return response.data;
});

const logoutApi = createAsyncThunk("users/logout", async (userId, thunkAPI) => {
    if (!localStorage.getItem("authToken")) {
        return thunkAPI.rejectWithValue("User is not authenticated");
    }
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/logout/`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("authToken")}`
        }
    });
    return response.data;
});

const loginApi = createAsyncThunk("users/login", async (userName,email,password, thunkAPI) => {
    if (!localStorage.getItem("authToken")) {
        return thunkAPI.rejectWithValue("User is not authenticated");
    }
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/login/`, {
        userName, email, password
    });
    return response.data;
});

const signupApi = createAsyncThunk("users/signup", async ({username, email, password1, password2}) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/registration/`, {
        username, email, password1, password2
    });
    localStorage.setItem('authToken', response.key);
    return response.data;
});

export {authApi, logoutApi, loginApi, signupApi};