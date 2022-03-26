import React from 'react';
import logo from '../../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

const Header = () => {
    return (
        <div className='nav-container bg-info p-2'>
            <img src={logo} alt="" />
            <h1>Welcome My Computer Zone</h1>
        </div>
    );
};

export default Header;