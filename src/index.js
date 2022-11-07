import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList(); 



// const tarea = new Todo('Aprender Javascript');
// todoList.nuevoTodo( tarea );

// console.log( todoList );
// crearTodoHtml( tarea );


// localStorage.setItem('mi-key', 'ABC1234');
// sessionStorage.setItem('mi-key', 'ABC1234');


// setTimeout( ()=> {

//     localStorage.removeItem('mi-key');

// })
todoList.todos.forEach( crearTodoHtml );

const newTodo = new Todo('Aprender Javascript');
// todoList.nuevoTodo( newTodo );
// todoList.todos[0].imprimirClase();
// newTodo.imprimirClase();

// console.log( 'todos', todoList.todos );




