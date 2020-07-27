import shopData from '../../pages/shop/shop-data';
const INITIAL_STATE = {
    shopData : shopData
};

const ShopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default: return state;
    }
}

export default ShopReducer;