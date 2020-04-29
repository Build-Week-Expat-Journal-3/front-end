import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAIL,
  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  DELETE_POST_FAIL,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  EDIT_POST_FAIL,
  EDIT_POST_START,
  EDIT_POST_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_START,
  FETCH_CURRENT_POST_START,
  FETCH_CURRENT_POST_SUCCESS,
  FETCH_CURRENT_POST_FAIL,
  LOGOUT,
} from "../actions";

export const initialState = {
  posts: [],
  currentPost: null,
  postLoading: false,
  loggedInUserId: false,
  loggedInUser: false,
  userLoading: false,
  error: null,
};

export const lazyInit = initialValue => {
    return {...initialValue, 
        loggedInUserId: localStorage.getItem("userId") ? localStorage.getItem("userId") : false,
        loggedInUser: localStorage.getItem("username") ? localStorage.getItem("username") : false,
    }
}

export function reducer(state, action) {
  switch (action.type) {
    case LOGIN_START:
        console.log(state)
      return { ...state, userLoading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedInUser: action.payload.username,
        loggedInUserId: action.payload.id,
        userLoading: false,
        error: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        userLoading: false,
        error: action.payload,
      };
    case FETCH_POSTS_START:
      return { ...state, postLoading: true };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        postLoading: false,
        error: null,
        posts: action.payload,
      };
    case FETCH_POSTS_FAIL:
      return {
        ...state,
        postLoading: false,
        error: action.payload,
      };
    case FETCH_CURRENT_POST_START:
      return { ...state, postLoading: true, currentPost: false };
    case FETCH_CURRENT_POST_SUCCESS:
      return {
        ...state,
        postLoading: false,
        error: null,
        currentPost: action.payload,
      };
    case FETCH_CURRENT_POST_FAIL:
      return {
        ...state,
        postLoading: false,
        error: action.payload,
      };
      case CREATE_POST_START:
      return { ...state, postLoading: true };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        postLoading: false,
        error: null,
      };
    case CREATE_POST_FAIL:
      return {
        ...state,
        postLoading: false,
        error: action.payload,
      };
      case SIGNUP_START:
      return { ...state, userLoading: true };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        userLoading: false,
        error: null,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        userLoading: false,
        error: action.payload,
      };
      case EDIT_POST_START:
      return { ...state, postLoading: true, currentPost: false };
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        postLoading: false,
        error: null,
      };
    case EDIT_POST_FAIL:
      return {
        ...state,
        postLoading: false,
        error: action.payload,
      };
      case DELETE_POST_START:
      return { ...state, postLoading: true };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        postLoading: false,
        currentPost: false,
        error: null,
      };
    case DELETE_POST_FAIL:
      return {
        ...state,
        postLoading: false,
        error: action.payload,
      };
      case LOGOUT:
      return {
        ...state,
        loggedInUserId: false,
        loggedInUser: false,
      };
    default:
      return state;
  }
}
