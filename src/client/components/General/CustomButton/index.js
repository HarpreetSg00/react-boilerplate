import React, {Component} from "react";

class CustomButton extends Component{
        constructor(props)
        {
            super(props); 
        }
     render(){
         return(
            <div>
                <button className=" btn btn-primary" onClick= {this.props.handleEdit}>Edit</button>&nbsp;&nbsp;
                <button className=" btn btn-danger"  onClick={this.props.handleDelete}>delete</button>
            </div>
         );
     }

}



export default CustomButton;