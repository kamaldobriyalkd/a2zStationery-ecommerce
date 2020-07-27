import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartItemsTotalPrice} from '../../redux/cart/cart-selectors';

import './checkoutpage.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

const CheckoutPage = ({cartItems, totalPrice}) => (
    <div className='checkout-page'>
    <div className='checkout-header'>
    <div className='header-block'>
        <span>Product</span>
    </div>
    <div className='header-block'>
        <span>Description</span>
    </div>
    <div className='header-block'>
        <span>Quantity</span>
    </div>
    <div className='header-block'>
        <span>Price</span>
    </div>
    <div className='header-block'>
        <span>Remove</span>
    </div>
    </div>
    {
        cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
    }
    <div className='total'>
        <span>Total Price : ₹{totalPrice}</span>
    </div>
    {
        totalPrice !== 0 ?
    <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br/>
        Card Number : 5555 5555 5555 4444 - Exp: 12/20 - CVV: 123
    </div>
    : null
    }
    {
        totalPrice !== 0 ?
    <StripeCheckoutButton price={totalPrice}/>
    : null
    }
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems : selectCartItems,
    totalPrice : selectCartItemsTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);