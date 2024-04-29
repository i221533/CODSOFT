import React,{useEffect,useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import smartWatch from '../assets/smartWatch.webp'
import { collection, getDocs } from 'firebase/firestore';
import { storeData } from '../Firebase';
import { Link, useParams } from 'react-router-dom';

const YouMayAlsoLike = () => {
const [val,setVal]=useState();
const {id}=useParams();
    const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(collection(storeData, 'products'));
          const fetchedProducts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          console.log(fetchedProducts);
    
           setVal(fetchedProducts)
          
          
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };

useEffect(()=>{
    AOS.init({
        duration: 2000,
    })
    fetchData();
},[])
       
    
  return (
    <div className='pb-10'>
    <div className='max-w-[1140px] mx-auto'>
    <div className=' mb-2'>
        <h1 className='font-bold text-[20px]'>You May Also like</h1>
    </div>
    <div className='grid md:grid-cols-4 sm:grid-cols-3 ss:grid-cols-3 xs:grid-cols-2 grid-cols-1  gap-2 px-4 md:px-0'>
    {val && val
  .filter(item => item.id !== id) // Filter out the current product
  .slice(0, 4) // Limit to four items
  .map(item => (
    <div data-aos="zoom-in-up" className='rounded-md py-2 px-4  bg-[#F0F3F4]'>
      <div className='flex pb-5 flex-col'>
        <div>
          <img className='transition ease-in-out duration-300 hover:scale-105' src={item.imageURL} alt=''/>
        </div>
        <div>
          <Link to={`/singleProduct/${item.id}`} className='font-medium cursor-pointer transition ease-in-out duration-300 hover:text-blue-400  underline underline-offset-4'>Shop Now</Link>
        </div>
        <div>
          <p className='text-[13px]'> {item.productName} </p>
        </div>
        <div className='flex gap-2 text-[18px] text-green-600'>
          <p className=''> From </p>
          <p>{item.Price}</p>
        </div>
      </div>
    </div>
  ))}
        

     
         </div>

         
    </div>
      
   
    </div>
  )
}

export default YouMayAlsoLike;
