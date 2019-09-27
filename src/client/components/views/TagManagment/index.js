import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getTag} from './action';
import {deleteTag} from './action';
import URL from '../../../utils/urlConstant';
import Table from '../../General/Table';
import './tag.scss';
import { getCategory } from '../CategoryManagement/action';

class TagManagment extends React.Component {
    constructor(props) {
        super(props);
        /* 
            //Only use if you want to render the component with SSR
            loadHomeData();
        */
       this.showAddCategory = this.showAddCategory.bind(this);
       this.hanldeTagDelete = this.hanldeTagDelete.bind(this);
       this.handleEdit = this.handleEdit.bind(this);
       this.getData = this.getData.bind(this);
    }

    componentDidMount(){
        this.props.getTag();
    }

    showAddCategory(){
        this.props.history.push(URL.AddTag);    
    }

    async hanldeTagDelete(id){
        await this.props.deleteTag(id);
        this.props.getTag();
    }

    handleEdit(id){
        this.props.history.push(`${URL.EditTag}/${id}`);
    }

    getData(tags){
        if(tags.length){
            return tags.reduce((arr, tag) => {
                return arr.concat({_id:tag._id,  name: tag.name, description: tag.description, categoryList: this.getCategory(tag.categoryList)})
            },[])
        }
        return [];
    }

    getCategory(categoryList){
        if(categoryList)   
             return categoryList.reduce((str, category, index) => {
            if(index === categoryList.length - 1)
            return str.concat(`${category.name}`);
            return str.concat(`${category.name}, `);
        },'');
        return ''
    }

    render() {
        const { tags } = this.props;
      //  console.log(this.getData(tags))
        return (
           <div className="wrapper">
            <div className="title">
                <h3>Tag Management</h3>
                <button className="btn btn-primary customButton" type="button" onClick={this.showAddCategory}>Add Type</button>
            </div>
            <Table type="TAG_TABLE"
            //  data={[ {  name: "City cars",
            //         description: "******", categoryList: 'sdvsd'}, {  name: "City cars",
            //         description: "******", categoryList: 'sdvsd'}, {  name: "City cars",
            //         description: "******", categoryList: 'sdvsd'}]} 
                 data={this.getData(tags)}
                               handleDelete={(id) => this.hanldeTagDelete(id)}
                               handleEdit = {(id)=> this.handleEdit(id)} />
           </div>
        );
       
    }
}

const mapStateToProps = ({tagManagmentReducer}) => ({
    tags: tagManagmentReducer.tags, 
    status: tagManagmentReducer.status,
    message: tagManagmentReducer.message
})

const mapDispatchToProps = (dispatch) => ({
    getTag: bindActionCreators(getTag, dispatch),
    deleteTag: bindActionCreators(deleteTag, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(TagManagment);