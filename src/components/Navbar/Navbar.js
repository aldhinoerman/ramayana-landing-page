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
                    <div className="featured-post">
                        <div className="heading">
                            <h2>Featured Post</h2>
                        </div>
                        <div className="carousel">
                            <ol className="carousel__viewport">
                                <li id="carousel__slide1"
                                    tabindex="0"
                                    className="carousel__slide">
                                    <div className="carousel__snapper">
                                        <a href="#carousel__slide4"
                                            className="carousel__prev">Go to last slide</a>
                                        <a href="#carousel__slide2"
                                            className="carousel__next">Go to next slide</a>
                                    </div>
                                </li>
                                <li id="carousel__slide2"
                                    tabindex="0"
                                    className="carousel__slide">
                                    <div className="carousel__snapper"></div>
                                    <a href="#carousel__slide1"
                                        className="carousel__prev">Go to previous slide</a>
                                    <a href="#carousel__slide3"
                                        className="carousel__next">Go to next slide</a>
                                </li>
                                <li id="carousel__slide3"
                                    tabindex="0"
                                    className="carousel__slide">
                                    <div className="carousel__snapper"></div>
                                    <a href="#carousel__slide2"
                                        className="carousel__prev">Go to previous slide</a>
                                    <a href="#carousel__slide4"
                                        className="carousel__next">Go to next slide</a>
                                </li>
                            </ol>
                            <aside className="carousel__navigation">
                                <ol className="carousel__navigation-list">
                                    <li className="carousel__navigation-item">
                                        <a href="#carousel__slide1"
                                            className="carousel__navigation-button">Go to slide 1</a>
                                    </li>
                                    <li className="carousel__navigation-item">
                                        <a href="#carousel__slide2"
                                            className="carousel__navigation-button">Go to slide 2</a>
                                    </li>
                                    <li className="carousel__navigation-item">
                                        <a href="#carousel__slide3"
                                            className="carousel__navigation-button">Go to slide 3</a>
                                    </li>
                                </ol>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
