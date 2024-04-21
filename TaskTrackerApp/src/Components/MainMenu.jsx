import React, { useState, useEffect } from "react";
import AllTasks from '../assets/AllTasksImage.png';
import CompletedTasks from '../assets/CompletedTaskImage.png';
import UnCompletedTasks from '../assets/UnCompletedTaskImage.jpg';
import Managetasks from '../assets/ManageTaskImage.png';
import { Link, useLocation } from 'react-router-dom';

const MainMenu = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveIndex(0);
        break;
      case "/completed":
        setActiveIndex(1);
        break;
      case "/uncompleted":
        setActiveIndex(2);
        break;
      case "/manageTasks":
        setActiveIndex(3);
        break;
      default:
        setActiveIndex(0); // Default to index 0 if path does not match any case
        break;
    }
  }, [location.pathname]);

  return (
    <div className="flex gap-4 justify-center items-center">
      <div className="flex gap-4 mt-10">
        <div className={`${activeIndex === 0 ? 'rounded border-b-4 border-black' : ''}`} onClick={() => setActiveIndex(0)}>
          <div className={`relative mb-1 flex flex-col justify-center items-center w-[200px] h-[50px] gap-2 cursor-pointer bg-gradient-to-r from-blue-500 to-green-500 p-[50px] rounded-md shadow-md hover:from-green-500 hover:to-blue-500 hover:shadow-lg transition duration-300 hover:scale-105 `}>
            <img src={AllTasks} className="w-[50px] h-[50px] rounded-full" alt=""/>
            <Link to="/" exact className="text-white">All Tasks</Link>
          </div>
        </div>
        <div className={`${activeIndex === 1 ? 'rounded border-b-4 border-black' : ''}`} onClick={() => setActiveIndex(1)}>
          <div className="relative mb-1 flex flex-col justify-center items-center w-[200px] h-[50px] gap-2 cursor-pointer bg-gradient-to-r from-blue-500 to-green-500 p-[50px] rounded-md shadow-md hover:from-green-500 hover:to-blue-500 hover:shadow-lg transition duration-300 hover:scale-105">
            <img src={CompletedTasks} className="w-[50px] h-[50px] rounded-full" alt=""/>
            <Link to="/completed" className="text-white">Completed</Link>
          </div>
        </div>
        <div className={`${activeIndex === 2 ? 'rounded border-b-4 border-black' : ''}`} onClick={() => setActiveIndex(2)}>
          <div className="relative mb-1 flex flex-col justify-center items-center w-[200px] h-[50px] gap-2 cursor-pointer bg-gradient-to-r from-blue-500 to-green-500 p-[50px] rounded-md shadow-md hover:from-green-500 hover:to-blue-500 hover:shadow-lg transition duration-300 hover:scale-105">
            <img src={UnCompletedTasks} className="w-[50px] h-[50px] rounded-full" alt=""/>
            <Link to="/uncompleted" className="text-white">UnCompleted</Link>
          </div>
        </div>
        <div className={`${activeIndex === 3 ? 'rounded border-b-4 border-black' : ''}`} onClick={() => setActiveIndex(3)}>
          <div className="relative mb-1 flex flex-col justify-center items-center w-[200px] h-[50px] gap-2 cursor-pointer bg-gradient-to-r from-blue-500 to-green-500 p-[50px] rounded-md shadow-md hover:from-green-500 hover:to-blue-500 hover:shadow-lg transition duration-300 hover:scale-105">
            <img src={Managetasks} className="w-[50px] h-[50px] rounded-full" alt=""/>
            <Link to="/manageTasks" className="text-white">ManageTasks</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
