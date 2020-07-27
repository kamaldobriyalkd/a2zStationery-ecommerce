import React from 'react';

import {connect} from 'react-redux';
import {clearItemFromCart, removeItemFromCart, addItemToCart} from '../../redux/cart/cart-actions';

import './checkout-item.scss';

const CheckoutItem = ({cartItem, clearItem, increaseItem, decreaseItem}) => {
    const {name, imageUrl,price, quantity} = cartItem ;
    return(
    <div className='checkout-item'>
    <div className='image-container'>
        <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
        <span className='dec' role='img' aria-label='decrease' onClick={() => decreaseItem(cartItem)}>&#10134;</span>
        {quantity}
        <span className='inc' role='img' aria-label='increase' onClick={() => increaseItem(cartItem)}> &#10133;</span>
        </span>            
    <span className='price'>₹{price}</span>
    <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10008;</div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    increaseItem : item => dispatch(addItemToCart(item)),
    decreaseItem : item => dispatch(removeItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);