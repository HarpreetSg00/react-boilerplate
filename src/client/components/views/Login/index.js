import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUserAction} from './action';
import URL from '../../../utils/urlConstant';
import './login.scss';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            pass:'',
          //  isEnabled:false,
        }
     this.handleChange = this.handleChange.bind(this);  
     this. handleLoginButton = this. handleLoginButton.bind(this);
     this. handleChangePass  = this.handleChangePass.bind(this);
     if  (props.authUser.token) {
        console.log('token',props.authUser.token);
        props.history.push(URL.TagManagment);
      }
    }

    handleChange(e){
        let nam = e.target.name
        let val = e.target.value

        this.setState({[nam]:val});
    }
    async handleLoginButton(){
        const {email, pass} = this.state;
        await this.props.addlogindata({userName: email, password: pass});
        const {authUser:{token}} = this.props;
       // this.setState({isEnabled:!isEnabled});
        token && this.props.history.push(URL.TagManagment);
    }

    handleChangePass(e){
        e.preventDefault();
        this.props.history.push(URL.ChangePassword);
    }

    render(){
        const isEnabled = this.state.isEnabled;
        return(
            <div className="pageWrap">
                <div className= "innerPage" >
                    <div className="text-center">
                        <h3>Admin Portal</h3>
                    </div>
                    <div className ="inner-content"> 
                    <div className="panel-body">
                            <div className="form-group">
                                <label className="nameLabel" >UserName</label>
                                <input type="text" placeholder="please enter the  email" 
                                name="email" id="email" className="form-control" onChange={this.handleChange} value={this.state.email}></input>
                            </div>
                            <div className="form-group">
                                <label className="passwordLabel" >Password</label>
                                <input type="password" placeholder="******" onChange={this.handleChange} 
                            name="pass" id="password" className="form-control" value={this.state.pass}></input>
                            </div>
                            <button className="btn btn-success btn-block loginbtn" disabled={isEnabled} onClick = {this.handleLoginButton}>Login</button>
                    </div>
                    
                    </div>
                    {/* <a href="" onClick={this.handleChangePass}>Change Password</a> */}
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = ({loginReducer}) => ({
        authUser: loginReducer.user,
        status: loginReducer.status,
    }
)

const mapDispatchToProps = dispatch => ({
    addlogindata: (data) => dispatch(loginUserAction(data))
  })
export default connect(mapStateToProps, mapDispatchToProps)(Login);