import React from 'react';
import Input from './components/common/Input'
import PruebasTable from './components/pruebas/PruebasTable';
import Login from './components/login/Login'

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Input label='Nombre' type='text'></Input>
      <PruebasTable></PruebasTable> */}
    </div>
  );
}

export default App;