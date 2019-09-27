import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import appRoutes from '../../Routes';
import Footer from '../../components/Container/Footer/'; 
import Header from '../../components/Container/Header/';
import Sidenav from '../../components/Container/Sidenav/';
import {checkAuth, loadState} from '../../utils/common';
import {loadUser} from '../../components/views/Login/action';
import { changeloaderstatus } from './Website.action';
import URL from '../../utils/urlConstant';

class WebsiteLayout extends React.Component {
    constructor(props){
        super(props);
        this.state={
            sidebar: true,
        }
        this.handleChangeSidebar = this.handleChangeSidebar.bind(this);
        loadUser({token: loadState('token')});
        checkAuth(props.authUser, props.history); 
    }

    handleChangeSidebar(){
       const { sidebar } = this.state;
       this.setState({sidebar: !sidebar});  
     }

    render(){
        const {location:{pathname}} = this.props;
        const headerFooter = !(pathname === URL.Login || pathname === URL.ChangePassword);
       
        const { sidebar } = this.state;
        return (
            <React.Fragment>
                {headerFooter&& <Sidenav isOpen={sidebar} />}
                <div className={headerFooter ? (sidebar ? 'nav-site-wrapper' : "site-wrapper"): ''}>
                    { headerFooter && <Header handleChange = {this.handleChangeSidebar} {...this.props} />}
                    <div className="upper-padding">   
                        {renderRoutes(appRoutes[0].routes)}
                    </div>
                    { headerFooter && <Footer {...this.props} />}
                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => ({
    authUser: state.loginReducer.user
})

const mapDispatchToProps = (dispatch) => ({
    changeloaderstatus: bindActionCreators(changeloaderstatus, dispatch),
    loadUser: bindActionCreators(loadUser, dispatch)

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WebsiteLayout));