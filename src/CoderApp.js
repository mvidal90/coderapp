import React from 'react';
import CartProvider from './cart/CartProvider';
import RouterApp from './routes/RouterApp';

const CoderApp = () => {
    
    return (
        <CartProvider>
            <RouterApp />
        </CartProvider>
    )
}

export default CoderApp;
