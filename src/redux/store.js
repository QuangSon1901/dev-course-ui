import { configureStore } from '@reduxjs/toolkit';

import multilingualSlice from '~/components/Header/multilingualSlice';
import searchSlice from '~/components/Search/searchSlice';
import themeSlice from '~/components/ThemeMenu/themeSlice';
import authSlice from '~/layouts/AuthLayout/authSlice';

const store = configureStore({
    reducer: {
        multilingual: multilingualSlice.reducer,
        theme: themeSlice.reducer,
        auth: authSlice.reducer,
        search: searchSlice.reducer,
    },
});

export default store;
