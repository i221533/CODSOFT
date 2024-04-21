// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home';
import Signup from './components/Signup';
import SecondMian from './components/SecondMian';
import Home2 from './components/Home2';
import Signin from './components/Signin';
import Manages from './components/Backend/Manages';
import AddPostForm from './components/Forms/AddPostForm';
import ReadMore from './components/ReadMore';
import AddMember from './components/Forms/AddMember';
import EditPost from './components/Forms/EditPost';
import EditMember from './components/Forms/EditMember';
import AddTestominal from './components/Forms/AddTestominal';
import Posts from './components/Posts';
import MainPosts from './components/MainPosts';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<SecondMian />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/manage/*" element={<Manages />} />
          <Route path="/addPost" element={<AddPostForm />} />
          <Route path="/posts" element={<MainPosts/>} />
          <Route path="/addMember" element={<AddMember />} />
          <Route path="/addTestominal" element={<AddTestominal />} />
          <Route path="/readMore/:id" element={<ReadMore />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/editMember/:id" element={<EditMember />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
