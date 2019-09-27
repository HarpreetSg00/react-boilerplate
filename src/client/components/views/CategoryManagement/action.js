import REQUEST from '../../../utils/http.service';

export const addCategoryAction = formData => async (dispatch) => {
  const res = await REQUEST({
      method: 'POST',
      url: '/category',
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
export const getCategory = () => async (dispatch) => {
    const res = await REQUEST({
        method: 'GET',
        url: '/category',
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

  export const deleteCategory = (id) => async (dispatch) => {
    const res = await REQUEST({
        method: 'DELETE',
        url: '/category',
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

  export const updateCategory = (formData) => async (dispatch) => {
    const res = await REQUEST({
        method: 'PUT',
        url: '/category',
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