import React from 'react'
import FormikLogin from './components/Auth/Login'
import { Switch, Route, useHistory } from 'react-router-dom'
import FormikRegisterPage from './components/Auth/Register'
import './App.css';


const App = () => {
  const { push } = useHistory();
  const pushUser = url => {
    push(url);
  }
  return (
    <div className="continer">
      <Switch>
        <Route path="/register"><FormikRegisterPage pushUser={pushUser}/></Route>
        <Route path="/"><FormikLogin pushUser={pushUser}/></Route>
      </Switch>
    </div>
  );
}

export default App;
