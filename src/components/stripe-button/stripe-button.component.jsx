import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51HHKrHCKWBqJvsYN2QRLqyPFsJPt1wKRhdL1nSIxQIDqF6FIysFf7HAJ5SZAFOffNh4lWm9f964ViTPWAHwkBlLz00YzRz4HTu';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    
    return(
        <StripeCheckout
            label='Pay Now'
            name='Kevs Drip'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;