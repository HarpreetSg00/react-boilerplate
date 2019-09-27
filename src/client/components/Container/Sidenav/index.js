import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import URL from '../../../utils/urlConstant';
import './sidenav.scss';

class Sidenav extends Component{
    constructor(props){
        super(props);
        this.showTagManagement = this.showTagManagement.bind(this);
        this.showDashboardPage = this.showDashboardPage.bind(this);
        this.showCategoryManagement = this.showCategoryManagement.bind(this);
        this.showVehicleManagement = this.showVehicleManagement.bind(this);
     }

    showTagManagement(){
        this.props.history.push(URL.TagManagment);  
    }
    showDashboardPage(){
        this.props.history.push(URL.Dashboard);  
    }
    showCategoryManagement(){
        this.props.history.push(URL.CategoryManagement)
    }
    showVehicleManagement(){
        this.props.history.push(URL.VehicleManagement)
    }

    render(){
        const {isOpen} = this.props;
        return(
            <div className={`left-sidebar ${isOpen ? 'active' : 'inactive'}`}>
                <nav className="sidenav">
                    <div className="sidebar-header">
                      <a className="logo" href="/dashboard">
                        {/* <img className="main-logo" src="/public/img/logo/www-logo.png" height="150" width="100" alt="image"/> */}
                         </a>
                    </div>
                    <nav className="sidebar-nav">
                        <ul>
                            <li>
                                <a onClick = {this.showDashboardPage}>
                                    <span><i className = "fa fa-copy" ></i>&nbsp;&nbsp;</span>
                                    <span  className="hide">Dashboard</span>
                        
                                </a>
                            </li>
                            <li>
                                <a onClick = {this.showTagManagement}>
                                    <span><i className = "fa fa-copy" ></i>&nbsp;&nbsp;</span>
                                    <span className="hide">Tag Management</span>
                        
                                </a>
                            </li>
                            <li>
                                <a onClick = {this.showCategoryManagement}>
                                    <span><i className = "fa fa-copy" ></i>&nbsp;&nbsp;</span>
                                    <span className="hide">Category Management</span>
                        
                                </a>
                            </li>
                            <li>
                                <a onClick = {this.showVehicleManagement}>
                                    <span><i className = "fa fa-copy" ></i>&nbsp;&nbsp;</span>
                                    <span className="hide">Vehicle Management</span>
                        
                                </a>
                            </li>
                           
                            </ul>
                        </nav>
                    </nav>

            </div>
        );
    };
}
 
export default withRouter(Sidenav);