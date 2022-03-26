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
        const newClothes= [...carts, product];
        if(carts.length < 4){
            setCart(newClothes);
        }
        else{
            alert('please no adding')
        }
       
      
    }
    const chooseOneBook = () => {
        const newCart = [...carts]
        let randomItems = newCart[Math.floor(Math.random() * newCart.length)]
        const { name } = randomItems;
        alert(name);
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
                  carts.map(cart => <Clothes  cart= {cart}></Clothes>)
              }
              <div className='btn'>
              <button onClick={chooseOneBook}>Choose 1 For Me</button>
              <button onClick={removeBtn}>Choose Again</button>
              </div>
            </div>
            <div className='question'>
              <h2>How React Works?</h2>
              <p>Answer: React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook. React will efficiently update and render just the right component when your data changes.</p>
              <h2>What is usestate?</h2>
               <p>Answer: First We have the functional component which does not support state. In other Words a functional component is a stateless component Noe with Hooks we have the functional component but stateful it is achieved by using usestate.</p>
              </div>
        </div>
    );
};

export default Products;