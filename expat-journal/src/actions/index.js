import axios from "axios"
import { history } from "../utils/history"
import AxiosWithAuth from "../utils/AxioswithAuth"

export const FETCH_POSTS_START = "FETCH_POSTS_START"
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"
export const FETCH_POSTS_FAIL = "FETCH_POSTS_FAIL"
export const CREATE_POST_START = "CREATE_POST_START"
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS"
export const CREATE_POST_FAIL = "CREATE_POST_FAIL"
export const DELETE_POST_FAIL = "DELETE_POST_FAIL"
export const DELETE_POST_START = "DELETE_POST_START"
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS"
export const EDIT_POST_FAIL = "EDIT_POST_FAIL"
export const EDIT_POST_START = "EDIT_POST_START"
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"
export const LOGIN_START = "LOGIN_START"
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"
export const SIGNUP_FAIL = "SIGNUP_FAIL"
export const SIGNUP_START = "SIGNUP_START"


const url = "https://expat-journal3.herokuapp.com/api"

export const login = (dispatch, credentials) => {
  dispatch({ type: LOGIN_START });
    axios
      .post(`${url}/auth/login`, credentials )
      .then(res => { 
        dispatch({ type: LOGIN_SUCCESS, payload: credentials.username })
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("username", credentials.username)
        history.push("/posts")
      })
      .catch(err => dispatch({ type: LOGIN_FAIL, payload: err.response.statusText }));
}

export const signup = (dispatch, userDetails) => {
  dispatch({ type: SIGNUP_START });
  console.log(userDetails)
  axios
  .post(`${url}/auth/register`, userDetails )
  .then(res =>
    dispatch({ type: SIGNUP_SUCCESS })
  )
  .catch(err => dispatch({ type: SIGNUP_FAIL, payload: err.response.statusText }));
}

export const createPost = (dispatch, postDetails) => {
    dispatch({ type: CREATE_POST_START });
      AxiosWithAuth()
        .post(`${url}/posts`, postDetails )
        .then(res => { 
          dispatch({ type: CREATE_POST_SUCCESS })
          history.push("/posts")
        })
        .catch(err => dispatch({ type: CREATE_POST_FAIL, payload: err.response.statusText }));
  }

export const editPost = (dispatch, postDetails) => {
    dispatch({ type: EDIT_POST_START });
    AxiosWithAuth()
    .put(`${url}/posts/${postDetails.id}`, postDetails )
    .then(res => { 
      dispatch({ type: EDIT_POST_SUCCESS })
      history.push("/posts")
    })
    .catch(err => dispatch({ type: EDIT_POST_FAIL, payload: err.response.statusText }));
}

export const deletePost = (dispatch, postId) => {
    dispatch({ type: DELETE_POST_START });
    AxiosWithAuth()
    .delete(`${url}/posts/${postId}`)
    .then(res => { 
      dispatch({ type: DELETE_POST_SUCCESS })
      history.push("/posts")
    })
    .catch(err => dispatch({ type: DELETE_POST_FAIL, payload: err.response.statusText }));
}

export const getPost = (dispatch, postId) => {
    // Jorge?
}

export const getAllPosts = (dispatch) => {
    // Jorge?
}

export const getUserPosts = (dispatch, userId) => {
    // Jorge?
}