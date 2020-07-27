import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import logo from '../header/logo.jpg';

const StripeCheckoutButton = ({price}) => {
    const publishableKey = 'pk_test_51H8fEiDgnG4iMNVuc8BQdGxWNMm6Ft6XmPG2vso4EQ07IqiAWiFXQcJgRw1UB1Yey37R7v7AKQZdXL0ueyJaWgzF00SHCXQIkH';        
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }    

    return(
        <StripeCheckout
        currency = 'INR'
        label = 'Pay Now'
        name =  'A2Z Pvt. Ltd.'
        billingAddress
        shippingAddress
        image = {logo}
        description = {`Your Total is ₹${price}`}
        amount = {price}
        panelLabel ='Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}
        />
    );
}

export default StripeCheckoutButton;