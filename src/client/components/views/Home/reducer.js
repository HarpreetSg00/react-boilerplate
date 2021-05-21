import * as types from "store/action-type";

const initialState = {
  someData: {
    dataObj: {},
    errorObj: {},
    status: null
  },
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SOME_DATA_SUCCESS:
      state = {
        ...state,
        someData: {
          status: true,
          dataObj: action.payload,
          errorObj: {}
        }
      };
      break;
    case types.FETCH_SOME_DATA_ERROR:
      state = {
        ...state,
        someData: {
          status: false,
          dataObj: {},
          errorObj: action.payload
        }
      };
      break;
  }

  return state;
};

export default homeReducer;
