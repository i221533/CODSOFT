import React,{useState} from 'react'
import { Link } from 'react-router-dom'
const ManageMenu = () => {

    const [index,setIndex]=useState('');
    const handleClick=(i)=>{
        setIndex(i);
    }
  return (
    <div className='bg-blue-800  h-screen w-[300px]'>
      <div className='flex flex-col  justify-center items-center py-2'>
      <div className='w-full border-b-2 border-white flex justify-center items-center py-4'>
    <div className='flex gap-2 text-[24px]  items-center text-white px-2'>
    <i className=" fa fa-tachometer" aria-hidden="true"></i>
    <p>DASHBOARD</p>
    </div>
    </div>
    <div className={`${index===0?'w-full border-b-2 border-white flex justify-center items-center py-4 bg-black':'w-full border-b-2 border-white flex justify-center items-center py-4'}`}
    onClick={()=>handleClick(0)}>
        <Link className='text-white' to='/manage/products' >Manage Products</Link>
    </div>
    <div className={`${index===1?'w-full border-b-2 border-white flex justify-center items-center py-4 bg-black':'w-full border-b-2 border-white flex justify-center items-center py-4'}`}
    onClick={()=>handleClick(1)}>
        <Link className='text-white' to='/manage/products' >Manage Orders</Link>
    </div>
    <div className={`${index===2?'w-full border-b-2 border-white flex justify-center items-center py-4 bg-black':'w-full border-b-2 border-white flex justify-center items-center py-4'}`}
    onClick={()=>handleClick(2)}>
        <Link className='text-white' to='/manage/products' >Manage Payment</Link>
    </div>
    <div className='w-full border-b-2 border-white flex justify-center items-center py-4'>
     
     <div className='flex gap-2'>
     <div className='bg-black text-white p-1 rounded-full flex items-center justify-center'>
     <i class="fa fa-arrow-left" aria-hidden="true"></i>
     </div>
        <Link className='text-white' to='/' >Back to Home</Link>
        </div>
    </div>
      </div>
    </div>
  )
}

export default ManageMenu
