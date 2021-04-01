import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../cart/CartContext';

export const Counter = ({ initial = 1, stock, onAdd }) => {

    const { cart } = useContext( CartContext );

    const [counter, setCounter] = useState( initial );

    const handleAdd = () => {
        if ( counter < stock ) {
            setCounter( counter + 1 );
        };
    };

    const handleSubstract = () => {
        if ( counter > 1) {
            setCounter( counter - 1 );
        };
    };

    const handleInputChange = (e) => {
        e.preventDefault();
        if (typeof e.target.value === 'number') {
            setCounter( e.target.value );
        } else {
            alert('Solo puedes colocar números.')
        };
    };

    return (
        <div className="card col-auto mx-auto text-center">
            <h3 className="mt-2">Stock: { stock }</h3>
            <div className="d-flex mt-5 mb-3">
                <button onClick={ handleSubstract } className="btn btn-light pl-3 pr-3"> - </button>
                <input value={ counter } type = 'number'className="form-control text-center" onChange={ handleInputChange }/>
                <button onClick={ handleAdd } className="btn btn-light"> + </button>
            </div>
            <button onClick={ e => onAdd( counter ) } className="btn btn-primary pl-10 pr-10 mt-2 mb-5 pl-3 pr-3"> Agregar </button>
            {
                cart.length > 0 &&
                    <Link to='/cart'>
                        <button className="btn btn-success mb-3">FINALIZAR COMPRA</button>
                    </Link>
            }
        </div>
    )
}
