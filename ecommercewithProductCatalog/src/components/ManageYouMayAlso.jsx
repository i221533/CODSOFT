import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { storeData } from '../Firebase';

const ManageYouMayAlso = () => {
  const [products, setProducts] = useState([]);
  const confirmDelete=(id)=>{
    if(window.confirm('You are sure to delete the Product'))
    {
     handleDelete(id);
    }
}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(storeData, 'products'));
        const fetchedProducts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
   
    
  }, []);
 
  const handleDelete= async(id)=>{
    try {
        await deleteDoc(doc(storeData, 'products', id));
      window.alert('Your Product Deleted Successfully');
      setProducts(products.filter((item) => item.id !== id));
     
      } catch (error) {
        console.error('Error deleting post:', error);
      }

  } 
  return (
    <div className='w-full mt-20 px-10 flex flex-col gap-2'>
      <Link to='/manage/addMayAlsoLike' className='bg-blue-600 w-[200px] rounded-md text-white py-2 px-4 transition ease-in-out duration-300 hover:bg-blue-500'>
        Add New Products +
      </Link>
      <div className='grid md:grid-cols-3 gap-2'>
      {products.map((product) => (
        
        <div key={product.id} className='rounded-md py-2 px-4 bg-[#F0F3F4]'>
          <div className='flex pb-5 flex-col'>
            <div>
              <img className='transition ease-in-out duration-300 hover:scale-105' src={product.imageURL} alt='' />
            </div>
            <div>
              <p className='text-[13px]'>{product.productName}</p>
            </div>
            <div className='flex gap-2 text-[18px] text-green-600'>
              <p>From</p>
              <p>{product.price} PKR</p>
            </div>
            <div className='flex w-full items-center justify-center gap-2'>
              <Link className='bg-blue-600 rounded-md text-white py-2 px-8 transition ease-in-out duration-300 hover:bg-blue-500'>
                Edit
              </Link>
              <button className='bg-red-600 rounded-md text-white py-2 px-8 transition ease-in-out duration-300 hover:bg-red-500'
              onClick={()=>confirmDelete(product.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
       
      ))}
      </div>
    </div>
  );
};

export default ManageYouMayAlso;
