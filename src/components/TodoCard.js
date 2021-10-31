import React from 'react';
import TodoButton from './TodoButton';

const TodoCard = ({ todo, eliminar, editar }) => {
  return (
    <div className='card w-75 m-auto mt-4'>
      <div className='card-body'>
        <h3 className='card-title text-center'>{todo.title}</h3>
        <p className='card-text text-center'>{todo.description}</p>
        <hr />
        <div className='d-flex justify-content-between'>
          <TodoButton
            onClick={() => editar(todo)}
            text='Editar'
            color='primary'
            id={todo.id}
          />
          <TodoButton
            text='Eliminar'
            color='danger'
            onClick={() => {
              eliminar(todo.id);
              editar(null);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
