import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// @ts-ignore
const boardApi = createAsyncThunk("boards/fetch", async ({page=1}) => { // Removed unused thunkAPI
    // eslint-disable-next-line no-undef
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/bbs/boards/`, {
        params: { page },
    });
    return response.data;
})

const createBoardApi = createAsyncThunk("boards/create", async () => { // Removed unused board and thunkAPI

})

export {boardApi, createBoardApi};