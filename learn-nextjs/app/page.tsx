
// 'use client'
import homeTodo from "./home/page";
interface Menu {
  id: number;
  name: string;
  path: string;
  isActive: boolean;
}

const Home: React.FC = () => {
  // let currentPage : string = 'about'
  // const menus: Menu[] = [
  //   { id: 1, name: 'about', path: '/about', isActive: true },
  //   { id: 2, name: 'todolist', path: '/', isActive: false },
  // ];


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {/* <homeTodo></homeTodo> */}
        
      </div>


    </main>
  );
};

export default Home;
