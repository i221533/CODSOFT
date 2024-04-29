import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logoshopping.png';
import { useUserName } from './Context';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { storeData } from '../Firebase';


const Navbar = ({ userName }) => {

  const {informationMessage,setInformationMessage,setUserName,numberOfItems,setNumberOfItems,userEmail}=useUserName();
  const [logoutVisible, setLogoutVisible] = useState(false);
  const [toggle,setToggle]=useState(false);
 
 const navigate=useNavigate();
  const handleLogout = () => {
   
    setLogoutVisible(false);
   
    setInformationMessage("Good you are logout successfully");
    setTimeout(()=>{
      setUserName('');
      setInformationMessage('');
     
      navigate('/');
    },2000)
   
   
  };
  const fetchData= async()=>{
    const queryforCartItems = await getDocs(collection(storeData,`cartItems'${userEmail}`));
    const fetchedCartItems = queryforCartItems.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log(fetchedCartItems)
    setNumberOfItems(fetchedCartItems[0].numberOfCartItems);
  }
  useEffect(()=>{
    if(userName)
    {
    fetchData();
    }
  })
  

  const handleToggle=()=>{
    setToggle(!toggle);
  }

  const toggleLogout = () => {
    setLogoutVisible(!logoutVisible);
  };

  const handleOutsideClick = () => {
    if (logoutVisible) {
      setLogoutVisible(false);
    }
  };

  return (
    <>
      {!userName && (
        <div className='fixed w-full z-50 bg-[#ECF0F1]'>
          <div className='max-w-[1200px] mx-auto flex justify-between items-center px-4 py-2'>
            <div className='w-[80px] h-[80px]'>
              <img className='rounded-full h-[100%] w-[100%]' src={logo} alt='' />
            </div>
            {informationMessage &&
          <div className='py-2 px-4 rounded-md bg-green-400'>
            <p className='text-white'>{informationMessage}</p></div>
            }  
            <Link className='bg-green-600 px-4 py-2 text-center transition ease-in-out duration-300 hover:bg-green-400 text-white rounded-md' to='/login'>Login</Link>
          </div>
        </div>
      )}

      {userName && (
        <div className='fixed w-full z-50 bg-[#ECF0F1]'>
          <div className='max-w-[1200px] mx-auto flex justify-between items-center px-4 py-1'>
            <div className='w-[80px] h-[80px]'>
              <img className='rounded-full h-[100%] w-[100%]' src={logo} alt='' />
            </div>
            <div className='flex md:hidden cursor-pointer p-2 bg-green-600 text-white' onClick={handleToggle}>
              {!toggle? <FaBars size={30}/>:<FaTimes size={30}/>}
            </div>
         {informationMessage &&
          <div className='py-2 px-4 rounded-md bg-green-400'>
            <p className='text-white'>{informationMessage}</p></div>
            }  
            <div className='hidden md:flex gap-2 items-center'>
            <div className="">
       <div className='hidden md:flex'>
       <div className=' bg-blue-800 rounded-full p-2 text-white'>
     <Link to='/cartItems'>
     <AiOutlineShoppingCart size={20}/>
     </Link> 
       </div>
       <div className='ml-[-18px] mt-[-5px] flex justify-center items-center rounded-full p-2  bg-black w-[20px] h-[20px]'>
       <p className=' text-white'> {numberOfItems}</p>
       </div>
       
       </div>
     
        
        
       
      
    </div>
              <div className='hidden md:flex gap-1 cursor-pointer items-center' onClick={toggleLogout}>
              <div className='flex items-center w-[40px] h-[80px]' >
                <i  className="text-[40px] fa-solid fa-circle-user"></i>
                </div>
                <p className='font-bold'>{userName}</p>
              </div>
              {logoutVisible && (
                <button className='bg-red-600 px-4 py-2 text-center transition ease-in-out duration-300 hover:bg-red-400 text-white rounded-md' onClick={handleLogout}>Logout</button>
              )}
            </div>
           {toggle && <div className='flex bg-white left-0 text-black p-4 w-[50%] md:hidden absolute h-screen top-0 z-50'>
            <div className='flex flex-col gap-2'>
            <div className='w-[80px] h-[80px]'>
              <img className='rounded-full h-[100%] w-[100%]' src={logo} alt='' />
            </div>
            <div className='flex gap-2 cursor-pointer items-center' onClick={toggleLogout}>
                <div className='flex items-center w-[40px] h-[80px]' >
                <i  className="text-[45px] fa-solid fa-circle-user"></i>
                </div>
                <p className='font-bold  text-center'>{userName}</p>
              </div>
              {logoutVisible && (
                <button className='bg-red-600 px-4 py-2 text-center transition ease-in-out duration-300 hover:bg-red-400 text-white rounded-md' onClick={handleLogout}>Logout</button>
              )}
            </div>
          </div>
                  
           }
        </div>

           
        </div>
      )}
      {logoutVisible && (
        <div className='fixed top-0 left-0 w-full h-full bg-black opacity-25 z-40' onClick={handleOutsideClick}></div>
      )}
    </>
  );
};



export default Navbar;
