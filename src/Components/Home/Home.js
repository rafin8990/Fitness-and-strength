import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css'
import photo from '../../image.png'

const Home = () => {
    const [carts,setCart]=useState([])
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setCart(data))
    },[])
    // console.log(carts)
    return (
        <div className='home'>
            
            <div className="cart-container">
               <div className='header'>
               <img src={photo} alt="" />
                <h1 className='name'>Fitness And Strength</h1>
               </div>
                <h3>Select today's Exercise :</h3>
                <div className='cart-list'>
                {
                    carts.map(cart=><Cart cart={cart} KEY={cart._id}></Cart>)  
                }
                </div>
                
                
            </div>
            <div className="information-container">
                <h2>information</h2>
            </div>
        </div>
    );
};

export default Home;