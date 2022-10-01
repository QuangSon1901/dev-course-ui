import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as httpRequest from '~/utils/httpRequest';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        loading: false,
        subjects: [],
        programs: [],
        teachers: [],
        subjects_total: 0,
        programs_total: 0,
        teachers_total: 0,
    },
    reducers: {
        clearData(state) {
            state.loading = false;
            state.subjects = [];
            state.programs = [];
            state.teachers = [];
            state.subjects_total = 0;
            state.programs_total = 0;
            state.teachers_total = 0;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchHeader.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchHeader.fulfilled, (state, action) => {
                state.subjects = action.payload.subjects;
                state.programs = action.payload.programs;
                state.teachers = action.payload.teachers;
                state.subjects_total = action.payload.subjects_total;
                state.programs_total = action.payload.programs_total;
                state.teachers_total = action.payload.teachers_total;
                state.loading = false;
            });
    },
});

const searchHeader = createAsyncThunk('searchHeader', async (data) => {
    try {
        const res = await httpRequest.get('/search', {
            params: data,
        });

        return res;
    } catch (error) {
        if (error.response.data) return error.response.data;
        return { success: false, message: error.message };
    }
});

export { searchHeader };
export default searchSlice;
