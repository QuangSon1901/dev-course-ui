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
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                storage.set(process.env.REACT_APP_TOKEN, action.payload.token);
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.loading = false;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                storage.set(process.env.REACT_APP_TOKEN, action.payload.token);
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.loading = false;
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
        const res = await httpRequest.post('/register', newUser);

        return res;
    } catch (error) {
        console.log(error);
    }
});

const loginUser = createAsyncThunk('auth/loginUser', async (form) => {
    try {
        const res = await httpRequest.post('/login', form);

        return res;
    } catch (error) {
        console.log(error);
    }
});

const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
    if (storage.get(process.env.REACT_APP_TOKEN)) {
        const token = storage.get(process.env.REACT_APP_TOKEN);
        setAuthToken(token);
    }

    try {
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/logout`);

        localStorage.removeItem(process.env.REACT_APP_TOKEN);
        setAuthToken(null);
        return res.data;
    } catch (error) {
        localStorage.removeItem(process.env.REACT_APP_TOKEN);
        setAuthToken(null);
        console.log(error);
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
