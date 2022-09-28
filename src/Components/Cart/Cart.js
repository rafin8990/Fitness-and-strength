import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.cart)
    const{about,age,name,picture,time}=props.cart
    return (
        <div className='cart'>
            <div>
                <img className='cart-image' src={picture} alt="" />
            </div>
            <div className='cart-info'>
                <h5>Name: {name}</h5>
                <p>About: {about.slice(50)}</p>
                <p>Age: {age}</p>
                <p>Time spent: {time} min</p>
              
            </div>
            <button className='btn-add'>
                <p>Add To List</p>
                </button>
            
        </div>
    );
};

export default Cart;