import React, { useState, useEffect } from 'react';
import TodoButton from './TodoButton';

const TodoCard = ({ title = 'Título', description = 'Descripción' } = {}) => {
  return (
    <div className='card w-75'>
      <div className='card-body'>
        <h3 className='card-title text-center'>{title}</h3>
        <p className='card-text text-center'>{description}</p>
        <hr />
        <div className='d-flex justify-content-between'>
          <TodoButton text='Editar' color='primary' />
          <TodoButton text='Eliminar' color='danger' />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
