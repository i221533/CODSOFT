// Manages.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ManageMenu from './ManageMenu';
import ManagePosts from './ManagePosts';
import ManageTestominals from './ManageTestominals';
import MangeMembers from './MangeMembers';

const Manages = () => {
  return (
    <>
    <div className='max-w-[1140px] mx-auto '>
      <ManageMenu />
      <Routes>
        <Route path="posts" element={<ManagePosts />} />
        <Route path="Testominals" element={<ManageTestominals />} />
        <Route path="Members" element={<MangeMembers />} />
      </Routes>
      </div>
    </>
  );
};

export default Manages;
