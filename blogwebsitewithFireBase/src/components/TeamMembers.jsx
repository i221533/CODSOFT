import React,{useEffect,useState} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { collection, getDocs } from 'firebase/firestore';

import { storeData } from '../FireBase';
const TeamMembers = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000 
      };
      const [Val,setVal]=useState([]);
const Value = collection(storeData, "members");

  useEffect(() => {
    const getData = async () => {
        const getVal = await getDocs(Value);
        if (!Value) {
          console.log("No Value");
         
        }
        else{
            console.log("Here is Value Member");
            
        console.log(Value);
       
         
        setVal(getVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(Val.image);
        }
      };
      getData();
   
  }, []); 
    
  return (
    <div className='w-full'>
      <div className='max-w-[1140px] mx-auto p-10'>
     <h1 className='font-bold text-[24px]'>Our Team</h1>

     {!Val?'No Team member added':
   
     <Slider {...settings}>
     {Val.map((item)=>(
        <div key={item.id} className='w-full mt-2'>
       <div className='w-[90%] flex items-center justify-center md:justify-start md:items-start flex-col  md:flex-row md:w-[50%] mx-auto rounded-md gap-4 py-10 px-5 bg-[#E5E7E9]'>
       <div className='  w-[200px] h-[190px] md:w-[700px] md:h-[180px]'>
       <img className='rounded-full w-[100%] h-[100%]' src={item.image} alt=''/>
       </div>
       <div className='flex flex-col'>
           <h3 className='font-bold'>{item.name}</h3>
           <p className='text-[#5D6D7E]'>i{item.description}</p>
           <div className='flex gap-2'>
            <p className='font-bold'>Member Since:</p>
            <p>{item.memberSince}</p>
           </div>
       </div>
       </div>
       </div>
     ))}
    
     
       </Slider>
     }
       </div>
     
    </div>
  )
}

export default TeamMembers
