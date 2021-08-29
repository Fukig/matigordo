import React from 'react';
import logo from '../logo.svg';
import { StateContext } from './Button';

const Contador = () => {
  const { contador, setContador } = React.useContext(StateContext);

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>{contador}</h1>
          <div>
            <button
              className="App-button"
              type="button"
              onClick={() => setContador(contador + 1)}
            >
              Sumar ↑
            </button>
          </div>
        </p>
      </header>
    </div>
  );
};

export default Contador;
