import { configureStore } from '@reduxjs/toolkit';

import multilingualSlice from '~/components/Header/multilingualSlice';
import themeSlice from '~/components/ThemeMenu/themeSlice';

const store = configureStore({
    reducer: {
        multilingual: multilingualSlice.reducer,
        theme: themeSlice.reducer,
    },
});

export default store;
