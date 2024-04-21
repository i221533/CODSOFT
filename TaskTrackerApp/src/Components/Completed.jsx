import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateStatus } from '../UserReducer'; 

const Completed = () => {
  const users2 = useSelector(state => state.users);
  const users = users2.filter(f => f.Status === 'Completed');
  const dispatch = useDispatch(); 

  // Function to handle checkbox change event
  const handleCheckboxChange = (id, checked) => {
   
    dispatch(updateStatus({ id, status: checked ? 'Completed' : 'Uncompleted' }));
  };

  return (
    <div>
   
      <div className='w-[71%] mt-5 gap-4 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mx-auto'>
        {users.length === 0 ? (
          <p>No Record Found</p>
        ) : (
          users.map((items, i) => (
            <div key={i} className='bg-white px-2 py-4 flex flex-col rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg'>
              <h1 className='font-bold mb-4 text-center'>{items.Title}</h1>
              <div className='flex gap-2 mb-4'>
                <p className='font-bold'>Due Date:</p>
                <p className='text-[#AEB6BF]'>{items.DueDate}</p>
              </div>
              <div className='flex gap-2 mb-4'>
                <p className='font-bold'>Priority:</p>
                <p className='text-[#AEB6BF]'>{items.Priorty}</p>
              </div>
              <div className='flex gap-2 mb-4'>
                <p className='font-bold'>Status:</p>
                <div className='flex gap-2'>
                  <input
                    type='checkbox'
                    checked={items.Status === 'Completed'}
                    onChange={(e) => handleCheckboxChange(items.id, e.target.checked)} // Call handleCheckboxChange function
                  />
                  <p className='text-[#AEB6BF]'>{items.Status}</p>
                </div>
              </div>
              <div className='flex gap-2 mb-4'>
                <p className='font-bold'>Detail Desc:</p>
                <p className='text-[#AEB6BF]'>{items.DetailNote.substring(0, 8)} . . .</p>
              </div>
              <div className='transition duration-300 ease-in-out text-center'>
                <Link to={`/readMore/${items.id}`} className="font-normal border-2 border-gray-400 text-black transition p-2 rounded-md duration-300 ease-in-out hover:text-white hover:bg-blue-600">Read More</Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Completed;
