import React from 'react';
import LoadProduct from '../LoadProduct/LoadProduct';
import './Clothes.css'

const Clothes = ({product,handleAgainBtn}) => {
    return (
        <div className='clothes'>
            <h5>Selected Colthes: {product}</h5>
            <LoadProduct></LoadProduct>
            <button className='btn-choose'>Choose 1 For Me</button>
            <button onClick={() => handleAgainBtn(product)} className='btn-again'>Choose Again</button>
        </div>
    );
};

export default Clothes;