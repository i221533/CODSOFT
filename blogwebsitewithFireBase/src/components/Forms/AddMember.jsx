import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ref } from 'firebase/storage';
import {v4} from 'uuid'
import { collection ,addDoc } from 'firebase/firestore';
import { getDownloadURL,uploadBytes } from 'firebase/storage';
import { ImageStorage,storeData } from '../../FireBase';
import {useNavigate} from 'react-router-dom'
const AddMember = () => {
  const [values, setValues] = useState({
    name: '',
    img: null,
    description: '',
    memberSince: '',
  });
const navigate=useNavigate();
const handleFileChange = (e) => {
    const file = e.target.files[0];
    setValues(prevValues => ({
        ...prevValues,
        img: file
    }));
};
  const handleChange = (e) => {
    const { name, value } = e.target;

   
        // Update other properties as usual
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    
};

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    console.log('Form submitted:', values);
    try {
            
        const imageRef = ref(ImageStorage, `${v4()}_${values.img.name}`);
        await uploadBytes(imageRef, values.img);

       
        const imageURL = await getDownloadURL(imageRef);

       
        await addDoc(collection(storeData, "members"), {
            name: values.name,
            image: imageURL,
            description: values.description,
            memberSince: values.memberSince
        });

        // Reset form values
        setValues({
            title: "",
            img: "",
            description: "",
            authorName: "",
            publishedDate: "",
            category: ""
        });

        // Display success message
        alert('Member Added  successfully');
        navigate("/home");
    } catch (error) {
        console.error('Error publishing post:', error);
        // Display error message
        alert('Error publishing post. Please try again later.');
    }
    setValues({
      name: '',
      img: '',
      description: '',
      memberSince: '',
    });
  };

  return (
    <div className='p-5 h-screen bg-[#F0F3F4]'>
      <div className='flex h-screen items-center justify-center'>
       
         
          <form onSubmit={handleSubmit}>
          <div className='flex bg-white p-4 gap-4 flex-col w-[400px] mx-auto '>
          <div>
            <h1 className='text-center font-bold text[20px]'>Add New Member Here</h1>
          </div>
            <div className='w-full flex gap-1 flex-col'>
              <label>Name</label>
              <input
                className='p-2 w-full border border-gray-400 outline-none rounded-md'
                name='name'
                type='text'
                value={values.name}
                placeholder='Enter Name'
                onChange={handleChange}
              />
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
            <div className='w-full flex gap-1 flex-col'>
              <label>Description</label>
              <textarea
                className='p-2 w-full border border-gray-400 outline-none rounded-md'
                name='description'
                type='text'
                value={values.description}
                placeholder='Enter Details'
                onChange={handleChange}
              />
            </div>
            <div className='w-full flex gap-1 flex-col'>
              <label>Member Since</label>
              <input
                className='p-2 w-full border border-gray-400 outline-none rounded-md'
                name='memberSince'
                type='date'
                value={values.memberSince}
                placeholder='mm/dd/yy'
                onChange={handleChange}
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

export default AddMember;
