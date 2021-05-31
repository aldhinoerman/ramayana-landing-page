import React from 'react';
import './Header.css';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header container-fluid">
            <IconContext.Provider value={{ className: "header__toggle" }}>
                <FaIcons.FaBars />
            </IconContext.Provider>
            <Link to="/" className="text-link"><h1>RAMAYANA</h1></Link>
        </div>
    )
}

export default Header;