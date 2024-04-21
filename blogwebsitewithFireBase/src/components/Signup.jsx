import React, { useState } from "react";
import { Link } from "react-router-dom";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../FireBase";
const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMessage,seterrorMesage]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!values.email || !values.name || !values.password)
    {
        seterrorMesage("Please fill all feilds");
        return;
    }
    seterrorMesage("");

  createUserWithEmailAndPassword(auth,values.email,values.password).then(res=>{
    console.log(res);
    window.alert("Your"+" "+values.name +" "+"account created successfully Please Now Sigin with your correct credentials");
  })
  .catch(err=>{
    seterrorMesage(err.message);
    console.log(err)});
  }
  return (
    <div className="bg-[#D0D3D4] w-full flex h-screen items-center justify-center">
      <div className="w-[40%] mx-auto  rounded-md bg-white p-5">
        <h1 className="font-bold text-[30px] mb-2">SignUp</h1>

        <form >
          <div className="flex flex-col gap-1 mb-2">
            <label className="block font-medium">Name</label>
            <input
              className="border border-gray-400 rounded-md p-2 w-full outline-none"
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={(e)=>setValues((prev)=>({...prev,name:e.target.value}))}
            />
          </div>
          <div className="flex flex-col gap-1 mb-2">
            <label className="block font-medium">Email</label>
            <input
              className="border border-gray-400 rounded-md p-2 w-full outline-none"
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={(e)=>setValues((prev)=>({...prev,email:e.target.value}))}
            />
          </div>

          <div className="flex flex-col gap-1 mb-2">
            <label className="block font-medium">Password</label>
            <input
              className="border border-gray-400 rounded-md p-2 w-full outline-none"
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={(e)=>setValues((prev)=>({...prev,password:e.target.value}))}
            />
          </div>
          <div className="flex flex-col gap-1 mb-2">
<p className="text-center text-red-800 font-medium">{errorMessage}</p>
          </div>
          <div className="flex flex-col gap-1 mb-2 text-center">
            <Link
              type="submit"
              className="w-full bg-blue-800 rounded-md hover:bg-blue-500 transition ease-in-out duration-300  p-2 text-white text-[16px] "
           onClick={handleSubmit}
            >
              SignUp
            </Link>
          </div>

          <div className="flex flex-col gap-1 mb-2 text-center">
            <p>
              Already have an account?{" "}
              <Link to="/" className="text-blue-800 underline">
                LogIn
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
