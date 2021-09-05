import React from 'react';
import './styles/CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickButton = () => {
      console.log('Estoy picandole al boton');
      props.setOpenModal(prevState => !prevState);
    };
    
    return (
      <button
        className="CreateTodoButton"
        onClick={onClickButton}
      >
        +
      </button>
    );
  }
  

export { CreateTodoButton };
