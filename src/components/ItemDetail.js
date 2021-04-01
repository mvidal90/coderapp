import React from 'react'
import { CounterContainer } from './counter/CounterContainer'

const ItemDetail = ({ detail2: detail }) => {
    return (
        <div className="row">
            <div className="col-6 pt-5 pr-5 pb-6 pl-5">
                <img src={ detail.urlImg } alt = {`${detail.brand} ${detail.model}`} className="w-100"/>
            </div>
            <div className="col-6 pt-5 pr-5 pb-6 pl-5">
                <h3>{`${detail.brand} ${detail.model}`}</h3>
                <h4>{`$ ${detail.price}`}</h4>
                <h4>{`kms: ${detail.kms}`}</h4>
                <p>{`${detail.describe}`}</p>
                <CounterContainer 
                    id={ detail.id }
                    brand={ detail.brand }
                    model={ detail.model }
                    stock={ detail.stock }
                    price={ detail.price }  
                />
            </div>
        </div>
    )
}

export default ItemDetail
