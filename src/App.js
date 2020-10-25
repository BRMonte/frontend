/* todo componente precisa ter o REACT importado
- se quero ter elementos em sequencia, preciso ter algo que os envolva. Por isso a div em volta dos Headers
- mas para nao ter q envolverdentro de uma div, o q pode gerar confusão na hora de estilizar etc,
- usa-se o conceito de FRAGMENT, q nd mais é q <> </> ao redor dos componentes dobrados
- 3 conceitos fundamentais do React:
a- componente:
b- propriedade: infos que podem ser passados do componente pai para o filho.
c- Estado:
*/

import React from 'react';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header title="Hompeage"/>
      <Header title="Projects"/>
    </>
  );
}

export default App;
