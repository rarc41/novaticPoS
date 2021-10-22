import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/login/Login";
import AuthState from "./context/autentication/authState";
import ProductsState from "./context/productos/productsState";

function App() {
  const [loginIn, setLoginIn] = useState(false);
  const handleSuccess = (response) => {
    console.log(response);
    setLoginIn(true);
  };
  const handleFailure = () => {
    console.log("F");
  };
  return (
    <AuthState>
      <ProductsState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {loginIn ? (
                <Redirect to="/inicio" />
              ) : (
                <Login
                  handleSuccess={handleSuccess}
                  handleFailure={handleFailure}
                />
              )}
            </Route>
            <Route exact path="/inicio" component={Main}></Route>
            <Route exact path="/" component={Login}></Route>
          </Switch>
        </BrowserRouter>
      </ProductsState>
    </AuthState>
  );
}

export default App;
