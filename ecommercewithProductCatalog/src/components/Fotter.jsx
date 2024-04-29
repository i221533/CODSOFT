import React from 'react'
import logo from '../assets/logoshopping.png';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
const Fotter = () => {
  return (
    <div className='w-full bg-[#ECF0F1] pt-5'>
    <div className='max-w-[1140px] mx-auto flex flex-col justify-center '>
        <div className='flex justify-between items-center px-2 md:px-0 py-5 border-b border-gray-400'>
       
        <div className='w-[80px] h-[80px]'>
              <img className='rounded-full h-[100%] w-[100%]' src={logo} alt='' />
            </div>
            <div className='flex gap-2'>
              <div className='bg-[#D0D3D4] text-[#000000a6]  hover:text-white transition ease-in-out duration-300 hover:bg-green-800 p-2 cursor-pointer'>
                <FaFacebook className='' size={25}/>
              </div>
              <div className='bg-[#D0D3D4] text-[#000000a6]  hover:text-white transition ease-in-out duration-300 hover:bg-green-800 p-2 cursor-pointer'>
                <FaTwitter className='' size={25}/>
              </div>
              <div className='bg-[#D0D3D4] text-[#000000a6]  hover:text-white transition ease-in-out duration-300 hover:bg-green-800 p-2 cursor-pointer'>
                <FaYoutube className='' size={25}/>
              </div>
              <div className='bg-[#D0D3D4] text-[#000000a6]  hover:text-white transition ease-in-out duration-300 hover:bg-green-800 p-2 cursor-pointer'>
                <FaLinkedin className='' size={25}/>
              </div>
            </div>
        

       
      

        </div>

        <div className='flex flex-wrap justify-between items-center py-10'>
        <div className='flex  px-2 md:px-0 py-4 flex-col gap-8'>
         <div>
            <h1 className='font-bold text-[20px]' >Contact Us</h1>
            </div>
            <div className='flex flex-col gap-4 justify-center'>
                <div className='flex gap-2'>
             <FiMapPin size={25} className=' text-green-800'/>
             <p className='max-w-[300px]'>2751 S Parker Rd, Aurora, CO 80014, United States</p>
                </div>
                <div className='flex gap-2'>
             <FiPhone size={25} className=' text-green-800'/>
             <p>+92-8823939234</p>
                </div>
                <div className='flex gap-2'>
             <FiMail size={25} className=' text-green-800'/>
             <p>kamjdfas@gmai.com</p>
                </div>
            </div>
        
        </div>
       
        <div className='flex  px-2 md:px-0  py-4 flex-col gap-8'>
         <div>
            <h1 className='font-bold text-[20px]' >Links</h1>
            </div>
            <div className='flex flex-col gap-2'>
            <div className='flex  items-center transition cursor-pointer ease-in-out duration-300 hover:text-green-800'>
            <IoIosArrowForward/>
            <p>Account</p>
            </div>
            <div className='flex  items-center transition cursor-pointer ease-in-out duration-300 hover:text-green-800'>
            <IoIosArrowForward/>
            <p>Cart items</p>
            </div>
            <div className='flex  items-center transition cursor-pointer ease-in-out duration-300 hover:text-green-800'>
            <IoIosArrowForward/>
            <p>Customer support</p>
            </div>
            <div className='flex  items-center transition cursor-pointer ease-in-out duration-300 hover:text-green-800'>
            <IoIosArrowForward/>
            <p>Products</p>
            </div>
            </div>
            </div>
        
            <div className='flex  px-2 md:px-0  py-4 flex-col gap-8'>
         <div>
            <h1 className='font-bold text-[20px]' >Opening Times</h1>
            </div>
            <div className='flex flex-col gap-2'>
            <div className='flex justify-between   items-center transition cursor-pointer ease-in-out duration-300 hover:text-green-800'>
           <p className=' font-medium'>Mon-Tue:</p>
            <p>7AM-9PM</p>
            </div>
            <div className='flex justify-between   items-center transition cursor-pointer ease-in-out duration-300 hover:text-green-800'>
           <p className=' font-medium'>Wed:</p>
            <p>6AM-10PM</p>
            </div>
            <div className='flex justify-between   items-center transition cursor-pointer ease-in-out duration-300 hover:text-green-800'>
           <p className=' font-medium'>Thur:</p>
            <p>9AM-10PM</p>
            </div>
            <div className='flex justify-between  items-center transition cursor-pointer ease-in-out duration-300 hover:text-green-800'>
           <p className=' font-medium'>Fri:</p>
            <p>6AM-12PM</p>
            </div>
            
            </div>
            </div>
  <div className='flex px-2 md:px-0  py-4 gap-8 flex-col '>
            <div>
            <h1 className='font-bold text-[20px]' >News letter</h1>
            </div>
            <div className='flex flex-col gap-2'>
        <p className='max-w-[300px]'>Authoritatively morph 24/7 potentialities 
        with error-free partnerships.</p>
        <div>
            <input type='email'  className='p-2 outline-none ' placeholder='Enter Email'/>
            <button className='p-2 bg-red-600 text-white outline-none border-none transition ease-in-out duration-300 hover:bg-red-400 '>Subscribe</button>
        </div>
            </div>
</div>
        </div>
    </div>
    <div className='bg-black py-4'>
<p className='text-white text-center'>© 2022 <span className='text-green-400'>Muhammad Bilal khirsheed</span>. All Rights Reserved</p>
    </div>
      
    </div>
  )
}

export default Fotter;
