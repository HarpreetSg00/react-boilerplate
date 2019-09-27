import React from "react";
import CustomButton from '../CustomButton';
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Table extends React.Component {
 constructor(props){
   super(props);
 }
  getColumn = (type) => {
    const common = [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Action",
        accessor: "" ,
        Cell: row => (
            <CustomButton handleDelete={() => {this.props.handleDelete(row.value._id) } } 
                          handleEdit = {()=>{this.props.handleEdit(row.value._id)}} />
        )
      },
    ]
    switch(type){
      case  'TAG_TABLE' : return [...common.splice(0,2), {
                          Header: "Category List",
                          accessor: 'categoryList'
                          }, ...common
                        ]
      case  'CATEGORY_TABLE' : return [...common]
      case 'CAR_MANAGEMENT' : return [
        {Header: "CAPID",
        accessor: "CAPID",},
        {Header: "CAPCode",
        accessor: "CAPCode",},
        {Header: "Brand",
        accessor: "Brand",},
        {Header: "Model",
        accessor: "Model",},
        {Header: "Attach_TAG",
        accessor: "Attach_TAG",},
      ]
      default: return [...common]
    }
  }
  render() {
   const { data, type } = this.props;
    return (  
      <div>
        <ReactTable
          data={data}
          columns={this.getColumn(type)}
         // defaultPageSize={50}
          className="-striped -highlight"
          showPagination={false}
         />
        <br />
      
      </div>
    );
  }
}

export default Table;

