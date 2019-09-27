import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Select from 'react-select';
import {getCategory} from '../CategoryManagement/action'
import {updateTag} from '../TagManagment/action';
import URL from '../../../utils/urlConstant';
import './EditTag.scss';
import { createCategoryOption } from '../../../utils/common';

class EditTag extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            selectedOption:'',
  }
    this.handleChange = this.handleChange.bind(this);
    this.updateTagManage = this.updateTagManage.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
}

UNSAFE_componentWillMount(){
    const tag= this.props.tags.find(item => item._id === this.props.match.params.id);
    const {name = '', description = ''} = tag || {};
    const selectedOption = tag ? createCategoryOption(tag.categoryList) : [];
    
    this.setState({
        name,description,selectedOption

    })
    
}
handleChangeSelect(value){
   this.setState({ selectedOption:value});
}

handleChange(e,key){
this.setState({[key]:e.target.value});
}
updateTagManage(){
    const name = this.state.name;
    const description = this.state.description;
    this.props.putcategoryAction({name, description, id:this.props.match.params.id});
    this.props.history.push(URL.TagManagment);
}
cancelEdit(){
    this.props.history.push(URL.TagManagment);
}



 render(){
     const {category} = this.props
     return(
            <div className="edit-user-container">
                <h3 className="heading">Edit Tag</h3>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text"  name ="name" className="form-control"  placeholder="Name" onChange={(e)=>this.handleChange(e , "name")} value={this.state.name}></input>
                     </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text"  name ="description" className="form-control"  placeholder="Description" onChange={(e)=>this.handleChange(e, "description")} value={this.state.description}></input>
                    </div>
                    <Select
                        value = {this.state.selectedOption}
                        onChange={(value)=>this.handleChangeSelect(value)}
                        options={category ? createCategoryOption(category) : []}
                        isMulti ={true}
                     />
                    <br/>
                    <div className="bottom-button-padding">
                    <button  className="btn btn-primary" onClick ={this.updateTagManage}>Update</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-primary" onClick={this.cancelEdit}>Cancel</button>
                    </div>

            </div>

        );
    }
}


const mapStateToProps = ({tagManagmentReducer, categoryManagmentReducer}) => ({
    tags: tagManagmentReducer.tags, 
    status: tagManagmentReducer.status,
    message: tagManagmentReducer.message,
    category: categoryManagmentReducer.category,
});

const mapDispatchToProps = dispatch => ({
    putcategoryAction: bindActionCreators(updateTag, dispatch),
    getCategoryAction : bindActionCreators(getCategory , dispatch)
  });

export default connect(mapStateToProps,mapDispatchToProps)(EditTag);