import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link,useParams} from 'react-router-dom'
import { updateStatus } from '../UserReducer'
const ReadMore = () => {
  const {id}=useParams();

  const users=useSelector(state=>(state.users));
  const previousUser=users.filter(f=>f.id===id);

  const dispatch = useDispatch(); 

  // Function to handle checkbox change event
  const handleCheckboxChange = (id, checked) => {
   
    dispatch(updateStatus({ id, status: checked ? 'Completed' : 'Uncompleted' }));
  };
 const items=previousUser[0]
  return (
    <div className=' mt-5'>
       <div className='w-[600px] mx-auto'>
       <div className='bg-white px-2 py-4 flex flex-col rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg '>
          <h1 className='font-bold mb-4 text-center'>{items.Title}</h1>
          <div className='flex gap-2 mb-4'>
            <p className='font-bold'>Due Date:</p>
            <p className='text-[#5D6D7E ]'>{items.DueDate}</p>
          </div>  
          <div className='flex gap-2 mb-4'>
            <p className='font-bold'>Priority:</p>
            <p className='text-[#5D6D7E ]'>{items.Priorty}</p>
          </div>  
          <div className='flex gap-2 mb-4'>
            <p className='font-bold'>Status:</p>
            <div className='flex gap-2'>
              <input type='checkbox'
             checked={items.Status === 'Completed'}
              onChange={(e=>handleCheckboxChange(items.id,e.target.checked))}/>
              <p className='text-[#5D6D7E ]'>{items.Status}</p>
            </div>
          </div> 
          <div className='flex gap-2 mb-4'>
            <p className='font-bold'>Detail Desc:</p>
            <p className='text-[#5D6D7E ]'>{items.DetailNote}</p>
          </div> 
         
          <div className=' flex gap-2 justify-center items-center transition duration-300 ease-in-out text-center'>
            <Link to="/" className=" font-normal   transition py-3 px-6 rounded-md duration-300 ease-in-out text-white bg-blue-600 hover:bg-blue-500">Back</Link>
            <Link to={`/edit/${items.id}`} className=" font-normal   transition py-3 px-6 rounded-md duration-300 ease-in-out text-white bg-blue-600 hover:bg-blue-500">Edit</Link>
          </div>
        </div>

       </div>
    </div> 
  )
}

export default ReadMore
