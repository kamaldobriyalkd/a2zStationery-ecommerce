import ShopActionTypes from './shop-action-types';

export const updateCollection = item => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: item
});