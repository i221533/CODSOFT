import React, { useState, useEffect } from 'react';
import { ref } from 'firebase/storage';
import { v4 } from 'uuid';
import { collection, getDoc, updateDoc, doc } from 'firebase/firestore';
import { getDownloadURL, uploadBytes } from 'firebase/storage';
import { ImageStorage, storeData } from '../../FireBase';
import { useNavigate, useParams } from 'react-router-dom';

const EditMember = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [Val,setVal]=useState([]);
    const [values, setValues] = useState({
        name: '',
        img: null,
        description: '',
        memberSince: '',
    });

    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const docRef = doc(storeData, 'members', id);
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
    useEffect(() => {
        if (Val.name) {
            setValues({
                name: Val.name,
                description: Val.description,
                img: Val.image,
                memberSince:Val.memberSince
            });
           
        }
    }, [Val]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let imageURL = Val.image; // Use the current image URL if no new image is selected
    
            if (imageFile) {
                // Only upload a new image if a file is selected
                const imageRef = ref(ImageStorage, `${v4()}_${imageFile.name}`);
                await uploadBytes(imageRef, imageFile);
                imageURL = await getDownloadURL(imageRef);
            }
    
            await updateDoc(doc(storeData, 'members', id), {
                name: values.name,
                image: imageURL,
                description: values.description,
                memberSince: values.memberSince
            });
    
            alert('Member updated successfully');
            navigate("/home");
        } catch (error) {
            console.error('Error updating member:', error);
            alert('Error updating member. Please try again later.');
        }
    };

    return (
        <div className='p-5 h-screen bg-[#F0F3F4]'>
            <div className='flex h-screen items-center justify-center'>
                <form onSubmit={handleSubmit}>
                    <div className='flex bg-white p-4 gap-4 flex-col w-[400px] mx-auto '>
                        <div>
                            <h1 className='text-center font-bold text[20px]'>Edit Member</h1>
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
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditMember;
