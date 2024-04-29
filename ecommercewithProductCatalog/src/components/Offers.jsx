import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mobileoffer from '../assets/smart-offer.webp'
import speakeroffer from '../assets/speaker-offer.webp'

import earbudsOffer from '../assets/earbudsOffer.webp'
import { collection, getDocs } from 'firebase/firestore';
import { storeData } from '../Firebase';
const Offers = () => {
  const [val,setVal]=useState();
    const settings = {
        infinite: true,
        speed: 1000, // Adjust the speed of the fade transition as needed
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true, // Enable fade effect
        cssEase: 'linear' // Set easing function for the fade transition
      };
    
    const divStyle = {
        background: 'linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)',
        
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
   
      <div className='w-[1140px] mx-auto shadow-md py-5 mt-5 mb-5 '  style={divStyle}>
     <Slider {...settings}>
     {val && val
     .slice(0,4)
     .map(item=>(
      <div className='w-full'>
     
       <div className='grid grid-cols-1 md:grid-cols-2 justify-between    p-10'>
       
          <div className='flex  flex-col gap-2'>
          <p className='p-2 max-w-[130px] text-center bg-red-600 text-white'>With 10% OFF</p>
         <h2 className='font-bold text-[24px]'>Exclusive Offers for You </h2>
      <p className='text-gray-700'>ONLY FOR BEST SELLERS PRODUCTS</p>
      <Link to={`/singleProduct/${item.id}`} className='px-4 py-1 rounded-2xl text-center transition ease-in-out duration-300 bg-[#27AE60] w-[150px] hover:bg-red-600 text-white'>SHOP NOW</Link>
        </div>
        <div className='w-full'>
        <div className='h-[300px] w-[300px] md:w-[400px]'>
        <img  className='h-[100%] w-[100%]' src={item.imageURL} alt=''/>
        </div>
           
        </div>
       </div>
      </div>
      
     ))}
  

     
      </Slider>
      </div>

  
  )
}

export default Offers;  
