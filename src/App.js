/* todo componente precisa ter o REACT importado
- se quero ter elementos em sequencia, preciso ter algo que os envolva. Por isso a div em volta dos Headers
- mas para nao ter q envolverdentro de uma div, o q pode gerar confusão na hora de estilizar etc,
- usa-se o conceito de FRAGMENT, q nd mais é q <> </> ao redor dos componentes dobrados
- 3 conceitos fundamentais do React:
a- componente:
b- propriedade: infos que podem ser passados do componente pai para o filho.
c- Estado:
d- imutabilidade: n se pode alterar formato de variaveis. Se quiser alterar, tera que recriar

key: propriedade que veicula a informação unica. como o nome, titulo ou id de algo
*/

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState(['Dev app', 'Front end web']); //useState retorna um array c 2 posiçoes. 1- vsriavel c seu valor inicial; 2- função p atualizar esse valor

  function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`);
    setProjects([...projects, `Novo projeto ${Date.now()}`]); //deverá sguir a regra de imutabilidade e recriar o array de projetos ao inves der altera-lo, como faz o metodo push acima
    // ...projects copia o array projetcs

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects"/>
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Add projeto</button>
    </>
  );
}

export default App;
