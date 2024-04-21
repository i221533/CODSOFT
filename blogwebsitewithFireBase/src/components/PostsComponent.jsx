import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { storeData } from '../FireBase';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PostsComponent = ({ category }) => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(collection(storeData, 'posts'));
          const fetchedPosts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setPosts(fetchedPosts);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
  
      fetchData();
    }, []);
  
    // Filter posts based on category
    const filteredPosts = category === 'All' ? posts : posts.filter(post => post.category === category);
  
    return (
      <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((item) => (
            <div key={item.id} className='relative bg-white py-4 px-5 shadow-lg'>
            <div className='flex flex-col gap-2 items-center justify-center'>
            <div className='w-[100%] h-[200px]  md:h-[150px]  rounded-md'>
                <img
                    className=' w-[100%] rounded-md h-[100%]'
                    src={item.image} // Access the correct property for the image URL
                    alt=''
                />
            </div>
            <div className='w-full'>
                <h2 className='font-bold'>{item.title}</h2>
            </div>
            <div className='w-full'>
                <p className='text-[#5D6D7E]'>
                    {item.description.substring(0, 80)} . . .
                </p>
            </div>
            <div className='flex w-full items-center gap-2'>
                <div>
                    <FaUser size={25} />
                </div>
                <div>
                    <p>{item.authorName}</p>
                </div>
            </div>
            <div className='flex w-full gap-2 items-center '>
                <p className='text-[16px]'>Published On:</p>
                <p className='text-[14px] text-[#5D6D7E]'>{item.publishedDate}</p>
            </div>

            <div className='mt-2'>
                <Link to={`/readMore/${item.id}`} className='border border-gray-400 py-2 px-4 rounded-md text-black font-normal text-[16px] hover:bg-black hover:text-white hover:border-none transition ease-in-out duration-300'>Read More</Link>
            </div>
        </div>
            </div>
          ))
        ) : (
          <div className='text-center'>No posts available for the selected category.</div>
        )}
      </div>
    );
  };


  export default PostsComponent;