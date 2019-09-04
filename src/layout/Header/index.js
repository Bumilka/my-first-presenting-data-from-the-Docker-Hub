import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../assets/image/tnt_logo_menu_normal.png';
import './style.css'



class Header extends Component {
    render() {
        return (
            <div className="bodyNav">
                <img src={Icon} className="icon"/>
                <nav>
                    <li>
                        <Link to="/" className="subpage">HOME </Link>
                    </li>
                    <li>
                        <Link to="/stats" className="subpage">STATS</Link>
                    </li>
                </nav>
            </div>
        );
    }
}

export default Header;