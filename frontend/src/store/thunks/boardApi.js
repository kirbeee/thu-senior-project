import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const boardApi = createAsyncThunk("boards/fetch", async ({page=1}, thunkAPI) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/bbs/boards/`, {
        params: { page },
    });
    return response.data;
})

const createBoardApi = createAsyncThunk("boards/create", async (board, thunkAPI) => {

})

export {boardApi, createBoardApi};