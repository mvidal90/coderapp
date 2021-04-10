import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cart from '../../assets/cart.png';
import CartContext from '../../cart/CartContext';

import '../../styles/cart.css';

const CartWidget = () => {
    const { cart: listCart } = useContext( CartContext );
    let cant=0;

    for (let i = 0; i < listCart.length; i++) {
        cant = cant + listCart[i].quantity;
    };

    return (
        <Link to='/cart'>
            <div className="cart-size d-flex">
                <h5>
                    { cant }
                </h5>
                <img src={ cart } alt="carrito de compras"  className="float-right cart-size" />
            </div>
        </Link>
    )
}

export default CartWidget;
