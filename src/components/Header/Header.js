import React from 'react';
import './Header.scss';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            style: "sidenav",
            menuStatus: "open"
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        switch (this.state.menuStatus) {
            case "open":
                this.setState({
                    menuStatus: "close",
                    style: "sidenav active"
                });
                break;
            case "close":
                this.setState({
                    menuStatus: "open",
                    style: "sidenav"
                });
                break;
            default:
        }
    }

    render() {
        return (
            <>
                <div className="header container-fluid">
                    <IconContext.Provider value={{ className: "header__toggle" }}>
                        <FaIcons.FaBars onClick={this.handleClick} />
                    </IconContext.Provider>
                    <Link to="/" className="text-link"><h1>RAMAYANA</h1></Link>
                </div>
                <Navbar class={this.state.style} />
            </>
        )
    }
}

export default Header;