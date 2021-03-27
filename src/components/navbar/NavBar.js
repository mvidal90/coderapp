import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/'><h3 className="navbar-link ml-5">Car.com</h3></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to='/category/VW'><p className="navbar-link ml-5">VW</p></Link>
                </li>
                <li className="nav-item">
                    <Link to='/category/Ford'><p className="navbar-link ml-5">Ford</p></Link>
                </li>
                <li className="nav-item">
                    <Link to='/category/Fiat'><p className="navbar-link ml-5">Fiat</p></Link>
                </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
