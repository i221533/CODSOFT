import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ref } from 'firebase/storage';
import {v4} from 'uuid'
import { collection ,addDoc } from 'firebase/firestore';
import { getDownloadURL,uploadBytes } from 'firebase/storage';
import { ImageStorage,storeData } from '../../FireBase';
import {useNavigate} from 'react-router-dom'
const AddTestominal = () => {
  const [img,setImg] = useState('');

const navigate=useNavigate();
const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImg(file);
    
};
 

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    
    try {
            
        const imageRef = ref(ImageStorage, `${v4()}_${img.name}`);
        await uploadBytes(imageRef,img);

       
        const imageURL = await getDownloadURL(imageRef);

       
        await addDoc(collection(storeData, "Testominals"), {
           
            image: imageURL
           
        });

        // Reset form values
        setImg("");

        // Display success message
        alert('Testominal Added  successfully');
        navigate("/home");
    } catch (error) {
        console.error('Error publishing post:', error);
        // Display error message
        alert('Error publishing post. Please try again later.');
    }
   
  };

  return (
    <div className='p-5 h-screen bg-[#F0F3F4]'>
      <div className='flex h-screen items-center justify-center'>
       
         
          <form onSubmit={handleSubmit}>
          <div className='flex bg-white p-4 gap-4 flex-col w-[400px] mx-auto '>
          <div>
            <h1 className='text-center font-bold text[20px]'>Add New Testominal Here</h1>
          </div>
           
            <div className='w-full flex gap-1 flex-col'>
              <label>Upload Image</label>
              <input
    className='p-2 w-full border border-gray-400 outline-none rounded-md'
    name='img'
    type='file'
    onChange={handleFileChange}
/>
            </div>
           
           
            <div className='w-full flex  flex-col'>
              <button
                type='submit'
                className='bg-blue-800 rounded-md text-white text-[20px] transition ease-in-out duration-300 hover:bg-blue-600 py-2 px-4 text-center'
              >
                Add+
              </button>
            </div>
            </div>
          </form>
        
      </div>
    </div>
  );
};

export default AddTestominal;
