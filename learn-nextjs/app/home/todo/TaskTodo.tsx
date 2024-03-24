'use client';
import React, { useContext, useState } from 'react';
import { TypeTask } from './TodoList';
import { deleteTodo } from '@/apis/api';
import { ThemeContext } from '@/hook/useContext';
import ModalEdit from '@/components/ModalEdit';

interface TaskProps {
  task: TypeTask;
}

const TaskTodo: React.FC<TaskProps> = ({ task }) => {
  const contextSearch = useContext(ThemeContext);

  const [isShow,setIsShow] = useState<boolean>(false)

  const deleteTask = async (id: string): Promise<void> => {
    await deleteTodo(id);
    contextSearch.fetchData();
  };

  const closeModal = () => {
    setIsShow(!isShow)
  }
  return (
    <div className="w-[500px] ">
      <div className="flex justify-between p-2">
        <div className="">{task.id}</div>
        <div>{task.text}</div>
        <div className="flex gap-2">
          <div className="border px-1 bg-yellow-300 shadow cursor-pointer" onClick={()=>setIsShow(true)}>Edit</div>
          <div
            className="border px-1 bg-red-300 shadow cursor-pointer"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </div>
        </div>
      </div>

      <ModalEdit todo={task} isShow={isShow} closeModal={closeModal} />
      
    </div>
  );
};

export default TaskTodo;
