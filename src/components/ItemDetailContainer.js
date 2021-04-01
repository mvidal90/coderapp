import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true)
    const [detail, setDetail] = useState({});
    const { id } = useParams();

    useEffect(() => {

        new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(products);
            }, 2000);

        }).then(res => { 
            setDetail(res.filter( p => p.id === parseInt(id) )[0]) ;
            setLoading(false);
        })

    }, [id]);

    return (
        <>
            {
                loading ?
                    <p>Loading...</p>
                :
                    <ItemDetail 
                        detail2 = {detail} 
                    />
            }
        </>
    )
}

export default ItemDetailContainer
