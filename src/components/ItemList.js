import React from 'react'
import { Item } from './Item'

function ItemList({ items }) {

    return (
        <div className = "card-columns">
            {
            items.lenght === 0 ? <p>Loading...</p>
            :
                items.map( 
                    item => 
                        <Item 
                            key={ item.id }
                            { ...item }
                        />

                )
            }
        </div>
    )
}

export default ItemList
