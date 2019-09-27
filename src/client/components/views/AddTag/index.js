import React, { Component } from 'react';
import Select from 'react-select';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { addCategoryAction } from '../TagManagment/action';
import {getCategory} from '../CategoryManagement/action'
import URL from '../../../utils/urlConstant';
import {createCategoryOption} from '../../../utils/common';
import './addTag.scss';

class AddCategory extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            description:'',
            selectedOption: " ",
            optionsdata : [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSaveButton = this.handleSaveButton.bind(this);
    this. handleChangeSelect = this. handleChangeSelect.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
}
     handleChange(e,key){   
         this.setState({[key]:e.target.value})
     }
   
     handleChangeSelect(value){
         console.log(value);
        this.setState({ selectedOption:value});
     }

    async componentDidMount(){
      await  this.props.getCategoryAction();
        const categoryListData = this.props.addCategoryDatafetch.category;
        console.log(categoryListData);
        if(categoryListData.length){
            const data = createCategoryOption(categoryListData);
            this.setState({optionsdata : data});
        } 
 }
  
    

   async handleSaveButton(){
        const {name, description,selectedOption} = this.state;
        const optionsdata = selectedOption.reduce((arr,newdata)=>{return arr.concat({name:newdata.value})},[])
         await this.props.addcategoryAction({name: name, description: description , categoryList: optionsdata });
          if(this.props.addCategoryData.status){
            this.props.history.push(URL.TagManagment);
        }
        else {
            alert("Duplicated data");
            console.log("error in message");
        }
      }

      cancelEdit(){
        this.props.history.push(URL.TagManagment);
    }
    render(){
       const options = this.state.optionsdata;
       const {selectedOption}  = this.state;
        return(
            <div className="edit-user-container">
                <h3 className="heading">Add Tag</h3>
                <form >
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text"  name ="name" className="form-control"  placeholder="Name" value={this.state.name} onChange={(e)=>this.handleChange(e , "name")}></input>
                     </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text"  name ="description" className="form-control"  placeholder="Description"  value={this.state.description} onChange={(e)=>this.handleChange(e,  "description")}></input>
                    </div>
                    <br/>
                        <label>Select Category:</label>
                        <Select
                        value =  {this.state.selectedOption}
                        onChange={this.handleChangeSelect}
                        options={options}
                        isMulti ={true}
                         />
                    <div className="bottom-button-padding">
                    <button  className="btn btn-primary" onClick = {this.handleSaveButton}>Save</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-primary"  onClick={this.cancelEdit}>Cancel</button>
                    </div>
                </form>

            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    addCategoryData: state.tagManagmentReducer,
    addCategoryDatafetch: state.categoryManagmentReducer,
});
const mapDispatchToProps = dispatch => ({
    addcategoryAction: bindActionCreators(addCategoryAction, dispatch),
    getCategoryAction : bindActionCreators(getCategory , dispatch)
  });

export default connect(mapStateToProps,mapDispatchToProps)(AddCategory);