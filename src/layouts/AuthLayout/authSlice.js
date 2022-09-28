import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as httpRequest from '~/utils/httpRequest';
import setAuthToken from '~/utils/setAuthToken';
import { storage } from '~/utils/storage';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        isAuthenticated: false,
        user: null,
        submit: false,
        notify: null,
    },
    reducers: {
        clearNotify(state) {
            state.notify = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.submit = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                const { payload } = action;
                if (action.payload.success === 'success') {
                    state.isAuthenticated = true;
                    state.user = action.payload.user;
                    state.submit = false;
                    state.notify = { status: payload.status, success: payload.success, message: payload.message };
                } else {
                    state.isAuthenticated = false;
                    state.user = null;
                    state.submit = false;
                    state.notify = { status: payload.status, success: payload.success, message: payload.message };
                }
            })
            .addCase(loginUser.pending, (state) => {
                state.submit = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                const { payload } = action;
                if (action.payload.success === 'success') {
                    state.isAuthenticated = true;
                    state.user = action.payload.user;
                    state.submit = false;
                    state.notify = { status: payload.status, success: payload.success, message: payload.message };
                } else {
                    state.isAuthenticated = false;
                    state.user = null;
                    state.submit = false;
                    state.notify = { status: payload.status, success: payload.success, message: payload.message };
                }
            })
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.user = null;
                state.loading = false;
            })
            .addCase(getUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                if (action.payload) {
                    state.isAuthenticated = true;
                    state.user = action.payload.user;
                    state.loading = false;
                } else {
                    state.isAuthenticated = false;
                    state.user = null;
                    state.loading = false;
                }
            });
    },
});

const registerUser = createAsyncThunk('auth/registerUser', async (form) => {
    try {
        const newUser = { ...form, role_id: 2, password_confirmation: form.passwordConfirm };
        const res = await httpRequest.post('/auth/register', newUser);

        if (res.success === 'success') storage.set(process.env.REACT_APP_TOKEN, res.token);

        return res;
    } catch (error) {
        if (error.response.data) return error.response.data;
        return { success: false, message: error.message };
    }
});

const loginUser = createAsyncThunk('auth/loginUser', async (form) => {
    try {
        const res = await httpRequest.post('/auth/login', form);

        if (res.success === 'success') storage.set(process.env.REACT_APP_TOKEN, res.token);

        return res;
    } catch (error) {
        if (error.response.data) return error.response.data;
        return { success: false, message: error.message };
    }
});

const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
    if (storage.get(process.env.REACT_APP_TOKEN)) {
        const token = storage.get(process.env.REACT_APP_TOKEN);
        setAuthToken(token);
    }

    try {
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/logout`);

        localStorage.removeItem(process.env.REACT_APP_TOKEN);
        setAuthToken(null);
        return res.data;
    } catch (error) {
        localStorage.removeItem(process.env.REACT_APP_TOKEN);
        setAuthToken(null);
        if (error.response.data) return error.response.data;
        return { success: false, message: error.message };
    }
});

const getUser = createAsyncThunk('auth/getUser', async () => {
    if (storage.get(process.env.REACT_APP_TOKEN)) {
        const token = storage.get(process.env.REACT_APP_TOKEN);
        setAuthToken(token);
    }

    try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/auth`);

        return res.data;
    } catch (error) {
        localStorage.removeItem(process.env.REACT_APP_TOKEN);
        setAuthToken(null);
    }
});

export { registerUser, getUser, loginUser, logoutUser };
export default authSlice;
