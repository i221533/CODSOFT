import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoshopping.png';
import { useUserName } from './Context';
import { auth, storeData } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore';

const Bill = () => {
  // Get current date
  const currentDate = new Date().toLocaleDateString();
 const {userName,userEmail,GrandTotalOfUser,numberOfItems,totalQuantity}=useUserName();
 const [val,setVal]=useState([]);
 const [userUid,setUserUid]=useState();
 const fetchData = async () => {
    try {
        if(userName)
        {
      if (auth.currentUser) {
        if (!userUid) { // Check if userUid is not already set
       
            setUserUid(auth.currentUser.uid);
        }
    }
    } else {
        setUserUid(null);
    }
      const querySnapshot = await getDocs(collection(storeData, `Cart${userUid}`));
      const fetchedItemsFromCart = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log( fetchedItemsFromCart );

       setVal( fetchedItemsFromCart )
       
    
      
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

useEffect(()=>{

    
    fetchData();
},[userUid])
  return (
    <div className="w-full h-screen overflow-y-auto flex ">
      <div className='bg-black w-[300px] py-10 px-8'>
   <div className='flex flex-col gap-4 '>
         <div className='w-[80px] h-[80px] mx-auto flex items-center justify-center'>
              <img className='rounded-full h-[100%] w-[100%]' src={logo} alt='' />
            </div>
            <div>
                <h1 className='font-medium text-[24px] text-center text-white'>User Profile</h1>
            </div>
            <div className='flex gap-2 items-center'>
               <p className='font-medium text-[18px] text-white'>Name:</p>
               <p className='text-white'>{userName}</p>
            </div>
            <div className='flex gap-2 items-center'>
               <p className='font-medium text-[18px] text-white'>Email:</p>
               <p className='text-white'>{userEmail}</p>
            </div>
   </div>
      </div>
        <div className='h-screen bg-[#F2F2F2]  gap-4 w-full flex-col flex items-center justify-center'>
           <div >
            <h1 className='font-medium text-[28px] '>Invoice</h1>
            <div className='border-2 max-w-[45px] border-black'></div>
           </div>
           <div>
           <table  className="custom-table">
  <thead>
    <tr>
      
      <th className="custom-table-header">Item Name</th>
      <th className="custom-table-header">Quantity</th>
      <th className="custom-table-header">Price</th>
      <th className="custom-table-header">Total Price</th>
      
    </tr>
  </thead>
  
  <tbody >
  {val && 
            val.map((item)=>(
    <tr key={item.id}>
      
      <td>{item.productName}</td>
      <td>{item.quantity}</td>
      <td>{item.price} RS</td>
      <td>{item.totalPrice} RS</td>
    
    </tr>
   
)) 
  }  
  <tr>
    <td className='font-bold'>Total Items</td>
    <td colSpan="3" className='text-right'>{numberOfItems}</td>
  </tr>
  <tr>
    <td className='font-bold'>Total Quantity</td>
    <td colSpan="3" className='text-right'>{totalQuantity}</td>
  </tr>
  <tr>
    <td className='font-bold'>Grand Total</td>
    <td colSpan="3" className='text-right'>{GrandTotalOfUser} RS</td>
  </tr>
  </tbody>

</table>
           </div>
        </div>
    </div>
  );
};

export default Bill;
