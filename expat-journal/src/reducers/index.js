
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
  } from "../actions";
  
  export const initialState = {
    posts: [],
    postLoading: false,
    loggedInUser: false,
    userLoading: false,
    error: null,
  };
  
  export function reducer(state, action) {
    switch (action.type) {
      case LOGIN_START:
        return { ...state, userLoading: true };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loggedInUser: action.payload,
          userLoading: false,
          error: null,
        };
      case LOGIN_FAIL:
        return {
          ...state,
            userLoading:false,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  

  