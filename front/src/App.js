import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PruebasTable from './components/pruebas/PruebasTable';
import PruebasForm from './components/pruebas/PruebasForm';
import PruebasModal from './components/common/Modal';
import Login from './components/login/Login';
import Main from './components/Main';
import Test from './components/common/Modal';
import Vendedores from './components/Vendedores';
import { Modal } from 'reactstrap';

function App() {
  return (  
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/tablas" component={PruebasTable}></Route>
        <Route exact path="/formulario" component={PruebasForm}></Route>
        <Route exact path="/" component={Main}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
