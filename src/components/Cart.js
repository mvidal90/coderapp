import React, { useContext } from 'react';
import CartContext from '../cart/CartContext';
import ItemCart from './ItemCart';

const Cart = () => {
    const { cart, clear } = useContext( CartContext );
    let total=0;

    for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].item.price * cart[i].quantity
    };
    
    return (
        <div className="container">
            <div>
                <h3>Carrito de compras</h3>
                <div className="card w-100">
                    {
                        cart.length === 0 ?
                            <h5>Lo sentimos. Tu carrito está vacio.</h5>
                        :
                        cart.map( (item, key) => (
                            <ItemCart 
                                key={key}
                                {...item}
                            />
                        ))
                    }
                </div>
                <button 
                    className="btn btn-danger"
                    onClick={ () => clear() }
                >
                    VACIAR CARRITO
                </button>
            </div>
            <h3>TOTAL: ${ total }</h3>
        </div>
    );
};

export default Cart;
