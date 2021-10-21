import React, {useState} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/login/Login';

function App() {
  const [loginIn, setLoginIn] = useState(false)
  const handleSuccess = (response) => {
    console.log(response)
    setLoginIn(true)
  }
  const handleFailure = () => {
    console.log("F")
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {loginIn ? <Redirect to="/inicio" /> : <Login handleSuccess={handleSuccess} handleFailure={handleFailure} />}
        </Route>
        <Route exact path="/inicio" component={Main}></Route>
        <Route exact path="/" component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
