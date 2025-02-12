import {createSlice} from "@reduxjs/toolkit";
import {courseApi} from "../thunks/courseApi";

const courseSlice = createSlice({
    name: 'boards',
    initialState: {
        boards: [],
        loading: false,
        error: null,
    },
    reducers:{},
    extraReducers (builder){
        builder
            .addCase(courseApi.pending, (state) => {
            state.loading = true;
            state.error = null;
            })
            .addCase(courseApi.fulfilled, (state, action) => {
                state.loading = false;
                state.boards = action.payload;
                state.error = null;
            })
            .addCase(courseApi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            });
    }
});

export const courseReducer = courseSlice.reducer;