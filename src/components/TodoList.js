import React from 'react';
import TodoCard from './TodoCard';
export default function TodoList({ todos, eliminar, editar }) {
  return (
    <>
      <h1 className='text-center'>Tareas Pendientes</h1>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoCard
            key={`${todo.id}+${todo.title}`}
            todo={todo}
            eliminar={eliminar}
            editar={editar}
          />
        ))
      ) : (
        <h4 className='mt-4 text-center bg-danger text-white p-3 w-50 m-auto rounded-2'>
          No hay tareas pendientes
        </h4>
      )}
    </>
  );
}
