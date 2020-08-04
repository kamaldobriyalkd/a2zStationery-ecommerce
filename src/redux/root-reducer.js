import {combineReducers} from 'redux';
import UserReducer from './user/user-reducer';
import CartReducer from './cart/cart-reducer';
import DirectoryReducer from './directory/directory-reducer';
import ShopReducer from './shop/shop-reducer';
import SearchReducer from './search/search-reducer';


const rootReducer = combineReducers({
    user : UserReducer,
    cart : CartReducer,
    directory : DirectoryReducer,
    shop : ShopReducer,
    search : SearchReducer
});

export default rootReducer;