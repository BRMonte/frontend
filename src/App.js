/* todo componente precisa ter o REACT importado
- se quero ter elementos em sequencia, preciso ter algo que os envolva. Por isso a div em volta dos Headers
- mas para nao ter q envolverdentro de uma div, o q pode gerar confusão na hora de estilizar etc,
- usa-se o conceito de FRAGMENT, q nd mais é q <> </> ao redor dos componentes dobrados

*/

import React from 'react';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <Header/>
    </>
  );
}

export default App;
