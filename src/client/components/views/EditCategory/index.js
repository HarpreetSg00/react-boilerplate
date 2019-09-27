import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {updateCategory} from '../CategoryManagement/action';
import URL from '../../../utils/urlConstant';
import './EditCategory.scss';

class EditCategory extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.updateCategoryManage = this.updateCategoryManage.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
}

UNSAFE_componentWillMount(){
        const tag= this.props.category.find(item => item._id === this.props.match.params.id);
        const {name = '', description = ''} = tag || {};
        this.setState({
            name,description
        })
}
handleChange(e,key){
    this.setState({[key]:e.target.value});
}
updateCategoryManage(){
    const name = this.state.name;
    const description = this.state.description;
    this.props.putcategoryAction({name, description, id:this.props.match.params.id});
    this.props.history.push(URL.CategoryManagement);
}
cancelEdit(){
    this.props.history.push(URL.CategoryManagement);
}
    
   render(){
     return(
            <div className="edit-user-container">
                <h3 className="heading">Edit Category</h3>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text"  name ="name" className="form-control"  placeholder="Name" onChange={(e)=>this.handleChange(e,"name")} value={this.state.name}></input>
                     </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text"  name ="description" className="form-control"  placeholder="Description" onChange={(e)=>this.handleChange(e,"description")} value={this.state.description}></input>
                    </div>
                    <br/>
                    <div className="bottom-button-padding">
                    <button  className="btn btn-primary" onClick ={this.updateCategoryManage}>Update</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-primary" onClick={this.cancelEdit}>Cancel</button>
                    </div> 
             </div>
     );
    }
}


const mapStateToProps = ({categoryManagmentReducer}) => ({
    category: categoryManagmentReducer.category, 
    status: categoryManagmentReducer.status,
    message: categoryManagmentReducer.message
});

const mapDispatchToProps = dispatch => ({
    putcategoryAction: bindActionCreators(updateCategory, dispatch)
  });

export default connect(mapStateToProps,mapDispatchToProps)(EditCategory);