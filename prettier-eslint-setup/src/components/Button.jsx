import React, { useState } from 'react';

export const StateContext = React.createContext();

const ButtonProvider = (props) => {
  const [contador, setContador] = useState(0);

  return (
    <StateContext.Provider value={{ contador, setContador }}>
      {props.children}
    </StateContext.Provider>
  );
};

export default ButtonProvider;
