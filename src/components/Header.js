import React, { Component } from 'react';
import '../assets/styles/Header.css';
import logo from '../assets/images/logo/logo_web.png';

class Header extends Component {
    render(){
        return (
            <header className="main-header">
                <nav className="meganav navbar navbar-default" role="navigation">
                    <div id="meganavBar" className="navbar-collapse collapse">
                        <div className="meganavContainerUp">
                            <div className="container">
                                <ul className="meganav-up nav navbar-nav navbar-right">
                                </ul>
                            </div>
                        </div>
                        <div className="meganavContainerDown">
                            <a>
                                <img className="logo" src={logo} alt="logo" />
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;
