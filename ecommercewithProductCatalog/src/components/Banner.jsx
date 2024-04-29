import React, { useEffect,useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { storeData } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Banner = () => {
  const [val,setVal]=useState([]);
  const settings = {
    dots:false,
    infinite: true,
    speed: 1000, // Adjust the speed of the fade transition as needed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true, // Enable fade effect
    cssEase: 'linear' // Set easing function for the fade transition
  };
  const fetchData = async () => {
   
    try {
      const querySnapshot = await getDocs(collection(storeData, 'products'));
      const fetchedProducts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log('Here are your fectched Products in banner'+fetchedProducts);

       setVal(fetchedProducts)
      
      
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  useEffect(()=>{
    fetchData();
  },[])
  return (
    
      <Slider {...settings}>
      {val && val
        .slice(0, 6)
        .map(item=>(
          <div className='w-full bg-white   p-10 mt-[82px]'>
        <div className='max-w-[1140px]  mx-auto text-white gap-8 justify-center items-center  md:justify-start grid grid-cols-1 md:grid-cols-2 '>
       <div className='flex flex-col gap-4 justify-center items-center md:justify-start md:items-start'>
          <h1 className='font-medium text-[24px] text-black md:text-[40px]'>With our earbuds feel comfortable life</h1>
         <div className='flex flex-row gap-2'>
          <button className='border border-gray-400 text-black max-w-[150px] py-3 px-4 text-[20px] rounded-md transition ease-in-out duration-300 hover:text-white hover:bg-amber-400'>Read More</button>
         <Link to={`/singleProduct/${item.id}`} className='border border-gray-400 text-black max-w-[150px] py-3 px-4 text-[20px] rounded-md transition ease-in-out duration-300 hover:text-white hover:bg-amber-400'>Shop Now</Link>
         </div>
          

       </div>
       <div className='flex justify-center items-center order-first md:order-last '>
        <img class="w-[400px] h-[300px] rounded-md"  alt='' src={item.imageURL}/>
       </div>
        </div>
        </div>
        )) }
        
       


       


       

     
       
      </Slider>
 
  );
}

export default Banner;
