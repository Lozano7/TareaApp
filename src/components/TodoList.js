import React from 'react';
import TodoCard from './TodoCard';
export default function TodoList({ todos, eliminar, editar }) {
  return (
    <>
      <h1 className='text-center'>Tareas Pendientes</h1>
      {todos.map((todo) => (
        <TodoCard
          key={`${todo.id}+${todo.title}`}
          todo={todo}
          eliminar={eliminar}
          editar={editar}
        />
      ))}
    </>
  );
}
