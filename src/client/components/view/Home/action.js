import * as types from '@store/action-type';

export const getSomeDataAction = data => ({
  type: types.FETCH_SOME_DATA_REQUEST,
  payload: data,
});
