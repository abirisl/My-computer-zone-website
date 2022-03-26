import React from 'react';
import './Clothes.css'

const Clothes = ({cart}) => {
    const {name,price,generation,img} = cart
    return (
        <div className='selected-product'> 
                <img src={img} alt="" />
               
            <div className='details'>
            <h6>{name}</h6>
            <p>Price: {price}</p>
            <p>Generation: {generation}</p>
            </div>
        </div>
    );
};

export default Clothes;