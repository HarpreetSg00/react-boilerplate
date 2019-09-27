import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getCategory} from './action';
import {deleteCategory} from './action';
import URL from '../../../utils/urlConstant';
import Table from '../../General/Table';
import './CategoryManagement.scss'; 

class CategoryManagement extends React.Component {
    constructor(props){
        super(props);
        this.addCategoryManagement = this.addCategoryManagement.bind(this);
    }
    componentDidMount(){
        this.props.getCategory();
    }

    addCategoryManagement(){
        this.props.history.push(URL.AddCategory); 
    }

    async hanldeTagDelete(id){
        await this.props.deleteCategory(id);
        this.props.getCategory();
    }
      handleEdit(id){
        this.props.history.push(`${URL.EditCategory}/${id}`);
  }
  render(){
    const { category } = this.props;
    return(
             <div className="wrapper">
             <div className="title">
                 <h3>Category Management</h3>
                 <button className="btn btn-primary customButton" type="button" onClick={this.addCategoryManagement}>Add Category</button>
             </div>
             <Table data={category}  handleDelete={(id) => this.hanldeTagDelete(id)}
                               handleEdit = {(id)=> this.handleEdit(id)}/>
            </div>
         
      );
  }

}

const mapStateToProps = ({categoryManagmentReducer}) => ({
    category: categoryManagmentReducer.category, 
    status: categoryManagmentReducer.status,
    message: categoryManagmentReducer.message
})

const mapDispatchToProps = (dispatch) => ({
    getCategory: bindActionCreators(getCategory, dispatch),
    deleteCategory: bindActionCreators(deleteCategory, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(CategoryManagement);