import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
