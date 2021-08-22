import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';

// import './App.css';


function App() {
  const todos = [
    { text: 'Cortar cebolla', completed: false },
    { text: 'Tomar el curso de React', completed: false },
    { text: 'LALALALA', completed: false },
  ];
  return (
    <React.Fragment>
      <TodoCounter />
 

      <TodoSearch />
      

      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButton />
      

    </React.Fragment>


  );
}

export default App;
