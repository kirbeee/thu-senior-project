import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async (userId, thunkAPI) => {
    const response = await axios.post("http://localhost:8000/account/login");
    // DEV ONLY
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(response.data);
    return response.data;
});

export {fetchUsers};