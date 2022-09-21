import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className='footer-link-container'>
                <NavLink to={route} activeClassName="footer-link-active">
                    {linkText}
                </NavLink>
            </div>
        )
    };
    
    return (
        <div className='footer-container'>
            <div className='logo'>

                Music Workshops Logo
            </div>
            <div className='footer-links'>
                <div className="nav-link-container">
                    <NavLink exact to='/' activeClassName='nav-link-active'>
                        Home
                    </NavLink>
                </div>
                <div className="nav-link-container">
                    <NavLink to='/about-us' activeClassName='nav-link-active'>
                        About
                    </NavLink>
                </div>
                <div className="nav-link-container">
                    <NavLink to='/contact' activeClassName='nav-link-active'>
                        Contact
                    </NavLink>
                </div>
                <div className="nav-link-container">
                    <NavLink to='/forum' activeClassName='nav-link-active'>
                        Forum
                    </NavLink>
                </div>
            </div>
            <div className='footer-icons'>
                <a href="https://instagram.com"><FontAwesomeIcon icon="mobile"/></a>
                <a href="https://youtube.com"><FontAwesomeIcon icon="mobile"/></a>
                <a href="https://facebook.com"><FontAwesomeIcon icon="mobile"/></a>

            </div>
            <div className='copyright'>
                © 2022 DevCamp | All rights reserved
            </div>
        </div>
    )
}

export default withRouter(Footer);