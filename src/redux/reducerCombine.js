import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as httpRequest from '~/utils/httpRequest';

const reducerCombine = createSlice({
    name: 'combine',
    initialState: {
        loading: false,
        menuPrograms: [],
    },
    extraReducers: (builder) => {
        builder
            .addCase(combineApi.pending, (state) => {
                state.loading = true;
            })
            .addCase(combineApi.fulfilled, (state, action) => {
                state.loading = false;
                switch (action.payload.success) {
                    case 'success':
                        state.menuPrograms = action.payload.menu_programs;
                        break;
                    default:
                }
            });
    },
});

const combineApi = createAsyncThunk('combineApi', async (form) => {
    try {
        const res = await httpRequest.get('/combine');

        return res;
    } catch (error) {
        if (error.response.data) return error.response.data;
        return { status: 503, success: 'error', message: error.message };
    }
});

export { combineApi };
export default reducerCombine;
