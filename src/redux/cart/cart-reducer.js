import CartActionTypes from './cart-action-types';

import {groupingCartItems, removingCartItems} from './cart-utils';

const INITIAL_STATE = {
    hidden : true,
    cartItems : []

};

const CartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        
        case CartActionTypes.TOGGLE_CART_HIDDEN : return{
            ...state,
            hidden : !state.hidden
        }

        case CartActionTypes.ADD_ITEM_TO_CART : return{
            ...state,
            cartItems : groupingCartItems(state.cartItems, action.payload)
        }

        case CartActionTypes.CLEAR_ITEM_FROM_CART : return{
            ...state,
            cartItems : state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
        }

        case CartActionTypes.REMOVE_ITEM_FROM_CART : return{
            ...state,
            cartItems : removingCartItems(state.cartItems, action.payload)
        }

        default : return state;
    }
}

export default CartReducer;