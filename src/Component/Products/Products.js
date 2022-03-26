import React, { useEffect, useState } from 'react';
import Clothes from '../ClothesCalculate/Clothes';
import Device from '../Device/Device';
import './Products.css'

const Products = () => {
    const [products,setProducts] = useState([]);
    

    const [carts, setCart] =useState([]);

    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    })

    const handleAddCartBtn = (product) =>{
        if(carts.length >= 4){
           return product
        }
       const newClothes= [...carts, product];
       setCart(newClothes);
    }
    const chooseOneBook = () => {
        const newCart = [...carts]
        let randomItems = newCart[Math.floor(Math.random() * newCart.length)]
        const { name } = randomItems;
        alert(name);
         setCart([]);
      }

    const removeBtn =() =>{
        setCart([])
    }

    return (
            <div className='products-container'>
               <div className='product'>
               {
                    products.map(product => <Device handlebtn= {handleAddCartBtn}  key={product.id} product= {product}></Device>)
                }
               </div>
            <div className='clothes-container'>
                <h4>Selected Clothes: {carts.length}</h4>
              {
                  carts.map(cart => <Clothes cart= {cart}></Clothes>)
              }
              <div className='btn'>
              <button onClick={chooseOneBook}>Choose 1 For Me</button>
              <button onClick={removeBtn}>Choose Again</button>
              </div>
            </div>
        </div>
    );
};

export default Products;