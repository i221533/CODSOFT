import React, { useState } from 'react';
import PostsComponent from './PostsComponent';
import { IoIosArrowForward } from 'react-icons/io';
import {Link}  from 'react-router-dom'
const Posts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  

  const handleClick = (index) => {

    setActiveIndex(index);
  };
  const handleAllClick = () => {
    setActiveIndex(0);
  };

  return (
    <div className='mt-[80px] w-full mx-auto max-w-[1140px] mb-5'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='col-span-2'>
          <h1 className='font-bold text-[24px] mb-2'>Posts</h1>
          <PostsComponent category={activeIndex === 0 ? 'All' : ['AI', 'Web Dev', 'App Dev'][activeIndex - 1]} />

          <div className='flex md:hidden flex-col mt-2'>
            <h1 className='font-bold text-[24px]'>Latest Posts</h1>
              <div className=' flex flex-col border border-gray-400  py-4 px-6 '>
              <h2 className='font-bold'>Ai chatbot</h2>
                <p className='text-[#5D6D7E]'>
           This is our ai post i which we are working properly so anyoe can visit our post
                </p>
                <div className='flex gap-1 items-center'>
                <Link>Read Now </Link>
                <IoIosArrowForward/>
                </div>
                
              </div>

              <div className=' flex flex-col border border-gray-400 py-4 px-6 '>
              <h2 className='font-bold'>Ai chatbot</h2>
                <p className='text-[#5D6D7E]'>
           This is our ai post i which we are working properly so anyoe can visit our post
                </p>
                <div className='flex gap-1 items-center'>
                <Link>Read Now </Link>
                <IoIosArrowForward/>
                </div>
                
              </div>
          </div>
        </div>
        <div className='flex flex-col order-first md:order-2'>
          <h1 className='font-bold text-[24px] mb-2'>Categories</h1>
          <div
            className={`border border-gray-400 py-2 px-2 transition ease-in-out duration-300 cursor-pointer ${
              activeIndex === 0 ? 'bg-green-400 text-white' : 'hover:bg-green-500 hover:text-white'
            }`}
            onClick={() => handleClick(0)}
          >
            All
          </div>
          <div
            className={`border border-gray-400 py-2 px-2 transition ease-in-out duration-300 cursor-pointer ${
              activeIndex === 1 ? 'bg-green-400 text-white' : 'hover:bg-green-500 hover:text-white'
            }`}
            onClick={() => handleClick(1)}
          >
            AI Dev
          </div>
          <div
            className={`border border-gray-400 py-2 px-2 transition ease-in-out duration-300 cursor-pointer ${
              activeIndex === 2 ? 'bg-green-400 text-white' : 'hover:bg-green-500 hover:text-white'
            }`}
            onClick={() => handleClick(2)}
          >
            Web Dev
          </div>
          <div
            className={`border border-gray-400 py-2 px-2 transition ease-in-out duration-300 cursor-pointer ${
              activeIndex === 3 ? 'bg-green-400 text-white' : 'hover:bg-green-500 hover:text-white'
            }`}
            onClick={() => handleClick(3)}
          >
            App Dev
          </div>

          <div className='hidden md:flex flex-col mt-2'>
            <h1 className='font-bold text-[24px]'>Latest Posts</h1>
              <div className=' flex flex-col border border-gray-400 py-4 px-6 '>
              <h2 className='font-bold'>Ai chatbot</h2>
                <p className='text-[#5D6D7E]'>
           This is our ai post i which we are working properly so anyoe can visit our post
                </p>
                <div className='flex gap-1 items-center'>
                <Link>Read Now </Link>
                <IoIosArrowForward/>
                </div>
                
              </div>

              <div className=' flex flex-col border border-gray-400 py-4 px-6 '>
              <h2 className='font-bold'>Ai chatbot</h2>
                <p className='text-[#5D6D7E]'>
           This is our ai post i which we are working properly so anyoe can visit our post
                </p>
                <div className='flex gap-1 items-center'>
                <Link>Read Now </Link>
                <IoIosArrowForward/>
                </div>
                
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
