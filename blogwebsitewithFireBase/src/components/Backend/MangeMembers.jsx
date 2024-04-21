import React,{useEffect,useState} from 'react'

import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';

import { storeData } from '../../FireBase';
import {Link} from 'react-router-dom'
const MangeMembers = () => {
    const [Val,setVal]=useState([]);
const Value = collection(storeData, "members");

  useEffect(() => {
    const getData = async () => {
        const getVal = await getDocs(Value);
        if (!Value) {
          console.log("No Value");
         
        }
        else{
            console.log("Here is Value Member");
            
        console.log(Value);
       
         
        setVal(getVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(Val.image);
        }
      };
      getData();
   
  }, []); 
  const handleDelete= async(id)=>{
    try {
        await deleteDoc(doc(storeData, 'members', id));
        console.log('Post deleted successfully');
        setVal(Val.filter((item) => item.id !== id));
      } catch (error) {
        console.error('Error deleting post:', error);
      }

  } 
  return (
    <>
    <div className='w-full p-5'>
    <div className='flex flex-col gap-4'>
    <div className='flex justify-end w-[50%] mx-auto items-end'>
        <Link to='/addMember' className='text-white rounded-md w-[150px] bg-blue-800 transition ease-in-out duration-300 py-2 px-3  text-center hover:bg-blue-600 '>Add New +</Link>
    </div>
    {Val.map((item)=>(
        <div key={item.id} className='flex items-center justify-center  flex-col  w-[50%]  mx-auto rounded-md gap-4 py-10 px-5 bg-[#E5E7E9]'>
       <div className='w-[200px] h-[200px]'>
       <img className='rounded-full w-[100%] h-[100%]' src={item.image} alt=''/>
       </div>
       <div className='flex flex-col'>
           <h3 className='font-bold'>{item.name}</h3>
           <p className='text-[#5D6D7E]'>{item.description}</p>
           <div className='flex gap-2'>
            <p className='font-bold'>Member Since:</p>
            <p>{item.memberSince}</p>
           </div>
       </div>
       <div>
       <div className='flex gap-2 items-center justify-center'>
  <Link to="/" className='bg-blue-800 rounded-md text-white py-2 px-4 font-medium transition ease-in-out duration-300 hover:bg-blue-600'>Back</Link>
  <Link to={`/editMember/${item.id}`} className='bg-green-800 rounded-md text-white py-2 px-4 font-medium transition ease-in-out duration-300 hover:bg-green-600'>Edit</Link>
  <button onClick={() => handleDelete(item.id)} className='bg-red-800 rounded-md text-white py-2 px-4 font-medium transition ease-in-out duration-300 hover:bg-red-600'>Delete</button>
         </div>
       </div>
       </div>
    ))}
    </div>
       </div>
       </>
  )
}

export default MangeMembers
