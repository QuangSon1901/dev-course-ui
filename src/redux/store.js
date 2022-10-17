import { configureStore } from '@reduxjs/toolkit';

import multilingualSlice from '~/components/Header/multilingualSlice';
import themeSlice from '~/components/ThemeMenu/themeSlice';
import authSlice from '~/layouts/AuthLayout/authSlice';
import reducerCombine from './reducerCombine';

const store = configureStore({
    reducer: {
        multilingual: multilingualSlice.reducer,
        theme: themeSlice.reducer,
        auth: authSlice.reducer,
        combine: reducerCombine.reducer,
    },
});

export default store;
