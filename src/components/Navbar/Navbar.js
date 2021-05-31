import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className={props.class}>
            <div className="inner">

                <div id="search" class="alt">
                    <form method="get" action="#">
                        <input type="text" name="search" id="search" placeholder="Search..." />
                    </form>
                </div>

                <div class="menu">
                    <ul>
                        <li><NavLink to="/" className="text-link">HOMEPAGE</NavLink></li>
                        <li><NavLink to="/other" className="text-link">SIMPLE PAGE</NavLink></li>
                        <li><NavLink to="/other" className="text-link">SHORT CODES</NavLink></li>
                        <li className="submenu">
                            <span><NavLink to="/other" className="text-link">DROPDOWN ONE</NavLink></span>
                            <ul>
                                <li><NavLink to="/other" className="text-link">SUB-DROPDOWN</NavLink></li>
                                <li><NavLink to="/other" className="text-link">SUB-DROPDOWN</NavLink></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <span><NavLink to="/other" className="text-link">DROPDOWN ONE</NavLink></span>
                            <ul>
                                <li><NavLink to="/other" className="text-link">SUB-DROPDOWN</NavLink></li>
                                <li><NavLink to="/other" className="text-link">SUB-DROPDOWN</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/other" className="text-link">EXTERNAL LINKS</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
