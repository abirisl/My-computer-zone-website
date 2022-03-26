import React, { useEffect, useState } from 'react';
import Clothes from '../ClothesCalculate/Clothes';
import Device from '../Device/Device';
import './Products.css'

const Products = () => {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    })

    return (
        <div className='row'>
            <div className="col">
               <div className='product'>
               {
                    products.map(product => <Device product= {product}></Device>)
                }
               </div>
            </div>
            <div className="col mt-4">
                <Clothes product={products}></Clothes>
            </div>
        </div>
    );
};

export default Products;