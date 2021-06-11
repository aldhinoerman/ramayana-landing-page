import React from 'react';
import './Header.scss';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import Sidenav from '../Sidenav';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            style: "sidenav",
            menuStatus: "open",
            width: "container"
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        switch (this.state.menuStatus) {
            case "open":
                this.setState({
                    menuStatus: "close",
                    style: "sidenav active",
                    width: "wrapper"
                });
                break;
            case "close":
                this.setState({
                    menuStatus: "open",
                    style: "sidenav",
                    width: "container"
                });
                break;
            default:
        }
    }

    render() {
        return (
            <>
                <Sidenav class={this.state.style} />
                <div className="header">
                    <div className={this.state.width}>
                        <IconContext.Provider value={{ className: "header__toggle" }}>
                            <FaIcons.FaBars onClick={this.handleClick} />
                        </IconContext.Provider>
                        <Link to="/" className="text-link"><h1>RAMAYANA</h1></Link>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;