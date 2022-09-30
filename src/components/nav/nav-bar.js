import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-container">
                <NavLink to={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </div>
        )
    };

    return (
        <div className="nav-container">
            <div className="left-side">
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
                {/* <div className="nav-link-container">
                    <NavLink to='/forum' activeClassName='nav-link-active'>
                        Forum
                    </NavLink>
                </div> */}
            </div>
            <div className="right-side">
                <div className="nav-link-container">
                    <NavLink to='/signup' activeClassName='nav-link-active'>
                        Sign Up
                    </NavLink>
                </div>
                <div className="nav-link-container">
                    <NavLink to='/logon' activeClassName='nav-link-active'>
                        Log On
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default withRouter(NavBar);