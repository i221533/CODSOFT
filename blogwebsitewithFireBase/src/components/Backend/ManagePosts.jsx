import React,{useState,useEffect} from 'react'
import { FaUser } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import {deleteDoc,doc, getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { storeData } from '../../FireBase';
const ManagePosts = () => {
    const [Val,setVal]=useState([]);
const Value = collection(storeData, "posts");

  useEffect(() => {
    const getData = async () => {
        const getVal = await getDocs(Value);
        if (!Value) {
          console.log("No Value");
         
        }
        else{
            console.log("Here is Value");
            
        console.log(Value);
       
         
        setVal(getVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(Val.image);
        }
      };
      getData();
   
  }, []);
  const handleDelete= async(id)=>{
    try {
        await deleteDoc(doc(storeData, 'posts', id));
        console.log('Post deleted successfully');
        setVal(Val.filter((item) => item.id !== id));
      } catch (error) {
        console.error('Error deleting post:', error);
      }

  } 
  return (
    <div className='p-5'>

       <div className=' w-[80%] mx-auto  flex flex-col gap-2'>
         <div className='justify-end items-end flex '>
            <Link to='/addPost' className=' bg-black w-[130px] rounded-md text-center text-white p-2 '>Create Post +</Link>
         </div>
{Val.map((item)=>(
    <div className='flex flex-col gap-2 shadow-lg w-[500px] p-4 mx-auto'>
           <div className='w-[100%] h-[300px]'>
            <img className='w-full h-[100%]' src={item.image}/>
           </div> 
           <div>
            <h1 className='font-bold text-[20px]'>{item.title}</h1>

           </div>
           <div>
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
            <p className='text-[16px]'>Published on:</p>
            <p className='text-[16px] text-[#5D6D7E]'>{item.publishedDate}</p>
          </div>
         <div className='flex gap-2 items-center justify-center'>
  <Link to="/" className='bg-blue-800 rounded-md text-white py-2 px-4 font-medium transition ease-in-out duration-300 hover:bg-blue-600'>Back</Link>
  <Link to={`/edit/${item.id}`} className='bg-green-800 rounded-md text-white py-2 px-4 font-medium transition ease-in-out duration-300 hover:bg-green-600'>Edit</Link>
  <button onClick={() => handleDelete(item.id)} className='bg-red-800 rounded-md text-white py-2 px-4 font-medium transition ease-in-out duration-300 hover:bg-red-600'>Delete</button>
         </div>
      </div>
))}
     
       </div>
    </div>
  )
}

export default ManagePosts;
