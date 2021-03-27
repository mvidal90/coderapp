import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { products } from '../data/products';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        new Promise((resolve, reject) => {

            setTimeout(() => {
                if (id) {
                    resolve(products.filter( p => p.brand === id ));
                } else {
                    resolve(products);
                }
            }, 2000);
        }).then(res => { setItems(res) })

    }, [id])

    return (
        <div className="container">
            <h2>Autos</h2>
            <hr />
            <ItemList items={ items } />
        </div>
    );
};

export default ItemListContainer
