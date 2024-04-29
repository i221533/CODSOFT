import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import cat1 from '../assets/category/cat-1.jpg';
import cat2 from '../assets/category/cat-2.jpg';
import cat3 from '../assets/category/cat-3.jpg';
import cat4 from '../assets/category/cat-4.jpg';

const CategoryMenu = () => {
    const settings = {

        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='w-full p-10'>
            <div className='max-w-[1140px] mx-auto flex flex-col gap-6'>
                <div className='w-auto'>
                    <h1 className='font-bold py-2 border-b border-gray-400 text-[30px] text-center'>Explore Categories</h1>
                </div>

                <Slider {...settings}>
                    <div>
                        <div className='flex flex-col justify-between gap-4 shadow-lg py-6 px-4'>
                            <h2 className='font-bold text-[20px] text-center'>HEADPHONES</h2>
                            <div className='flex justify-center'>
                                <img className='w-[200px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer' src={cat1} alt='' />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Link className='border p-2 border-gray-400 transition ease-in-out duration-300 hover:border-green-400 hover:bg-green-400'>Explore <i className="fa-sharp fa-solid fa-arrow-right"></i> </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col justify-between gap-4 shadow-lg py-6 px-4'>
                            <h2 className='font-bold text-[20px] text-center'>BLUETOOTH</h2>
                            <div className='flex justify-center'>
                                <img className='w-[200px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer' src={cat2} alt='' />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Link className='border p-2 border-gray-400 transition ease-in-out duration-300 hover:border-green-400 hover:bg-green-400'>Explore <i className="fa-sharp fa-solid fa-arrow-right"></i> </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col justify-between gap-4 shadow-lg py-6 px-4'>
                            <h2 className='font-bold text-[20px] text-center'>WATCHES</h2>
                            <div className='flex justify-center'>
                                <img className='w-[200px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer' src={cat3} alt='' />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Link className='border p-2 border-gray-400 transition ease-in-out duration-300 hover:border-green-400 hover:bg-green-400'>Explore <i className="fa-sharp fa-solid fa-arrow-right"></i> </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col justify-between gap-4 shadow-lg py-6 px-4'>
                            <h2 className='font-bold text-[20px] text-center'>EARBUDS</h2>
                            <div className='flex justify-center'>
                                <img className='w-[200px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer' src={cat4} alt='' />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Link className='border p-2 border-gray-400 transition ease-in-out duration-300 hover:border-green-400 hover:bg-green-400'>Explore <i className="fa-sharp fa-solid fa-arrow-right"></i> </Link>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default CategoryMenu;
