import {createSelector} from 'reselect';
const selectShop = state => state.shop;


export const selectShopData = createSelector(
    [selectShop],
    shop => shop.shopData
);

export const selectCollectionsForPreview = createSelector(
    [selectShopData],
    collections => collections ? Object.keys(collections).map(keys => collections[keys]) : []
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopData],
    collections => collections ? collections[collectionUrlParam] : null
);