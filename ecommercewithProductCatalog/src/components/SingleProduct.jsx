import React,{useEffect,useState} from 'react'

import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { useUserName } from './Context';
import {Link,useNavigate, useParams} from 'react-router-dom'
import Navbar from './Navbar';
import Fotter from './Fotter';
import YouMayAlsoLike from './YouMayAlsoLike';
import { storeData,auth } from '../Firebase';
import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';

const SingleProduct = () => {
    const {id}=useParams();
 const {setInformationMessage,numberOfItems,setNumberOfItems}=useUserName();
 const navigate=useNavigate();
 const {userName,userEmail}=useUserName();
    const [quantity,setQuantity]=useState(1);
    const [Val, setVal] = useState(null);
    const [userUid,setUserUid]=useState();
  
    const getUserUid = () => {
      if (auth.currentUser) {
          if (!userUid) { // Check if userUid is not already set
              setUserUid(auth.currentUser.uid);
          }
      } else {
          setUserUid(null);
      }
  };
 
    const getData = async () => {

        try {
          console.log('Fetching data for ID:', id);
          const docRef = doc(storeData, 'products', id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            console.log('Document data:', docSnap.data());
            setVal({ id: docSnap.id, ...docSnap.data() });
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error getting document:', error);
        }
      };
      
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        getUserUid();
        getData();
      
       
      },[id]);
      const updateNumberOfCartItems = async (newNumberOfCartItems) => {
        try {
          const cartItemsRef = collection(storeData, `cartItems'${userEmail}`);
          const cartItemsSnapshot = await getDocs(cartItemsRef);
          
         
          if (!cartItemsSnapshot.empty) {
          
            const docId = cartItemsSnapshot.docs[0].id;
      
          
            await updateDoc(doc(cartItemsRef, docId), {
              numberOfCartItems: newNumberOfCartItems
            });
      
            console.log('numberOfCartItems updated successfully!');
          } else {
            console.log(`No cartItems collection found for user with email ${userEmail}`);
          }
        } catch (error) {
          console.error('Error updating numberOfCartItems:', error);
        }
      };
      const handleQuantity=(type)=>
      {
      if(type===1)
      {
        if(quantity<Val.quantity)
        {

        setQuantity(quantity+1);
       
        }
        else{
          setInformationMessage("we have only  "+Val.quantity + " Products in stock Sorry for inconveience");
          setTimeout(()=>{
            setInformationMessage('');
          },2000)
        }
      }
      else{

        if(quantity>1)
        {

        setQuantity(quantity-1);
       
        }
        else{
          setInformationMessage("Minimum quantity can be 1");
          setTimeout(()=>{
            setInformationMessage('');
          },2000)
        }
      }
      }

    const handleAddTOCart = async () => {
      if (!userName) {
        if (window.confirm('Please LogIn/signup to continue shopping Press Ok')) {
          navigate('/login');
        }
      } else {
        try {
          // Construct the cart item object
          const cartItem = {
            productName: Val.productName,
            quantity: quantity,
            price: Val.price,
            totalPrice: quantity * Val.price,
            imageURL: Val.imageURL,
          };
    
          // Add the cart item to the Firestore collection
          await addDoc(collection(storeData, `Cart${userUid}`), cartItem);
    
          setInformationMessage('Item added to cart successfully.');
          updateNumberOfCartItems(numberOfItems+1)
          setTimeout(() => {
            setInformationMessage('');
          }, 2000);
        } catch (error) {
          console.error('Error adding item to cart:', error);
          alert('Error adding item to cart. Please try again later.');
        }
      }
    };
    if(!Val)
    {
        return <div>Loading</div>
    }
     // Log userUid here after it's set
     console.log("This is User UID", userUid);



    
  return (
    <div  className='w-full absolute '>
    
    <div className='top-0'>
    <Navbar userName={userName}/>
   
    </div>
    
    <div className='w-full'>
    <div className='mt-[80px] px-10 py-10 '>
  
    <div className='max-w-[1140px] mx-auto flex flex-col items-center '>
   

  




            <div className='grid gap-2 grid-cols-1 md:grid-cols-2'>
    <div  className='border border-gray-300'>
       <img src={Val.imageURL} alt=''/>
        </div>
        <div className='flex flex-col gap-2 border px-4 py-8 border-gray-300'>
        <div>
        <h2 className='font-bold text-[20px]'>{Val.productName}</h2>
        </div>
          <div className='flex justify-between items-center'>
            <p className='font-bold text-gray-600'>Follow Us</p>
            <div className='flex gap-2'>
              <div className='bg-[#D0D3D4] text-[#000000a6]  hover:text-white transition ease-in-out duration-300 hover:bg-green-800 p-2 cursor-pointer'>
                <FaFacebook className='' size={25}/>
              </div>
              <div className='bg-[#D0D3D4] text-[#000000a6]  hover:text-white transition ease-in-out duration-300 hover:bg-green-800 p-2 cursor-pointer'>
                <FaTwitter className='' size={25}/>
              </div>
              <div className='bg-[#D0D3D4] text-[#000000a6]  hover:text-white transition ease-in-out duration-300 hover:bg-green-800 p-2 cursor-pointer'>
                <FaYoutube className='' size={25}/>
              </div>
              <div className='bg-[#D0D3D4] text-[#000000a6]  hover:text-white transition ease-in-out duration-300 hover:bg-green-800 p-2 cursor-pointer'>
                <FaLinkedin className='' size={25}/>
              </div>
            </div>
          </div>
          <div className='border-b border-gray-400 py-4'>

          </div>
          <div className='flex items-center gap-2 py-4'>
          <div>
            <p className='font-medium'>Select Quality:</p>
          </div>
          <div>
          <select id="quality" className='border border-gray-400 px-4 py-1 text-center outline-none  rounded-2xl'>
    <option value="normal">Normal</option>
    <option value="medium">Medium</option>
    <option value="better">Better</option>
    <option value="best">Best</option>
</select>
          </div>

          </div>

          <div className='flex items-center gap-2 py-4'>
          <p className='font-medium'>Price:</p>
          <div>{Val.price} PKR</div>
          </div>
          <div className='flex items-center gap-2 py-4'>
          <p className='font-medium'>Total Price:</p>
          <div>{quantity*Val.price} PKR</div>
          </div>
           <div className='flex items-center gap-2 py-4' >
              <p>Quantity</p>
          <div className='flex'>
            <div className='border-2 border-gray-600 px-4 py-2 cursor-pointer' onClick={()=>handleQuantity(2)}>-</div>
            <div className='border-2 border-gray-600 px-4 py-2'>{quantity}</div>
            <div className='border-2 border-gray-600 px-4 py-2 cursor-pointer' onClick={()=>handleQuantity(1)}>+</div>
          </div>
          </div>

          <div className='flex items-center py-4'>
            <button  className='bg-blue-800 text-white transition py-2 px-4 w-[150px] text-center ease-in-out duration-300 hover:bg-blue-600' onClick={handleAddTOCart}>Add to Cart</button>
          </div>
        </div>

        <div className='flex flex-col gap-2 border border-gray-400 p-2'>
          <p className='font-bold'>Description</p>
          <p className='text-gray-600'>{Val.description}</p>
        </div>
        <div>

        </div>
        </div>
    
      
       
       
    </div>
   
   <div>
  
   </div>
    </div>
   <YouMayAlsoLike/>
    <Fotter/>
    </div>

   
  
    </div>
  )
}

export default SingleProduct;
