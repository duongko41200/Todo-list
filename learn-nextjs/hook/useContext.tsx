import { createContext, useEffect, useState } from 'react';

import { TypeTask } from '@/app/home/todo/TodoList';
import { getAllTodos } from '@/apis/api';

const ThemeContext = createContext<object>({});

const ThemeProvide = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [tasks, setTask] = useState<TypeTask[]>([]);
  const [taskSearch, setTaskSearch] = useState<TypeTask[]>([]);
  //   const [valueProvide, setValueProvide] = useState<valueProvide>();

  const fetchData = async () => {
    try {
      const data: any = await getAllTodos();
      console.log('data:', data);

      setTask(data);
      setTaskSearch(data);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchData();
    // setValueProvide({ tasks, taskSearch });
  }, []);

  const SearchTask = (keyWord: string) => {
    let resultSearch = tasks.filter((item) => {
      return item.text.includes(keyWord);
    });

    console.log({ resultSearch });

    setTaskSearch(resultSearch);
  };

  interface MyData {
    tasks: object;
    taskSearch: object;
    SearchTask: (key: string) => void;
    fetchData:()=>void
  }

  const value: MyData = {
    tasks: tasks, // Giả sử tasks là một mảng các Task
    taskSearch: taskSearch,
    SearchTask,
    fetchData
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvide };
