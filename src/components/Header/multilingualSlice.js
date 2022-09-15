import { createSlice } from '@reduxjs/toolkit';
import { storage } from '~/utils/storage';
import translations from '~/utils/translations';

const translationDefault = storage.get(process.env.REACT_APP_TRANSLATION);

const multilingualSlice = createSlice({
    name: 'multilingual',
    initialState: {
        translationSelected: translationDefault || translations.find((language) => language.locale === 'vn'),
        translations,
    },
    reducers: {
        SET_DEFAUTL(state, action) {
            storage.set(
                process.env.REACT_APP_TRANSLATION,
                state.translations.find((language) => language.locale === 'vn'),
            );
        },
        CHANGE_LANGUAGE(state, action) {
            const language = state.translations.find((item) => item.id === action.payload);
            state.translationSelected = language;
            storage.set(process.env.REACT_APP_TRANSLATION, state.translationSelected);
        },
    },
});

export default multilingualSlice;
