import React from 'react';
import "./Device.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


const Device = ({product}) => {
    const {name,price,img,generation} = product;
    return (
    
        <div className='device-container'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Prize: {price}</p>
            <p>Generation: {generation}</p>
            <button className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Device;