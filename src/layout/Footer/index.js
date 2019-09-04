import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

class Header extends Component {
    render() {
        return (
            <div className="bodyFooter">
               <div>
                    created by Justyna Makowska
                </div>
                <a href="https://github.com/bumilka">GIT HUB</a>
            </div>
        );
    }
}

export default Header;