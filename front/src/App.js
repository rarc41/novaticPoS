import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (  
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
