import axios from "axios"
import { ALL_USER_FAIL, ALL_USER_REQUEST, ALL_USER_SUCCESS, CLEAR_ERROR, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userConstant"
import FileDownload from "js-file-download"


export const allUsers = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_USER_REQUEST })
        // const {data} = await axios.get("http://localhost:8000/api/v1/skills")
        const { data } = await axios.get("/api/v1/users")
        dispatch({
            type: ALL_USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

export const loginUser = (formData) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(
            `/api/v1/users/login`,
            formData,
            config
        );

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload: error.response.data.message });
    }
};


export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });

        const { data } = await axios.get(`/api/v1/user/me`);

        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
    }
};

export const downloadResume = () => async (dispatch) => {
    try {
        const response = await axios.get("/api/v1/get/files", { responseType: 'blob' });
        const contentType = response.headers['content-type'];
        
        if (contentType === 'application/pdf') {
          FileDownload(response.data, "Resume.pdf");
        } else {
          console.error('Invalid content type:', contentType);
        }
      } catch (error) {
        console.error('Error downloading file:', error);
      }
};




export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERROR });
};