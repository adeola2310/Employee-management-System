import React, {Component} from 'react';
import "./Layout.css";
import Logo from '../../images/logo.svg'
import userProfile from "../../images/user.svg";
import message from "../../images/envelope.svg";
import notification from "../../images/bell.svg"
import {NavLink, Link} from "react-router-dom";

class Layout extends Component {
    render() {
        return (
            <div className="header">
                <div className="content">
                    <img src={Logo} alt="logo"/>
                    <ul className="navlist">
                        <li className="list">
                            <NavLink to="/" exact activeClassName="active">
                                Calendar
                            </NavLink>
                        </li>
                        <li className="list">
                            <NavLink to="/stat">
                                Statistics
                            </NavLink>
                        </li>
                        <li className="list">
                            <NavLink to="/employee">
                                Employee
                            </NavLink>
                        </li>
                        <li className="list">
                            <NavLink to="/client">
                                Client
                            </NavLink>
                        </li>
                        <li className="list">
                            <NavLink to="/equip">
                                Equipment
                            </NavLink>

                        </li>
                    </ul>
                    <div className="notify">
                        <img src={notification} alt="notification" className="notifyd"/>
                        <img src={message} alt="message" className="notifyd"/>
                        <img src={userProfile} alt="user_profile" className="notifyd"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;