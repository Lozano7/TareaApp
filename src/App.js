import React, { useState, useEffect } from 'react';
import { TodoForm } from './components/TodoForm';
import TodoList from './components/TodoList';

const ls = JSON.parse(localStorage.getItem('todos'));

function App() {
  const [Todos, setTodos] = useState(ls || []);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(Todos));
  }, [Todos]);

  const handleAdd = (formData) => {
    setTodos([formData, ...Todos]);
  };
  const handleEdit = (formData) => {
    const newFormData = Todos.map((todo) => {
      if (todo.id === formData.id) {
        todo.title = formData.title;
        todo.description = formData.description;
      }
      return todo;
    });
    setTodos(newFormData);
  };

  const handleEliminar = (id) => {
    const newFormData = Todos.filter((todo) => todo.id !== id);
    setTodos(newFormData);
  };
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-8'>
          <TodoList todos={Todos} eliminar={handleEliminar} editar={setEdit} />
        </div>
        <div className='col-4'>
          <TodoForm
            agregar={handleAdd}
            edit={edit}
            editar={handleEdit}
            setEdit={setEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
