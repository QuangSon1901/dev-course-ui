const multilingualSelector = (state) => state.multilingual;

const themeSelector = (state) => state.theme;

const authSelector = (state) => state.auth;

const searchSelector = (state) => state.search;

const combineSelector = (state) => state.combine;

export { multilingualSelector, themeSelector, authSelector, searchSelector, combineSelector };
