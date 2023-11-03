import { POST_REQUEST, POST_SUCCESS, POST_FAILURE } from './actions';

const initialState = {
  message: '',
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.message,
      };
    case POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
