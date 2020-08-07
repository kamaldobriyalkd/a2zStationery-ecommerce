import {SearchFunc} from './search-utils';
import shopData from '../../pages/shop/shop-data';
const INITIAL_STATE = {
    searchData : [],
    shopData: null
};

const SearchReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SEARCH_FOR' : return{
            ...state,
            searchData : SearchFunc(action.payload, shopData)
        }
        case 'UPDATE_COLLECTIONS' : return{
            ...state,
            shopData: action.payload
        }
        default : return{
            ...state
        }
    }
}

export default SearchReducer;