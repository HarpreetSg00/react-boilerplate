import REQUEST from '../../../utils/http.service';

export const getVehicleData = () => async (dispatch) => {
    const res = await REQUEST({
        method: 'GET',
        url: '/carData',
        auth: true,
    });
    if(res.data.status){
      dispatch(
        {
          type:'GET_VEHICLE_SUCCESS',
          payload:res.data,
        }
      )
    }
    else {
      dispatch({
          type: 'API_FAILURE',
          payload: res.data,
      });
  }
  }