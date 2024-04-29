import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { collection, getDocs } from 'firebase/firestore';
import { storeData } from "../Firebase";
import { useUserName } from "./Context";
const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { setUserName,setEmail,userEmail, setNumberOfItems } = useUserName();

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
 const fetchCartItems=async()=>{
  console.log('here is use email  '+ values.email);
      const queryforCartItems = await getDocs(collection(storeData,`cartItems'${values.email}`));
      const fetchedCartItems = queryforCartItems.docs.map(doc => ({ id: doc.id, ...doc.data() }));
       console.log('This is cartFectchdn '+ fetchedCartItems)
      setNumberOfItems(fetchedCartItems[0].numberOfCartItems);
 }
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(storeData, 'users'));
      const fetchedUsers = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log('Fetched user '+fetchedUsers);
      const loggedInUser = fetchedUsers.find(user => user.email === values.email);
      if (loggedInUser) {
        console.log("Logged-in user:", loggedInUser.FullName);
        setUserName(loggedInUser.FullName);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.email==='admin' && values.password==='123456' )
    {
      setSuccessMessage('You are logged in successfully and automatically redirected to the DASHBOARD');
      setTimeout(() => {
        setSuccessMessage('');
        navigate("/manage");
        return;
      }, 2000);
    }
    else{
    // Your login logic here...
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        console.log(res);
        setEmail(values.email);
        console.log('This is user EMail  '+values.email);
        fetchData();
      fetchCartItems();
        setSuccessMessage('You are logged in successfully and automatically redirected to the homepage');
        setValues({
          email: '',
          password: '',
        });

        setTimeout(() => {
          setSuccessMessage('');
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        console.log(err);
      });
    }
  };

  return (
    <div className="bg-[#D0D3D4] w-full flex h-screen items-center justify-center">
      <div className="w-[90%] md:w-[40%] mx-auto  rounded-md bg-white p-5">
        <h1 className="font-bold text-[30px] mb-2">SignIn</h1>
        <div className="flex flex-col gap-1 mb-2">
          {successMessage && <p className="text-center text-[14px] p-2 bg-green-300 mx-auto font-medium">
            {successMessage}
          </p>}
        </div>
        <form>
          <div className="flex flex-col gap-1 mb-2">
            <label className="block font-medium">Email/Username</label>
            <input
              className="border border-gray-400 rounded-md p-2 w-full outline-none"
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>

          <div className="flex flex-col gap-1 mb-2">
            <label className="block font-medium">Password</label>
            <input
              className="border border-gray-400 rounded-md p-2 w-full outline-none"
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-1 mb-2">
            <p className="text-center mx-auto text-red-800 font-medium">
              {errorMessage}
            </p>
          </div>
          <div className="flex flex-col gap-1 mb-2 text-center">
            <Link
              type="submit"
              className="w-full bg-blue-800 rounded-md hover:bg-blue-500 transition ease-in-out duration-300 p-2 text-white text-[16px] "
              onClick={handleSubmit}
            >
              LogIn
            </Link>
          </div>

          <div className="flex flex-col gap-1 mb-2 text-center">
            <p>
              Create new account{" "}
              <Link to="/signup" className="text-blue-800 underline">
                SignUp
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
