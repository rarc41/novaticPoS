import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PruebasTable from './components/pruebas/PruebasTable';
import PruebasForm from './components/pruebas/PruebasForm';
import Login from './components/login/Login';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/tablas" component={PruebasTable}></Route>
        <Route exact path="/formulario" component={PruebasForm}></Route>
        <Route exact path="/main" component={Main}></Route>
        <Route component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
