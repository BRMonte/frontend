import React from 'react';

export default function Header( {title}) { // como parametro da função Header apenas nao passadas as propriedades/atributo dos componentes
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
