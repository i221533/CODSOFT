import React, { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { storeData } from '../../FireBase';
import { Link } from 'react-router-dom';

const ManageTestimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const Value = collection(storeData, "Testominals");
    useEffect(() => {
        const getData = async () => {
            const getVal = await getDocs(Value);
            if (!Value) {
              console.log("No Value");
             
            }
            else{
                console.log("Here is Value");
                
            console.log(Value);
           
             
            setTestimonials(getVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log(Val.image);
            }
          };
          getData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(storeData, 'Testominals', id));
            console.log('Testimonial deleted successfully');
            setTestimonials(testimonials.filter(testimonial => testimonial.id !== id));
        } catch (error) {
            console.error('Error deleting testimonial:', error);
        }
    };

    return (
        <div className='w-full p-5'>
            <div className='flex flex-col gap-4'>
                <div className='flex justify-end w-[50%] mx-auto items-end'>
                    <Link to='/addTestominal' className='text-white rounded-md w-[150px] bg-blue-800 transition ease-in-out duration-300 py-2 px-3  text-center hover:bg-blue-600 '>Add New +</Link>
                </div>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className='flex items-center justify-center  flex-col  w-[50%]  mx-auto rounded-md gap-4 py-10 px-5 bg-[#E5E7E9]'>
                        <div className='w-[200px] h-[200px]'>
                            <img className='rounded-full w-[100%] h-[100%]' src={testimonial.image} alt='' />
                        </div>
                        <div>
                            <div className='flex gap-2 items-center justify-center'>
                                <Link to="/" className='bg-blue-800 rounded-md text-white py-2 px-4 font-medium transition ease-in-out duration-300 hover:bg-blue-600'>Back</Link>
                                <Link to={`/editTestimonial/${testimonial.id}`} className='bg-green-800 rounded-md text-white py-2 px-4 font-medium transition ease-in-out duration-300 hover:bg-green-600'>Edit</Link>
                                <button onClick={() => handleDelete(testimonial.id)} className='bg-red-800 rounded-md text-white py-2 px-4 font-medium transition ease-in-out duration-300 hover:bg-red-600'>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageTestimonials;
