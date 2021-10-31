import React, { useState, useEffect } from 'react';
let contador = 0;

export const TodoForm = ({ agregar, edit, editar, setEdit }) => {
  const initialFormValues = {
    id: `${contador++}`,
    title: '',
    description: '',
  };

  const [formValue, setFormValue] = useState(initialFormValues);
  const [error, setError] = useState(null);
  const [succesMessage, setSuccesMessage] = useState(null);

  const { title, description } = formValue;

  const handleInputChange = (e) =>
    setFormValue({ ...formValue, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || description.trim() === '') {
      setError('Complete todos los campos');
      return;
    }
    agregar(formValue);
    setFormValue(initialFormValues);
    setSuccesMessage('Agregado con exito');
    setTimeout(() => {
      setSuccesMessage(null);
    }, 2000);
    setError(null);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || description.trim() === '') {
      setError('Complete todos los campos');
      return;
    }
    editar(formValue);
    setFormValue(initialFormValues);
    setSuccesMessage('Editado con exito');
    setTimeout(() => {
      setSuccesMessage(null);
    }, 2000);
    setError(null);
  };

  useEffect(() => {
    if (edit) {
      setFormValue(edit);
    } else {
      setFormValue(initialFormValues);
    }
  }, [edit]);

  return (
    <>
      <h1>{edit ? 'Editar Tarea' : 'Agregar Tarea'}</h1>
      <form onSubmit={edit ? handleEdit : handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='Ingrese un titulo'
          className='form-control'
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          name='description'
          className='form-control mt-2'
          placeholder='Ingrese una descripcion'
          value={description}
          onChange={handleInputChange}
        ></textarea>
        <button type='submit' className='btn btn-primary btn-block mt-2'>
          {edit ? 'Editar ' : 'Agregar'}
        </button>
        {edit ? (
          <button
            type='submit'
            className='btn btn-warning btn-block mt-2 ms-2'
            onClick={() => {
              setEdit(null);
            }}
          >
            Cancelar Edición
          </button>
        ) : null}
      </form>
      {error ? <div className='alert alert-danger mt-2'>{error}</div> : null}
      {succesMessage ? (
        <div className='alert alert-success mt-2'>{succesMessage}</div>
      ) : null}
    </>
  );
};
