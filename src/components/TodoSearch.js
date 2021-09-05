import React from 'react';
import { TodoContext } from '../App/TodoContext/TodoContext';
import './styles/TodoSearch.css';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return (
            <input 
            className="TodoSearch"
            placeholder="Inserte tarea"
            value={searchValue}
            onChange={onSearchValueChange}
            />
    );
}

export { TodoSearch };
