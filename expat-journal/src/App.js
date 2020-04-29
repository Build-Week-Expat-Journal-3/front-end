import React, { useReducer } from 'react'
import FormikLogin from './components/Auth/Login'
import {  Route, Switch } from 'react-router-dom'
import FormikRegisterPage from './components/Auth/Register'
import './App.css';
import { reducer, initialState, lazyInit} from "./reducers"
import { StateContext, DispatchContext } from "./context"
import AllPosts from './components/AllPosts';
import PrivateRoute from './utils/PrivateRoute';
import UserPosts from './components/UserPosts';
import Post from "./components/Post"
import CreatePost from "./components/CreatePost"
import Navbar from "./components/Auth/Navbar"
import Logout from "./components/Auth/LogOut"


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState, lazyInit)
  
  return (
    <StateContext.Provider value={state}>
    <DispatchContext.Provider value={dispatch}>
    <div >
    <Navbar/>
      <Switch>
        <Route path="/register"><FormikRegisterPage dispatch={dispatch}/></Route>
        <Route exact path="/" component={AllPosts} />
        <Route path="/login"><FormikLogin dispatch={dispatch}/></Route>
        <PrivateRoute path="/posts/create" component={CreatePost} />
        <Route path="/posts/:id" component={Post} />
        <Route exact path="/logout" component={Logout} />
        <PrivateRoute path="/myposts" component={UserPosts} />
        </Switch>
    </div>
    </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
