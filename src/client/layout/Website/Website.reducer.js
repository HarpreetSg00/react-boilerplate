const initialState = {
  initialData: [],
};

const websiteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_INITIAL_DATA':
      state = {
        ...state,
        initialData: action.payload,
      };
      break;
  }

  return state;
};

export default websiteReducer;
