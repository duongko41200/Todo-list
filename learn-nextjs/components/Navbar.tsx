'use client';
import { getAllTodos } from '@/apis/api';
import { useRouter } from 'next/navigation';
import * as React from 'react';

interface MenuItem {
  id: number;
  name: string;
  path: string;
  isActive: boolean;
}

// Props cho component NavBar
interface NavBarProps {
  // menu: MenuItem[]; // Menu sẽ nhận một mảng các menu item
  // onCustomEvent: (data: string)=>void

  // children: React.ReactNode
}
const NavBar: React.FC<NavBarProps> = () => {
  const [menu, setMenu] = React.useState<MenuItem[]>([
    { id: 1, name: 'about', path: '/about', isActive: true },
    { id: 2, name: 'todo', path: '/', isActive: false },
  ]); // Khai báo kiểu dữ liệu cho state menu

  const router = useRouter();
  // const fetchData = async () => {
  //   setMenu(props.menu);
  //   const data = await getAllTodos();
  //   console.log('data', data);
  // };

  // React.useEffect(() => {
  //   fetchData();
  // }, []);

  const handleMove = (data: string) => {
    router.push(`/home/${data}`);

    let dataMenu = menu.map((value) => {
      if (value.name === data) {
        value.isActive = true
      } else {
        value.isActive = false
      }
      return value
    })

    setMenu(dataMenu)
    
    console.log('navbar', data);
  };

  return (
    <>
      <div className="flex w-full justify-center bg-white h-fit">
        {menu &&
          menu.map((item) => {
            return (
              <div
                key={item.id}
                className={`border p-2 cursor-pointer ${item.isActive ? 'bg-sky-500 text-white' : ''}`}
                onClick={() => handleMove(item.name)}
              >
                <div> {item.name}</div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default NavBar;
