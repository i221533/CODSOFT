import React from 'react'
import {Link} from 'react-router-dom'

import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
const Fotter = () => {
  return (
    <div className='bg-[#9B59B6] w-full  px-10 py-5'>

    <div className='grid border-b-2 p-2 border-gray-400  w-[1140px] mx-auto gap-4 grid-cols-1 md:grid-cols-4  '>
   <div className=' flex flex-col gap-2'>
   <h1 className='  font-bold text-[24px]  '>
            B&K <span className='text-orange-300 text-[36px]'>Blogs</span>
          </h1>
          <p className='text-white max-w-[200px] md:w-full'>Our work is our advertisment. We are going to make world globle and in good way</p>
   <Link className="bg-green-600 w-[200px] rounded-md text-center text-white p-2 text-[16px] transition ease-in-out duration-300 hover:bg-green-400">Read Our History</Link>
   </div>
   <div className='flex flex-col gap-2'>
    <h1 className='font-bold text-white text-[20px]'>Links</h1>
    <p className='text-white cursor-pointer transition ease-in-out duration-300 hover:text-black'>Home</p>
    <p className='text-white cursor-pointer transition ease-in-out duration-300 hover:text-black'>Posts</p>
    <p className='text-white cursor-pointer transition ease-in-out duration-300 hover:text-black'>About</p>
    <p className='text-white cursor-pointer transition ease-in-out duration-300 hover:text-black'>Contact</p>
    <p className='text-white cursor-pointer transition ease-in-out duration-300 hover:text-black'>Member</p>
   </div>

   <div className='flex flex-col gap-2'>
    <h1 className='font-bold text-white text-[20px]' >Our Office</h1>
      <div className='flex gap-2 items-center text-white'>
      <FaPhone/>
     <p>+92-3137633702</p>
      </div>
      <div className='text-white'>
       
        <p> Infoblogs@gmail.com</p>
        <p>Put your query</p>
      </div>
      <div className='text-white'>
        <p>
            Street 14
        </p>
        <p>
            House#03
        </p>
        <p>Islamabad G11</p>
      </div>

   </div>
   <div className='flex flex-col gap-2'>
    <h1 className='font-bold text-white text-[20px]'>Keep Connected</h1>
    <div className='flex gap-2 items-center text-white'>
    <div className='rounded-full border-2 cursor-pointer border-white p-1 flex items-center justify-center hover:scale-105'><FaFacebook size={20}/></div>
    <p>Facebook</p>
    </div>

    <div className='flex gap-2 items-center text-white'>
    <div className='rounded-full border-2 cursor-pointer border-white p-1 flex items-center justify-center hover:scale-105'><FaYoutube size={20}/></div>
    <p>Youtube</p>
    </div>

    <div className='flex gap-2 items-center text-white'>
    <div className='rounded-full border-2 cursor-pointer border-white p-1 flex items-center justify-center hover:scale-105'><FaInstagram size={20}/></div>
    <p>Instagram</p>
    </div>

    <div className='flex gap-2 items-center text-white'>
    <div className='rounded-full border-2 cursor-pointer border-white p-1 flex items-center justify-center hover:scale-105'><FaTwitter size={20}/></div>
    <p>Twitter</p>
    </div>
   </div>
    </div>
     <div className='w-full  flex items-center justify-center p-2'>
     <p className='text-gray-800'>Made by @Muhammad Bilal</p>

     </div>
    </div>
  )
}

export default Fotter
