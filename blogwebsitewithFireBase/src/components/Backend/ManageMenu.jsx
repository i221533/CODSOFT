import React from 'react'
import { useState } from 'react'

import {Link} from 'react-router-dom'
const ManageMenu = () => {
    const [index,setIndex]=useState("");
    const handleClick=(id)=>{
   setIndex(id);
    }
  return (
    <div className='w-full' >
    
    <div className='max-w-[1140px] mx-auto p-10'>
    <div className='p-2'>
    
    <h1 className='text-center font-bold'>WellCome to DashBoard</h1>
    </div>
    <div className='flex gap-2 items-center justify-center'>
    <div className={`${index===1?'p-2 bg-blue-400':'border border-gray-400'}`}>
       <Link to='posts' className={`${index===1?'p-4 ':'p-4 '}`} onClick={()=>handleClick(1)}>ManagePosts</Link>
        </div>
        <div className={`${index===2?'p-2 bg-blue-400':'border border-gray-400'}`}>
       <Link to='Testominals' className={`${index===2?'p-4 ':'p-4 '}`} onClick={()=>handleClick(2)}>ManageTestominals</Link>
        </div>
        <div className={`${index===3?'p-2 bg-blue-400':'border border-gray-400'}`}>
       <Link to='Members' className={`${index===3?'p-4 ':'p-4 '}`} onClick={()=>handleClick(3)}>ManageMembers</Link>
        </div>
        
    </div>
        
    </div>
    </div>
  )
}

export default ManageMenu
