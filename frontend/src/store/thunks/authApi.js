import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const authApi = createAsyncThunk("users/fetch", async (userId, thunkAPI) => {
    if (!localStorage.getItem("authToken")) {
        return thunkAPI.rejectWithValue("User is not authenticated");
    }
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/dj-rest-auth/user/`,{
        headers: {
            Authorization: `Token ${localStorage.getItem("authToken")}`
        }
    });
    // DEV ONLY - Simulate slow network
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(response.data);
    return response.data;
});

const logoutApi = createAsyncThunk("users/logout", async (userId, thunkAPI) => {
    if (!localStorage.getItem("authToken")) {
        return thunkAPI.rejectWithValue("User is not authenticated");
    }
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/dj-rest-auth/logout/`, {
        headers: {
            Authorization: `Token ${localStorage.getItem("authToken")}`
        }
    });
    // DEV ONLY
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // console.log(response.data);
    return response.data;
});

const loginApi = createAsyncThunk("users/login", async (userName,email,password, thunkAPI) => {
    if (!localStorage.getItem("authToken")) {
        return thunkAPI.rejectWithValue("User is not authenticated");
    }
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/dj-rest-auth/login/`, {
        userName, email, password
    });
    // DEV ONLY
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // console.log(response.data);
    return response.data;
});
const signupApi = createAsyncThunk("users/signup", async (userName,email,password,verifyPassword, thunkAPI) => {
    if (!localStorage.getItem("authToken")) {
        return thunkAPI.rejectWithValue("User is not authenticated");
    }
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/dj-rest-auth/registration/`, {
        userName, email, password, verifyPassword
    });
    // DEV ONLY
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // console.log(response.data);
    return response.data;
});

export {authApi, logoutApi, loginApi, signupApi};