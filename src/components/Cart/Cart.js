import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ gun, handleAddToCart }) => {
    const { name, img, bullet, price, capacity, action } = gun;




    return (
        <div className='cart'>

            <div>
                <img src={img} alt="" />
                <h2>Name: {name}</h2>
                <p>Bullet: {bullet}</p>
                <p>Capacity: {capacity}</p>
                <p>Action: {action}</p>
                <h3>Price: {price}</h3>
                <div className='btn-cart'>
                    <button onClick={() => handleAddToCart(gun)}>Add to Cart </button>

                </div>

            </div>



        </div>
    );
};

export default Cart;