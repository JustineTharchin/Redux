import axios from 'axios';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const postRequest = () => ({ type: POST_REQUEST });
export const postSuccess = (message) => ({ type: POST_SUCCESS, message });
export const postFailure = (error) => ({ type: POST_FAILURE, error });

export const sendPostRequest = (data) => {
  return async (dispatch) => {
    dispatch(postRequest());
    try {
      const response = await axios.post('URL_DU_BACKEND', data);
      const message = response.data.message;
      dispatch(postSuccess(message));
    } catch (error) {
      dispatch(postFailure(error.message));
    }
  };
};
