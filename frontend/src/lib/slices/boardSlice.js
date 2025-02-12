import {createSlice} from "@reduxjs/toolkit";
import {boardApi} from "../thunks/boardApi";

const boardSlice = createSlice({
    name: 'boards',
    initialState: {
        boards: [],
        loading: false,
        error: null,
    },
    reducers:{},
    extraReducers (builder){
        builder
            .addCase(boardApi.pending, (state) => {
            state.loading = true;
            state.error = null;
            })
            .addCase(boardApi.fulfilled, (state, action) => {
                state.loading = false;
                state.boards = action.payload;
                state.error = null;
            })
            .addCase(boardApi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            });
    }
});

export const boardsReducer = boardSlice.reducer;