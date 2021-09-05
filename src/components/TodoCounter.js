import React from 'react';
import { TodoContext } from '../App/TodoContext/TodoContext';
import './styles/TodoCounter.css';
//rfce to quick function component create

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);    
    return (
        <div>
            <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} tareas</h2>
        </div>
    )
}

export { TodoCounter };
