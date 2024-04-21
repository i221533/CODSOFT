import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import { FiLogOut } from 'react-icons/fi';
import dashboard from '../assets/dashbard.png'
const Navbar = () => {
  const [activeIndex, setIndex] = useState(1);
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    switch (location.pathname) {
      case '/home':
        setIndex(1);
        break;
      case '/posts':
        setIndex(2);
        break;
      case '/about':
        setIndex(3);
        break;
      case '/contact':
        setIndex(4);
        break;
      default:
        setIndex(1); // Default to home if route not found
    }
  }, [location.pathname]);

  const handleClick = (i) => {
    setIndex(i);
    switch (i) {
      case 1:
        navigate("/home");
        break;
      case 2:
        navigate("/posts");
        break;
      case 3:
        navigate("/home");
        break;
      case 4:
        navigate("/home");
        break;
      default:
        // Default case logic
    }
  };

  return (
    <div className='bg-black h-[80px] w-full p-4 z-50 fixed top-0 '>
      <div className='flex max-w-[1240px] mx-auto justify-between items-center text-white'>
        <div className='flex'>
          <h1 className='font-bold text-[24px] '>
            B&K <span className='text-orange-300 text-[36px]'>Blogs</span>
          </h1>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex gap-6 justify-between items-center'>
            <li
              onClick={() => handleClick(1)}
              className={`${activeIndex === 1 ? 'rounded-sm border-b-2 border-green-400 text-green-400 cursor-pointer' : 'cursor-pointer'}`}
            >
              Home
            </li>
            <li
              onClick={() => handleClick(2)}
              className={`${activeIndex === 2 ? 'rounded-sm border-b-2 border-green-400 text-green-400 cursor-pointer' : 'cursor-pointer'}`}
            >
              Posts
            </li>
            <li
              onClick={() => handleClick(3)}
              className={`${activeIndex === 3 ? 'rounded-sm border-b-2 border-green-400 text-green-400 cursor-pointer' : 'cursor-pointer'}`}
            >
              About
            </li>
            <li
              onClick={() => handleClick(4)}
              className={`${activeIndex === 4 ? 'rounded-sm border-b-2 border-green-400 text-green-400 cursor-pointer' : 'cursor-pointer'}`}
            >
              Contact
            </li>
          </ul>
        </div>
        <div className='hidden md:flex justify-between items-center gap-4'>
          <FaFacebook size={25} className='text-neutral-300 cursor-pointer' />
          <FaTwitter size={25} className='text-neutral-300 cursor-pointer' />
          <FaInstagram size={25} className='text-neutral-300 cursor-pointer' />
          
          <Link
            to='/'
            className='border-2 transition ease-in-out duration-300 border-amber-500 hover:bg-amber-500 text-[20px] px-2 w-[120px] text-center py-2 rounded-md'
          >
          <div className='flex items-center gap-1'>
         
           <p className='text-[20px]'>Logout</p>
           <div> <FiLogOut size={20}/> </div>
          
            </div>
          </Link>
        </div>
        
        <div className='md:hidden' onClick={() => handleToggle()}>
          {!toggle ? (
            <IoCloseOutline size={35} className='text-white cursor-pointer' />
          ) : (
            <IoMenuOutline size={35} className='text-white cursor-pointer' />
          )}
        </div>
      </div>
     
      <div className={`${!toggle?'flex  md:hidden h-screen top-0 left-0 z-100 bg-black mr-0 fixed pt-20 text-white':'mr-[-100%] hidden'}`}>
      <div className='flex flex-col gap-2 p-10'>
      <div className='flex flex-col gap-2 '>
          <h1 className='font-bold text-[24px] '>
            B&K <span className='text-orange-300 text-[36px]'>Blogs</span>
          </h1>
          <div className='flex flex-col gap-4 md:hidden'>
          <ul className='flex flex-col  gap-4 w-[50px] text-white'>
            <li
              onClick={() => handleClick(1)}
              className={`${activeIndex === 1 ? 'rounded-sm border-b-2 border-green-400 text-green-400 cursor-pointer' : 'cursor-pointer'}`}
            >
              Home
            </li>
            <li
              onClick={() => handleClick(2)}
              className={`${activeIndex === 2 ? 'rounded-sm border-b-2 border-green-400 text-green-400 cursor-pointer' : 'cursor-pointer'}`}
            >
              Posts
            </li>
            <li
              onClick={() => handleClick(3)}
              className={`${activeIndex === 3 ? 'rounded-sm border-b-2 border-green-400 text-green-400 cursor-pointer' : 'cursor-pointer'}`}
            >
              About
            </li>
            <li
              onClick={() => handleClick(4)}
              className={`${activeIndex === 4 ? 'rounded-sm border-b-2 border-green-400 text-green-400 cursor-pointer' : 'cursor-pointer'}`}
            >
              Contact
            </li>
          </ul>
          <div className='flex flex-col w-full   justify-between items-center gap-4'>
          <div className='w-full justify-between flex gap-2'>
          <FaFacebook size={25} className='text-neutral-300 cursor-pointer' />
          <FaTwitter size={25} className='text-neutral-300 cursor-pointer' />
          <FaInstagram size={25} className='text-neutral-300 cursor-pointer' />
          </div>
          <div className=' flex text-center items-center justify-center w-full'>
          <Link
            to='/'
            className='border-2   transition ease-in-out duration-300 border-amber-500 hover:bg-amber-500 text-[20px] px-2 w-[200px] text-center py-2 rounded-md'
          >
          <div className='flex justify-center items-center gap-1'>
         
           <p className='text-[20px]'>Logout</p>
           <div> <FiLogOut size={20}/> </div>
          
            </div>
          </Link>
          </div>
         
        </div>
        </div>
        </div>

      </div>
      </div>
    </div>
  );
};

export default Navbar;
