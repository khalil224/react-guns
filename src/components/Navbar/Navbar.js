import React from 'react';
import './Navbar.css'
import bootstrap from 'bootstrap';

const Navbar = ({ openModal, carts }) => {
    return (
        <nav className='navbar text-warning'>
            <h1>Kopa Samsu Store</h1>
            <button className='openModal' onClick={openModal}> Open Modal
                <sup className='sup'>{carts.length}</sup>
            </button>
        </nav>
    );
};

export default Navbar;