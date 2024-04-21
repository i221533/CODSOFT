import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect,useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { storeData } from '../FireBase';

const Testominals = () => {
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 4, // Number of slides to show at a time
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000 
      };
    
  return (
    <div className='w-full'>
   
    <div className='w-[1140px] mx-auto p-10 '>
    <h1 className='font-bold text-[24px]'>Testominals</h1>
    {!testimonials?'No Testominals added':
    <Slider {...settings}>

{testimonials.map((item)=>(
    <div key={item.id} className='flex flex-col gap-4 py-10'>
      <div className=' max-h-[100px]'>
        <img  className='rounded-full' src={item.image} alt=''/>
      </div>
    </div>
))}
   
    
    
    </Slider>
    }
    </div>
      
    </div>
  )
}

export default Testominals;
