import React from 'react';
import './styles/TodoCounter.css';
//rfce to quick function component create

function TodoCounter({ total, completed }) {
    return (
        <div>
            <h2 className="TodoCounter">Has completado {completed} de {total} tareas</h2>
        </div>
    )
}

export { TodoCounter };
