// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom';
import backgroundImage from '../src/assets/backgroundGradient.jpg';
import MainMenu from './Components/MainMenu';
import Home from './Components/Home';
import ReadMore from './Components/ReadMore';
import Completed from './Components/Completed';
import UnCompleted from './Components/UnCompleted';
import ManageTasks from './Components/ManageTasks';
import AddTask from './Components/AddTask';
import Edit from './Components/Edit';

function App() {
  // Ensure this effect runs only once
  return (
    <Router>
      <div className="bg-cover bg-center h-auto p-5" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <MainMenu/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/completed" element={<Completed/>}/>
          <Route path="/uncompleted" element={<UnCompleted/>}/>
          <Route path="/manageTasks" element={<ManageTasks/>}/>
          <Route path="/addtask" element={<AddTask/>}/>
          <Route path="/readMore/:id" element={<ReadMore/>} />
          <Route path="/edit/:id"  element={<Edit/>}/>
        

        </Routes>
      </div>
    </Router>
  );
}

export default App;
