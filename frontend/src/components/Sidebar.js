import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Sidebar extends Component {
    render() {
        return(
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*Sidebar - Brand */}
                <NavLink className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"/>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </NavLink>

                {/*Divider */}
                <hr className="sidebar-divider my-0"/>

                {/*Nav Item - Dashboard */}
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"/>
                        <span>Dashboard</span></NavLink>
                </li>

                {/*Divider */}

                <hr className="sidebar-divider"/>


                {/*Nav Item - Pages Collapse Menu */}
                <li className="nav-item active">
                    <a className="nav-link" href="#" data-toggle="collapse" data-target="#collapsePages"
                       aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder"/>
                        <span>Pages</span>
                    </a>
                    <div id="collapsePages" className="collapse show" aria-labelledby="headingPages"
                         data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            <NavLink className="collapse-item" to="/register">Register</NavLink>
                            <NavLink className="collapse-item" to="/login">Login</NavLink>
                            <NavLink className="collapse-item" to="/reset-password">Reset Password</NavLink>
                            <NavLink className="collapse-item" to="/forgot-password">Forgot Password</NavLink>
                        </div>
                    </div>
                </li>

            </ul>

        );
    }
}
export default Sidebar;