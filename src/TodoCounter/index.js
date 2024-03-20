import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

/* Aprendiendo a usar props - comunicacion entre componentes */
/* props es un objeto */

/*
*Ejemplo creacion de variable para estilos css
const estilos = {
  backgroundColor: 'red'
}

return(
    <h1 style={estilos}>
      Has completado {completed} de {total} TODOS
    </h1>
  );

*/

/*
* ejemplo aplicando estilos en linea css
return(
    <h1 style={{
      fontSize: '24px',
      textAlign: 'center',
      margin: 0,
      padding: '48px'
    }}>
      Has completado {completed} de {total} TODOS
    </h1>
  );
*/

function TodoCounter() {
  const {
    completedTodos: completed,
    totalTodos: total,
  } = React.useContext(TodoContext);

  return(
    total === completed ?

      <h1 className='TodoCounter'>
        Felicidades terminaste todos los TODO`s
      </h1>

    :

    <h1 className='TodoCounter'>
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };