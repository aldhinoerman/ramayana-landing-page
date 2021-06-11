import React from 'react';
import './Sidenav.scss';
import ImageSlider from './ImageSlider';
import { NavLink } from 'react-router-dom';

const Sidenav = (props) => {
    return (
        <div className={props.class}>
            <div className="inner">

                <div id="search" className="alt">
                    <form method="get" action="#">
                        <input type="text" name="search" id="search" placeholder="Search..." />
                    </form>
                </div>

                <div className="menu">
                    <ul>
                        <li><NavLink to="/" className="text-link">HOMEPAGE</NavLink></li>
                        <li><NavLink to="/other" className="text-link">SIMPLE PAGE</NavLink></li>
                        <li><NavLink to="/other" className="text-link">SHORT CODES</NavLink></li>
                        {/* <li className="submenu">
                            <span><NavLink to="/" className="text-link">DROPDOWN ONE</NavLink></span>
                            <ul>
                                <li><NavLink to="/other" className="text-link">SUB-DROPDOWN</NavLink></li>
                                <li><NavLink to="/other" className="text-link">SUB-DROPDOWN</NavLink></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <span><NavLink to="/" className="text-link">DROPDOWN ONE</NavLink></span>
                            <ul>
                                <li><NavLink to="/other" className="text-link">SUB-DROPDOWN</NavLink></li>
                                <li><NavLink to="/other" className="text-link">SUB-DROPDOWN</NavLink></li>
                            </ul>
                        </li> */}
                        <li><NavLink to="/other" className="text-link">EXTERNAL LINKS</NavLink></li>
                    </ul>
                    <div className="featured-post">
                        <div className="heading">
                            <h2>Featured Post</h2>
                        </div>
                        <ImageSlider />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidenav
