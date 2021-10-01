import React from 'react';
import Input from './components/common/Input'
import PruebasTable from './components/pruebas/PruebasTable';

function App() {
  return (
    <div className="App">
      <Input label='Nombre' type='text'></Input>
      <PruebasTable></PruebasTable>
    </div>
  );
}

export default App;
