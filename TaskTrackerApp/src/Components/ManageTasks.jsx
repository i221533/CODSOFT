import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { deleteTask } from '../UserReducer'
const ManageTasks = () => {

    const users = useSelector(state => state.users);
  const dispatch = useDispatch(); 

  // Function to handle checkbox change event
  const handleCheckboxChange = (id, checked) => {
   
    dispatch(updateStatus({ id, status: checked ? 'Completed' : 'Uncompleted' }));
  };
  const handleDelete=(id)=>{
      dispatch(deleteTask({id:id}));
  }
  return (
<>
<Link to="/addtask" className='w-[100px] flex bg-blue-800 text-white mt-5 rounded-md py-2 px-4  mx-auto '>AddNew+</Link>
    {
        users.length === 0 ?(<p>No Task Found</p>):(
          users.map((items,i)=>(
            <div className=' mt-5'>
       <div className='w-[600px] mb-5 mx-auto'>
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
            <div className='font-bold'>Details Desc:</div>
            <p className='text-[#5D6D7E ]'>{items.DetailNote}</p>
          </div> 
         
          <div className=' flex gap-2 justify-center items-center transition duration-300 ease-in-out text-center'>
            <Link to="/" className=" font-normal   transition py-3 px-6 rounded-md duration-300 ease-in-out text-white bg-blue-600 hover:bg-blue-500">Back</Link>
            <Link to={`/edit/${items.id}`} className=" font-normal   transition py-3 px-6 rounded-md duration-300 ease-in-out text-white bg-blue-600 hover:bg-blue-500">Edit</Link>
            <Link className=" font-normal   transition py-3 px-6 rounded-md duration-300 ease-in-out text-white bg-red-600 hover:bg-red-500" onClick={()=>handleDelete(items.id)}>Delete</Link>
          </div>
        </div>

       </div>
    </div> 
          )
        )
    )
    }
    </>
  )
}

export default ManageTasks
