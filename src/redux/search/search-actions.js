export const searchAction = search => ({
    type: 'SEARCH_FOR',
    payload: search
});

export const updateCollection = item => ({
    type: 'UPDATE_COLLECTIONS',
    payload: item
});