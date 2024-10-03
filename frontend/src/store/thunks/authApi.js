import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const authApi = createAsyncThunk("users/fetch", async (userId, thunkAPI) => {
    if (!localStorage.getItem("authToken")) {
        return thunkAPI.rejectWithValue("User is not authenticated");
    }
    const response = await axios.get("http://localhost:8000/dj-rest-auth/user/",{
        headers: {
            Authorization: `Token ${localStorage.getItem("authToken")}`
        }
    });
    // DEV ONLY
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(response.data);
    return response.data;
});

const logoutApi = createAsyncThunk("users/logout", async (userId, thunkAPI) => {
    if (!localStorage.getItem("authToken")) {
        return thunkAPI.rejectWithValue("User is not authenticated");
    }
    const response = await axios.post("http://localhost:8000/dj-rest-auth/logout/", {
        headers: {
            Authorization: `Token ${localStorage.getItem("authToken")}`
        }
    });
    // DEV ONLY
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(response.data);
    return response.data;
});

export {authApi , logoutApi};