import React from 'react'
import Navbar from './Navbar';
import Posts from './Posts';
import Fotter from './Fotter';

const MainPosts = () => {
  return (
    <div className='flex flex-col  pt-100px'>
    <div>
      <Navbar/>
      <Posts/>
      <Fotter/>
      </div>
    </div>
  )
}

export default MainPosts;

