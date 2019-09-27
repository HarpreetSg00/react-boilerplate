const initialState={
 status: true,
 message: '',
 tags: [],
 tagId:'',
}

const tagManagmentReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'Add_CATEGORY_SUCCESS':
            state = { ...state, someData: action.payload }
        break;
        case 'API_FAILURE':
            state = { ...state,  status: action.payload.status, message: action.payload.messages };
            break;
        case 'GET_TAG_SUCCESS':
            state = { ...state,  status: action.payload.status, message: action.payload.messages, tags: action.payload.data };
            break;
       case 'DELETE_SUCCESS':
            state = { ...state,  status: action.payload.status, message: action.payload.messages};
            break;
       case 'UPDATE_SUCCESSFULLY':
            state = { ...state,  status: action.payload.status, message: action.payload.messages,};
            break;
        

    }

    return state;
}

export default tagManagmentReducer;