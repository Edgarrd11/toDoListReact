import React from 'react';
import './styles/CreateTodoButton.css';

function CreateTodoButton() {
    const onClickButton = (msg) => {
        alert(msg);
    } 
    return (
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton('Hola')}
        >+</button>
    )
}

export { CreateTodoButton };
