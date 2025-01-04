import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const courseApi = createAsyncThunk("courses/fetch", async ({page=1}, thunkAPI) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/courses/`, {
        params: { page },
    });
    return response.data;
})

export {courseApi};