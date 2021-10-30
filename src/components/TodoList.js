import React, { useState, useEffect } from 'react';
import TodoCard from './TodoCard';
export default function TodoList(props) {
  return (
    <>
      <h1>Todo List</h1>
      <TodoCard />
    </>
  );
}
