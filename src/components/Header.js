import React from 'react';

export default function Header(props) { // como parametro da função Header apenas nao passadas as propriedades/atributo dos componentes
  return (
    <header>
      <h1>ReactJS</h1>
      <h1>{props.title}</h1>
    </header>
  );
}
