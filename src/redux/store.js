import { configureStore } from '@reduxjs/toolkit';

import multilingualSlice from '~/components/Header/multilingualSlice';
import themeSlice from '~/components/ThemeMenu/themeSlice';
import authSlice from '~/layouts/AuthLayout/authSlice';

const store = configureStore({
    reducer: {
        multilingual: multilingualSlice.reducer,
        theme: themeSlice.reducer,
        auth: authSlice.reducer,
    },
});

export default store;
