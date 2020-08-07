import ShopActionTypes from './shop-action-types';

const INITIAL_STATE = {
    shopData : null
};

const ShopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS: return{
            ...state,
            shopData: action.payload
        }
        default: return state;
    }
}

export default ShopReducer;