import React from 'react';

import {connect} from 'react-redux';

import {addItemToCart} from '../../redux/cart/cart-actions';

import CustomButton from '../custom-button/custom-button';

import './collectionitem.scss';

const CollectionItem = ({item, addItemToCart}) => {
    const {name, price, imageUrl} = item;
    return(
    <div className='collection-item'>
        {/* <img className='image' src={imageUrl}/> */}
        <div className='image' 
        style={{
            backgroundImage:`url(${imageUrl})`
        }}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>₹{price}</span>
        </div>
        <CustomButton onClick={() => addItemToCart(item)} inverted>ADD TO CART</CustomButton>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    addItemToCart : item => dispatch(addItemToCart(item))
});

export default connect (null, mapDispatchToProps)(CollectionItem);