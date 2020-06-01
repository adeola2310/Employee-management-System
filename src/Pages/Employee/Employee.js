import React, {Component} from 'react';
import Layout from "../../Components/Layout/Layout";
import './Employee.css';
import Button from "../../Components/Button/Button";
import Logo from "../../images/logo.svg";
import image1 from "../../images/eyecam-co.svg";
import image2 from "../../images/loop-studios.svg";
import {NavLink} from "react-router-dom";

class Employee extends Component {
    render() {
        return (
            <div>
                <Layout/>
                <div className="title">
                    <h2>employee</h2>
                    <Button label="add an employee"/>
                </div>

                <div className="all-content">
                    <div className="sideNav">
                       <div className="sideNav__content">
                           <div className="header-1">
                               <img src={image2} alt="logo" className="little"/>
                               <h6>All Employees</h6>
                           </div>
                           <div className="project">
                               <h3>PROJECT</h3>
                               <div className="header-1">
                                   <img src={image1} alt="logo" className="little"/>
                                   <h6>All Employees</h6>
                               </div>
                               <NavLink to="" activeClassName="active1">
                                   <div className="header-1">
                                       <img src={image1} alt="logo" className="little"/>
                                       <h6>All Employees</h6>
                                   </div>
                               </NavLink>

                               <div className="header-1">
                                   <img src={image1} alt="logo" className="little"/>
                                   <h6>All Employees</h6>
                               </div>
                               <div className="header-1">
                                   <img src={image1} alt="logo" className="little"/>
                                   <h6>All Employees</h6>
                               </div>
                               <div className="header-1">
                                   <img src={image1} alt="logo" className="little"/>
                                   <h6>All Employees</h6>
                               </div>
                           </div>

                           <div className="status">
                               <h3>STATUS</h3>
                               <div className="header-1">
                                   <img src={image1} alt="logo" className="little"/>
                                   <h6>All Employees</h6>
                               </div>
                               <div className="header-1">
                                   <img src={image1} alt="logo" className="little"/>
                                   <h6>All Employees</h6>
                               </div>

                           </div>
                       </div>
                        <div className="add">
                            <Button label="add a project"/>
                        </div>
                    </div>
                        <div className="card">
                            <div className="card-content">
                                <p>thi sis  me</p>
                            </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default Employee;