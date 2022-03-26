import React, { useEffect, useState } from 'react';
import Clothes from '../ClothesCalculate/Clothes';
import Device from '../Device/Device';
import './Products.css'

const Products = () => {
    const [products,setProducts] = useState([]);

    const [cart, setCart] =useState([]);

    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    })

    const handleChooseBtn = (product) =>{
        if(cart.length >= 4){
           return product
        }
       const newClothes= [...cart, product];
       setCart(newClothes);
    }
    const handleAgainBtn = (product) =>{
    }

    return (
            <div className='products-container'>
               <div className='product'>
               {
                    products.map(product => <Device handlebtn= {handleChooseBtn}  key={product.id} product= {product}></Device>)
                }
               </div>
            <div className='clothes-container'>
                <Clothes handleAgainBtn= {handleAgainBtn}  product={cart.length}></Clothes>
            </div>
        </div>
    );
};

export default Products;