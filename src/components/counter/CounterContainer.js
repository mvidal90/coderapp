import React, { useContext, useState } from 'react';
import CartContext from '../../cart/CartContext';
import { Counter } from './Counter';

export const CounterContainer = ({ stock: stck, id, brand, model, price }) => {
    
    const { addItem } = useContext( CartContext );

    const [stock, setStock] = useState( stck );
    const car = { id, brand, model, price };

    const onAdd = ( q ) => {
        if( q <= stock ){
            // alert(`Has agregado ${q} elementos al carrito.`);

            addItem( car, q )
            setStock( stock - q );
        } else {
            alert('No hay suficiente stock.');
        };
    };

    return (
        <div className="mt-5">
            <Counter 
                initial={ 1 } 
                stock={ stock } 
                onAdd={ onAdd }
            />
        </div>
    );
};
