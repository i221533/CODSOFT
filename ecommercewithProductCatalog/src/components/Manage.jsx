import React,{useState} from 'react'
import {Routes,Route, Link} from 'react-router-dom'
import ManageMenu from './ManageMenu';
import AddProduct from './forms/AddProduct';
import ManagePrducts from './ManagePrducts';
import AddMayAlsoLike from './forms/AddMayAlsoLike';
import ManageYouMayAlso from './ManageYouMayAlso';

const Manage = () => {
    const [index,setIndex]=useState('');
    const handleClick=(i)=>{
        setIndex(i);
    }
  return (
    <div className='flex h-screen  overflow-y-auto gap-2 '>
   <div className=''>
   <div className='bg-blue-700 h-full    w-[270px]'>
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
   </div>
  
  
      
      <Routes>
        <Route path='products' element={<ManagePrducts/>}/>
        
        <Route path='AddProduct' element={<AddProduct/>}/>
        <Route path='AddMayAlsoLike' element={<AddMayAlsoLike/>}/>
        <Route path='ManagemayAlsoLike' element={<ManageYouMayAlso/>}/>
      </Routes>
     
     
    </div>
  )
}

export default Manage;
