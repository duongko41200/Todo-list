'use client';
import React, { useContext, useState } from 'react';
import { ThemeContext } from '@/hook/useContext';
import { addTodo } from '@/apis/api';
import { ITask } from '@/types/tasks';

function SearchTask() {
  const contextSearch = useContext(ThemeContext);

  const [inputValue, setInputValue] = useState<string>('');
  const [inputTask, setInputTask] = useState<string>('');
  const [isShowInput, setIsShowInput] = useState<boolean>(false);

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handeInputText = (event: any) => {
    setInputTask(event.target.value);
  }
  const handleAddTask = () => {
    setIsShowInput(!isShowInput);
  };
  const handleSearch = () => {
    contextSearch.SearchTask(inputValue);
  };

  const addNewTask = async(): Promise<void> => {

  };

  return (
    <div className="flex flex-col justify-center mb-2">
      <div className="flex justify-center mb-2">
        <div className="border ">
          <input
            className="px-2 h-full focus:outline-none focus:ring-1 focus:ring-sky-500"
            type="text"
            value={inputValue}
            onChange={handleChange}
          />
          <button className="bg-sky-500 p-1" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="border">
          <button className="bg-green-300 p-1 hover:bg-green-400 shadow" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
      </div>
      <div className="flex justify-center mb-2">
        {isShowInput && (
          <>
            <div className="border ">
              <input
                className="px-2 h-full focus:outline-none focus:ring-1 focus:ring-sky-500"
                type="text"
                value={inputTask}
                onChange={handeInputText}
              />
            </div>
            <div className="border bg-blue-300 min-w-4 cursor-pointer" onClick={addNewTask}>
              +
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SearchTask;
