'use client';
import React, { useContext, useEffect, useState } from 'react';
import TaskTodo from './TaskTodo';
import {ThemeContext} from '@/hook/useContext'


export interface TypeTask {
  id: string;
  text: string;
}

function TodoList() {

	const context = useContext(ThemeContext)

	// useEffect(() => {
	// 	console.log("context:", context)
	// },[context.taskSearch])

  return (
    <div className="flex justify-center">
      <div>
        <div className="task border border-black w-fit">
          {context.taskSearch &&
            context.taskSearch.map((task:TypeTask, id:number) => {
				return (
          <div key={id}><TaskTodo task={task}></TaskTodo></div>

			  );
            })}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
