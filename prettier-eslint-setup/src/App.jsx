import React from 'react';
import './App.css';
import ButtonProvider from './components/Button';
import Contador from './components/Contador';

function App() {
  return (
    <ButtonProvider>
      <Contador />
    </ButtonProvider>
  );
}

export default App;
