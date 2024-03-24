'use client';

import { editTodo } from '@/apis/api';
import { ThemeContext } from '@/hook/useContext';
import { ITask } from '@/types/tasks';
import React, { useContext, useEffect, useState } from 'react';

interface TypeUdateTask {
  todo: ITask;
  isShow: boolean;
  closeModal: () => void;
  
}

const ModalEdit: React.FC<TypeUdateTask> = ({ closeModal, todo,isShow }) => {

	const context = useContext(ThemeContext)
  const [taskUpdate, setTaskUpdate] = useState<ITask>({
    id: '',
    text:''
  });

	const changeInput = (e: any) => {
		
		setTaskUpdate({id:todo.id,text:e.target.value})
	};
	
	
	const updateTask = async (): Promise<void> => {
		await editTodo(taskUpdate)
		context.fetchData()
		closeModal()



	};

  useEffect(() => {
    setTaskUpdate(todo);
  }, []);
  return (
	  <>
		  
		  {isShow && (        <div className="w-[100vw] h-[100vh] absolute top-0 left-0 flex items-center justify-center z-20 bg-gray-100 opacity-10"></div>)}
      {isShow && (

          <div className="w-[50%] flex flex-col justify-between  min-h-[20%]  bg-gray-200 z-20 absolute  px-2 opacity-100 shadow-xl rounded">
            <div className="flex justify-end mt-2">
              <div className="px-2 bg-white cursor-pointer w-fit h-fit" onClick={closeModal}>
                X
              </div>
            </div>

            <label htmlFor="inputEdit">Update Task</label>
            <div className="flex justify-center">
              <div>
                <input
                  type="text"
                  id="inputEdit"
                  value={taskUpdate?.text}
                  onChange={changeInput}
                  className="bg-white px-2 focus:outline-none focus:ring-1 focus:rind-blue-200"
                />
              </div>
				  </div>
				  
				  <div className="bg-green-400 text-white w-fit px-2 rounded shadow-lg mb-2" onClick={updateTask}>SAVE</div>
          </div>
    
      )}
    </>
  );
};

export default ModalEdit;
