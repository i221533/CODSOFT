import React,{useEffect,useState} from 'react'
import Navbar from './Navbar';
import Fotter from './Fotter';
import { useUserName } from './Context';
import YouMayAlsoLike from './YouMayAlsoLike';
import { Link } from 'react-router-dom';
import { auth, storeData } from '../Firebase';
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

const CartItems = () => {
    const {setInformationMessage,numberOfItems,userEmail,GrandTotalOfUser,setGrandTotalOfUser,totalQuantity,setTotalQuantity}=useUserName();
    const [val,setVal]=useState([]);
    const [userUid,setUserUid]=useState();
    const {userName}=useUserName();
    const [grandTotal,setGrandTotal]=useState();
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
   const fetchData = async () => {
    try {
      if (auth.currentUser) {
        if (!userUid) { // Check if userUid is not already set
       
            setUserUid(auth.currentUser.uid);
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

const handleDelete= async(id,price,quantity)=>{
    try {
       
      if(window.confirm('You are sure to delete carttem'))
      {
        window.alert('thanks for confirm');
        await deleteDoc(doc(storeData,`Cart${userUid}` , id));
        setInformationMessage("Your Item Removed From Cart Successfully")
        console.log('these are number of items:  '+numberOfItems);
        const newGrandTotal = GrandTotalOfUser - price; 
        const newtotalQuantity = totalQuantity - quantity;// Calculate new Grand Total
       
        setTotalQuantity(newtotalQuantity);
        setGrandTotalOfUser(newGrandTotal);
        updateNumberOfCartItems(numberOfItems-1);
        setVal(val.filter((item) => item.id !== id));
        setTimeout(()=>{
          setInformationMessage('');
        },2000)
       
      }
     
     
      } catch (error) {
        console.error('Error deleting post:', error);
      }

  } 
 
  useEffect(() => {
    let total = 0;
    let totalQ=0;
    val.forEach((item) => {
      total +=parseFloat(item.totalPrice); 
      totalQ+=Number(item.quantity)
    });
   
    setGrandTotalOfUser(total);
    setTotalQuantity(totalQ); // Set Grand Total
  }, [val]);
  return (
    <div className='w-full absolute'>
      <div className='top-0'><Navbar userName={userName}/></div>
        <div className='w-full'>
        <div className='max-w-[1140px]  mx-auto mb-[50px] mt-[140px]'>
        
   

            <div className='py-6'>
          
                <table  className="custom-table">
  <thead>
    <tr>
      <th className="custom-table-header">Picture</th>
      <th className="custom-table-header">Item Name</th>
      <th className="custom-table-header">Quantity</th>
      <th className="custom-table-header">Price</th>
      <th className="custom-table-header">Total Price</th>
      <th className="custom-table-header">Actions</th>
    </tr>
  </thead>
  {val && 
            val.map((item)=>(
  <tbody key={item.id}>
  
    <tr>
      <td>
      <div className='w-[120px] h-[120px]'>
      <img src={item.imageURL} alt=''/>
      </div>
        
      </td>
      <td>{item.productName}</td>
      <td>{item.quantity}</td>
      <td>{item.price}</td>
      <td>{item.totalPrice}</td>
      <td>
      <div className='flex gap-2'>
        <Link className='bg-blue-600 rounded-md  py-2 px-4 text-center text-white text-[18px] transition ease-in-out duration-300 hover:bg-blue-500'>Edit</Link>
        <button className='bg-red-700 rounded-md  py-2 px-4 text-center text-white text-[18px] transition ease-in-out duration-300 hover:bg-red-600' onClick={()=>handleDelete(item.id,item.totalPrice,item.quantity)}>Delete</button>
      </div>
      </td>
    </tr>
   
    
  </tbody>
)) 
  }  
</table>
        
           
 
            </div>
            <div className='flex items-center justify-center'>
            <h1>{grandTotal}</h1>
            <Link to='/bill' className='bg-blue-600  p-2 text-center text-white text-[18px] transition ease-in-out duration-300 hover:bg-blue-500'>Print Bill And Pay </Link>
            </div>
           
        </div>

        </div>
 <YouMayAlsoLike/>
      <Fotter/>
    </div>
  )

}

export default CartItems;
