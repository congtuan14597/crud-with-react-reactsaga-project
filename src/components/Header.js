import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Logo></Logo>
                <div className="navigation">
                    <ul>
                        <li>
                            <Link to={"/interns"}>HOME</Link>
                        </li>
                        <li>
                            <Link to={"/interns"}>ABOUT</Link>
                        </li>
                        <li>
                            <Link to={"/interns"}>SERVICES</Link>
                        </li>
                        <li>
                            <Link to={"/interns"}>PAGES</Link>
                        </li>
                        <li>
                            <Link to={"/interns"}>BLOGS</Link>
                        </li>
                        <li>
                            <Link to={"/interns"}>CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>  
        );
    }
}

export default Header;
