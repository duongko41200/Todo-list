
'use client'
import React from 'react';
import TodoList from './TodoList';
import SearchTask from './SearchTask';
import { ThemeProvide } from '@/hook/useContext';
function TodoTheme() {
  return (
    <ThemeProvide>
      <div>
        <SearchTask></SearchTask>
        <TodoList></TodoList>
      </div>
    </ThemeProvide>
  );
}

export default TodoTheme;
