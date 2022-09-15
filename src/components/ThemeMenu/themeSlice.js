const { createSlice } = require('@reduxjs/toolkit');
const { storage } = require('~/utils/storage');

const themeSlice = createSlice({
    name: 'theme',
    initialState: storage.get(process.env.REACT_APP_THEME) || { theme: 'theme-mode-light', color: 'theme-color-blue' },
    reducers: {
        SET_THEME(state, action) {
            state.theme = action.payload;
            storage.set(process.env.REACT_APP_THEME, state);
        },
        SET_COLOR(state, action) {
            state.color = action.payload;
            storage.set(process.env.REACT_APP_THEME, state);
        },
    },
});

export default themeSlice;
