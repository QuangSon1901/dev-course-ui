import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as httpRequest from '~/utils/httpRequest';
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
                switch (payload.success) {
                    case 'success':
                        state.isAuthenticated = true;
                        state.user = action.payload.user;
                        state.submit = false;
                        break;
                    default:
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
                switch (payload.success) {
                    case 'success':
                        state.isAuthenticated = true;
                        state.user = action.payload.user;
                        state.submit = false;
                        break;
                    default:
                        state.isAuthenticated = false;
                        state.user = null;
                        state.submit = false;
                        state.notify = { status: payload.status, success: payload.success, message: payload.message };
                }
            })
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.isAuthenticated = false;
                state.user = null;
                state.loading = false;
                state.notify = null;
            })
            .addCase(getUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                const { payload } = action;
                switch (payload.success) {
                    case 'success':
                        state.isAuthenticated = true;
                        state.user = action.payload.user;
                        state.loading = false;
                        break;
                    default:
                        state.isAuthenticated = false;
                        state.user = null;
                        state.loading = false;
                        state.notify = null;
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
        return { status: 503, success: 'error', message: error.message };
    }
});

const loginUser = createAsyncThunk('auth/loginUser', async (form) => {
    try {
        const res = await httpRequest.post('/auth/login', form);

        if (res.success === 'success') storage.set(process.env.REACT_APP_TOKEN, res.token);

        return res;
    } catch (error) {
        if (error.response.data) return error.response.data;
        return { status: 503, success: 'error', message: error.message };
    }
});

const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
    if (storage.get(process.env.REACT_APP_TOKEN)) {
        const token = storage.get(process.env.REACT_APP_TOKEN);

        try {
            const res = await httpRequest.post(
                `/auth/logout`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );

            localStorage.removeItem(process.env.REACT_APP_TOKEN);
            return res;
        } catch (error) {
            localStorage.removeItem(process.env.REACT_APP_TOKEN);
            if (error.response.data) return error.response.data;
            return { status: 503, success: 'error', message: error.message };
        }
    }
});

const getUser = createAsyncThunk('auth/getUser', async () => {
    if (!storage.get(process.env.REACT_APP_TOKEN)) return { status: 401, success: 'error', message: 'No token!' };
    const token = storage.get(process.env.REACT_APP_TOKEN);

    try {
        const res = await httpRequest.get(`${process.env.REACT_APP_BASE_URL}/auth`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res;
    } catch (error) {
        localStorage.removeItem(process.env.REACT_APP_TOKEN);
        if (error.response.data) return error.response.data;
        return { status: 503, success: 'error', message: error.message };
    }
});

export { registerUser, getUser, loginUser, logoutUser };
export default authSlice;
