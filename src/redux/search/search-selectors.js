import {createSelector} from 'reselect';

const selectSearch = state => state.search;

export const selectSearchData = createSelector(
    [selectSearch],
    search => search.searchData
);