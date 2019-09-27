import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import URL from '../../../utils/urlConstant';
import Table from '../../General/Table';
import {getVehicleData} from './action';
import './VehicleManagement.scss';


class VehicleManagement extends React.Component {
    constructor(props) {
        super(props);
        /* 
            //Only use if you want to render the component with SSR
            loadHomeData();
        */
  }

    componentDidMount(){
        this.props.getVehicleData();
    }
    render() {
        const {VehicleData} = this.props;
         return (
           <div className="wrapper">
            <div className="title">
                <h3>Vehicle Management</h3>
                <button className="btn btn-primary customButton" type="button">Add Type</button>
            </div>
            <Table type="CAR_MANAGEMENT"
            data ={VehicleData} />
           </div>
        );
       
    }
}

const mapStateToProps = ({vehicleManagementReducer}) => ({
    VehicleData: vehicleManagementReducer.VehicleData, 
    status: vehicleManagementReducer.status,
    message: vehicleManagementReducer.message
})

const mapDispatchToProps = (dispatch) => ({
    getVehicleData: bindActionCreators(getVehicleData, dispatch)
   
})


export default connect(mapStateToProps, mapDispatchToProps)(VehicleManagement);