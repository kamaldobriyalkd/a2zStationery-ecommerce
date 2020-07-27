import React from 'react';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart-selectors';

import {toggleCartHidden} from '../../redux/cart/cart-actions';

import {withRouter} from 'react-router-dom';

import CartItem from '../cart-item/cart-item';

import CustomButton from '../custom-button/custom-button';

import './cart-dropdown.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                :
                <span className='empty-message'>your cart is empty, go add some items</span>
            }
        </div>
            <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }}>CHECKOUT NOW</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));