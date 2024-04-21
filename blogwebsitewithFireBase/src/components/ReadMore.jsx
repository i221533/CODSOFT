import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { collection, doc, getDoc } from 'firebase/firestore';
import { storeData } from '../FireBase';

const ReadMore = () => {
  const { id } = useParams();
  const [Val, setVal] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const docRef = doc(storeData, 'posts', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setVal({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error getting document:', error);
      }
    };

    getData();
  }, [id]);

  if (!Val) {
    // Display loading or error message while data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <div className=' p-5 bg-[#F0F3F4]'>
      <div className='w-[80%] mx-auto  flex flex-col gap-2'>
        <div className='flex flex-col gap-2 shadow-lg w-[500px] p-4 mx-auto'>
          <div>
            <img src={Val.image} alt='' />
          </div>
          <div>
            <h1>{Val.title}</h1>
          </div>
          <div>
            <p className='text-[#5D6D7E]'>{Val.description}</p>
          </div>
          <div className='flex w-full items-center gap-2'>
            <div>
              <FaUser size={25} />
            </div>
            <div>
              <p>{Val.authorName}</p>
            </div>
          </div>
          <div className='flex w-full gap-2 items-center '>
            <p className='text-[16px]'>Category:</p>
            <p className='text-[16px] text-[#5D6D7E]'>{Val.category}</p>
          </div>
          <div className='flex w-full gap-2 items-center '>
            <p className='text-[16px]'>Published on:</p>
            <p className='text-[16px] text-[#5D6D7E]'>{Val.publishedDate}</p>
          </div>
          <div className='flex gap-2 items-center justify-center'>
            <Link to='/' className='bg-blue-800 rounded-md text-white py-2 px-4 font-medium transition ease-in-out duration-300 hover:bg-blue-600'>
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
