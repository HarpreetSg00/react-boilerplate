import REQUEST from '../../../utils/http.service';

export const addCategoryAction = formData => async (dispatch) => {
  const res = await REQUEST({
      method: 'POST',
      url: '/tag',
      data: formData,
      auth: true,
  });
  if(res.data.status){
    dispatch(
      {
        type:'Add_CATEGORY_SUCCESS',
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

export const getTag = () => async (dispatch) => {
    const res = await REQUEST({
        method: 'GET',
        url: '/tag',
        auth: true,
    });
    if(res.data.status){
      dispatch(
        {
          type:'GET_TAG_SUCCESS',
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

  export const deleteTag = (id) => async (dispatch) => {
    const res = await REQUEST({
        method: 'DELETE',
        url: '/tag',
        data:{id},
        auth: true,
    });
    if(res.data.status){
      dispatch(
        {
          type:'DELETED-SUCCESS',
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

  export const updateTag = (formData) => async (dispatch) => {
    const res = await REQUEST({
        method: 'PUT',
        url: '/tag',
        data:formData,
        auth: true,
    });
    if(res.data.status){
      dispatch(
        {
          type:'UPDATE_SUCCESSFULLY',
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


 