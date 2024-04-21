import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000 
  };

  return (
    
      <Slider {...settings}>
        <div className='w-full bg-black  p-10 mt-[80px]'>
        <div className='max-w-[1140px] mx-auto text-white gap-8 justify-center items-center md:items-start md:justify-start grid grid-cols-1 md:grid-cols-2 '>
       <div className='flex flex-col gap-4 justify-center items-center md:justify-start md:items-start'>
          <h1 className='font-medium text-[24px] md:text-[40px]'>Start Journey  <span class="italic">with</span>  AI</h1>
          <button className='bg-amber-600 max-w-[150px] py-3 px-4 text-[20px] rounded-md transition ease-in-out duration-300 hover:bg-amber-400'>Get Started</button>

       </div>
       <div className='flex justify-center items-center  '>
        <img class="w-[400px] h-[300px] rounded-md"  alt='' src='https://img.freepik.com/free-photo/ai-chip-artificial-intelligence-future-technology-innovation_53876-129780.jpg?size=626&ext=jpg&ga=GA1.1.2017250091.1710617060&semt=sph'/>
       </div>
        </div>
        </div>
        


        <div className='w-full bg-black p-10 mt-[80px] '>
        <div className='max-w-[1140px] mx-auto text-white gap-8 justify-center items-center md:items-start md:justify-start grid grid-cols-1 md:grid-cols-2 '>
       <div className='flex flex-col gap-4 justify-center items-center md:justify-start md:items-start'>
          <h1 className='font-medium text-[24px] md:text-[40px]'>We are going to Explore  <span class="italic">Web</span> Development</h1>
          <button className='bg-amber-600 max-w-[150px] py-3 px-4 text-[20px] rounded-md transition ease-in-out duration-300 hover:bg-amber-400'>Get Started</button>

       </div>
       <div className='flex justify-center items-center  '>
        <img class="w-[400px] h-[300px] rounded-md"  alt='' src='https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.2017250091.1710617060&semt=ais'/>
       </div>
        </div>
        </div>


        <div className='w-full bg-black p-10 mt-[80px] '>
        <div className='max-w-[1140px] mx-auto text-white gap-8 justify-center items-center md:items-start md:justify-start grid grid-cols-1 md:grid-cols-2 '>
       <div className='flex flex-col gap-4 justify-center items-center md:justify-start md:items-start'>
          <h1 className='font-medium text-[24px] md:text-[40px]'>Web Desiging is   <span class="italic">Great</span>  Fun</h1>
          <button className='bg-amber-600 max-w-[150px] py-3 px-4 text-[20px] rounded-md transition ease-in-out duration-300 hover:bg-amber-400'>Get Started</button>

       </div>
       <div className='flex justify-center items-center  '>
        <img class="w-[400px] h-[300px]  rounded-md"  alt='' src='https://img.freepik.com/premium-vector/website-layout-web-banner-landing-page_277904-12652.jpg?w=826'/>
       </div>
        </div>
       </div>
       
      </Slider>
 
  );
}

export default Banner;
