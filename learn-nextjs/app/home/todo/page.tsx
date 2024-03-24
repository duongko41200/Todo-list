import * as React from 'react';
import TodoTheme from './TodoTheme';


const AboutPasge = () => {
  return (
    <div className={`h-[calc(100vh_-_41px)] bg-white`}>
      <div className="flex justify-center mb-3">
        <div className="title">DAnh sach cong viec</div>
      </div>

      <TodoTheme />
    </div>
  );
};

export default AboutPasge;
