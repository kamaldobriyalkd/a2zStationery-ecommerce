import React from 'react';

import {connect} from 'react-redux';

import {addItemToCart} from '../../redux/cart/cart-actions';

import {CollectionItemContainer, ImageContainer, CollectionFooterContainer, NameContainer, PriceContainer, CustomButtonContainer} from './collectionitem-styles';

const CollectionItem = ({item, addItemToCart}) => {
    const {name, price, imageUrl} = item;
    return(
    <CollectionItemContainer>
        <ImageContainer 
        style={{
            backgroundImage:`url(${imageUrl})`
        }}/>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer className='price'>₹{price}</PriceContainer>
        </CollectionFooterContainer>
        <CustomButtonContainer onClick={() => addItemToCart(item)} inverted>ADD TO CART</CustomButtonContainer>
    </CollectionItemContainer>
)};

const mapDispatchToProps = dispatch => ({
    addItemToCart : item => dispatch(addItemToCart(item))
});

export default connect (null, mapDispatchToProps)(CollectionItem);