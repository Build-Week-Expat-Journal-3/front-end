import React, { useReducer } from 'react'
import FormikLogin from './components/Auth/Login'
import { Switch, Route, useHistory } from 'react-router-dom'
import FormikRegisterPage from './components/Auth/Register'
import './App.css';
import { reducer, initialState} from "./reducers"
import { StateContext, DispatchContext } from "./context"
import AllPosts from './components/AllPosts';
import PrivateRoute from './utils/PrivateRoute';
import UserPosts from './components/UserPosts';
import Post from "./components/Post"


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { push } = useHistory();
  const pushUser = url => {
    push(url);
  }
  return (
    <StateContext.Provider value={state}>
    <DispatchContext.Provider value={dispatch}>
    <div className="continer">
      <Switch>
        <Route path="/register"><FormikRegisterPage dispatch={dispatch}/></Route>
        <Route exact path="/"><FormikLogin dispatch={dispatch}/></Route>
        <Route exact path="/posts" component={AllPosts} />
        <Route path="/posts/:id" component={Post} />
        <PrivateRoute path="/myposts" component={UserPosts} />
      </Switch>
    </div>
    </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
