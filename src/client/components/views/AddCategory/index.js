import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { addCategoryAction } from '../CategoryManagement/action';
import URL from '../../../utils/urlConstant';
import './AddCategory.scss';

class AddcategoryManagement extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            description:'',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSaveButton = this.handleSaveButton.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    }
    handleChange(e,key){
       this.setState({[key]:e.target.value});
    }

    async handleSaveButton(e){
        e.preventDefault();
        console.log("click");
        // this.props.addcategorydata
         const {name, description} = this.state;
        
         await this.props.addcategoryAction({name: name, description: description});
           console.log("hello" +this.props);
           if(this.props.addCategoryData.status){
             this.props.history.push(URL.CategoryManagement);
         }
         else {
             alert("Duplicated data");
             console.log("error in message");
         }
        
     }
     cancelEdit(){
        this.props.history.push(URL.CategoryManagement);
     }
    render(){
        return(
            <div className="edit-user-container">
                <h3 className="heading">Add Category</h3>
                <form >
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text"  name ="name" className="form-control"  placeholder="Name" onChange={(e)=>this.handleChange(e,"name")} value={this.state.name}></input>
                     </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text"  name ="description" className="form-control"  placeholder="Description" onChange={(e)=>this.handleChange(e, "description")} value={this.state.description}></input>
                    </div>
                    <br/>
                    <div class="bottom-button-padding">
                    <button  className="btn btn-primary" onClick = {this.handleSaveButton}>Save</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-primary" onClick={this.cancelEdit}>Cancel</button>
                    </div>
                </form>

            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    addCategoryData: state.categoryManagmentReducer,
    
});
const mapDispatchToProps = dispatch => ({
    addcategoryAction: bindActionCreators(addCategoryAction, dispatch)
  });

export default connect(mapStateToProps,mapDispatchToProps)(AddcategoryManagement);

