import React, { Component } from 'react';
import { connect } from 'react-redux';
import URL from '../../../utils/urlConstant';
import {logOutAction} from '../../views/Login/action'
import './header.scss';
class Header extends Component {
    constructor(props){
        super(props);
        this.logOut = this.logOut.bind(this);
    }
    async logOut(e){
        e.preventDefault();
        await this.props.logOutAction();
        this.props.history.push(URL.Login);
  }
        
    render() {
        return (
         <div className="header-top-area">
            <div className="header-top-wrapper">
                  <div className="menu-switcher-pro">
                       <a className="menu-toggle" onClick = {this.props.handleChange}>
                        <span className="icon-bar top-bar"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                       </a>
                 </div>
               <span className="adminName">Admin &nbsp;&nbsp;<div className="dropdown">
                  <span><i className="fa fa-angle-down"></i></span>
                   <div className="dropdown-content">
                    <button onClick={this.logOut}>Log Out</button>
                    </div>
                 </div></span>   
            </div>

         </div>   
        );

    }
}

const mapStateToProps = ({loginReducer}) => ({
    authUser: loginReducer.user,
    status: loginReducer.status,
    message: loginReducer.message
}
)

const mapDispatchToProps = dispatch => ({
    logOutAction : () => dispatch(logOutAction())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);